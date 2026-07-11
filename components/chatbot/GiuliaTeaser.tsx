"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { GIULIA } from "@/lib/giulia-assets";
import { getWhatsAppUrl } from "@/lib/constants";
import { useGiulia } from "@/lib/giulia-context";

/**
 * Teaser Giulia — scheda conversazione COMPATTA (~170-190px, metà della
 * precedente). Appare a ESATTAMENTE 5000ms dal mount. La dismissal è solo in
 * memoria (context) → il popup ricompare a ogni ricarica. Se il nome è già noto
 * (localStorage), salta la domanda del nome e saluta l'utente di ritorno.
 */
export function GiuliaTeaser() {
  const {
    showTeaser,
    isOpen,
    aiEnabled,
    name,
    openChat,
    sendMessage,
    dismissTeaser,
    markTeaserSeen,
    teaserText,
    whatsappMessage,
  } = useGiulia();
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");

  // Appare a esattamente 5000ms dal mount (finché non è stato chiuso in questa sessione).
  useEffect(() => {
    if (!showTeaser || isOpen) return;
    const t = setTimeout(() => setMounted(true), 5000);
    return () => clearTimeout(t);
  }, [showTeaser, isOpen]);

  if (!mounted || isOpen) return null;

  const returning = Boolean(name);
  const placeholder = returning ? "Cosa cerchi oggi?" : "Scrivi il tuo nome...";

  function openFull() {
    markTeaserSeen();
    openChat();
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = input.trim();
    markTeaserSeen();
    openChat();
    if (v) sendMessage(v);
  }

  function close(e: React.MouseEvent) {
    e.stopPropagation();
    setMounted(false);
    dismissTeaser();
  }

  return (
    <div className="fixed bottom-40 right-3 z-[55] w-[calc(100vw-24px)] sm:bottom-44 sm:right-5 sm:w-[380px]">
      <div
        className="animate-giulia-pop overflow-hidden rounded-2xl bg-white ring-1 ring-black/5"
        style={{
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* Top strip — verde, on-dark, compatto (~44px) */}
        <div className="on-dark flex items-center gap-2 bg-primary px-3 py-2">
          <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full ring-2 ring-white/40">
            <Image src={GIULIA.avatar} alt={GIULIA.alt} fill sizes="28px" className="object-cover" />
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-[13px] font-semibold">
              {GIULIA.name} · <span className="font-normal opacity-90">{GIULIA.role}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Chiudi il messaggio di Giulia"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full hover:bg-white/10"
          >
            <X size={15} />
          </button>
        </div>

        {/* Body — bianco, compatto */}
        <div className="bg-white p-3">
          <button
            type="button"
            onClick={openFull}
            className="block w-full text-left"
            aria-label="Apri la chat completa con Giulia"
          >
            <div className="rounded-xl rounded-tl-sm border-l-4 border-primary bg-cream px-3 py-2 text-[13px] leading-snug text-text">
              {teaserText}
            </div>
          </button>

          {aiEnabled ? (
            <>
              <form onSubmit={handleSubmit} className="mt-2.5 flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={placeholder}
                  aria-label={returning ? "La tua domanda" : "Il tuo nome"}
                  className="h-10 min-w-0 flex-1 rounded-full border border-border bg-cream px-4 text-base text-text outline-none placeholder:text-text-muted focus:border-primary"
                />
                <button
                  type="submit"
                  aria-label="Invia"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
                >
                  <Send size={17} />
                </button>
              </form>
              <p className="mt-1.5 text-center text-[11px] text-text-muted">
                Preferisci{" "}
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2"
                >
                  WhatsApp
                </a>
                ?
              </p>
            </>
          ) : (
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white shadow transition-transform hover:scale-[1.02]"
            >
              <MessageCircle size={16} /> Scrivi su WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
