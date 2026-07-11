"use client";

import { useEffect, useState } from "react";
import { X, Play } from "lucide-react";
import { Photo } from "@/components/Photo";
import { getWhatsAppUrl } from "@/lib/constants";

const DISMISS_KEY = "cannabilla_expert_dismissed";
const DISMISS_DAYS = 7;

/**
 * Widget esperto persistente (Miamo) — in basso a sinistra.
 * Appare dopo 3s, scorre dall'angolo, chiudibile (7 giorni), nascosto <640px.
 * Rispetta prefers-reduced-motion (nessun autoplay/scorrimento).
 * NOTA: il "video" è un placeholder (immagine stock). // TODO Sarang: video reale.
 */
export function ExpertWidget() {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DISMISS_KEY);
      if (raw) {
        const until = Number(raw);
        if (Number.isFinite(until) && until > Date.now()) return;
      }
    } catch {
      /* ignore */
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => {
      setVisible(true);
      if (!reduce) requestAnimationFrame(() => setEntered(true));
      else setEntered(true);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setEntered(false);
    setTimeout(() => setVisible(false), 250);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_DAYS * 864e5));
    } catch {
      /* ignore */
    }
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 hidden w-[200px] overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 sm:block ${
        entered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <a
        href={getWhatsAppUrl("Ciao, ho visto il video sull'homepage e vorrei un consiglio")}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[4/5]">
          <Photo imgKey="wellness5" alt="Esperta della cosmetica Cannabilla" fill sizes="200px" className="object-cover" w={400} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow">
            <Play size={18} className="ml-0.5 fill-primary" />
          </span>
          <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white">
            Consigli dell&apos;esperto
          </span>
        </div>
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Chiudi widget esperto"
        className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
      >
        <X size={14} />
      </button>
    </div>
  );
}
