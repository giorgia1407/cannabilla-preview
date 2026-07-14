import { NextRequest, NextResponse } from "next/server";
import { buildGiuliaSystemPrompt } from "@/lib/chat-context";

/**
 * Cannabilla — API route del "Consulente Cannabilla" (chatbot AI).
 *
 * POST { messages: {role: "user"|"assistant", content: string}[], name?, turnCount? }
 *
 * La presenza della chiave è verificata ESCLUSIVAMENTE qui (server). Il client
 * non controlla mai la chiave: mostra ottimisticamente la chat e degrada solo
 * se questa route restituisce un errore.
 * - Se ANTHROPIC_API_KEY non è impostata → 503 { error: "api_unavailable" }.
 * - Se la chiave è presente, esegue lo streaming SSE da Claude via fetch grezza
 *   (nessun SDK) e inoltra al client i soli text delta come testo semplice.
 * - Qualsiasi errore a monte (rete, HTTP non-2xx, corpo mancante) prima che lo
 *   streaming inizi torna { fallback: true, errorType } così la UI può degradare
 *   in modo graceful e mostrare un messaggio pertinente.
 *
 * OSSERVABILITÀ: ogni richiesta e ogni fallimento vengono loggati con prefisso
 * "[chat-api]" — visibili nei log della funzione (Vercel). Questo è il modo per
 * capire PERCHÉ una preview degrada (chiave mancante vs rate limit vs 400).
 */

export const runtime = "nodejs";
// Mai prerenderizzata/cache-ata: la chiave va letta a runtime, non al build.
export const dynamic = "force-dynamic";

const MODEL = "claude-haiku-4-5-20251001";
const ANTHROPIC_MESSAGES_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const MAX_TOKENS = 1024;
const MAX_RETRIES = 2; // tentativi aggiuntivi oltre al primo, su errori transienti.

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

function isIncomingMessage(value: unknown): value is IncomingMessage {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (v.role === "user" || v.role === "assistant") && typeof v.content === "string";
}

/**
 * Ripulisce la history prima di inviarla a Claude:
 *  - scarta messaggi con contenuto vuoto (es. placeholder di streaming);
 *  - scarta i messaggi assistant iniziali finché il primo messaggio non è "user"
 *    (l'API attualmente li tollera, ma partire da "user" è la forma corretta e
 *    ci mette al riparo da future regressioni/validazioni più severe).
 */
function sanitizeMessages(messages: IncomingMessage[]): IncomingMessage[] {
  const nonEmpty = messages.filter((m) => m.content.trim().length > 0);
  let start = 0;
  while (start < nonEmpty.length && nonEmpty[start].role !== "user") start += 1;
  return nonEmpty.slice(start);
}

