# Cannabilla — Phase 1a Revamp Plan

Transforms the Cannabilla preview (forked Enoteca template) into a marketing +
discovery **shop-window** for the existing Ecwid store at `cannabilla.it`. No cart,
checkout, or product-detail pages are built in Next.js — every product interaction
links out to `https://cannabilla.it/products/[slug]` in the same window.

Stack: Next.js 16 (App Router), React 19, Tailwind v4, framer-motion 12, lucide-react.

---

## 1. Visual language (Antos + Miamo + Medik8)

Extracted directly from the reference screenshots in `Design-Reference/Cannabilla-UI-Reference/`.

| Pattern | Source | Applied to |
| --- | --- | --- |
| Pale-mint 3-zone announcement bar (country left / rotating messages center / support links right) | **Miamo** utility bar + **Antos** copy ("Consegna 24/48h", "Dubbi? Scrivici su WhatsApp…", "Scarica il catalogo") | `AnnouncementBar` |
| 3-tier header: utility bar → centered wordmark + search/account/wishlist/cart → nav row | **Antos** header | `Header` |
| Full-width photo mega-menus: left text sub-category list + right real-people photo grid (labels ABOVE) + one "In Evidenza" featured product | **Antos** mega-menu | `MegaMenu` |
| Concern grid: portrait full-bleed close-up photography, **white overlaid label**, bordered green button below, peek-carousel | **Miamo** "Scegli i prodotti per le tue esigenze" | `ShopByConcern` (homepage §7) |
| Gamified quiz promo band: phone mockup left + incentive/CTA right | **Miamo** "Gioca e vinci" | `QuizPromoBand` (homepage §8) |
| Portrait kit tiles (photo, label ABOVE) + big green banner CTA below | **Antos** "I Nostri Kit" | `KitsAndGifts` (homepage §16) + `/kits` |
| Left filter sidebar (Disponibilità, Prezzo slider, Aspetto, Consistenza…) | **Antos** category page | `/categoria/[slug]` (but commerce-first: grid first, editorial below) |
| Persistent expert video widget bottom-left + "chatta con un operatore" bottom-right | **Miamo** | `ExpertWidget` (bottom-left) + `WhatsAppButton` (bottom-right) |
| Premium restraint: gold accent used sparingly, generous whitespace, 4px-radius confident uppercase CTAs | **Medik8** | design tokens + `.btn` classes |

---

## 2. Palette + typography

- **Deep hemp green** `#4A7C3A` (primary), `#3A6229` (dark), `#6B9C58` (light)
- **Pale mint** announcement `#EDF3E3` / text `#2C4A1E`
- **Cream** surface `#F8F6F0`, white bg, warm charcoal text `#1A1A1A`, muted `#6B6B6B`
- **Gold accent** `#B8935B` (Medik8 restraint; focus ring)
- Sale `#C4342B`, trust green `#2D5F2B`
- Headlines **Playfair Display**; body **Inter**; accent italic **Cormorant**
- CTAs: 4px radius, `14px 32px`, uppercase, `letter-spacing .05em`, weight 600, gold focus ring

All prior sage/mustard/burgundy tokens removed from `app/globals.css`.

---

## 3. Category taxonomy (7 → 9) — Appendix A

Old (productData): viso, corpo, solari, capelli, benessere, hempilla, detergenti.
New 9 primary categories (each product has ONE primary category; sums to 45):

| Category | Count | Products |
| --- | --- | --- |
| **Viso** | 9 | Golden Hemp, Escar Glow, I'm Perfect, MELABILLA Crema Viso, Crema Viso Idratante, Mousse Detergente, Crema Viso Solare SPF 50, Make-up Remover, Scrub Viso |
| **Corpo** | 12 | Bagno Doccia, Crema Corpo, MELABILLA Crema Mani, Crema Mani, Sapone Mani, Detergente Intimo, Liquido igienizzante, Olio Corpo Nutriente, Olio Massaggi, Olio Post-Epilazione, Olio Iperico, Happy Feet |
| **Sole** | 4 | Latte Solare SPF 30, Latte Solare SPF 50, Crema DopoSole, Olio DopoSole |
| **Capelli e Barba** | 3 | Elis Hair, Hemp-oo, Olio Barba |
| **Labbra** | 2 | Hemp Kiss Arancia, Hemp Kiss Nocciola |
| **Trattamenti** | 4 | PsorCream, SportCream, Tattoo Balm, Tattoo Cream |
| **Estratti** | 4 | Hempilla Ananda 5, Shanti 10, Soma 20, Shayana 30 |
| **Lifestyle** | 6 | Berretto con Risvolto, Berretto, Borraccia, Cappello con Visiera, Felpa, T-Shirt *(6 merch appended)* |
| **Regali** | 1 | Carta Regalo Digitale *(appended)* |
| **TOTAL** | **45** | 38 cosmetics + 7 merch/gift |

