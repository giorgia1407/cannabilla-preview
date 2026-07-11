"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Photo } from "@/components/Photo";
import { NAV, categoryMeta, type MegaMenu } from "@/data/taxonomy";
import {
  PRODUCTS,
  bySlugs,
  byCategory,
  bySubcategory,
  bestSellers,
  onOffer,
  novita,
  featured,
  allSorted,
  type CatalogProduct,
  type CategorySlug,
} from "@/data/catalog";
import { KITS } from "@/data/kits";
import { ROUTINES } from "@/data/routines";
import { type ImgKey } from "@/lib/images";
import { ECWID_CART_URL, ecwidAccountUrl, ecwidProductUrl, formatEuro } from "@/lib/constants";

// 24(pad) + 240(left) + 12(gap) + 780(grid: 4×180 + 3×20) + 24(pad) = 1080
const PANEL_W = 1080;
const MAX_TILES = 12;

/** Tile risolto per la griglia del mega-menu (foto prodotto o stock). */
type RenderTile = { label: string; href: string; tag?: string; imgKey?: ImgKey; src?: string; feature?: boolean };
/** Contenuto risolto del pannello destro per la voce di sinistra attiva. */
type GridResult = { tiles: RenderTile[]; ctaHref: string; ctaLabel: string; note?: string };

const CAT_SLUGS: CategorySlug[] = [
  "viso",
  "corpo",
  "sole",
  "capelli-e-barba",
  "labbra",
  "trattamenti",
  "estratti",
  "lifestyle",
  "regali",
];

function productTiles(products: CatalogProduct[]): RenderTile[] {
  return products.slice(0, MAX_TILES).map((p) => ({
    label: p.name,
    href: ecwidProductUrl(p.slug),
    src: p.image,
    tag: categoryMeta(p.category)?.short,
  }));
}

function kitTiles(): RenderTile[] {
  return KITS.map((k) => ({ label: k.name, href: `/kits/${k.slug}`, imgKey: k.imgKey, tag: "Kit" }));
}

function routineTiles(): RenderTile[] {
  const tiles: RenderTile[] = ROUTINES.map((r) => ({
    label: r.name,
    href: `/routines/${r.slug}`,
    imgKey: r.imgKey,
    tag: "Routine",
  }));
  tiles.push({ label: "Crea la tua routine", href: "/routine-quiz", imgKey: "skincare7", tag: "Quiz" });
  return tiles;
}

/** Mappa un href di prodotto → elenco prodotti (con fallback per non lasciare vuota la griglia). */
function productsForHref(href: string): { products: CatalogProduct[]; note?: string } | null {
  const [path, query] = href.split("?");
  const sub = query ? new URLSearchParams(query).get("sub") : null;

  if (path === "/prodotti") return { products: allSorted() };
  if (path === "/prodotti/novita") {
    const n = novita();
    return { products: n.length ? n : allSorted().slice(-8) };
  }
  if (path === "/prodotti/bestseller") {
    const b = bestSellers();
    return { products: b.length ? b : featured().length ? featured() : allSorted() };
  }
  if (path === "/prodotti/offerta") {
    const o = onOffer();
    if (o.length) return { products: o };
    return { products: bestSellers().length ? bestSellers() : allSorted(), note: "Nessuna offerta in corso — ecco i più amati" };
  }
  if (path === "/categoria/regali") return { products: bySlugs(["carta-regalo-digitale-cannabilla"]) };
  if (path.startsWith("/categoria/")) {
    const slug = path.split("/")[2] as CategorySlug;
    if (!CAT_SLUGS.includes(slug)) return null;
    if (sub) {
      const filtered = bySubcategory(slug, sub);
      if (filtered.length) return { products: filtered };
    }
    return { products: byCategory(slug) };
  }
  return null;
}