/** Errori transienti che vale la pena ritentare (rate limit / overload). */
function isRetryableStatus(status: number): boolean {
  return status === 429 || status === 500 || status === 502 || status === 503 || status === 529;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Chiama l'API Anthropic in streaming con backoff esponenziale sugli errori
 * transienti. Ritorna:
 *  - { ok: true, upstream } quando lo stream è pronto (2xx con body);
 *  - { ok: false, errorType, status } quando fallisce definitivamente.
 * Il body d'errore viene letto e loggato per diagnosi.
 */
async function callAnthropicWithRetry(
  apiKey: string,
  body: string,
): Promise<
  | { ok: true; upstream: Response }
  | { ok: false; errorType: string; status: number | null }
> {
  let lastStatus: number | null = null;
  let lastErrorType = "upstream_error";

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    let upstream: Response;
    try {
      upstream = await fetch(ANTHROPIC_MESSAGES_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": ANTHROPIC_VERSION,
        },
        body,
      });
    } catch (err) {
      // Rete irraggiungibile / timeout — transiente, ritenta.
      lastStatus = null;
      lastErrorType = "network_error";
      console.error(`[chat-api] fetch failed (attempt ${attempt + 1}):`, String(err));
      if (attempt < MAX_RETRIES) {
        await sleep(500 * 2 ** attempt);
        continue;
      }
      break;
    }

    if (upstream.ok && upstream.body) {
      if (attempt > 0) console.log(`[chat-api] upstream recovered on attempt ${attempt + 1}`);
      return { ok: true, upstream };
    }

    // Non-2xx: leggi il body per capire il tipo di errore Anthropic.
    lastStatus = upstream.status;
    let errText = "";
    try {
      errText = await upstream.text();
      const parsed = JSON.parse(errText) as { error?: { type?: string } };
      lastErrorType = parsed.error?.type ?? "upstream_error";
    } catch {
      lastErrorType = "upstream_error";
    }
    console.error(
      `[chat-api] upstream ${upstream.status} (attempt ${attempt + 1}) type=${lastErrorType}:`,
      errText.slice(0, 300),
    );

    if (isRetryableStatus(upstream.status) && attempt < MAX_RETRIES) {
      await sleep(500 * 2 ** attempt);
      continue;
    }
    break;
  }

  return { ok: false, errorType: lastErrorType, status: lastStatus };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Nessuna chiave configurata: 503. Il client mostra un messaggio inline
  // gentile (nessuna chiamata esterna viene effettuata). Loggato in modo esplicito
  // perché è la causa numero uno dei fallimenti in preview/produzione.
  if (!apiKey) {
    console.error("[chat-api] ANTHROPIC_API_KEY is NOT set in this environment → 503");
    return NextResponse.json({ error: "api_unavailable" }, { status: 503 });
  }

  let messages: IncomingMessage[];
  let userName: string | null = null;
  let turnCount = 1;
  try {
    const body = (await req.json()) as unknown;
    const obj = body as { messages?: unknown; name?: unknown; turnCount?: unknown } | null;
    const raw = obj?.messages;
    if (!Array.isArray(raw)) {
      console.error("[chat-api] bad request: messages is not an array");
      return NextResponse.json({ fallback: true, errorType: "bad_request" }, { status: 400 });
    }
    messages = sanitizeMessages(raw.filter(isIncomingMessage));
    if (typeof obj?.name === "string" && obj.name.trim()) userName = obj.name.trim().slice(0, 40);
    if (typeof obj?.turnCount === "number" && Number.isFinite(obj.turnCount)) {
      turnCount = Math.max(1, Math.floor(obj.turnCount));
    }
  } catch {
    console.error("[chat-api] bad request: JSON parse failed");
    return NextResponse.json({ fallback: true, errorType: "bad_request" }, { status: 400 });
  }

  console.log("[chat-api] request:", {
    messageCount: messages.length,
    lastRole: messages[messages.length - 1]?.role,
    userName,
    turnCount,
    hasApiKey: true,
    apiKeyLength: apiKey.length,
  });

  if (messages.length === 0) {
    console.error("[chat-api] no usable messages after sanitize → fallback");
    return NextResponse.json({ fallback: true, errorType: "empty_messages" }, { status: 400 });
  }

  const payload = JSON.stringify({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: buildGiuliaSystemPrompt(userName, turnCount),
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
    stream: true,
  });

  const result = await callAnthropicWithRetry(apiKey, payload);
  if (!result.ok) {
    // Chiave non valida, rate limit, credito esaurito, ecc. — degrada al fallback
    // ma comunica il tipo d'errore al client così può mostrare un messaggio mirato.
    console.error(
      `[chat-api] giving up → fallback (type=${result.errorType} status=${result.status})`,
    );
    return NextResponse.json({ fallback: true, errorType: result.errorType });
  }

  const upstream = result.upstream;

  // Inoltra al client solo i text delta del flusso SSE, come testo semplice.
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (!data || data === "[DONE]") continue;

            try {
              const event = JSON.parse(data) as {
                type?: string;
                delta?: { type?: string; text?: string };
              };
              if (
                event.type === "content_block_delta" &&
                event.delta?.type === "text_delta" &&
                typeof event.delta.text === "string"
              ) {
                controller.enqueue(encoder.encode(event.delta.text));
              }
            } catch {
              // Chunk SSE malformato o incompleto — ignora e continua.
            }
          }
        }
        controller.close();
      } catch (err) {
        console.error("[chat-api] stream interrupted mid-flight:", String(err));
        controller.error(new Error("upstream-stream-failed"));
      }
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-cache",
    },
  });
}
