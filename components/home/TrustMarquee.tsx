import { Leaf } from "lucide-react";

/**
 * Marquee di fiducia (Step 2) — striscia a scorrimento continuo sotto l'hero.
 *
 * La lista viene duplicata nel DOM (due gruppi identici): traslando la track di
 * -50% si scorre di esattamente la larghezza di un gruppo, per un loop senza
 * salti né vuoti. L'animazione è pura CSS (`.marquee-track`, vedi globals.css),
 * si mette in pausa all'hover e rispetta `prefers-reduced-motion` (strip statica
 * centrata). Testo verde su crema: contrasto corretto, nessuno scrim necessario.
 */

const ITEMS = [
  "🌿 Made in Italy",
  "Cruelty-Free",
  "Cosmetici Naturali CPNP",
  "Packaging Riciclabile",
  "Spedizione Gratuita Sopra €39,90",
  "Consegna 24/48h",
  "Formulato nei Monti Sibillini",
  "Dubbi? Scrivici su WhatsApp",
];

function MarqueeGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      data-marquee-group
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((label) => (
        <div key={label} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-[15px] font-medium uppercase tracking-[0.08em] text-primary">
            {label}
          </span>
          <Leaf size={15} className="shrink-0 text-primary-light" aria-hidden />
        </div>
      ))}
    </div>
  );
}

export function TrustMarquee() {
  return (
    <section
      aria-label="I nostri valori"
      className="flex h-14 items-center overflow-hidden border-y border-border bg-cream sm:h-16"
    >
      <div className="marquee-track">
        <MarqueeGroup />
        <MarqueeGroup ariaHidden />
      </div>
    </section>
  );
}
