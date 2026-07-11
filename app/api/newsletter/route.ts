import { NextRequest, NextResponse } from "next/server";

/**
 * Cannabilla — endpoint newsletter (soft email gate di Giulia).
 *
 * POST { name?: string, email: string, consentTimestamp: string }
 *
 * ANTEPRIMA: nessun provider reale collegato. Registra a console e risponde 200.
 * // TODO Sarang (Fase 2): integrare il provider newsletter reale (double opt-in,
 * // invio codice sconto, storicizzazione del consenso GDPR).
 */

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  let email = "";
  let name: string | null = null;
  let consentTimestamp: string | null = null;
  try {
    const body = (await req.json()) as {
      email?: unknown;
      name?: unknown;
      consentTimestamp?: unknown;
    };
    if (typeof body.email === "string") email = body.email.trim();
    if (typeof body.name === "string") name = body.name.trim().slice(0, 60);
    if (typeof body.consentTimestamp === "string") consentTimestamp = body.consentTimestamp;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 400 });
  }

  // Preview: log only. In production this hands off to the newsletter provider.
  console.info("[newsletter] iscrizione (preview)", {
    name,
    email,
    consentTimestamp: consentTimestamp ?? new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
