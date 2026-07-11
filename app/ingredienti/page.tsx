import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Breadcrumb } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { INGREDIENTS, HERO_INGREDIENTS } from "@/data/ingredients";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ingredienti",
  description:
    "Il dizionario degli attivi naturali Cannabilla: olio di semi di canapa, acido ialuronico, calendula e le botaniche dei Monti Sibillini.",
};

export default function IngredientiPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Ingredienti" }]} />
          <h1 className="mt-3 font-display text-4xl text-text sm:text-5xl">Ingredienti</h1>
          <p className="mt-3 max-w-xl text-text-muted">
            Attivi naturali selezionati con cura, dall&apos;olio di semi di canapa alle botaniche
            spontanee dei Monti Sibillini: scopri cosa rende efficaci le formule Cannabilla.
          </p>
        </div>
      </section>

      {/* Featured hero ingredients */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-text sm:text-3xl">Gli attivi protagonisti</h2>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
          {HERO_INGREDIENTS.map((ing, i) => (
            <Reveal key={ing.slug} delay={i * 0.04}>
              <Link
                href={`/ingredienti/${ing.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  {ing.imgKey && (
                    <Photo
                      imgKey={ing.imgKey}
                      alt={ing.name}
                      fill
                      sizes="(max-width:768px) 50vw, 420px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-lg text-text group-hover:text-primary">
                    {ing.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{ing.fn}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full dictionary */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-text sm:text-3xl">Dizionario ingredienti</h2>
          <p className="mt-3 max-w-xl text-text-muted">
            Tutti gli attivi che puoi trovare nelle formule Cannabilla, con la loro funzione
            cosmetica.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INGREDIENTS.map((ing) => {
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-base text-text">{ing.name}</h3>
                    {ing.hero && (
                      <span className="shrink-0 text-xs font-semibold text-primary">Scheda →</span>
                    )}
                  </div>
                  {ing.inci && (
                    <p className="mt-0.5 text-xs italic text-text-muted">{ing.inci}</p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{ing.fn}</p>
                </>
              );
              return ing.hero ? (
                <Link
                  key={ing.slug}
                  href={`/ingredienti/${ing.slug}`}
                  className="group block rounded-xl border border-border bg-white p-5 transition hover:border-primary hover:shadow-card"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={ing.slug}
                  className="rounded-xl border border-border bg-white p-5"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
