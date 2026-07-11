"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/data/reviews";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-white">
      {items.map((it, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="font-display text-base text-text">{it.q}</span>
            <Plus size={18} className={`shrink-0 text-primary transition-transform ${open === i ? "rotate-45" : ""}`} />
          </button>
          <div className="accordion-grid" data-open={open === i}>
            <div className="accordion-inner">
              <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted">{it.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
