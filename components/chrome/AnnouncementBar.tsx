import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

const MESSAGES = [
  "Spedizione gratuita sopra €39,90",
  "Consegna 24/48h",
  "Dubbi? Scrivici su WhatsApp, ti risponde un esperto della cosmetica",
  "Scarica il catalogo completo — clicca qui",
];

/**
 * Utility bar 3-zone (Miamo): paese (sx) · messaggi rotanti (centro) · supporto (dx).
 * Rotazione CSS-only (nessun JS), rispetta prefers-reduced-motion.
 */
export function AnnouncementBar() {
  return (
    <div className="bg-announcement-bg text-announcement-text">
      <div className="mx-auto flex h-10 max-w-[1400px] items-center px-4 text-[13px] sm:px-6">
        {/* LEFT ~15% */}
        <div className="hidden w-[15%] shrink-0 items-center gap-1.5 font-medium md:flex">
          <span aria-hidden>🇮🇹</span>
          <span>IT · EUR</span>
        </div>

        {/* CENTER ~60% rotating */}
        <div className="relative h-5 flex-1 overflow-hidden text-center">
          {MESSAGES.map((m, i) => (
            <span
              key={i}
              className="rotate-item absolute inset-0 flex items-center justify-center px-2 font-medium"
              style={{ animationDelay: `${i * 5}s` }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* RIGHT ~25% */}
        <div className="hidden w-[25%] shrink-0 items-center justify-end gap-4 font-medium md:flex">
          <Link href="/contatti" className="inline-flex items-center gap-1 hover:underline">
            <Phone size={13} /> Contattaci
          </Link>
          <Link href="/store-locator" className="inline-flex items-center gap-1 hover:underline">
            <MapPin size={13} /> Store Locator
          </Link>
        </div>
      </div>
    </div>
  );
}
