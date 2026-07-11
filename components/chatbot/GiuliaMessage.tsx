"use client";

import { type GiuliaMessage as Msg } from "@/lib/giulia-context";
import { EmailSoftOffer } from "./EmailSoftOffer";

function timeLabel(ts: string): string {
  try {
    return new Date(ts).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

/** Bolla messaggio — assistente (sinistra, bianca) / utente (destra, verde .on-dark). */
export function GiuliaMessage({ message }: { message: Msg }) {
  if (message.role === "user") {
    return (
      <div className="group flex flex-col items-end">
        <div className="on-dark max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm leading-relaxed shadow-sm">
          <span className="whitespace-pre-wrap">{message.content}</span>
        </div>
        <span className="mt-1 px-1 text-[11px] text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
          {timeLabel(message.ts)}
        </span>
      </div>
    );
  }

  const typing = message.streaming && !message.content;

  return (
    <div className="group flex flex-col items-start">
      <div className="max-w-[88%] rounded-2xl rounded-bl-sm border-l-4 border-primary bg-white px-4 py-3 text-sm leading-relaxed text-text shadow-sm">
        {typing ? (
          <span className="inline-flex items-center gap-1 py-1" aria-label="Giulia sta scrivendo">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50 [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50 [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50" />
          </span>
        ) : (
          <span className="whitespace-pre-wrap">{message.content}</span>
        )}

        {/* Nessun bottone WhatsApp dentro la UI di Giulia: per casi medici/fallback
            il numero è citato in modo naturale nel testo del messaggio. */}

        {message.showOffer && <EmailSoftOffer />}
      </div>
      {!typing && (
        <span className="mt-1 px-1 text-[11px] text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
          {timeLabel(message.ts)}
        </span>
      )}
    </div>
  );
}
