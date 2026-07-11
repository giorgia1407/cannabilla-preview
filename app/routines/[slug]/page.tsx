import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading, Stars } from "@/components/ui";
import { ROUTINES, routineBySlug } from "@/data/routines";
import { bySlug } from "@/data/catalog";
import { ecwidProductUrl, getWhatsAppUrl, formatEuro } from "@/lib/constants";

const TIME_LABEL: Record<string, string> = {
  mattina: "Mattina",
  sera: "Sera",
  completa: "Giorno e notte",
};

export function generateStaticParams() {
  return ROUTINES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const routine = routineBySlug(slug);
  if (!routine) return { title: "Routine" };
  return { title: routine.name, description: routine.intro };
}

export default async function RoutineDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const routine = routineBySlug(slug);
  if (!routine) notFound();

  const stepsWithProducts = routine.steps
    .map((step) => {
      const product = bySlug(step.slug);
      return product ? { step, product } : null;
    })
    .filter((x): x is { step: (typeof routine.steps)[number]; product: NonNullable<ReturnType<typeof bySlug>> } => Boolean(x));

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[240px]">
          <Photo imgKey={routine.imgKey} alt={routine.name} fill w={1600} priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 py-8 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Routine", href: "/routines" }, { label: routine.name }]} />
              </div>
              <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">{routine.name}</h1>
              <p className="mt-2 max-w-xl text-white/90">{routine.targetConcern}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/85">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {TIME_LABEL[routine.timeOfDay]}
                </span>
                <span className="flex items-center gap-2">
                  <Stars rating={routine.rating} size={16} />
                  {routine.rating.toFixed(1)} · {routine.reviewCount} recensioni
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pensata per: {routine.targetConcern}</p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">{routine.intro}</p>
        </div>
      </section>

      {/* Sequenza passo dopo passo */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="La sequenza" title="I gesti della routine" />
        </Reveal>
        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          {stepsWithProducts.map(({ step, product }, i) => (
            <Reveal key={product.slug} delay={i * 0.05}>
              <a
                href={ecwidProductUrl(product.slug)}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 transition hover:border-primary hover:shadow-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface">
                  <Photo src={product.image} alt={product.alt} fill sizes="64px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Passo {i + 1}</p>
                  <p className="mt-0.5 truncate font-display text-base text-text group-hover:text-primary">
                    {product.name}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{step.gesture}</p>
                  <p className="mt-1 text-sm font-semibold text-text">{formatEuro(product.price)}</p>
                </div>
                <ArrowRight size={16} className="shrink-0 text-primary opacity-0 transition group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl leading-tight text-text sm:text-4xl">Un consiglio su misura?</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            Scrivici su WhatsApp: ti aiutiamo a scegliere i prodotti giusti per la tua pelle e a costruire la routine
            perfetta per te, con calma, da casa.
          </p>
          <div className="mt-7">
            <a
              href={getWhatsAppUrl("Ciao Cannabilla! Vorrei un consiglio sulla " + routine.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <MessageCircle size={16} /> Chiedi consiglio su WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <div className="mx-auto max-w-[1400px] px-4 py-16 text-center sm:px-6">
        <Link href="/routines" className="btn btn-secondary">
          Scopri tutte le routine
        </Link>
      </div>
    </SiteChrome>
  );
}
