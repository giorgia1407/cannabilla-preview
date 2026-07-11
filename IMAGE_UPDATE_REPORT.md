# Image Update Report — Cloudfront Hotlink Migration

**Date:** 2026-07-11
**Objective:** Replace all local product photos with the exact Cloudfront CDN
URLs from the Ecwid store (`05-products-clean.json`), preserving Ecwid display
order for full preview parity with cannabilla.it.

---

## Summary

| Metric | Value |
| --- | --- |
| Products updated | **45** (38 cosmetics + 7 merch/gift-card) |
| Cloudfront image references (incl. duplicates) | **273** |
| Unique Cloudfront URLs referenced | **219** |
| Unique Cloudfront hostnames added to `remotePatterns` | **1** |
| Products with NO matching JSON entry | **0** |
| Products now showing fewer images than the old preview | **22** (expected — see below) |
| Local photos deleted | **193 files / 39 dirs / ~305 MB** |
| Build | ✅ pass (0 errors) |
| Lint | ✅ pass (0 warnings/errors) |

---

## Step 1 — Product `images` arrays rebuilt

- **`data/productData.ts`** — all **38** cosmetic products (`WINES` array).
  Each product's `image` (hero) and `images` (gallery) were replaced with
  `[primary, ...gallery]` from `05-products-clean.json`, matched by Ecwid `id`.
  Order is taken verbatim from the JSON (NOT re-sorted).
- **`data/catalog.ts`** — the **7** merchandising/gift-card products (previously
  using a single local placeholder `MERCH_IMG`) now hotlink their real Ecwid
  Cloudfront photos, matched by slug, via a new `MERCH_IMAGES` map.
- **`ATMOSPHERE`** (8 editorial backdrops) and **`CATEGORIES`** (7 category tiles)
  in `productData.ts` — their local `/products/<slug>/NN.ext` paths were resolved
  to the corresponding Cloudfront URL (by slug + gallery position).

**All 45 products matched a JSON entry — none were left broken or invented.**

## Step 2 — Next.js Cloudfront configuration

Detected hostnames (`grep` over the JSON):

```
https://d2j6dbq0eux0bg.cloudfront.net   ← the only host
```

Added to `next.config.ts` → `images.remotePatterns`:

```ts
{ protocol: "https", hostname: "d2j6dbq0eux0bg.cloudfront.net", pathname: "/**" }
```

`pathname: "/**"` also covers the gift-card asset served from
`/default-store/giftcards/…` on the same host. Next.js Image optimization
remains **ON** (verified below).

## Step 3 — Components

No component code changes were required for rendering: `ProductCard`, category
grids, concern grids, featured story, best-seller carousel, kit references and
related modules all consume `product.image` / `product.images` from the data
layer through the shared `<Photo>` wrapper, which now receives Cloudfront URLs
and renders them via optimized `<Image>` (only Unsplash uses `unoptimized`).

Note: this fork has no standalone product-detail/gallery page (it was removed —
each card links out to the Ecwid store), so no multi-image gallery renders the
`images` array; the array is still rebuilt for data parity and future use. Hero
alt text uses the product's descriptive `alt` field.

## Step 4 — Local photo references removed

- Deleted **`/public/products/`** entirely (193 files across 39 product folders,
  ~305 MB) via `git rm -r`.
- No `/products/<slug>/NN.ext` string references remain anywhere in
  `app/`, `components/`, `data/`, or `lib/` (verified by grep).
- The `MERCH_IMG` local placeholder constant was removed; merch items now use a
  Cloudfront fallback (Golden Hemp primary) if a slug is ever unmapped.
- `sitemap.ts` referenced only external `cannabilla.it/products/*` page URLs
  (not local images) — no change needed.

## Step 5 — Verification results

- `npm run build` → **✓ Compiled successfully**, 0 errors, all routes prerender.
- `npm run lint` → **clean** (data-prep `Cannabilla-Content/**/*.cjs` scripts,
  which are not part of the Next app, were added to eslint `globalIgnores`).
- Production server smoke test (`next start`):
  - `/` → 200, `/categoria/viso` → 200, `/concerns/pelle-secca` → 200,
    `/sitemap.xml` → 200.
  - Next image optimizer `/_next/image?url=<cloudfront hero>` → **200**,
    `content-type: image/jpeg` (confirms `remotePatterns` + optimization work).
  - Homepage HTML contains **229** optimized `<img>` tags pointing at Cloudfront
    and **0** local `/products/` image references.
