import Link from "next/link";
import { Star } from "lucide-react";
import type { ReactNode } from "react";

/** Rating a stelle (con mezze stelle). */
export function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} su 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star size={size} className="absolute inset-0 text-[#e0ddd3]" strokeWidth={1.5} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star size={size} className="text-[#e0a52e] fill-[#e0a52e]" strokeWidth={1.5} />
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"} ${className}`}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2 className="text-3xl md:text-4xl font-display text-text">{title}</h2>
      {subtitle && <p className="mt-3 text-text-muted text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}

const BADGE_STYLES: Record<string, string> = {
  "Best Seller": "bg-primary text-white",
  Novità: "bg-accent-gold text-white",
  Biologico: "bg-trust text-white",
  "In Offerta": "bg-sale text-white",
  Bio: "bg-trust text-white",
};

export function ProductBadge({ label }: { label: string }) {
  const cls = BADGE_STYLES[label] ?? "bg-primary text-white";
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${cls}`}>
      {label}
    </span>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {it.href ? (
              <Link href={it.href} className="hover:text-primary transition-colors">
                {it.label}
              </Link>
            ) : (
              <span className="text-text">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-border">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
