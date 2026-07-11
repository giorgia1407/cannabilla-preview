"use client";

import Link from "next/link";
import { useState } from "react";
import { Star } from "lucide-react";

function IgIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function FbIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9c0-.28.22-.5.5-.5H14z" />
    </svg>
  );
}
import { BrandLogo } from "@/components/BrandLogo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SHOP_INFO, ecwidAccountUrl } from "@/lib/constants";
import { GOOGLE_RATING } from "@/data/reviews";

type Col = { title: string; links: { label: string; href: string; todo?: boolean }[] };

const COLS: Col[] = [
  {
    title: "Shop",
    links: [
      { label: "Viso", href: "/categoria/viso" },
      { label: "Corpo", href: "/categoria/corpo" },
      { label: "Sole", href: "/categoria/sole" },
      { label: "Capelli e Barba", href: "/categoria/capelli-e-barba" },
      { label: "Labbra", href: "/categoria/labbra" },
      { label: "Trattamenti", href: "/categoria/trattamenti" },
      { label: "Lifestyle", href: "/categoria/lifestyle" },
      { label: "Gift Card", href: "/categoria/regali" },
      { label: "Best Seller", href: "/categoria/viso?sort=bestseller" },
      { label: "Offerte", href: "/offerte" },
    ],
  },
  {
    title: "Assistenza",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contatti", href: "/contatti" },
      { label: "Spedizioni", href: "/faq" },
      { label: "Resi", href: "/faq" },
      { label: "Traccia ordine", href: ecwidAccountUrl("/orders") },
      { label: "Pagamenti", href: "/faq" },
      { label: "Accessibilità", href: "/faq" },
    ],
  },
  {
    title: "Scopri",
    links: [
      { label: "Storia", href: "/chi-siamo" },
      { label: "Monti Sibillini", href: "/monti-sibillini" },
      { label: "Ingredienti", href: "/ingredienti" },
      { label: "Qualità", href: "/qualita" },
      { label: "Sostenibilità", href: "/sostenibilita" },
      { label: "Journal", href: "/journal" },
      { label: "Store Locator", href: "/store-locator" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Accedi", href: ecwidAccountUrl() },
      { label: "Ordini", href: ecwidAccountUrl("/orders") },
      { label: "Preferiti", href: "/kits" },
      { label: "Loyalty", href: "/consulenza" },
      { label: "Indirizzi", href: ecwidAccountUrl("/addresses") },
    ],
  },
  {
    title: "Legale",
    links: [
      { label: "Privacy", href: "/faq" },
      { label: "Cookie", href: "/faq" },
      { label: "Preferenze cookie", href: "/faq" },
      { label: "Termini", href: "/faq" },
      { label: "Resi e rimborsi", href: "/faq" },
      { label: "Diritto di recesso", href: "/faq" },
      { label: "Note legali", href: "/faq" },
    ],
  },
];

const PAYMENT_METHODS = ["Visa", "Mastercard", "PayPal", "Amex", "Klarna"];

/** One footer link column: tap-to-expand accordion below md, static list at md+. */
function FooterColumn({ col }: { col: Col }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border py-1 md:border-0 md:py-0">
      {/* Mobile accordion header (<768px) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex min-h-12 w-full items-center justify-between gap-2 py-3 text-left md:hidden"
      >
        <span className="text-sm font-bold uppercase tracking-[0.08em] text-text">{col.title}</span>
        <span aria-hidden className="text-lg leading-none text-text-muted">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Static header (md+) */}
      <h3 className="hidden text-sm font-bold uppercase tracking-[0.08em] text-text md:block">
        {col.title}
      </h3>

      {/* Mobile accordion body */}
      <div className="accordion-grid md:hidden" data-open={open}>
        <div className="accordion-inner">
          <ul className="space-y-3 pt-1 pb-4">
            {col.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-[15px] leading-[1.6] text-text-muted transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Static body (md+) */}
      <ul className="mt-4 hidden space-y-3 md:block">
        {col.links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-[15px] leading-[1.6] text-text-muted transition-colors hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-surface text-text">
      <div className="mx-auto max-w-[1400px] px-4 pt-12 pb-6 sm:px-6 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-6">
          {/* Column 1 — Brand / newsletter (always visible, incl. mobile) */}
          <div className="min-w-0 md:col-span-3 lg:col-span-1">
            <BrandLogo size="sm" />
            <p className="mt-3 max-w-xs text-sm text-text-muted">
              Unisciti a Cannabilla: consigli, novità e il 15% sul primo ordine.
            </p>
            <div className="mt-4 max-w-sm">
              {/* stack: keep input + button vertical so the green CTA never overflows the narrow lg column */}
              <NewsletterForm cta="Iscriviti" stack />
            </div>
            <div className="mt-5 flex items-center gap-4">
              <a href={SHOP_INFO.social.instagram} aria-label="Instagram" className="text-text-muted hover:text-primary">
                <IgIcon />
              </a>
              <a href={SHOP_INFO.social.facebook} aria-label="Facebook" className="text-text-muted hover:text-primary">
                <FbIcon />
              </a>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1.5 text-xs text-text-muted">
              <Star size={13} className="fill-[#e0a52e] text-[#e0a52e]" /> {GOOGLE_RATING.toFixed(1)} · Recensioni verificate
            </div>
          </div>

          {/* Columns 2-6 — link groups */}
          {COLS.map((col) => (
            <FooterColumn key={col.title} col={col} />
          ))}
        </div>

        {/* Company info + payments */}
        <div className="mt-10 border-t border-border pt-8 md:mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="max-w-2xl text-xs leading-relaxed text-text-muted">
              <p className="font-medium text-text">{SHOP_INFO.legalName}</p>
              <p className="mt-1">
                Sede legale: {SHOP_INFO.address} · {SHOP_INFO.vat} · {SHOP_INFO.rea}
              </p>
              <p className="mt-1">Email: {SHOP_INFO.email}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:shrink-0">
              {PAYMENT_METHODS.map((p) => (
                <span key={p} className="rounded border border-border bg-white px-2.5 py-1.5 text-[11px] font-medium text-text-muted">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs leading-relaxed text-text-muted md:flex-row md:items-start md:gap-6">
            <p className="md:flex-1">
              © {year} Cannabilla — {SHOP_INFO.legalName}. Tutti i diritti riservati. Anteprima dimostrativa.
            </p>
            <p className="md:flex-1">
              Conforme al Regolamento (UE) 2023/988 sulla sicurezza generale dei prodotti (GPSR). Registrazione CPNP.
            </p>
            <p className="md:flex-1">
              Prodotti cosmetici a base di canapa conformi alla normativa europea.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