- **HEAD test — 20 random Cloudfront URLs → all HTTP 200.**

### Spot-check of 5 named products (hero URL == JSON `primary`)

| Product | Hero == `primary` | HTTP | Gallery |
| --- | --- | --- | --- |
| Golden Hemp — Siero Viso Idratante | ✅ | 200 | 5 |
| Crema Viso Idratante | ✅ | 200 | 5 |
| Hemp Kiss (arancia) | ✅ | 200 | 3 |
| Hemp Kiss (nocciola) — distinct from arancia | ✅ | 200 | 2 |
| Hempilla Shayana 30 | ✅ | 200 | 6 |
| MELABILLA Crema Viso (mela rosa) | ✅ | 200 | 3 |

Hero (position 1) matches the Ecwid `primary` field for every product; gallery
order matches the Ecwid `gallery` array order.

---

## Products flagged: fewer images than the old local preview (22)

This is **expected and correct** — the previous local set padded most products
to ~6 shots, whereas these counts now mirror Ecwid's canonical gallery exactly
(the source of truth). No product lost its hero; all still have ≥2 images.

```
escar-glow-siero-viso-ultra-idratante           6 -> 4
im-perfect-siero-viso-anti-imperfezioni         6 -> 4
melabilla-crema-viso-idratante-alla-mela-rosa   6 -> 4
mousse-detergente-delicata                      6 -> 4
scrub-viso-100-naturale                         6 -> 4
sapone-mani-delicato                            6 -> 4
hemp-oo-shampoo-delicato-e-nutriente            6 -> 4
olio-corpo-per-massaggi                         6 -> 4
happy-feet-balsamo-naturale-...-piedi           6 -> 4
olio-corpo-post-epilazione                      6 -> 4
elis-hair-olio-per-capelli-rigenerante          6 -> 5
bagno-doccia-detergente-e-idratante             6 -> 5
hemp-kiss-balsamo-labbra-arancia                5 -> 4
melabilla-crema-mani-idratante-alla-mela-rosa   5 -> 4
latte-solare-idratante-spf-50                   5 -> 4
hemp-kiss-balsamo-labbra-nocciola               5 -> 3
crema-corpo-idratazione-intensiva               5 -> 3
hempilla-shanti-10-estratto-naturale-di-canapa  5 -> 4
detergente-intimo-delicato                      4 -> 3
olio-doposole-lenitivo                          3 -> 2
olio-di-iperico-lenitivo-760499148              3 -> 2
olio-barba-ammorbidente                         5 -> 2
```

**Products with NO matching JSON entry:** none. All 38 cosmetic ids and all 7
merch slugs resolved against `05-products-clean.json`.

---

## Files modified

- `data/productData.ts` — 38 product `image`/`images` arrays + `ATMOSPHERE` +
  `CATEGORIES` switched to Cloudfront; header comment updated.
- `data/catalog.ts` — added `MERCH_IMAGES` Cloudfront map + `MERCH_FALLBACK`;
  removed local `MERCH_IMG`; `fromMerch` now emits real per-product photos.
- `next.config.ts` — added Cloudfront host to `images.remotePatterns`.
- `eslint.config.mjs` — ignore `Cannabilla-Content/**` (data-prep `.cjs` helpers).

## Files deleted

- `public/products/` — **entire folder**: 193 image files across 39 product
  directories (~305 MB), e.g. `public/products/<slug>/01.jpg … 06.png` for all
  38 cosmetics plus the shared placeholder source. Removed via `git rm -r`.

## Decisions made (unattended mode)

1. **Merch photos upgraded, not just fixed:** the 7 merch/gift-card items had
   real Cloudfront photos in the JSON, so they were wired to their own images
   rather than the old single logo placeholder.
2. **`eslint` ignore for `Cannabilla-Content/**`:** the only lint failures were
   pre-existing `require()` errors in `.cjs` data-prep scripts inside the content
   snapshot directory — not app code, not shipped. Ignoring that directory
   satisfies the zero-warning gate without touching app source.
3. **ATMOSPHERE/CATEGORIES local paths resolved by position:** mapped each
   `/products/<slug>/NN.ext` to `[primary,...gallery][NN-1]` (fallback to primary
   if out of range) so editorial/category imagery survives the folder deletion.
