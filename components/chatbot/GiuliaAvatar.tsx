"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { GIULIA } from "@/lib/giulia-assets";
import { useGiulia } from "@/lib/giulia-context";

/**
 * Avatar persistente in basso a destra (sopra il pulsante WhatsApp, mai sovrapposto).
 * Alone pulsante sottile, pallino "online", nascosto su hover mostra la × per
 * nascondere il widget 7 giorni. Su ≤640px si rimpicciolisce (56px).
 */
export function GiuliaAvatar() {
  const { openChat, hideWidget, isOpen } = useGiulia();
  const [hover, setHover] = useState(false);

  if (isOpen) return null;

  return (
    <div
      className="fixed bottom-24 right-5 z-40"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        onClick={openChat}
        aria-label="Apri la chat con Giulia, consulente Cannabilla"
        className="group relative block h-14 w-14 sm:h-[72px] sm:w-[72px]"
      >
        {/* pulsing halo */}
        <span
          aria-hidden
          className="animate-giulia-pulse absolute inset-0 rounded-full bg-primary/40"
        />
        {/* portrait */}
        <span className="relative block h-full w-full overflow-hidden rounded-full border-2 border-white shadow-lg">
          <Image src={GIULIA.avatar} alt={GIULIA.alt} fill sizes="72px" className="object-cover" priority />
        </span>
        {/* online dot */}
        <span
          aria-hidden
          className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#3ac267]"
        />
      </button>

      {/* dismiss-for-7-days (appears on hover) */}
      <button
        type="button"
        onClick={hideWidget}
        aria-label="Nascondi Giulia per 7 giorni"
        className={`absolute -left-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-white text-text-muted shadow ring-1 ring-black/5 transition-opacity hover:text-text ${
          hover ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <X size={13} />
      </button>
    </div>
  );
}
