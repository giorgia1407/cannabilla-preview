"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

/** Cuore wishlist dimostrativo (nessuna persistenza). */
export function WishlistHeart({ className = "" }: { className?: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      aria-label={on ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
      aria-pressed={on}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setOn((v) => !v);
      }}
      className={`grid h-9 w-9 place-items-center rounded-full bg-white/90 text-text shadow-soft backdrop-blur transition hover:text-sale ${className}`}
    >
      <Heart size={16} className={on ? "fill-sale text-sale" : ""} />
    </button>
  );
}
