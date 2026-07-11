"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

/** Form candidatura rivenditori B2B dimostrativo (submit mock, nessun backend). */
export function ResellerForm() {
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check size={22} />
        </span>
        <h3 className="mt-4 font-display text-xl text-text">Candidatura inviata!</h3>
        <p className="mt-2 text-sm text-text-muted">
          Grazie per l'interesse verso Cannabilla. Il nostro team commerciale valuterà la richiesta e ti contatterà a
          breve.
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
          <label htmlFor="r-ragione" className="mb-1 block text-sm font-medium text-text">
            Ragione sociale
          </label>
          <input
            id="r-ragione"
            type="text"
            required
            autoComplete="organization"
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="r-piva" className="mb-1 block text-sm font-medium text-text">
            Partita IVA
          </label>
          <input
            id="r-piva"
            type="text"
            required
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="r-referente" className="mb-1 block text-sm font-medium text-text">
            Referente
          </label>
          <input
            id="r-referente"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="r-email" className="mb-1 block text-sm font-medium text-text">
            Email
          </label>
          <input
            id="r-email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="r-tel" className="mb-1 block text-sm font-medium text-text">
            Telefono
          </label>
          <input
            id="r-tel"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="r-citta" className="mb-1 block text-sm font-medium text-text">
            Città
          </label>
          <input
            id="r-citta"
            type="text"
            required
            autoComplete="address-level2"
            className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="r-tipo" className="mb-1 block text-sm font-medium text-text">
          Tipo di attività
        </label>
        <select
          id="r-tipo"
          required
          defaultValue=""
          className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary"
        >
          <option value="" disabled>
            Seleziona
          </option>
          <option value="farmacia">Farmacia</option>
          <option value="erboristeria">Erboristeria</option>
          <option value="profumeria">Profumeria</option>
          <option value="estetica">Estetica</option>
          <option value="altro">Altro</option>
        </select>
      </div>

      <div>
        <label htmlFor="r-messaggio" className="mb-1 block text-sm font-medium text-text">
          Messaggio
        </label>
        <textarea
          id="r-messaggio"
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
        <span>Ho letto e acconsento al trattamento dei dati per finalità commerciali secondo la Privacy Policy.</span>
      </label>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        <Send size={16} /> Invia candidatura
      </button>
    </form>
  );
}
