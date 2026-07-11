# Cannabilla — Image Curation Report

**Date:** 2026-07-11
**Scope:** 31 image slots re-curated with **visual inspection** (download → view), not just HTTP-200 checks.
**Method:** For each slot, candidate Unsplash IDs were discovered via `unsplash.com/s/photos/<query>`, each candidate was downloaded (`?w=800/1000&q=70`) and **viewed**, then scored against the rejection/preference criteria. Winners were re-verified: **all 31 return HTTP 200 and are < 3 MB** at hero size (`?auto=format&fit=crop&w=1600&q=80`).

**Result:** 31 slots processed → **31 replaced, 0 kept** (a better, verified match was found for every slot).

New IDs live in `lib/images.ts` under dedicated keys (`hero1..3`, `catViso..catRegali`, `cnSecca..cnSolare`, `ingCanapa..ingJojoba`, `jrRoutine..jrOrigini`). Dedicated keys were used so the ~20 other reuse sites of the generic keys (`skincare*`, `wellness*`, `botanical*`, nav tiles, kits, routines, category heroes) are **unchanged**.

Old ID = the Unsplash ID the slot resolved to before this pass (via its shared generic key).

## Hero slideshow (3) — new `HeroSlideshow` component (crossfade, respects `prefers-reduced-motion`)

| Slot | Old ID | New ID | Rejected candidates | Reason for pick |
|---|---|---|---|---|
| hero_slide_1 | 1570172619644-dfd03ed5d881 (prev single hero) | 1601909977949-94b1582edc47 | 1693655131317… (dark silhouette face), 1646016818236… (back of head), 1585596654463… (bathtub/spa), 1582899715532… (bare-back nudity), 1613840185042… (blown-out studio) | Landscape, woman ~35 in warm golden home light, at ease, botanical foreground, clear skin |
| hero_slide_2 | — (new slot) | 1769984888584-fdd82332d8d9 | 1770568824050… (face hidden by hat), 1775563623292… (staged studio look), 1780654878472… (back to camera), 1758790121753… (face hidden by straw hat) | European woman ~30s, clear skin, wildflower meadow holding botanicals, minimal makeup, countryside |
| hero_slide_3 | — (new slot) | 1552598715-7eeb9232a2ac | 1594794637446… (midday not dawn), 1735497696670… (portrait/hazy), 1665052678944… (highway visible), 1672496082434… (flat grey light) | Landscape Tuscan hills at misty dawn, warm sky, farmhouse + cypress, brand palette |

## Category tiles (9) — homepage "Le Nostre Linee" + `/prodotti`

| Slot | Old ID | New ID | Rejected candidates | Reason for pick |
|---|---|---|---|---|
| viso | 1556228578-8c89e6adf883 | 1661346376364-706a9eac60ab | product still-lifes, spa robe/towel-turban, fake-nail studio | Applying face cream at mirror, bright airy home, natural minimal makeup |
| corpo | 1556228453-efd6c1ff04f6 | 1655944185555-e58ed32a41f7 | swimsuit selfie, product-only bottle, spa bath, towel-wrap clinical | Applying body oil, white lace, warm bedroom, botanical |
| sole | 1501004318641-b39e6451bec6 | 1688823475222-b4bbd695c340 | POV legs w/ snack, river crossing, beach crouch, bikini phone | Applying cream to leg outdoors in mountains, warm natural light |
| capelli-e-barba | 1556228720-195a672e8a03 | 1779055660816-14ccb4325087 | hair-dye gloves (x2, clinical), messy distressed hair, blurred subject | Long healthy hair in warm home (no clean hair-care action shot surfaced in 2 iterations) |
| labbra | 1518495973542-4542c06a5843 | 1590736945722-bf5c39bc6513 | B&W off-palette, hand-over-mouth, lilac studio bg, red-glam lip | Applying nude lip balm in warm golden natural light |
| trattamenti | 1616394584738-fc6e612e71b9 | 1776790376585-4a12803b2b8c | overexposed, clinical harsh-sun portrait, moody dark blue, makeup-application | Warm golden-hour close-up, hand on face reads as gentle self-care |
| estratti | 1608248543803-ba4f8c70ae0b | 1608571424266-edeb9bbefdec | 3D-render bottle on flat color, styled bottle on white, clinical marble | Amber dropper on wood, warm light, premium natural-extract feel |
| lifestyle | 1556228720-195a672e8a03 | 1597755770248-1cd07faaaff6 | dim moody kitchen, herb flatlay only, minimal white cup, coffee-forward | Cozy morning tea by window with plants, warm at-home lifestyle |
| regali | 1518495973542-4542c06a5843 | 1629959059803-0dc732a96d15 | plain paper textures (x2), printed-text bag, Christmas-festive kraft | Kraft-paper gift with fresh green fronds, evergreen botanical wrapping |

## Concern tiles (6) — homepage `ConcernCarousel` + `/concerns/[slug]`

