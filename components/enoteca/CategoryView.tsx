"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Wine, CategoryMeta } from "@/data/productData";
import { facetsFor } from "@/data/productData";
import { formatEuro } from "@/lib/constants";
import { useI18n } from "./i18n";
import { ProductCard } from "./ProductCard";
import { SlidersIcon, CloseIcon, ChevronRight } from "./Icons";

type SortKey = "featured" | "priceAsc" | "priceDesc" | "name" | "novelty";

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export function CategoryView({
  category,
  wines,
  initialRegion,
  initialGrape,
  initialType,
}: {
  category: CategoryMeta;
  wines: Wine[];
  initialRegion?: string; // brand
  initialGrape?: string; // ingrediente
  initialDenomination?: string; // (unused)
  initialType?: string; // linea / subcategory
}) {
  const { t } = useI18n();
  const facets = useMemo(() => facetsFor(wines), [wines]);

  const brandFacets = useMemo(() => facets.regions, [facets]);
  const lineaFacets = useMemo(() => {
    const seen: string[] = [];
    for (const w of wines) if (w.subcategory && !seen.includes(w.subcategory)) seen.push(w.subcategory);
    return seen.sort();
  }, [wines]);

  const hasNovelty = useMemo(() => wines.some((w) => w.badges?.includes("Novità")), [wines]);

  const [brands, setBrands] = useState<Set<string>>(
    new Set(initialRegion && brandFacets.includes(initialRegion) ? [initialRegion] : []),
  );
  const [linee, setLinee] = useState<Set<string>>(
    new Set(initialType && lineaFacets.includes(initialType) ? [initialType] : []),
  );
  const [ingredients, setIngredients] = useState<Set<string>>(
    new Set(initialGrape && facets.grapes.includes(initialGrape) ? [initialGrape] : []),
  );
  const [maxPrice, setMaxPrice] = useState<number>(facets.maxPrice);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const list = wines.filter((w) => {
      if (brands.size && (!w.producer || !brands.has(w.producer))) return false;
      if (linee.size && (!w.subcategory || !linee.has(w.subcategory))) return false;
      if (ingredients.size && !(w.grapeVarieties ?? []).some((g) => ingredients.has(g))) return false;
      if (w.price > maxPrice) return false;
      if (inStockOnly && !w.inStock) return false;
      return true;
    });

    const sorted = [...list];
    switch (sort) {
      case "priceAsc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "novelty":
        sorted.sort(
          (a, b) =>
            Number(b.badges?.includes("Novità") ?? false) -
            Number(a.badges?.includes("Novità") ?? false),
        );
        break;
      default:
        sorted.sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));
    }
    return sorted;
  }, [wines, brands, linee, ingredients, maxPrice, inStockOnly, sort]);

  const resetFilters = () => {
    setBrands(new Set());
    setLinee(new Set());
    setIngredients(new Set());
    setMaxPrice(facets.maxPrice);
    setInStockOnly(false);
  };

  const activeCount =
    brands.size +
    linee.size +
    ingredients.size +
    (inStockOnly ? 1 : 0) +
    (maxPrice < facets.maxPrice ? 1 : 0);

  const sidebar = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-wine">
          {t("btn.filters")}
        </h2>
        <button
          type="button"
          onClick={resetFilters}
          className="text-[12px] font-semibold uppercase tracking-wide text-charcoal-soft underline-offset-2 hover:text-wine hover:underline"
        >
          {t("btn.resetFilters")}
        </button>
      </div>

      {lineaFacets.length > 1 && (
        <FilterGroup title={t("cat.filter.type")}>
          {lineaFacets.map((l) => (
            <CheckRow
              key={l}
              label={l}
              count={wines.filter((w) => w.subcategory === l).length}
              checked={linee.has(l)}
              onChange={() => setLinee((s) => toggle(s, l))}
            />
          ))}
        </FilterGroup>
      )}

      {brandFacets.length > 1 && (
        <FilterGroup title={t("cat.filter.region")}>
          {brandFacets.map((b) => (
            <CheckRow
              key={b}
              label={b}
              count={wines.filter((w) => w.producer === b).length}
              checked={brands.has(b)}
              onChange={() => setBrands((s) => toggle(s, b))}
            />
          ))}
        </FilterGroup>
      )}

      {facets.grapes.length > 1 && (
        <FilterGroup title={t("cat.filter.grape")} scroll>
          {facets.grapes.map((g) => (
            <CheckRow
              key={g}
              label={g}
              count={wines.filter((w) => (w.grapeVarieties ?? []).includes(g)).length}
              checked={ingredients.has(g)}
              onChange={() => setIngredients((s) => toggle(s, g))}
            />
          ))}
        </FilterGroup>
      )}

      {facets.maxPrice > facets.minPrice && (
        <FilterGroup title={t("cat.filter.price")}>
          <div className="px-1">
            <input
              type="range"
              min={facets.minPrice}
              max={facets.maxPrice}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              aria-label={t("cat.filter.price")}
              className="w-full accent-[#2f5d3a]"
            />
            <div className="mt-1 flex justify-between text-[12px] text-charcoal-soft">
              <span>{formatEuro(facets.minPrice)}</span>
              <span className="font-bold text-wine">≤ {formatEuro(maxPrice)}</span>
            </div>
          </div>
        </FilterGroup>
      )}

      <label className="flex cursor-pointer items-center gap-2.5 text-[14px] text-charcoal">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
          className="h-4 w-4 accent-[#2f5d3a]"
        />
        {t("cat.filter.inStock")}
      </label>
    </div>
  );

  return (
    <div>
      {/* Category header */}
      <section className="relative h-52 w-full overflow-hidden md:h-64">
        <Image
          src={category.image}
          alt={category.label}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(35,74,45,0.92) 0%, rgba(47,93,58,0.6) 60%, rgba(35,40,31,0.4) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 md:px-8">
          <nav className="flex items-center gap-1.5 text-[12.5px] text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{category.label}</span>
          </nav>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-[34px] font-bold text-white md:text-[46px]">
            {category.label}
          </h1>
          <p className="mt-1 max-w-2xl text-[14px] text-white/85 md:text-[15.5px]">
            {category.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line bg-white px-4 text-[14px] font-semibold text-charcoal lg:hidden"
            >
              <SlidersIcon className="h-4 w-4" /> {t("btn.filters")}
              {activeCount > 0 && (
                <span className="rounded-full bg-wine px-1.5 text-[11px] font-bold text-white">
                  {activeCount}
                </span>
              )}
            </button>
            <p className="text-[14px] text-charcoal-soft">
              <span className="font-bold text-charcoal">{filtered.length}</span>{" "}
              {filtered.length === 1 ? t("cat.result") : t("cat.results")}
            </p>
          </div>

          <label className="flex items-center gap-2 text-[14px]">
            <span className="hidden text-charcoal-soft sm:inline">{t("cat.sortBy")}:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="min-h-[44px] rounded-full border border-line bg-white px-4 pr-8 text-[14px] font-medium text-charcoal focus:border-wine focus:outline-none"
            >
              <option value="featured">{t("cat.sort.featured")}</option>
              <option value="priceAsc">{t("cat.sort.priceAsc")}</option>
              <option value="priceDesc">{t("cat.sort.priceDesc")}</option>
              <option value="name">{t("cat.sort.name")}</option>
              {hasNovelty && <option value="novelty">{t("cat.sort.novelty")}</option>}
            </select>
          </label>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-28 rounded-2xl border border-line bg-white p-5 shadow-wine-sm">
              {sidebar}
            </div>
          </aside>

          {/* Grid */}
          <div className="min-w-0 flex-1">
            {filtered.length === 0 ? (
              <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-white p-10 text-center">
                <p className="text-[15px] text-charcoal-soft">{t("cat.empty")}</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-4 rounded-full bg-wine px-6 py-2.5 text-[14px] font-semibold text-white hover:bg-wine-deep"
                >
                  {t("btn.resetFilters")}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
                {filtered.map((w, i) => (
                  <ProductCard key={w.id} wine={w} priority={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[75] lg:hidden">
          <div
            className="absolute inset-0 bg-wine-deep/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 flex w-[85%] max-w-sm flex-col bg-cream shadow-wine-lg">
            <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-4">
              <span className="font-[family-name:var(--font-display)] text-[18px] font-bold text-wine">
                {t("btn.filters")}
              </span>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label={t("nav.close")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-charcoal"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5">{sidebar}</div>
            <div className="shrink-0 border-t border-line px-5 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-wine px-6 text-[15px] font-bold uppercase tracking-wide text-white"
              >
                {t("btn.applyFilters")} ({filtered.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterGroup({
  title,
  children,
  scroll,
}: {
  title: string;
  children: React.ReactNode;
  scroll?: boolean;
}) {
  return (
    <div className="border-t border-line pt-4 first:border-t-0 first:pt-0">
      <h3 className="mb-2 text-[13px] font-bold uppercase tracking-wide text-charcoal">{title}</h3>
      <div className={`space-y-1.5 ${scroll ? "max-h-48 overflow-y-auto pr-1" : ""}`}>{children}</div>
    </div>
  );
}

function CheckRow({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-2 text-[13.5px] text-charcoal-soft transition-colors hover:text-charcoal">
      <span className="flex items-center gap-2">
        <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 accent-[#2f5d3a]" />
        {label}
      </span>
      <span className="text-[12px] text-line">({count})</span>
    </label>
  );
}
