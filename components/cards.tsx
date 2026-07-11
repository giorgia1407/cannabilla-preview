import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "./Photo";
import { Stars } from "./ui";
import type { ConcernMeta, CategoryMeta } from "@/data/taxonomy";
import type { Kit } from "@/data/kits";
import { kitPricing } from "@/data/kits";
import { formatEuro } from "@/lib/constants";

/**
 * Tile ESIGENZA (Miamo): foto ritratto full-bleed + etichetta BIANCA sovrapposta,
 * pulsante bordato verde sotto. Linguaggio cosmetico conforme.
 */
export function ConcernCard({ concern, priority = false }: { concern: ConcernMeta; priority?: boolean }) {
  return (
    <div className="group flex flex-col">
      <Link href={`/concerns/${concern.slug}`} className="relative block aspect-[3/4] overflow-hidden rounded-xl bg-surface">
        <Photo
          imgKey={concern.imgKey}
          alt={concern.label}
          fill
          priority={priority}
          sizes="(max-width:640px) 70vw, 320px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <span
          data-photo-overlay-text
          className="absolute inset-x-0 bottom-[18%] text-center text-lg font-semibold uppercase tracking-wide md:text-xl"
        >
          {concern.label}
        </span>
      </Link>
      <Link
        href={`/concerns/${concern.slug}`}
        className="mt-3 inline-flex items-center justify-center rounded border-2 border-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white"
      >
        {concern.label}
      </Link>
    </div>
  );
}

/** Tile CATEGORIA (Antos): foto + etichetta ABOVE. */
export function CategoryTile({ category }: { category: CategoryMeta }) {
  return (
    <Link href={`/categoria/${category.slug}`} className="group flex flex-col">
      <span className="mb-2 text-center font-display text-lg text-text group-hover:text-primary">{category.label}</span>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
        <Photo
          imgKey={category.tile}
          alt={category.label}
          fill
          sizes="(max-width:640px) 50vw, 260px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}

/** Tile KIT (Antos): ritratto, etichetta ABOVE. */
export function KitCard({ kit }: { kit: Kit }) {
  const { kit: price } = kitPricing(kit);
  return (
    <Link href={`/kits/${kit.slug}`} className="group flex flex-col">
      <span className="mb-2 text-center font-display text-base text-text group-hover:text-primary">{kit.name}</span>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
        <Photo
          imgKey={kit.imgKey}
          alt={kit.name}
          fill
          sizes="(max-width:640px) 50vw, 240px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-2 flex items-center justify-center gap-2 text-sm">
        <Stars rating={kit.rating} size={12} />
        <span className="font-semibold text-text">{formatEuro(price)}</span>
      </div>
    </Link>
  );
}

/** Card articolo journal. */
export function ArticleCard({
  slug,
  title,
  category,
  excerpt,
  imgKey,
  readTime,
  dateLabel,
}: {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  imgKey: Parameters<typeof Photo>[0]["imgKey"];
  readTime: string;
  dateLabel: string;
}) {
  return (
    <Link href={`/journal/${slug}`} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Photo imgKey={imgKey} alt={title} fill sizes="(max-width:640px) 100vw, 400px" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg leading-tight text-text group-hover:text-primary">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-text-muted">{excerpt}</p>
        <div className="mt-auto flex items-center gap-2 pt-3 text-xs text-text-muted">
          <span>{dateLabel}</span>
          <span>·</span>
          <span>{readTime} di lettura</span>
          <ArrowRight size={14} className="ml-auto text-primary" />
        </div>
      </div>
    </Link>
  );
}
