"use client";

import { useState } from "react";
import { Check, CalendarClock } from "lucide-react";

/** Form prenotazione call dimostrativo (submit mock, nessun backend). */
export function ConsultForm() {
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check size={22} />
        </span>
        <h3 className="mt-4 font-display text-xl text-text">Richiesta ricevuta!</h3>
        <p className="mt-2 text-sm text-text-muted">
          Grazie. Ti contatteremo per confermare l'orario della tua consulenza gratuita.
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
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="k-nome" className="mb-1 block text-sm font-medium text-text">
            Nome e cognome
          </label>
          <input
            id="k-nome"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="k-email" className="mb-1 block text-sm font-medium text-text">
            Email
          </label>
          <input
            id="k-email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="k-tel" className="mb-1 block text-sm font-medium text-text">
            Telefono
          </label>
          <input
            id="k-tel"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="k-orario" className="mb-1 block text-sm font-medium text-text">
            Preferenza orario
          </label>
          <select
            id="k-orario"
            required
            defaultValue=""
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          >
            <option value="" disabled>
              Seleziona una fascia
            </option>
            <option value="mattina">Mattina (9:00 - 12:00)</option>
            <option value="pranzo">Pausa pranzo (12:00 - 14:00)</option>
            <option value="pomeriggio">Pomeriggio (14:00 - 18:00)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="k-messaggio" className="mb-1 block text-sm font-medium text-text">
          Raccontaci le tue esigenze
        </label>
        <textarea
          id="k-messaggio"
          rows={4}
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
        <CalendarClock size={16} /> Prenota la call
      </button>
    </form>
  );
}
