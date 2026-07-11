import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { onOffer } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Offerte",
  description:
    "Le offerte del momento su cosmetici naturali alla canapa Cannabilla: prodotti selezionati a prezzo speciale, finché disponibili.",
};

export const dynamic = "force-static";

export default function OffertePage() {
  const products = onOffer();

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[240px]">
          <Photo imgKey="botanical3" alt="Offerte Cannabilla" fill w={1600} priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 py-8 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Offerte" }]} />
              </div>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl">Offerte</h1>
              <p className="mt-2 max-w-xl text-white/90">
                I prodotti in promozione del momento, finché disponibili.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + grid */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Prezzo speciale"
            title="Le offerte del momento"
            subtitle="Una selezione di cosmetici naturali alla canapa a prezzo ridotto."
          />
        </Reveal>

        {products.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 4} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-surface p-10 text-center">
            <p className="text-text-muted">
              Al momento non ci sono offerte attive. Torna presto o scopri i nostri prodotti.
            </p>
            <Link href="/prodotti" className="btn btn-primary mt-6">
              Scopri i prodotti
            </Link>
          </div>
        )}
      </section>
    </SiteChrome>
  );
}
