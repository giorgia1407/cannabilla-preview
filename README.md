# Cannabilla — Preview Site

A **standalone preview** e-commerce frontend for **Cannabilla**, an Italian natural
hemp-cosmetics brand from the Monti Sibillini. Built by forking the "Il Tempio di
Vino" wine-shop template and rebranding it end-to-end (palette, logo, data,
copy, product model) to cosmetics.

- **Stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · framer-motion · TypeScript
- **Language:** Italian only (`<html lang="it">`)
- **Cart / checkout:** fully mocked — React Context + `sessionStorage`, no backend, no payment
- **Standalone:** no calls to the live Ecwid store, `cannabilla.it`, Cloudfront, or any external API/image host. All imagery is self-hosted under `public/products/`.

## Run

```bash
npm install      # or reuse an existing node_modules
npm run dev      # http://localhost:3000
npm run build && npm start
```

## What's inside

- **38 products** (real catalogue content from the Ecwid read-only snapshot in
  `../ecwid-audit/reference/`), across 7 departments: Viso, Corpo & Mani, Solari,
  Capelli & Barba, Benessere, Hempilla, Detergenti.
- **192 real product photos** (`public/products/<slug>/NN.jpg`), curated + ordered
  packshot-first. Product pages show a real multi-image gallery.
- Homepage sections (hero, benefits, categories, editorial, offers, bestsellers,
  reviews, story), category pages with filters (Linea / Brand / Ingrediente /
  prezzo), product detail (descrizione, benefici, ingredienti + INCI, come usarlo),
  slide-in cart, and a mock checkout at `/cassa`.

## Data model note

The product type is still named `Wine` (template compatibility). Fields are
repurposed for cosmetics: `producer` = brand, `region` = origin (Monti Sibillini),
`volume` = formato, `tastingNotes` = descrizione, `foodPairings` = benefici, plus
added cosmetics fields (`images`, `ingredients`, `inci`, `howToUse`,
`certifications`, `format`, `packaging`). See `data/productData.ts`.

## Preview caveats (documented, not real data)

- Products **excluded**: 6 apparel/merch + gift card (no photos) and 1 disabled
  placeholder — the preview shows only photographed cosmetics.
- `originalPrice` (strike-through) values are **demo-only** to showcase the offers
  UI; the real store has no sale prices.
- `featured` / "Best Seller" / "Novità" flags are curated for the demo, not sales data.
- Brand voice, ingredients, INCI, certifications and descriptions are **real**
  (from the live catalogue snapshot).
