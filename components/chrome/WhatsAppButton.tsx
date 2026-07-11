"use client";

import { getWhatsAppUrl } from "@/lib/constants";

/**
 * Icona WhatsApp flottante — entry point SECONDARIO (Giulia è il primario).
 * Solo icona 44px, verde brand WhatsApp (#25D366), posizionata sopra l'avatar di
 * Giulia con ~12px di gap. Tooltip "Scrivi su WhatsApp" in hover dopo ~500ms.
 * Nascosta sotto i 380px per non competere con Giulia (unico entry point sui
 * viewport molto piccoli).
 */
export function WhatsAppButton() {
  return (
    <div className="group fixed bottom-[104px] right-8 z-40 max-[379px]:hidden">
      {/* tooltip — appare a sinistra dell'icona dopo 500ms di hover */}
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded-md bg-text px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity delay-500 duration-150 group-hover:opacity-100"
      >
        Scrivi su WhatsApp
      </span>
      <a
        href={getWhatsAppUrl("Ciao, vengo dal sito Cannabilla e vorrei un consiglio.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivi su WhatsApp"
        className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-150 hover:scale-105"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.42 1.27 4.86L2 22l5.28-1.38A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.09-.47-4.34-1.28l-.31-.2-3.13.82.84-3.05-.2-.32A7.94 7.94 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </a>
    </div>
  );
}
