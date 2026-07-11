import Link from "next/link";
import { ATMOSPHERE } from "@/data/productData";
import { BottleImage } from "../BottleImage";

/** Section 9 — 3 large editorial photo tiles with italic serif titles. */
const TILES = [
  {
    title: "Il Nostro Laboratorio",
    copy: "Nel cuore dei Monti Sibillini, ad Amandola, ogni formula nasce dall'olio di semi di canapa e da attivi vegetali naturali. Cosmesi Made in Italy, cruelty-free e senza parabeni.",
    image: ATMOSPHERE.cellar,
    href: "/chi-siamo",
    alt: "Laboratorio di cosmetici naturali alla canapa",
  },
  {
    title: "Rituali di Bellezza",
    copy: "Viso, corpo, capelli e benessere: gesti quotidiani con la forza della canapa, ricca di omega 3 e 6. Scrivici per costruire la tua routine naturale.",
    image: ATMOSPHERE.tasting,
    href: "/contatti",
    alt: "Rituale di bellezza con cosmetici alla canapa",
  },
  {
    title: "Hempilla & Benessere",
    copy: "Estratti naturali di canapa e formule dedicate al benessere della pelle. La nostra linea più ricca di attivi vegetali, tutta da scoprire.",
    image: ATMOSPHERE.amber,
    href: "/categoria/hempilla",
    alt: "Estratti naturali di canapa Hempilla",
  },
];

export function EditorialTriptych() {
  return (
    <section aria-label="Editoriale" className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TILES.map((t) => (
          <Link key={t.title} href={t.href} className="group flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <BottleImage
                src={t.image}
                alt={t.alt}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(26,26,26,0.6),transparent_55%)]" />
              <h3 className="absolute bottom-4 left-4 font-[family-name:var(--font-display)] text-[24px] font-bold italic text-white">
                {t.title}
              </h3>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-text-muted">{t.copy}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
