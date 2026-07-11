"use client";

import { useState } from "react";
import { Check } from "lucide-react";

/** Form newsletter dimostrativo (submit mock, nessun backend). */
export function NewsletterForm({
  variant = "light",
  cta = "Iscriviti",
  placeholder = "La tua email",
  stack = false,
}: {
  variant?: "light" | "dark";
  cta?: string;
  placeholder?: string;
  /** Force input + button to stack vertically (for narrow containers e.g. footer column). */
  stack?: boolean;
}) {
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(false);
  const dark = variant === "dark";

  if (done) {
    return (
      <p className={`inline-flex items-center gap-2 text-sm font-medium ${dark ? "text-white" : "text-primary"}`}>
        <Check size={18} /> Iscrizione registrata! Controlla la tua email.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (consent) setDone(true);
      }}
      className="w-full"
    >
      <div className={`flex min-w-0 gap-2 ${stack ? "flex-col" : "flex-col sm:flex-row"}`}>
        <input
          type="email"
          required
          placeholder={placeholder}
          aria-label="Indirizzo email"
          className={`w-full min-w-0 flex-1 rounded border px-4 py-3 text-sm outline-none ${
            dark ? "border-white/30 bg-white/10 text-white placeholder:text-white/60" : "border-border bg-white text-text"
          }`}
        />
        <button type="submit" className={`btn shrink-0 ${stack ? "w-full" : ""} ${dark ? "btn-light" : "btn-primary"}`}>
          {cta}
        </button>
      </div>
      <label className={`mt-2 flex items-start gap-2 text-xs ${dark ? "text-white/80" : "text-text-muted"}`}>
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>Acconsento al trattamento dei dati per ricevere la newsletter (Privacy Policy).</span>
      </label>
    </form>
  );
}
