"use client";

import { useState, type FormEvent } from "react";
import { Mail, Check } from "lucide-react";
import { useGiulia } from "@/lib/giulia-context";

/**
 * Offerta email SOFT — appare IN CODA alla risposta di Giulia al 2° turno reale.
 * Non è un gate: "Continua senza" chiude la card e la conversazione prosegue.
 */
export function EmailSoftOffer() {
  const { name, submitEmail, declineOffer } = useGiulia();
  const who = name ?? "";
  const [stage, setStage] = useState<"offer" | "form" | "done">("offer");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (stage === "done") {
    return (
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-primary/20 bg-cream px-3 py-2.5 text-sm font-medium text-primary">
        <Check size={16} /> Iscrizione registrata{who ? `, ${who}` : ""}! 🌿
      </div>
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!consent) {
      setError("Serve il consenso per procedere.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Inserisci un indirizzo email valido.");
      return;
    }
    setBusy(true);
    await submitEmail(email.trim());
    setBusy(false);
    setStage("done");
  }

  return (
    <div className="mt-3 rounded-xl border border-primary/25 bg-cream p-3">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
          <Mail size={16} />
        </span>
        <p className="text-sm leading-relaxed text-text">
          Ti è piaciuto il consiglio{who ? `, ${who}` : ""}? Posso salvarti la conversazione via
          email e regalarti un <strong>codice sconto del 10%</strong> sul primo ordine.
        </p>
      </div>

      {stage === "offer" && (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setStage("form")}
            className="on-dark inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02]"
          >
            Sì, mandami i consigli
          </button>
          <button
            type="button"
            onClick={declineOffer}
            className="text-xs font-medium text-text-muted underline underline-offset-2 hover:text-text"
          >
            Continua senza
          </button>
        </div>
      )}

      {stage === "form" && (
        <form onSubmit={handleSubmit} className="mt-3 space-y-2.5">
          <input
            type="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email"
            aria-label="Indirizzo email"
            className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-text outline-none focus:border-primary"
          />
          <label className="flex items-start gap-2 text-xs leading-snug text-text-muted">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5"
            />
            <span>
              Acconsento al trattamento dei miei dati per ricevere consigli personalizzati e
              comunicazioni commerciali. Privacy Policy.
            </span>
          </label>
          {error && <p className="text-xs font-medium text-sale">{error}</p>}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={busy}
              className="on-dark inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold shadow-sm disabled:opacity-60"
            >
              {busy ? "Invio…" : "OK, iscrivimi"}
            </button>
            <button
              type="button"
              onClick={declineOffer}
              className="text-xs font-medium text-text-muted underline underline-offset-2 hover:text-text"
            >
              Continua senza
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
