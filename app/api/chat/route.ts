import { NextRequest, NextResponse } from "next/server";
import { buildGiuliaSystemPrompt } from "@/lib/chat-context";

/**
 * Cannabilla — API route del "Consulente Cannabilla" (chatbot AI).
 *
 * POST { messages: {role: "user"|"assistant", content: string}[] }
 *
 * La presenza della chiave è verificata ESCLUSIVAMENTE qui (server). Il client
 * non controlla mai la chiave: mostra ottimisticamente la chat e degrada solo
 * se questa route restituisce un errore.
 * - Se ANTHROPIC_API_KEY non è impostata → 503 { error: "api_unavailable" }.
 * - Se la chiave è presente, esegue lo streaming SSE da Claude via fetch grezza
 *   (nessun SDK) e inoltra al client i soli text delta come testo semplice.
 * - Qualsiasi errore a monte (rete, HTTP non-2xx, corpo mancante) prima che lo
 *   streaming inizi torna { fallback: true } così la UI può degradare in modo
 *   grazioso.
 */

export const runtime = "nodejs";
// Mai prerenderizzata/cache-ata: la chiave va letta a runtime, non al build.
export const dynamic = "force-dynamic";

const MODEL = "claude-haiku-4-5-20251001";
const ANTHROPIC_MESSAGES_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const MAX_TOKENS = 1024;

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

function isIncomingMessage(value: unknown): value is IncomingMessage {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (v.role === "user" || v.role === "assistant") && typeof v.content === "string";
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Nessuna chiave configurata: 503. Il client mostra un messaggio inline
  // gentile (nessuna chiamata esterna viene effettuata).
  if (!apiKey) {
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
      return NextResponse.json({ fallback: true }, { status: 400 });
    }
    messages = raw.filter(isIncomingMessage);
    if (typeof obj?.name === "string" && obj.name.trim()) userName = obj.name.trim().slice(0, 40);
    if (typeof obj?.turnCount === "number" && Number.isFinite(obj.turnCount)) {
      turnCount = Math.max(1, Math.floor(obj.turnCount));
    }
  } catch {
    return NextResponse.json({ fallback: true }, { status: 400 });
  }

  if (messages.length === 0) {
    return NextResponse.json({ fallback: true }, { status: 400 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(ANTHROPIC_MESSAGES_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": ANTHROPIC_VERSION,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: buildGiuliaSystemPrompt(userName, turnCount),
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
        stream: true,
      }),
    });
  } catch {
    // Rete irraggiungibile, timeout, ecc. — degrada al fallback.
    return NextResponse.json({ fallback: true });
  }

  if (!upstream.ok || !upstream.body) {
    // Chiave non valida, rate limit, errore Anthropic, ecc. — degrada al fallback
    // invece di propagare un errore grezzo alla UI.
    return NextResponse.json({ fallback: true });
  }

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
      } catch {
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
