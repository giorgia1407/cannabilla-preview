"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import { QUESTIONS, type QuizAnswers } from "@/data/quiz";

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

export function QuizFlow() {
  const router = useRouter();
  const [step, setStep] = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState<QuizAnswers>({});

  function choose(id: string, value: string) {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      router.push("/routine-quiz/risultato");
    }
  }

  function reset() {
    setAnswers({});
    setStep(-1);
  }

  if (step === -1) {
    return (
      <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl bg-cream px-6 py-14 text-center sm:px-12">
        <LeafDecoration className="pointer-events-none absolute -right-4 -top-6 h-32 w-24 text-primary/10 sm:h-40 sm:w-28" />
        <LeafDecoration className="pointer-events-none absolute -bottom-8 -left-6 h-28 w-20 rotate-[160deg] text-primary/10" />
        <p className="eyebrow relative">6 domande, un solo rituale</p>
        <h1 className="relative mt-3 font-display text-4xl text-text sm:text-5xl">Un rituale su misura per te</h1>
        <p className="relative mx-auto mt-4 max-w-md text-text-muted">
          6 domande. La routine perfetta per la tua pelle, direttamente dai Monti Sibillini.
        </p>
        <button type="button" onClick={() => setStep(0)} className="btn btn-primary btn-lg relative mt-8">
          INIZIA IL RITUALE <ArrowRight size={16} />
        </button>
        <p className="relative mt-4 text-xs text-text-muted">Nessuna registrazione richiesta · Consiglio cosmetico, non medico.</p>
      </div>
    );
  }

  const q = QUESTIONS[step];
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between text-sm text-text-muted">
          <span>
            Domanda {step + 1} di {QUESTIONS.length}
          </span>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1 hover:text-primary">
            <RotateCcw size={13} /> Ricomincia
          </button>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-primary/10">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
        <LeafDecoration className="pointer-events-none absolute -right-3 -top-4 h-24 w-16 text-primary/10" />
        <LeafDecoration className="pointer-events-none absolute -bottom-6 -left-4 h-20 w-14 rotate-[135deg] text-primary/10" />
        <h2 className="relative text-center font-display text-2xl text-text sm:text-3xl">{q.question}</h2>

        <div className="relative mt-8 grid gap-3">
          {q.options.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => choose(q.id, o.value)}
              className={`min-h-[48px] w-full rounded-xl border-2 px-8 py-4 text-left text-base font-medium transition ${
                answers[q.id] === o.value
                  ? "border-primary bg-primary text-white"
                  : "border-primary bg-transparent text-primary hover:bg-primary/10"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {step > 0 && (
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-text-muted hover:text-primary"
        >
          <ArrowLeft size={15} /> Indietro
        </button>
      )}
    </div>
  );
}
