import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES } from "@/data/taxonomy";
import { PRODUCTS, byCategory, bySlugs } from "@/data/catalog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tutti i prodotti",
  description:
    "Esplora le linee di cosmetica naturale Cannabilla: viso, corpo, sole, capelli, trattamenti ed estratti di canapa dai Monti Sibillini.",
};

const STRIP = [
  "golden-hemp-siero-viso-idratante",
  "escar-glow-siero-viso-ultra-idratante",
  "crema-viso-idratante",
  "mousse-detergente-delicata",
  "im-perfect-siero-viso-anti-imperfezioni",
  "crema-viso-solare-spf-50",
  "crema-corpo-idratazione-intensiva",
  "scrub-viso-100-naturale",
];

const CHIPS: { slug: string; label: string }[] = [
  { slug: "novita", label: "Novità" },
  { slug: "bestseller", label: "Best Seller" },
  { slug: "offerta", label: "In Offerta" },
];

export default function ProdottiHubPage() {
  const strip = bySlugs(STRIP);
  const total = PRODUCTS.length;

  return (
    <SiteChrome>
      {/* Level-1 hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-14 text-center sm:px-6 sm:py-20">
          <Reveal>
            <p className="eyebrow">Il catalogo Cannabilla</p>
            <h1 className="mt-3 font-display text-text">Tutti i Nostri Prodotti</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Cosmesi naturale dai Monti Sibillini · {total} prodotti in {CATEGORIES.length} linee
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9 category tiles */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:gap-6">
          {CATEGORIES.map((cat) => {
            const count = byCategory(cat.slug).length;
            return (
              <Reveal key={cat.slug}>
                <Link href={`/categoria/${cat.slug}`} className="group flex flex-col">
                  <span className="mb-2 font-display text-xl font-bold text-text group-hover:text-primary sm:text-2xl">
                    {cat.label}
                  </span>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface">
                    <Photo
                      imgKey={cat.tile}
                      alt={cat.label}
                      fill
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 420px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                      {count} prodotti
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Quick-filter chips */}
      <section className="mx-auto max-w-[1400px] px-4 pb-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CHIPS.map((c) => (
            <Link
              key={c.slug}
              href={`/prodotti/${c.slug}`}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Bestseller discovery strip */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-text">I più amati</h2>
          <Link href="/prodotti/bestseller" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline">
            Vedi tutti <ArrowRight size={15} />
          </Link>
        </div>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {strip.map((p) => (
            <div key={p.slug} className="w-[64vw] shrink-0 snap-start sm:w-[240px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
