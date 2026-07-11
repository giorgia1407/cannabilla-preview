import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading, Stars } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { KITS, kitBySlug, kitProducts, kitPricing } from "@/data/kits";
import { bySlug } from "@/data/catalog";
import { ecwidProductUrl, getWhatsAppUrl, formatEuro } from "@/lib/constants";

const SAMPLE_REVIEWS = [
  { initials: "GR", name: "Giulia R.", text: "Kit perfetto per iniziare: prodotti che si assorbono in fretta e pelle subito più morbida." },
  { initials: "MB", name: "Marco B.", text: "Ottimo rapporto qualità-prezzo. Comodissimo avere tutta la routine già pronta in un unico ordine." },
];

export function generateStaticParams() {
  return KITS.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const kit = kitBySlug(slug);
  if (!kit) return { title: "Kit" };
  return { title: kit.name, description: kit.tagline };
}

function RoutineList({ slugs }: { slugs: string[] }) {
  const products = slugs.map(bySlug).filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <div className="space-y-3">
      {products.map((p, i) => (
        <a
          key={`${p.slug}-${i}`}
          href={ecwidProductUrl(p.slug)}
          className="group flex items-center gap-4 rounded-xl border border-border bg-white p-3 transition hover:border-primary"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-white">
            {i + 1}
          </span>
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-surface">
            <Photo src={p.image} alt={p.alt} fill sizes="56px" className="object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-text group-hover:text-primary">{p.name}</p>
            <p className="text-xs text-text-muted">{formatEuro(p.price)}</p>
          </div>
          <ArrowRight size={16} className="text-primary opacity-0 transition group-hover:opacity-100" />
        </a>
      ))}
    </div>
  );
}

export default async function KitDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kit = kitBySlug(slug);
  if (!kit) notFound();

  const products = kitProducts(kit);
  const pricing = kitPricing(kit);

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[240px]">
          <Photo imgKey={kit.imgKey} alt={kit.name} fill w={1600} priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 py-8 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Kit", href: "/kits" }, { label: kit.name }]} />
              </div>
              <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">{kit.name}</h1>
              <p className="mt-2 max-w-xl text-white/90">{kit.tagline}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-white/85">
                <Stars rating={kit.rating} size={16} />
                <span>{kit.rating.toFixed(1)} · {kit.reviewCount} recensioni</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + ideale per */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Ideale per: {kit.idealFor}</p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">{kit.intro}</p>
        </div>
      </section>

      {/* Prodotti inclusi */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Cosa contiene" title="Prodotti inclusi" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} />
          ))}
        </div>

        {/* Pricing */}
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-white p-6 text-center">
          <p className="text-sm text-text-muted">
            Valore <span className="font-medium text-text line-through">{formatEuro(pricing.retail)}</span>
          </p>
          <p className="mt-1 font-display text-3xl text-text">Prezzo kit {formatEuro(pricing.kit)}</p>
          <p className="mt-1 text-sm font-semibold text-primary">Risparmi {formatEuro(pricing.saving)}</p>
        </div>
      </section>

      {/* Routine mattina / sera */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Come si usa" title="La routine passo dopo passo" />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-display text-xl text-text">Routine Mattina</h3>
              <div className="mt-5">
                <RoutineList slugs={kit.routineMorning} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-display text-xl text-text">Routine Sera</h3>
              <div className="mt-5">
                <RoutineList slugs={kit.routineEvening} />
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-text-muted">Durata indicativa: {kit.usagePeriod}</p>
        </div>
      </section>

      {/* CTA aggiungi kit */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl leading-tight text-text sm:text-4xl">Aggiungi il kit</h2>
        {kit.ecwidSlug ? (
          <div className="mt-7">
            <a href={ecwidProductUrl(kit.ecwidSlug)} className="btn btn-primary btn-lg">
              Aggiungi il kit al carrello <ArrowRight size={16} />
            </a>
          </div>
        ) : (
          <div className="mt-7">
            <a
              href={getWhatsAppUrl("Ciao Cannabilla! Vorrei acquistare il " + kit.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <MessageCircle size={16} /> Ordina il kit su WhatsApp
            </a>
          </div>
        )}
        <p className="mt-4 text-sm text-text-muted">
          I kit possono essere ordinati via WhatsApp: ti prepariamo tutto e ti aiutiamo con la routine.
        </p>
      </section>

      {/* Recensioni (esempio) */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <Stars rating={kit.rating} size={20} />
              <span className="font-display text-2xl text-text">{kit.rating.toFixed(1)}</span>
            </div>
            <p className="mt-1 text-sm text-text-muted">{kit.reviewCount} recensioni</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-text-muted">Recensioni di esempio</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {SAMPLE_REVIEWS.map((r) => (
              <div key={r.name} className="flex flex-col rounded-xl border border-border bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {r.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text">{r.name}</p>
                    <p className="text-xs text-text-muted">Recensione di esempio</p>
                  </div>
                  <div className="ml-auto">
                    <Stars rating={5} size={13} />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <div className="mx-auto max-w-[1400px] px-4 py-16 text-center sm:px-6">
        <Link href="/kits" className="btn btn-secondary">
          Scopri tutti i kit
        </Link>
      </div>
    </SiteChrome>
  );
}
