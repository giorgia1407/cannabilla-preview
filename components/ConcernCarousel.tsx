"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ConcernCard } from "./cards";
import type { ConcernMeta } from "@/data/taxonomy";

/** Carosello esigenze (Miamo): peek della tile successiva, frecce + puntini. */
export function ConcernCarousel({ concerns }: { concerns: ConcernMeta[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  function scrollTo(i: number) {
    const el = track.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(concerns.length - 1, i));
    const child = el.children[clamped] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - 8, behavior: "smooth" });
    setIdx(clamped);
  }

  return (
    <div className="relative">
      <div
        ref={track}
        onScroll={(e) => {
          const el = e.currentTarget;
          const w = (el.children[0] as HTMLElement)?.offsetWidth || 1;
          setIdx(Math.round(el.scrollLeft / (w + 16)));
        }}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {concerns.map((c, i) => (
          <div key={c.slug} className="w-[68%] shrink-0 snap-start sm:w-[38%] lg:w-[23%]">
            <ConcernCard concern={c} priority={i < 2} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Precedente"
        onClick={() => scrollTo(idx - 1)}
        className="absolute -left-3 top-[38%] hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow-soft hover:text-primary md:grid"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Successivo"
        onClick={() => scrollTo(idx + 1)}
        className="absolute -right-3 top-[38%] hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow-soft hover:text-primary md:grid"
      >
        <ChevronRight size={20} />
      </button>

      <div className="mt-5 flex justify-center gap-2">
        {concerns.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            aria-label={`Vai a ${c.label}`}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-2 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}