| Slot | Old ID | New ID | Rejected candidates | Reason for pick |
|---|---|---|---|---|
| pelle-secca | 1598440947619-2c35fc9aa908 | 1595182281528-5ceaa7765993 | 1670201202961… (bottle w/ brand text) | Beauty close-up of glowing, well-hydrated even skin, soft light |
| sensibilita-rossore | 1596755389378-c31d21fd1273 | 1549996519-82381be6ac23 | 1612225879085… (blotchy redness pose), 1697751451607… (harsh dappled shadow) | Calm at-ease face, even soothed tone, no redness |
| imperfezioni-lucentezza | 1571781926291-c477ebfd024b | 1581182800629-7d90925ad072 | 1580491934306… (face on wet glass), 1671029349132… (cool cast w/ redness) | Fresh dewy clean skin in sunlight, minimal makeup |
| tono-non-uniforme | 1620916297397-a4a5402a3c6c | 1542132583-b47f94eec949 | 1638316106736… (visible sun spots), 1710580889701… (texture macro, no face) | Even, luminous, warm-lit half-face close-up |
| pelle-matura | 1620916566398-39f1143ab7be | 1781439213513-ef4ee75a4cd6 | 1544717304… (spa towel, too young), 1639986162505… (~30, moody), 1641116511407… (reddened/clinical) | Graceful natural woman, healthy mature-toned skin, warm light |
| protezione-solare | 1490750967868-88aa4486c946 | 1517269992380-58d48f7101d1 | 1568046350182… (holding cigarette), 1634732579848… (towel+book, spa vibe) | Warm golden-hour outdoor glow, healthy summer feel |

## Ingredient tiles (9) — homepage "Gli Ingredienti Protagonisti" + `/ingredienti`

| Slot | Old ID | New ID | Rejected candidates | Reason for pick |
|---|---|---|---|---|
| olio-canapa | 1608248543803-ba4f8c70ae0b | 1579244117435-36cc633d3292 | smoothie bowl, coffee beans, muesli, peppercorns, CBD-branded box | Hemp seeds are the clear hero in a wooden spoon, rustic light |
| acido-ialuronico | 1596178065887-1198b6148b2b | 1610797145210-42a1a511ba4c | busier multi-drop leaf, dew-on-grass (x2), dark many-drops leaf | Single pristine water drop on vibrant green leaf, hydration macro |
| niacinamide | 1556227702-d1e4e7b5c232 | 1655892836674-1df10277925e | busier baby's-breath dropper, two bottles, harsh-shadow single bottle | Minimal amber dropper on wood w/ pink botanical + linen |
| aloe-vera | 1517637633369-e4cc28755e01 | 1649264722111-5cff15f9d830 | spiky aloe variety, fan palm (not aloe), cluttered background | Classic green aloe vera leaves with dew, clearly aloe |
| vitamina-e | 1512290923902-8a9f81dc236c | 1748543668646-e81cda0890f3 | clear serum swatches, mostly-clear gel drop, industrial oil press | Golden amber oil swatch with green leaf accent |
| calendula | 1601049676869-702ea24cfd58 | 1764070140303-e0a60f54625d | motion-blur swirls (x3), underexposed dark, out-of-focus | Sharp orange-yellow calendula/marigold in garden, natural light |
| malva | 1503236823255-94609f598e71 | 1773992029604-9d27422ed8bc | 1760349843758… (hollyhock, wrong species), botanical illustration on white | Macro mallow, purple petals with darker veins + staminal column |
| iperico | 1615397349754-cfa2066a298e | 1626624780829-8d959d03c5d9 | too-dark moody, ornamental hypericum w/ berries (less literal) | Sharp yellow five-petal St John's Wort w/ prominent stamens |
| jojoba | 1552693673-1bf958298935 | 1573575154488-f88a60e170df | branded/infographic packshots (x3), hand-held w/ book text | Golden oil dropper bottle, minimal, warm light, no branding |

## Journal thumbnails (4) — `/journal` + `/journal/[slug]`

| Slot | Old ID | New ID | Rejected candidates | Reason for pick |
|---|---|---|---|---|
| routine-4-step | 1556228578-8c89e6adf883 | 1770988042769-8457db10f3c6 | brand-text packshots, infographic overlay, cleaner-bottle w/ label | Clean warm botanical still-life, no text, editorial natural feel |
| olio-canapa-benefici | 1608248543803-ba4f8c70ae0b | 1617874564430-7487b49f5947 | 1532765488… (404), tight-crop leaves, flowering buds (drug feel), wrong plant | Sunlit agricultural hemp field, clear crop, no drug connotation |
| spf-30-vs-50 | 1490750967868-88aa4486c946 | 1633321088768-b994237c8aa8 | Atrani umbrellas, aerial crowded beach, teal-umbrella, rocky cove, dusk umbrellas | Iconic sunny Positano Italian summer coast, warm leaf framing |
| origini-sibillini | 1454372182658-c712e4c5a1db | 1600079793053-3a9fca3acd5d | snow-capped alpine, foggy grey, distant-mountains, overcast village, Dolomites dusk | Lush green Italian mountain valley w/ village, Apennine landscape |

## Flags for real client photography

- **capelli-e-barba** — no clean, on-brand *hair-care-in-action* stock shot surfaced across two search iterations (best available was a healthy-hair lifestyle shot, not an application shot). A real product/hair-care photo would be a clear upgrade.
- All slots are stock stand-ins; the hero and category tiles in particular would benefit from branded photography of real Cannabilla products/models when available.
