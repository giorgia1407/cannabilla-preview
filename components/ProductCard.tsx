import { ArrowRight } from "lucide-react";
import { Photo } from "./Photo";
import { Stars, ProductBadge } from "./ui";
import { WishlistHeart } from "./WishlistHeart";
import { ecwidProductUrl, formatEuro } from "@/lib/constants";
import { categoryMeta } from "@/data/taxonomy";
import type { CatalogProduct } from "@/data/catalog";

/**
 * Scheda prodotto — L'INTERA CARD è un <a href> verso il negozio Ecwid
 * (stessa finestra, nessun target=_blank). Nessun carrello interno.
 */
export function ProductCard({
  product,
  variant = "grid",
  priority = false,
  emphasis = false,
}: {
  product: CatalogProduct;
  variant?: "grid" | "compact" | "featured";
  priority?: boolean;
  /** Larger card treatment (best-seller grid): 4:5 image, bolder name/price. */
  emphasis?: boolean;
}) {
  const url = ecwidProductUrl(product.slug);
  const catLabel = categoryMeta(product.category)?.label ?? product.category;
  const showBadges = product.badges.slice(0, 2);

  if (variant === "featured") {
    return (
      <a
        href={url}
        className="group grid grid-cols-[112px_1fr] gap-4 rounded-xl border border-border bg-white p-3 transition hover:shadow-card sm:grid-cols-[140px_1fr]"
      >
        <div className="relative aspect-square overflow-hidden rounded-lg bg-surface">
          <Photo src={product.image} alt={product.alt} fill sizes="140px" className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{catLabel}</span>
          <h3 className="mt-1 font-display text-lg leading-tight text-text">{product.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-text-muted">{product.benefit}</p>
          <div className="mt-2 flex items-center gap-2">
            <Stars rating={product.rating} />
            <span className="text-xs text-text-muted">({product.reviewCount})</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-semibold text-text">{formatEuro(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-text-muted line-through">{formatEuro(product.originalPrice)}</span>
            )}
            <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
              Scopri <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </a>
    );
  }

  const compact = variant === "compact";
  return (
    <a
      href={url}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-card"
    >
      <div className={`relative overflow-hidden bg-surface ${emphasis ? "aspect-[4/5]" : "aspect-square"}`}>
        <Photo
          src={product.image}
          alt={product.alt}
          fill
          priority={priority}
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {showBadges.length > 0 && (
          <div className="absolute left-2.5 top-2.5 flex flex-col gap-1">
            {showBadges.map((b) => (
              <ProductBadge key={b} label={b} />
            ))}
          </div>
        )}
        <WishlistHeart className="absolute right-2.5 top-2.5" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-primary/95 py-2.5 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition group-hover:opacity-100">
          {emphasis ? "Scopri" : "Scopri sullo shop"} <ArrowRight size={14} />
        </div>
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-3" : emphasis ? "p-5" : "p-4"}`}>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{catLabel}</span>
        <h3
          className={`mt-1 font-display font-semibold leading-tight text-text ${
            compact ? "text-sm" : emphasis ? "text-xl" : "text-[17px]"
          }`}
        >
          {product.name}
        </h3>
        {!compact && !emphasis && <p className="mt-1 line-clamp-2 text-sm text-text-muted">{product.benefit}</p>}
        <div className="mt-2 flex items-center gap-1.5">
          <Stars rating={product.rating} size={emphasis ? 17 : 13} />
          <span className="text-[11px] text-text-muted">({product.reviewCount})</span>
        </div>
        <div className="mt-auto flex items-baseline gap-2 pt-3">
          <span
            className={
              emphasis ? "text-[22px] font-bold text-accent-gold" : "text-lg font-bold text-text"
            }
          >
            {formatEuro(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-text-muted line-through">{formatEuro(product.originalPrice)}</span>
          )}
          {!compact && !emphasis && <span className="ml-auto text-xs text-text-muted">{product.volume}</span>}
        </div>
      </div>
    </a>
  );
}
