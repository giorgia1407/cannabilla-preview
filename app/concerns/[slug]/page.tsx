import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { CONCERNS, concernMeta } from "@/data/taxonomy";
import { bySlugs, byConcern, type ConcernSlug } from "@/data/catalog";
import { ecwidProductUrl, getWhatsAppUrl, formatEuro } from "@/lib/constants";

export function generateStaticParams() {
  return CONCERNS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const concern = concernMeta(slug as ConcernSlug);
  if (!concern) return { title: "Esigenza" };
  return { title: concern.tagline, description: concern.description };
}

export default async function ConcernPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concern = concernMeta(slug as ConcernSlug);
  if (!concern) notFound();

  const routine = bySlugs(concern.routine);
  const products = byConcern(concern.slug);
  const label = concern.label.charAt(0) + concern.label.slice(1).toLowerCase();

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[240px]">
          <Photo imgKey={concern.imgKey} alt={concern.label} fill w={1600} priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 py-8 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb
                  items={[{ label: "Home", href: "/" }, { label: "Esigenze" }, { label }]}
                />
              </div>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl">{label}</h1>
              <p className="mt-2 max-w-xl text-white/90">{concern.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-text-muted">{concern.description}</p>
        </div>
      </section>

      {/* Routine consigliata */}
      {routine.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Passo dopo passo"
              title="Routine Consigliata"
              subtitle="La sequenza di gesti pensata per questa esigenza."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routine.map((p, i) => (
              <a
                key={p.slug}
                href={ecwidProductUrl(p.slug)}
                className="group flex flex-col rounded-2xl border border-border bg-white p-4 transition hover:border-primary hover:shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface">
                    <Photo src={p.image} alt={p.alt} fill sizes="64px" className="object-cover" />
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm font-medium text-text group-hover:text-primary">{p.name}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-text">{formatEuro(p.price)}</span>
                  <ArrowRight size={16} className="text-primary opacity-0 transition group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Griglia prodotti */}
      {products.length > 0 && (
        <section className="bg-surface">
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
            <Reveal>
              <SectionHeading eyebrow="Selezione completa" title={`Tutti i prodotti per ${label.toLowerCase()}`} />
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products.map((p, i) => (
                <ProductCard key={p.slug} product={p} priority={i < 4} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Perché questi prodotti */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl text-text sm:text-3xl">Perché questi prodotti</h2>
          <p className="mt-4 leading-relaxed text-text-muted">{concern.why}</p>
        </Reveal>
      </section>

      {/* CTA esperto */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-[1400px] px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Consulta un esperto</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Non sai da dove iniziare? I nostri esperti ti guidano verso i gesti giusti per la tua pelle.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={getWhatsAppUrl("Ciao Cannabilla! Vorrei un consiglio per: " + concern.label)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              <MessageCircle size={16} /> Scrivici su WhatsApp
            </a>
            <Link href="/routine-quiz" className="btn btn-light">
              Fai il quiz routine
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
