/**
 * Derived catalogue facets for Cannabilla — the single source of truth for the
 * nav mega-menu and homepage category tiles. Reads the real inventory (WINES)
 * and classifies it; never mutates it.
 *
 * (The type is still named `Wine` for template compatibility; here it models a
 * cosmetic product — see data/productData.ts.)
 */

import {
  WINES,
  CATEGORIES,
  getWinesByCategory,
  type Wine,
  type WineCategory,
  type CategoryMeta,
} from "./productData";

/* ------------------------------------------------------------------ */
/* Small counting helpers                                              */
/* ------------------------------------------------------------------ */

export function categoryCount(cat: WineCategory): number {
  return getWinesByCategory(cat).length;
}

/** Categories with ≥1 product, in the canonical CATEGORIES order. */
export function populatedCategories(): CategoryMeta[] {
  return CATEGORIES.filter((c) => categoryCount(c.id) > 0);
}

/** First featured product in a category, else first product (undefined if empty). */
export function representativeWine(cat: WineCategory): Wine | undefined {
  const list = getWinesByCategory(cat);
  return list.find((w) => w.featured) ?? list.find((w) => w.inStock) ?? list[0];
}

/* ------------------------------------------------------------------ */
/* Nav model — built from the real inventory                          */
/* ------------------------------------------------------------------ */

export interface NavLink {
  label: string;
  href: string;
}
export interface NavColumn {
  header: string;
  links: NavLink[];
}
export interface NavMega {
  columns: NavColumn[];
  featuredCategory: WineCategory;
}
export interface NavItem {
  label: string;
  href: string;
  mega?: NavMega;
}

const catLabel = (id: WineCategory): string =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;

/** Distinct subcategories ("linee") present in a category, in first-seen order. */
function subcategoriesOf(cat: WineCategory): string[] {
  const seen: string[] = [];
  for (const w of getWinesByCategory(cat)) {
    if (w.subcategory && !seen.includes(w.subcategory)) seen.push(w.subcategory);
  }
  return seen;
}

/** A nav column of "linee" (subcategories) for a category + a "Tutto" link. */
function lineaColumn(cat: WineCategory): NavColumn {
  const links: NavLink[] = [
    { label: `Tutto ${catLabel(cat)}`, href: `/categoria/${cat}` },
    ...subcategoriesOf(cat).map((s) => ({
      label: s,
      href: `/categoria/${cat}?tipo=${encodeURIComponent(s)}`,
    })),
  ];
  return { header: catLabel(cat), links };
}

/** Grouping of the 7 departments into a compact top nav. */
const NAV_GROUPS: { label: string; primary: WineCategory; extra?: WineCategory }[] = [
  { label: "Viso", primary: "viso" },
  { label: "Corpo & Mani", primary: "corpo", extra: "detergenti" },
  { label: "Solari", primary: "solari" },
  { label: "Capelli & Barba", primary: "capelli" },
  { label: "Benessere", primary: "benessere", extra: "hempilla" },
];

/** Build the entire nav from the real inventory. */
export function buildNavItems(): NavItem[] {
  const items: NavItem[] = [{ label: "Chi Siamo", href: "/chi-siamo" }];

  for (const g of NAV_GROUPS) {
    if (categoryCount(g.primary) === 0) continue;
    const columns: NavColumn[] = [lineaColumn(g.primary)];
    if (g.extra && categoryCount(g.extra) > 0) columns.push(lineaColumn(g.extra));
    items.push({
      label: g.label,
      href: `/categoria/${g.primary}`,
      mega: { columns, featuredCategory: g.primary },
    });
  }

  items.push({ label: "Contatti", href: "/contatti" });
  return items;
}

/* ------------------------------------------------------------------ */
/* Homepage tiles                                                      */
/* ------------------------------------------------------------------ */

export interface CategoryTile {
  slug: WineCategory;
  label: string;
  href: string;
  image: string;
  alt: string;
}

/** Display order for the "Le nostre categorie" tiles. */
const TILE_ORDER: WineCategory[] = [
  "viso",
  "corpo",
  "solari",
  "capelli",
  "benessere",
  "hempilla",
  "detergenti",
];

export function categoryTiles(): CategoryTile[] {
  const tiles: CategoryTile[] = [];
  for (const slug of TILE_ORDER) {
    const rep = representativeWine(slug);
    if (!rep) continue;
    tiles.push({
      slug,
      label: catLabel(slug),
      href: `/categoria/${slug}`,
      image: rep.image,
      alt: `${catLabel(slug)} — ${rep.name}`,
    });
  }
  return tiles;
}

/* ------------------------------------------------------------------ */
/* Dev-only nav integrity check                                        */
/* ------------------------------------------------------------------ */

/** How many products a catalogue nav href resolves to (null for non-catalogue). */
export function resolveNavCount(href: string): number | null {
  if (!href.startsWith("/categoria/")) return null;
  const [path, query] = href.split("?");
  const slug = path.replace("/categoria/", "") as WineCategory;
  const params = new URLSearchParams(query ?? "");
  let list = getWinesByCategory(slug);
  const regione = params.get("regione"); // brand
  const tipo = params.get("tipo"); // linea / subcategory
  const vitigno = params.get("vitigno"); // ingrediente
  if (regione) list = list.filter((w) => w.producer === regione);
  if (tipo) list = list.filter((w) => w.subcategory === tipo);
  if (vitigno) list = list.filter((w) => (w.grapeVarieties ?? []).includes(vitigno));
  return list.length;
}

/** Flatten every href a nav item exposes (top-level + mega columns). */
export function navHrefs(items: NavItem[]): string[] {
  const out: string[] = [];
  for (const it of items) {
    out.push(it.href);
    for (const col of it.mega?.columns ?? []) for (const l of col.links) out.push(l.href);
  }
  return out;
}

export const CATALOGUE_SIZE = WINES.length;
