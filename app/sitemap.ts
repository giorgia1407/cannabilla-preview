import type { MetadataRoute } from "next";
import { CATEGORIES, CONCERNS } from "@/data/taxonomy";
import { KITS } from "@/data/kits";
import { ROUTINES } from "@/data/routines";
import { ARTICLES } from "@/data/journal";
import { HERO_INGREDIENTS } from "@/data/ingredients";

const BASE = "https://cannabilla-preview.local";

/**
 * Sitemap — SOLO route Next.js. Le schede prodotto vivono sul negozio Ecwid
 * (cannabilla.it/products/*) e NON sono incluse qui.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/prodotti",
    "/prodotti/novita",
    "/prodotti/bestseller",
    "/prodotti/offerta",
    "/offerte",
    "/routine-quiz",
    "/routine-quiz/risultato",
    "/kits",
    "/routines",
    "/journal",
    "/ingredienti",
    "/chi-siamo",
    "/monti-sibillini",
    "/qualita",
    "/sostenibilita",
    "/consulenza",
    "/rivenditori",
    "/store-locator",
    "/contatti",
    "/faq",
  ];

  const dynamicRoutes = [
    ...CATEGORIES.map((c) => `/categoria/${c.slug}`),
    ...CONCERNS.map((c) => `/concerns/${c.slug}`),
    ...KITS.map((k) => `/kits/${k.slug}`),
    ...ROUTINES.map((r) => `/routines/${r.slug}`),
    ...ARTICLES.map((a) => `/journal/${a.slug}`),
    ...HERO_INGREDIENTS.map((i) => `/ingredienti/${i.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date("2026-07-11"),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