The 7 merch/gift-card items — previously excluded (no photos) — are appended in
`data/catalog.ts` (`MERCH`) with a logo placeholder image.

---

## 4. Shop-by-concern taxonomy (6, compliant cosmetic language)

No medical terms (no acne/dermatite/rughe). `data/taxonomy.ts` → `CONCERNS`:

1. **Pelle Secca** — `/concerns/pelle-secca`
2. **Sensibilità e Rossore** — `/concerns/sensibilita-rossore`
3. **Imperfezioni e Lucentezza** — `/concerns/imperfezioni-lucentezza`
4. **Tono Non Uniforme** — `/concerns/tono-non-uniforme`
5. **Pelle Matura** — `/concerns/pelle-matura`
6. **Protezione Solare** — `/concerns/protezione-solare`

Each has a recommended routine (sequenced Ecwid slugs) + a filtered product grid.

---

## 5. Kits (8) — `data/kits.ts`, `/kits/[slug]`

1. Starter Kit Idratazione · 2. Routine Viso Idratazione · 3. Routine Imperfezioni ·
4. Kit Viso Pelle Secca (secca/matura) · 5. Kit Corpo Idratazione · 6. Kit Sole ·
7. Kit Capelli Secchi · 8. Kit Tattoo. Kit CTA opens WhatsApp (kits are not Ecwid SKUs
yet) unless `ecwidSlug` is set. Pricing computed from retail sum − 10–15% saving.

---

## 6. Content pages / new routes

`/` (22 sections), `/categoria/[slug]` (9), `/concerns/[slug]` (6),
`/offerte`, `/routine-quiz` + `/routine-quiz/risultato`, `/kits` + `/kits/[slug]` (8),
`/journal` + `/journal/[slug]` (4 articles), `/chi-siamo`, `/monti-sibillini`,
`/ingredienti` + `/ingredienti/[slug]` (9 hero), `/qualita`, `/sostenibilita`,
`/consulenza`, `/rivenditori`, `/store-locator`, `/contatti`, `/faq`.

---

## 7. Product card CTA change

`components/ProductCard.tsx`: the **entire card is an `<a href>`** (not a Next `<Link>`)
to `https://cannabilla.it/products/${slug}`, same window, no `target=_blank`, no
"aggiungi al carrello", subtle "SCOPRI →" hover, mock wishlist heart. Variants:
`grid | compact | featured`.

---

## 8. Mock cart / product-detail / checkout removal

Deleted: `app/prodotto/`, `app/cassa/`, `app/cerca/`, `components/enoteca/` (incl.
`CartContext`, `CartDrawer`, `UIContext`). Header cart bag → external link to
`cannabilla.it/cart` (static, no count). Sitemap excludes product-detail routes.

---

## 9. Assumptions

- `Cannabilla-Content/` and `Cannabilla-Photos/` were **not present** in the repo;
  only `Design-Reference/` exists. Product content is sourced from the existing
  `data/productData.ts` (38 products, real Ecwid snapshot). The 61-ingredient
  dictionary source (`07-brand-voice.md`) was absent, so `data/ingredients.ts`
  reconstructs a ~30-entry directory (incl. all 9 hero ingredients) from the real
  INCI/attivi already in `productData.ts`.
- Ecwid product slugs = local `/public/products/<slug>` folder names = Ecwid URLs.
- Merch/gift prices, kit prices, ratings/review counts, Google reviews, journal
  articles, seasonal banner, store-locator resellers and expert-widget video are
  **demonstrative placeholders** (marked `// TODO Sarang`).
- Company legal details (P.IVA, REA, registered office) are placeholders in
  `lib/constants.ts`.
- Photography for hero/editorial/concern/category/ingredient/journal uses **verified
  Unsplash IDs** (`lib/images.ts`, HTTP 200 checked); product imagery stays local.
- "Trattamenti" is the blueprint's "Trattamenti Mirati"; "Estratti" = "Estratti di Canapa".
