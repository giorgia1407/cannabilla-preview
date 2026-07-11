# Cannabilla — Phase 1a Preview (Marketing + Discovery Shop-Window)

A **marketing + discovery shop-window** for **Cannabilla**, the Italian natural
hemp-cosmetics brand from the Monti Sibillini. This preview is a Next.js front-end
whose sole job is to **discover, educate and route shoppers to the existing Ecwid
store** at `cannabilla.it` — every product interaction links out to
`https://cannabilla.it/products/<slug>` in the same window. There is **no cart,
checkout, or product-detail page** built in Next.js.

Visual direction blends **Antos** (warm authentic natural + photo mega-menus +
portrait kit tiles) · **Miamo** (guided commerce: concern grid, quiz band,
persistent expert widget) · **Medik8** (premium restraint).

- **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · framer-motion · TypeScript (strict)
- **Language:** Italian only (`<html lang="it">`)
- **Commerce:** links out to Ecwid (`cannabilla.it`). No internal cart/checkout.
- **Palette:** deep hemp green `#4A7C3A` + cream + warm charcoal + gold accent.

See **`REVAMP_PLAN.md`** for the full strategy, taxonomy and mapping.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```

## Routes

`/` (22-section homepage) · `/categoria/[slug]` (9 categories, commerce-first with
filters) · `/concerns/[slug]` (6 concern landings) · `/routine-quiz` +
`/routine-quiz/risultato` (interactive 6-question skin quiz) · `/kits` +
`/kits/[slug]` (8 kits) · `/offerte` · `/journal` + `/journal/[slug]` (4 articles) ·
`/ingredienti` + `/ingredienti/[slug]` (9 hero ingredients) · `/chi-siamo` ·
`/monti-sibillini` · `/qualita` · `/sostenibilita` · `/consulenza` · `/rivenditori` ·
`/store-locator` · `/contatti` · `/faq`.

## Catalogue

45 products remapped to **9 categories** (Viso, Corpo, Sole, Capelli e Barba,
Labbra, Trattamenti, Estratti, Lifestyle, Regali) per the blueprint's Appendix A —
38 photographed cosmetics (`data/productData.ts`, real Ecwid snapshot) + 7
appended merch/gift-card items (`data/catalog.ts`). Product photos are local
(`public/products/`); hero/editorial/concern/ingredient imagery uses **verified
Unsplash IDs** (`lib/images.ts`).

## Preview caveats (demonstrative, not real data)

- Ratings, review counts, Google reviews, journal articles, seasonal banner,
  store-locator resellers, kit prices and the expert-widget video are placeholders
  (`// TODO Sarang`).
- Company legal details (P.IVA, REA, registered office) are placeholders in
  `lib/constants.ts`.
- Newsletter, contact/B2B/consultation forms and store-locator search are mock
  (no backend). Ecwid API integration is Phase 2.
