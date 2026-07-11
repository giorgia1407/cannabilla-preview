"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

/** Form contatti dimostrativo (submit mock, nessun backend). */
export function ContactForm() {
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check size={22} />
        </span>
        <h3 className="mt-4 font-display text-xl text-text">Messaggio inviato!</h3>
        <p className="mt-2 text-sm text-text-muted">
          Grazie per averci scritto. Ti risponderemo il prima possibile all'indirizzo indicato.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (consent) setDone(true);
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="c-nome" className="mb-1 block text-sm font-medium text-text">
          Nome e cognome
        </label>
        <input
          id="c-nome"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="c-email" className="mb-1 block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="c-email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="c-oggetto" className="mb-1 block text-sm font-medium text-text">
          Oggetto
        </label>
        <input
          id="c-oggetto"
          type="text"
          required
          className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="c-messaggio" className="mb-1 block text-sm font-medium text-text">
          Messaggio
        </label>
        <textarea
          id="c-messaggio"
          required
          rows={5}
          className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-text-muted">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>Ho letto e acconsento al trattamento dei dati personali secondo la Privacy Policy.</span>
      </label>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        <Send size={16} /> Invia messaggio
      </button>
    </form>
  );
}