/** Griglia contenuti (Scopri): tutte le tile; se una voce è attiva, la mette in evidenza. */
function contentGrid(menu: MegaMenu, activeHref: string | null): GridResult {
  const base = (menu.gridContent ?? []).map((t) => ({
    label: t.label,
    href: t.href,
    imgKey: t.imgKey,
    tag: t.tag,
  }));
  if (!activeHref) return { tiles: base, ctaHref: menu.href, ctaLabel: "Scopri Cannabilla" };
  const idx = base.findIndex((t) => t.href === activeHref);
  if (idx < 0) return { tiles: base, ctaHref: menu.href, ctaLabel: "Scopri Cannabilla" };
  const rest = base.filter((_, i) => i !== idx);
  return {
    tiles: [{ ...base[idx], feature: true }, ...rest],
    ctaHref: base[idx].href,
    ctaLabel: `Vai a ${base[idx].label}`,
  };
}

/**
 * Contenuto della griglia in base alla voce di sinistra attiva (idx = -1 → "Tutti").
 * Ogni voce a sinistra — inclusa l'intestazione "Tutti · X" — aggiorna la griglia.
 */
function computeGrid(menu: MegaMenu, activeIdx: number): GridResult {
  const item = activeIdx >= 0 ? menu.columns[activeIdx] : null;
  const href = item?.href ?? menu.href;
  const [path] = href.split("?");

  // Rotte Kit / Routine (valgono anche dentro il menu "Prodotti").
  if (path === "/kits" || path.startsWith("/kits/")) {
    return { tiles: kitTiles(), ctaHref: "/kits", ctaLabel: "Vedi tutti i kit" };
  }
  if (path === "/routines" || path.startsWith("/routines/") || path === "/routine-quiz") {
    return { tiles: routineTiles(), ctaHref: "/routines", ctaLabel: "Vedi tutte le routine" };
  }

  // Menu contenuti (Scopri).
  if (menu.label === "Scopri") {
    return contentGrid(menu, item ? item.href : null);
  }

  // Menu prodotti.
  const resolved = productsForHref(href);
  if (resolved) {
    const totalAll = path === "/prodotti" ? PRODUCTS.length : resolved.products.length;
    const ctaLabel =
      path === "/prodotti"
        ? `Vedi tutti i ${totalAll} prodotti`
        : item
          ? `Vedi tutti · ${item.label}`
          : "Vedi tutti i prodotti";
    return {
      tiles: productTiles(resolved.products),
      ctaHref: path.startsWith("/prodotti") || path.startsWith("/categoria/") ? href : menu.href,
      ctaLabel,
      note: resolved.note,
    };
  }

  // Fallback difensivo: prodotti in evidenza.
  return { tiles: productTiles(featured().length ? featured() : allSorted()), ctaHref: menu.href, ctaLabel: "Vedi tutti i prodotti" };
}


