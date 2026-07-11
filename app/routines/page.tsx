import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/ui";
import { ROUTINES } from "@/data/routines";

export const metadata: Metadata = {
  title: "Le Nostre Routine",
  description:
    "Rituali quotidiani Cannabilla: sequenze di gesti pensate per la mattina, la sera o l'intera giornata, con i prodotti alla canapa dei Monti Sibillini.",
};

export const dynamic = "force-static";

const TIME_LABEL: Record<string, string> = {
  mattina: "Mattina",
  sera: "Sera",
  completa: "Giorno e notte",
};

export default function RoutinesPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[240px]">
          <Photo imgKey="botanical1" alt="Le routine Cannabilla" fill w={1600} priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 py-8 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Routine" }]} />
              </div>
              <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">Le Nostre Routine</h1>
              <p className="mt-2 max-w-xl text-white/90">
                Piccoli rituali quotidiani ispirati alla natura dei Monti Sibillini: gesti semplici, nell'ordine giusto,
                da ritagliarsi ogni mattina e ogni sera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-text-muted">
            Una routine non è un semplice elenco di prodotti: è una sequenza di gesti pensata per accompagnarti nella
            giornata, dal risveglio al momento in cui ti prendi cura di te la sera. Scegli quella più adatta alla tua
            pelle e segui i passi, uno alla volta.
          </p>
        </div>
      </section>

      {/* Grid routine */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Rituali quotidiani" title="Tutte le Routine Cannabilla" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {ROUTINES.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.05}>
              <Link href={`/routines/${r.slug}`} className="group flex flex-col">
                <span className="mb-2 text-center font-display text-base text-text group-hover:text-primary">
                  {r.name}
                </span>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface">
                  <Photo
                    imgKey={r.imgKey}
                    alt={r.name}
                    fill
                    priority={i < 4}
                    sizes="(max-width:640px) 50vw, 280px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                    {TIME_LABEL[r.timeOfDay]}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                    <p className="text-sm font-medium">{r.targetConcern}</p>
                    <p className="mt-0.5 text-xs text-white/80">{r.steps.length} passi</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA quiz */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl leading-tight text-text sm:text-4xl">Costruisci la tua routine</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            Nessuna delle nostre routine è quella giusta per te? Rispondi a poche domande e ricevi consigli su misura.
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
