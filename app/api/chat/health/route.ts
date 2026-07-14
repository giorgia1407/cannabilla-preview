import { NextResponse } from "next/server";

/**
 * Cannabilla — endpoint diagnostico per il "Consulente Cannabilla".
 *
 * GET /api/chat/health
 *
 * Verifica in modo isolato che ANTHROPIC_API_KEY sia presente E valida
 * nell'ambiente CORRENTE (locale, preview o produzione), facendo una piccola
 * chiamata non-streaming a Claude. Utile per capire perché la chat degrada su
 * una preview senza dover leggere lo streaming.
 *
 * Nessun SDK: usa fetch grezza, coerente con /api/chat.
 *
 * Risposte tipiche:
 *  - { status: "missing_key" }                         → variabile non configurata
 *  - { status: "ok", keyValid: true, ... }             → chiave valida
 *  - { status: "error", errorType: "authentication_error", ... } → chiave errata/revocata
 *  - { status: "error", errorType: "rate_limit_error" }          → rate limit
 *  - { status: "error", errorType: "credit_balance_too_low" }    → credito esaurito
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-haiku-4-5-20251001";
const ANTHROPIC_MESSAGES_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";

export async function GET() {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ status: "missing_key" });
  }

  try {
    const res = await fetch(ANTHROPIC_MESSAGES_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": ANTHROPIC_VERSION,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 8,
        messages: [{ role: "user", content: "test" }],
      }),
    });

    const raw = await res.text();
    let parsed: { id?: string; error?: { type?: string; message?: string } } = {};
    try {
      parsed = JSON.parse(raw);
    } catch {
      /* corpo non-JSON — lo riportiamo grezzo sotto */
    }

    if (res.ok) {
      return NextResponse.json({
        status: "ok",
        keyValid: true,
        model: MODEL,
        keyLength: apiKey.length,
        responseId: parsed.id ?? null,
      });
    }

    return NextResponse.json({
      status: "error",
      keyValid: false,
      statusCode: res.status,
      errorType: parsed.error?.type ?? "unknown",
      errorMessage: parsed.error?.message ?? raw.slice(0, 300),
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      keyValid: false,
      errorType: "network_error",
      errorMessage: String(error),
    });
  }
}
