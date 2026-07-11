import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/ui";
import { KitCard } from "@/components/cards";
import { KITS } from "@/data/kits";

export const metadata: Metadata = {
  title: "I Nostri Kit",
  description:
    "Routine pronte in un click: 8 kit Cannabilla per viso, corpo, sole, capelli e tattoo. Prodotti selezionati che lavorano in sinergia, a un prezzo vantaggioso.",
};

export const dynamic = "force-static";

export default function KitsPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[240px]">
          <Photo imgKey="cosmetics1" alt="I kit Cannabilla" fill w={1600} priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 py-8 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Kit" }]} />
              </div>
              <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
                I Nostri Kit — Routine Pronte in un Click
              </h1>
              <p className="mt-2 max-w-xl text-white/90">
                Prodotti selezionati che lavorano in sinergia, a un prezzo più conveniente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-text-muted">
            Ogni kit riunisce i gesti fondamentali di una routine — detersione, trattamento e protezione — pensati per
            un'esigenza precisa. Un modo semplice per iniziare, con un risparmio rispetto all'acquisto dei singoli
            prodotti.
          </p>
        </div>
      </section>

      {/* Grid kit */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Routine complete" title="Tutti i Kit Cannabilla" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {KITS.map((k) => (
            <KitCard key={k.slug} kit={k} />
          ))}
        </div>
      </section>

      {/* CTA quiz */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl leading-tight text-text sm:text-4xl">Costruisci la tua routine</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            Preferisci una routine su misura? Rispondi a poche domande e ricevi consigli personalizzati.
          </p>
          <div className="mt-7">
            <Link href="/routine-quiz" className="btn btn-primary btn-lg">
              Build your own routine <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