/** Link tile: interno (Next Link) o esterno allo shop Ecwid (<a>, stessa finestra). */
function TileLink({
  href,
  onNavigate,
  className,
  children,
}: {
  href: string;
  onNavigate: () => void;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={onNavigate} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [panelLeft, setPanelLeft] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC closes the open dropdown.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  /** Center the 760px panel under its trigger, clamped to the viewport. */
  function positionPanel(el: HTMLElement) {
    const r = el.getBoundingClientRect();
    const center = r.left + r.width / 2;
    const max = window.innerWidth - PANEL_W - 16;
    setPanelLeft(Math.round(Math.min(Math.max(center - PANEL_W / 2, 16), Math.max(16, max))));
  }

  function openMenu(label: string, el: HTMLElement) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => {
      positionPanel(el);
      setActive(label);
    }, 120);
  }
  function scheduleClose() {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 200);
  }

  const activeMenu = NAV.find((m) => m.label === active && m.columns.length > 0);

  return (
    <>
      {/* Backdrop dietro il mega-menu (desktop): impedisce il bleed-through dei
          contenuti della pagina e chiude il dropdown al click. z-40 = sotto
          l'header (z-50) e il pannello, sopra il contenuto della pagina. */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40 hidden animate-fade-up bg-black/15 lg:block"
          aria-hidden
          onClick={() => setActive(null)}
        />
      )}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? "shadow-soft" : "border-b border-border"
        }`}
        onMouseLeave={scheduleClose}
      >
      {/* Main bar: LEFT logo · CENTER nav · RIGHT actions */}
      <div className="mx-auto flex h-[76px] max-w-[1520px] items-center gap-3 px-4 sm:px-6">
        {/* Left: mobile hamburger + brand logo lockup (~240px) */}
        <div className="flex shrink-0 items-center gap-1 lg:w-[240px]">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md text-text lg:hidden"
            aria-label="Apri menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
          <Link href="/" className="flex items-center text-primary" aria-label="Cannabilla — home">
            <BrandLogo variant="full" size="md" priority className="hidden sm:block" />
            <BrandLogo variant="full" size="sm" priority className="sm:hidden" />
          </Link>
        </div>

        {/* Center: primary nav — single line, no wrap (≥1024px) */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto no-scrollbar lg:flex xl:gap-1.5">
          {NAV.map((m) => {
            const hasMenu = m.columns.length > 0;
            return (
              <Link
                key={m.label}
                href={m.href}
                className={`inline-flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-semibold tracking-[0.01em] transition-colors xl:text-[15px] ${
                  active === m.label ? "text-primary" : "text-text hover:text-primary"
                }`}
                onMouseEnter={(e) => (hasMenu ? openMenu(m.label, e.currentTarget) : setActive(null))}
                onFocus={(e) => {
                  if (hasMenu) {
                    positionPanel(e.currentTarget);
                    setActive(m.label);
                  } else {
                    setActive(null);
                  }
                }}
              >
                {m.label}
                {hasMenu && <ChevronDown size={13} className="opacity-60" />}
              </Link>
            );
          })}
        </nav>

        {/* Right: actions (~200px) */}
        <div className="flex shrink-0 items-center justify-end gap-0.5 lg:w-[200px]">
          <button
            type="button"
            aria-label="Cerca"
            className="grid h-11 w-11 place-items-center rounded-md text-text hover:text-primary"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={20} />
          </button>
          <a
            href={ecwidAccountUrl()}
            aria-label="Account"
            className="hidden h-11 w-11 place-items-center rounded-md text-text hover:text-primary sm:grid"
          >
            <User size={20} />
          </a>
          <Link
            href="/kits"
            aria-label="Preferiti"
            className="hidden h-11 w-11 place-items-center rounded-md text-text hover:text-primary sm:grid"
          >
            <Heart size={20} />
          </Link>
          <a
            href={ECWID_CART_URL}
            aria-label="Carrello (apre lo shop)"
            className="grid h-11 w-11 place-items-center rounded-md text-text hover:text-primary"
          >
            <ShoppingBag size={20} />
          </a>
        </div>
      </div>

      {/* Mega-menu panel (desktop) — 3-zone reattivo, centrato sotto il trigger */}
      {activeMenu && (
        <div
          className="absolute top-full z-[60] hidden pt-2 lg:block"
          style={{ left: panelLeft, width: PANEL_W }}
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
          }}
          onMouseLeave={scheduleClose}
        >
          <MegaPanel key={activeMenu.label} menu={activeMenu} onNavigate={() => setActive(null)} />
        </div>
      )}

        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
        {mobileOpen && <MobileDrawer onClose={() => setMobileOpen(false)} />}
      </header>
    </>
  );
}

/**
 * Mega-menu 3-zone (Step 4): elenco sotto-categorie a sinistra (240px) + griglia
 * immagini larga a destra. La griglia è REATTIVA all'hover: ogni voce di sinistra
 * — inclusa l'intestazione "Tutti · X" — aggiorna il contenuto della griglia
 * (tutti i prodotti, un sottoinsieme, i kit, le routine, i contenuti…). La voce
 * attiva riceve sfondo crema + testo verde. Pannello opaco, nessun bleed-through.
 */
function MegaPanel({ menu, onNavigate }: { menu: MegaMenu; onNavigate: () => void }) {
  // -1 = intestazione "Tutti · X" (stato di default all'apertura).
  const [activeIdx, setActiveIdx] = useState(-1);
  const grid = computeGrid(menu, activeIdx);

  return (
    <div
      className="mega-panel flex h-[520px] w-full gap-3 rounded-xl bg-white p-6"
      role="menu"
      aria-label={menu.label}
    >
      {/* LEFT — sotto-categorie (240px, wrap a 2 righe senza collisioni) */}
      <div className="flex w-[240px] shrink-0 flex-col overflow-y-auto overflow-x-hidden border-r border-border pr-4">
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
          {menu.label}
        </p>
        <ul className="flex flex-col">
          <li>
            <Link
              href={menu.href}
              role="menuitem"
              onClick={onNavigate}
              onMouseEnter={() => setActiveIdx(-1)}
              onFocus={() => setActiveIdx(-1)}
              className={`flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-[1.35] transition-colors ${
                activeIdx === -1 ? "bg-cream text-primary" : "text-primary hover:bg-cream"
              }`}
            >
              <span className="min-w-0 break-words">Tutti · {menu.label}</span>
              <ChevronDown size={15} className="shrink-0 -rotate-90 text-primary/70" aria-hidden />
            </Link>
          </li>
          {menu.columns.map((c, i) => (
            <li key={c.label}>
              <Link
                href={c.href}
                role="menuitem"
                onClick={onNavigate}
                onMouseEnter={() => setActiveIdx(i)}
                onFocus={() => setActiveIdx(i)}
                className={`flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium leading-[1.35] transition-colors ${
                  activeIdx === i ? "bg-cream text-primary" : "text-text hover:bg-cream hover:text-primary"
                }`}
              >
                <span className="min-w-0 break-words">{c.label}</span>
                <ArrowRight size={14} className={`shrink-0 ${activeIdx === i ? "text-primary" : "text-text-muted"}`} aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — griglia immagini reattiva, tile a dimensione FISSA 180px */}
      <div className="flex w-[780px] shrink-0 flex-col">
        {grid.note && (
          <p className="mb-2 rounded-md bg-cream px-3 py-1.5 text-[12px] font-medium text-text-muted">
            {grid.note}
          </p>
        )}
        <div className="grid flex-1 grid-cols-[repeat(4,180px)] content-start justify-start gap-5">
          {grid.tiles.map((t) => (
            <TileLink
              key={`${t.href}-${t.label}`}
              href={t.href}
              onNavigate={onNavigate}
              className={`group flex flex-col rounded-lg p-3 transition hover:-translate-y-0.5 hover:bg-cream hover:shadow-card ${
                t.feature ? "col-span-2 flex-row items-center gap-3" : ""
              }`}
            >
              <span
                className={`relative block shrink-0 overflow-hidden rounded-lg bg-surface ${
                  t.feature ? "aspect-[4/3] w-1/2" : "aspect-square w-full"
                }`}
              >
                {t.src ? (
                  <Photo src={t.src} alt={t.label} fill w={360} sizes="180px" className="object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                  <Photo imgKey={t.imgKey} alt={t.label} fill w={360} sizes="180px" className="object-cover transition duration-500 group-hover:scale-105" />
                )}
                {!t.feature && (
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 bg-primary/90 py-1 text-[11px] font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Scopri <ArrowRight size={12} aria-hidden />
                  </span>
                )}
              </span>
              <span className={t.feature ? "min-w-0 flex-1" : "contents"}>
                {t.tag && (
                  <span className="mt-1.5 block px-0.5 text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                    {t.tag}
                  </span>
                )}
                <span
                  className={`line-clamp-2 px-0.5 font-semibold leading-snug text-text ${
                    t.feature ? "text-[15px]" : "text-[13px]"
                  }`}
                >
                  {t.label}
                </span>
                {t.feature && (
                  <span className="mt-1 inline-flex items-center gap-1 px-0.5 text-[12px] font-semibold text-primary">
                    Scopri <ArrowRight size={12} aria-hidden />
                  </span>
                )}
              </span>
            </TileLink>
          ))}
        </div>
        <Link
          href={grid.ctaHref}
          onClick={onNavigate}
          className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
        >
          {grid.ctaLabel} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const results =
    q.trim().length >= 2
      ? PRODUCTS.filter((p) => `${p.name} ${p.subcategory} ${p.benefit}`.toLowerCase().includes(q.toLowerCase())).slice(0, 8)
      : [];
  return (
    <div className="fixed inset-0 z-[60] bg-black/40" onClick={onClose}>
      <div className="mx-auto max-w-2xl bg-white p-5 shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <Search size={20} className="text-text-muted" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cerca un prodotto…"
            className="flex-1 bg-transparent text-base outline-none"
          />
          <button type="button" onClick={onClose} aria-label="Chiudi ricerca" className="text-text-muted hover:text-text">
            <X size={20} />
          </button>
        </div>
        {results.length > 0 && (
          <ul className="mt-3 max-h-[60vh] divide-y divide-border overflow-y-auto">
            {results.map((p) => (
              <li key={p.slug}>
                <a href={ecwidProductUrl(p.slug)} className="flex items-center gap-3 py-2.5 hover:bg-surface">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded bg-surface">
                    <Photo src={p.image} alt={p.alt} fill sizes="48px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-text">{p.name}</p>
                    <p className="text-xs text-text-muted">{formatEuro(p.price)}</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-primary" />
                </a>
              </li>
            ))}
          </ul>
        )}
        {q.trim().length >= 2 && results.length === 0 && (
          <p className="mt-4 text-sm text-text-muted">Nessun prodotto trovato per “{q}”.</p>
        )}
      </div>
    </div>
  );
}

/** Striscia orizzontale di miniature dentro l'accordion mobile (Step 4). */
function MobileThumbs({ menu, onClose }: { menu: MegaMenu; onClose: () => void }) {
  const tiles = computeGrid(menu, -1).tiles.slice(0, 6);
  if (tiles.length === 0) return null;
  return (
    <div className="no-scrollbar mb-1 flex gap-2.5 overflow-x-auto px-3 pt-1">
      {tiles.map((t) => (
        <TileLink
          key={`${t.href}-${t.label}`}
          href={t.href}
          onNavigate={onClose}
          className="flex w-[100px] shrink-0 flex-col"
        >
          <span className="relative block aspect-square w-full overflow-hidden rounded-lg bg-surface">
            {t.src ? (
              <Photo src={t.src} alt={t.label} fill w={200} sizes="100px" className="object-cover" />
            ) : (
              <Photo imgKey={t.imgKey} alt={t.label} fill w={200} sizes="100px" className="object-cover" />
            )}
          </span>
          <span className="mt-1 line-clamp-2 text-[11px] font-medium leading-tight text-text">
            {t.label}
          </span>
        </TileLink>
      ))}
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <BrandLogo variant="full" size="sm" />
          <button type="button" onClick={onClose} aria-label="Chiudi menu" className="grid h-11 w-11 place-items-center text-text">
            <X size={24} />
          </button>
        </div>
        <div className="flex gap-2 border-b border-border px-4 py-3">
          <Link href="/prodotti/bestseller" onClick={onClose} className="btn btn-primary btn-sm flex-1">Best Seller</Link>
          <Link href="/offerte" onClick={onClose} className="btn btn-secondary btn-sm flex-1">Offerte</Link>
          <Link href="/routine-quiz" onClick={onClose} className="btn btn-secondary btn-sm flex-1">Quiz</Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-2">
          {NAV.map((m, i) => {
            const hasMenu = m.columns.length > 0;
            if (!hasMenu) {
              return (
                <div key={m.label} className="border-b border-border/60">
                  <Link
                    href={m.href}
                    onClick={onClose}
                    className="flex w-full items-center px-2 py-3.5 text-left text-base font-semibold text-text"
                  >
                    {m.label}
                  </Link>
                </div>
              );
            }
            return (
              <div key={m.label} className="border-b border-border/60">
                <button
                  type="button"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="flex min-h-[48px] w-full items-center justify-between px-2 py-3 text-left text-base font-semibold text-text"
                  aria-expanded={openIdx === i}
                >
                  {m.label}
                  <ChevronDown size={18} className={`transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </button>
                <div className="accordion-grid" data-open={openIdx === i}>
                  <div className="accordion-inner">
                    <MobileThumbs menu={m} onClose={onClose} />
                    <ul className="space-y-1 px-3 pb-3">
                      <li>
                        <Link href={m.href} onClick={onClose} className="block py-2 text-[15px] font-medium text-primary">
                          Tutti · {m.label}
                        </Link>
                      </li>
                      {m.columns.map((c) => (
                        <li key={c.label}>
                          <Link href={c.href} onClick={onClose} className="block py-2 text-[15px] text-text-muted hover:text-primary">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
