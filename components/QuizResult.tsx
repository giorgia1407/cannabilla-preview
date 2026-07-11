"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Check, RotateCcw } from "lucide-react";
import { Photo } from "./Photo";
import { computeRoutine, type RoutineResult, type QuizAnswers } from "@/data/quiz";
import { bySlug } from "@/data/catalog";
import { ecwidProductUrl, formatEuro } from "@/lib/constants";

const STORAGE_KEY = "cannabilla_quiz_answers";

/** Piccolo motivo botanico decorativo (foglia stilizzata), puramente ornamentale. */
function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M50 8C20 30 10 70 30 120C36 100 48 88 65 74C90 52 92 24 50 8Z" />
      <path d="M50 8C34 46 28 84 30 120" />
    </svg>
  );
}

export function QuizResult() {
  const [result, setResult] = useState<RoutineResult | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [emailed, setEmailed] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const answers = JSON.parse(raw) as QuizAnswers;
        setResult(computeRoutine(answers));
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  if (loaded && !result) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-cream py-16 text-center">
        <h1 className="font-display text-3xl text-text">Nessun risultato disponibile</h1>
        <p className="mt-3 text-text-muted">Completa prima il quiz per ricevere la tua routine su misura.</p>
        <Link href="/routine-quiz" className="btn btn-primary mt-6">
          Fai il quiz
        </Link>
      </div>
    );
  }

  if (!result) return <div className="py-24 text-center text-text-muted">Caricamento…</div>;

  const allSlugs = [...result.morning, ...result.evening, ...(result.booster ? [result.booster] : []), result.spf].map(
    (x) => x.slug,
  );
  const uniqueSlugs = [...new Set(allSlugs)];

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-cream">
      <div className="pointer-events-none absolute inset-0">
        <Photo imgKey="mountain1" alt="" fill sizes="900px" className="object-cover opacity-[0.08]" />
        <div className="absolute inset-0 bg-cream/90" />
        <LeafDecoration className="absolute -right-6 -top-10 h-48 w-32 text-primary/10" />
        <LeafDecoration className="absolute -bottom-10 -left-8 h-40 w-28 rotate-[150deg] text-primary/10" />
      </div>

      <div className="relative px-4 py-10 sm:px-8 sm:py-14">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Sparkles size={16} /> Il tuo rituale è pronto
          </span>
          <h1 className="mt-4 font-display text-3xl text-text sm:text-4xl">La tua routine naturale</h1>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            Basata sulle tue risposte, ecco i prodotti Cannabilla pensati per te.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-text-muted">{result.intro}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <RoutineColumn title="Il tuo rituale del mattino" steps={result.morning.concat(result.spf)} />
          <RoutineColumn title="Il tuo rituale della sera" steps={result.evening} />
        </div>

        {result.booster && (
          <div className="mt-8">
            <h2 className="font-display text-xl text-text">Un piccolo extra, una volta a settimana</h2>
            <div className="mt-4">
              <StepRow index={null} slug={result.booster.slug} why={result.booster.why} />
            </div>
          </div>
        )}

        {/* CTA all products */}
        <div className="mt-12 rounded-2xl bg-surface p-8 text-center">
          <h2 className="font-display text-2xl text-text">Il tuo dono naturale, pronto per te</h2>
          <p className="mt-2 text-text-muted">
            Abbiamo raccolto {uniqueSlugs.length} prodotti pensati apposta per te sullo shop Cannabilla.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={ecwidProductUrl(uniqueSlugs[0])} className="btn btn-primary btn-lg">
              Scopri il tuo rituale <ArrowRight size={16} />
            </a>
            <button
              type="button"
              onClick={() => setEmailed(true)}
              className="btn btn-secondary btn-lg"
              disabled={emailed}
            >
              {emailed ? (
                <>
                  <Check size={16} /> Inviata!
                </>
              ) : (
                "Ricevi il risultato via email"
              )}
            </button>
          </div>
          <Link href="/routine-quiz" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-text-muted hover:text-primary">
            <RotateCcw size={13} /> Rifai il quiz
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          I consigli forniti hanno finalità cosmetica e informativa e non sostituiscono il parere di un professionista.
        </p>
      </div>
    </div>
  );
}

function RoutineColumn({ title, steps }: { title: string; steps: { slug: string; why: string }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <h2 className="font-display text-xl text-text">{title}</h2>
      <div className="mt-5 space-y-3">
        {steps.map((s, i) => (
          <StepRow key={`${s.slug}-${i}`} index={i + 1} slug={s.slug} why={s.why} />
        ))}
      </div>
    </div>
  );
}

function StepRow({ index, slug, why }: { index: number | null; slug: string; why: string }) {
  const p = bySlug(slug);
  if (!p) return null;
  return (
    <a href={ecwidProductUrl(p.slug)} className="group flex gap-4 rounded-xl border border-border p-3 transition hover:border-primary">
      {index !== null && (
        <span className="grid h-8 w-8 shrink-0 place-items-center self-center rounded-full bg-primary text-sm font-semibold text-white">
          {index}
        </span>
      )}
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface">
        <Photo src={p.image} alt={p.alt} fill sizes="64px" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-text group-hover:text-primary">{p.name}</p>
        <p className="mt-0.5 line-clamp-2 text-xs text-text-muted">{why}</p>
        <p className="mt-1 text-xs font-medium text-text">{formatEuro(p.price)}</p>
      </div>
    </a>
  );
}
