"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { SKIN_TYPE_LABELS } from "@/data/taxonomy";
import type { CatalogProduct, SkinType } from "@/data/catalog";
import { formatEuro } from "@/lib/constants";

type Sort = "novita" | "bestseller" | "price-asc" | "price-desc" | "name";

const SORT_LABELS: Record<Sort, string> = {
  novita: "Novità",
  bestseller: "Best Seller",
  "price-asc": "Prezzo crescente",
  "price-desc": "Prezzo decrescente",
  name: "Nome A-Z",
};

export function CategoryBrowser({
  products,
  initialSub,
  initialSort = "bestseller",
}: {
  products: CatalogProduct[];
  initialSub?: string;
  initialSort?: Sort;
}) {
  const subcats = useMemo(() => [...new Set(products.map((p) => p.subcategory))], [products]);
  const ingredients = useMemo(() => {
    const counts = new Map<string, number>();
    products.forEach((p) => p.keyIngredients.forEach((k) => counts.set(k, (counts.get(k) ?? 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k]) => k);
  }, [products]);
  const skinTypes = useMemo(
    () => [...new Set(products.flatMap((p) => p.skinTypes))] as SkinType[],
    [products],
  );
  const formats = useMemo(() => [...new Set(products.map((p) => p.volume))], [products]);
  const priceBounds = useMemo(() => {
    const prices = products.map((p) => p.price);
    return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
  }, [products]);

  const [sub, setSub] = useState<string | null>(
    initialSub ? subcats.find((s) => s.toLowerCase().includes(initialSub.toLowerCase())) ?? null : null,
  );
  const [avail, setAvail] = useState<"all" | "in" | "out">("all");
  const [ing, setIng] = useState<string | null>(null);
  const [skin, setSkin] = useState<SkinType | null>(null);
  const [fmt, setFmt] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState(priceBounds.max);
  const [sort, setSort] = useState<Sort>(initialSort);
  const [mobileFilters, setMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    const out = products.filter((p) => {
      if (sub && p.subcategory !== sub) return false;
      if (avail === "in" && !p.inStock) return false;
      if (avail === "out" && p.inStock) return false;
      if (ing && !p.keyIngredients.includes(ing)) return false;
      if (skin && !p.skinTypes.includes(skin)) return false;
      if (fmt && p.volume !== fmt) return false;
      if (p.price > maxPrice) return false;
      return true;
    });
    out.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name, "it");
        case "novita":
          return Number(b.badges.includes("Novità")) - Number(a.badges.includes("Novità")) || b.rating - a.rating;
        case "bestseller":
        default:
          return (
            Number(b.badges.includes("Best Seller")) - Number(a.badges.includes("Best Seller")) ||
            b.reviewCount - a.reviewCount
          );
      }
    });
    return out;
  }, [products, sub, avail, ing, skin, fmt, maxPrice, sort]);

  const hasFilters = sub || avail !== "all" || ing || skin || fmt || maxPrice < priceBounds.max;
  function reset() {
    setSub(null);
    setAvail("all");
    setIng(null);
    setSkin(null);
    setFmt(null);
    setMaxPrice(priceBounds.max);
  }

  const sidebar = (
    <div className="space-y-6">
      <FilterGroup title="Disponibilità">
        {[
          { v: "in", l: "In magazzino" },
          { v: "out", l: "Non disponibile" },
        ].map((o) => (
          <label key={o.v} className="flex items-center gap-2 text-sm text-text">
            <input type="checkbox" checked={avail === o.v} onChange={() => setAvail(avail === o.v ? "all" : (o.v as "in" | "out"))} />
            {o.l}
          </label>
        ))}
      </FilterGroup>

      {subcats.length > 1 && (
        <FilterGroup title="Sottocategoria">
          {subcats.map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm text-text">
              <input type="radio" name="sub" checked={sub === s} onChange={() => setSub(sub === s ? null : s)} />
              {s}
            </label>
          ))}
        </FilterGroup>
      )}

      {ingredients.length > 0 && (
        <FilterGroup title="Ingrediente chiave">
          {ingredients.map((k) => (
            <label key={k} className="flex items-center gap-2 text-sm text-text">
              <input type="radio" name="ing" checked={ing === k} onChange={() => setIng(ing === k ? null : k)} />
              {k}
            </label>
          ))}
        </FilterGroup>
      )}

      {skinTypes.length > 0 && (
        <FilterGroup title="Tipo di pelle">
          {skinTypes.map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm text-text">
              <input type="radio" name="skin" checked={skin === s} onChange={() => setSkin(skin === s ? null : s)} />
              {SKIN_TYPE_LABELS[s]}
            </label>
          ))}
        </FilterGroup>
      )}

      {formats.length > 1 && (
        <FilterGroup title="Formato">
          {formats.map((f) => (
            <label key={f} className="flex items-center gap-2 text-sm text-text">
              <input type="radio" name="fmt" checked={fmt === f} onChange={() => setFmt(fmt === f ? null : f)} />
              {f}
            </label>
          ))}
        </FilterGroup>
      )}

      <FilterGroup title="Prezzo">
        <input
          type="range"
          min={priceBounds.min}
          max={priceBounds.max}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#2d5f2b]"
          aria-label="Prezzo massimo"
        />
        <p className="text-sm text-text-muted">
          {formatEuro(priceBounds.min)} — {formatEuro(maxPrice)}
        </p>
      </FilterGroup>

      {hasFilters && (
        <button type="button" onClick={reset} className="text-sm font-medium text-primary underline">
          Rimuovi filtri
        </button>
      )}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">{sidebar}</aside>

      <div>
        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setMobileFilters(true)}
            className="inline-flex items-center gap-2 rounded border border-border px-3 py-2 text-sm font-medium lg:hidden"
          >
            <SlidersHorizontal size={16} /> Filtri
          </button>
          <p className="text-sm text-text-muted">{filtered.length} prodotti</p>
          <label className="ml-auto inline-flex items-center gap-2 text-sm">
            <span className="hidden text-text-muted sm:inline">Ordina</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded border border-border bg-white px-3 py-2 text-sm outline-none"
            >
              {(Object.keys(SORT_LABELS) as Sort[]).map((s) => (
                <option key={s} value={s}>
                  {SORT_LABELS[s]}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 4} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-surface p-12 text-center">
            <p className="text-text">Nessun prodotto corrisponde ai filtri selezionati.</p>
            <button type="button" onClick={reset} className="mt-3 font-medium text-primary underline">
              Rimuovi filtri
            </button>
          </div>
        )}
      </div>

      {/* Mobile filters drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-xs flex-col bg-white">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="font-display text-lg">Filtri</span>
              <button type="button" onClick={() => setMobileFilters(false)} aria-label="Chiudi filtri">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">{sidebar}</div>
            <div className="border-t border-border p-4">
              <button type="button" onClick={() => setMobileFilters(false)} className="btn btn-primary w-full">
                Mostra {filtered.length} prodotti
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border pb-5">
      <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-text">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
