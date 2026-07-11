# Cannabilla — Complete Content Reference

**Generated:** 2026-07-10 · **Source:** Live Ecwid store `26630034` via MCP (READ-ONLY) · **Status:** nothing modified on the live store.

This is the single source of truth for the Cannabilla Next.js frontend. A designer/developer can populate the entire frontend from this file plus the JSON references in `/reference/`. Assumes no prior context.

---

## 1. Store Snapshot
| Field | Value |
|---|---|
| Store ID | `26630034` |
| Store name | Cannabilla |
| Company | Società Biochimica Galloppa srls, Amandola (FM), Italy |
| Contact | info@cannabilla.it · 0736096736 |
| Public storefront | https://cannabilla.it |
| Currency | EUR (display `€XX,XX`, comma decimal) |
| Weight unit | kg |
| Languages | IT (default), EN |
| Storefront SDK | `https://app.ecwid.com/script.js?26630034` |
| Image CDN | `https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/` |
| Total products | 46 (45 enabled + 1 disabled) |
| Shopping categories | 9 top-level + 14 subcategories (under `Shop`) |
| Total images | 220 |
| Payments (prior verified) | PayPal, PayPal Pay-in-3, Card via Stripe |
| Shipping (prior verified) | GLS, Printful (merch), Packlink PRO |
| Tax | ⚠️ VAT rate / price-inclusivity NOT exposed by MCP — confirm in admin |

> ⚠️ **Hybrid-routing note:** product / cart / checkout stay on Ecwid. Preserve `/products/*`, `/cart`, `/products/cart`, `/products/search`. See the delta docs (`../MERCHANT_CENTER_URLS.md`) for the 45 live URLs + 39 redirect map.

---

## 2. Category Taxonomy

| Department | Ecwid ID | # | Subcategories |
|---|---|---|---|
| VISO | `168093539` | 12 | Creme Viso, Sieri, Detersione, Esfoliazione |
| CORPO | `182395501` | 10 | Crema Corpo, Oli Corpo, Mani, Sport, PsorCream |
| SOLARI | `168093540` | 5 | Protezione Solare, Doposole |
| CAPELLI | `168117863` | 3 | Shampoo, Olio Capelli |
| BENESSERE MUSCOLARE e DERMOCURA | `168093542` | 12 | Hemp Kiss |
| TATTOO-CARE | `172904516` | 2 | — |
| DETERGENTI | `168937320` | 3 | — |
| MELABILLA | `182395513` | 2 | — |
| MERCHANDISING | `180176114` | 6 | — |

Full nested taxonomy with per-category product lists: **`06-categories-clean.md`**.

---

## 3. Product Index

### By department

**VISO** — [Golden Hemp - Siero Viso Idratante](#golden-hemp-siero-viso-idratante-683153006) · [Escar Glow - Siero Viso Ultra-Idratante](#escar-glow-siero-viso-ultra-idratante-683231653) · [Scrub Viso 100% Naturale](#scrub-viso-100-naturale-186266261) · [Crema Viso Solare SPF 50](#crema-viso-solare-spf-50-832585807) · [MELABILLA - Crema Viso Idratante alla Mela Rosa](#melabilla-crema-viso-idratante-alla-mela-rosa-731668886) · [Hemp Kiss - Balsamo Labbra Arancia](#hemp-kiss-balsamo-labbra-arancia-719846075) · [Sunny Kiss](#sunny-kiss-658845203) · [Make-up Remover Bifasico](#make-up-remover-bifasico-657775738) · [Mousse Detergente Delicata](#mousse-detergente-delicata-655210357) · [I'm Perfect - Siero Viso Anti Imperfezioni](#i-m-perfect-siero-viso-anti-imperfezioni-653949370) · [Crema Viso Idratante](#crema-viso-idratante-449326699) · [Hemp Kiss - Balsamo Labbra Nocciola](#hemp-kiss-balsamo-labbra-nocciola-367226942)

**CORPO** — [Happy Feet – Balsamo Naturale per il benessere dei piedi](#happy-feet-balsamo-naturale-per-il-benessere-dei-piedi-760202063) · [Olio Corpo Nutriente ed Idratante](#olio-corpo-nutriente-ed-idratante-659654040) · [Crema Mani Idratante](#crema-mani-idratante-655951926) · [Crema Corpo Idratazione Intensiva](#crema-corpo-idratazione-intensiva-449333379)

**SOLARI** — [Olio DopoSole Lenitivo](#olio-doposole-lenitivo-683253612) · [Crema DopoSole Lenitiva](#crema-doposole-lenitiva-683253581) · [Latte Solare Idratante SPF 30](#latte-solare-idratante-spf-30-683228963) · [Latte Solare Idratante SPF 50](#latte-solare-idratante-spf-50-670883482) · [Sunny Kiss](#sunny-kiss-658845203)

**CAPELLI** — [Olio Barba Ammorbidente](#olio-barba-ammorbidente-407333431) · [Hemp-oo - Shampoo Delicato e Nutriente](#hemp-oo-shampoo-delicato-e-nutriente-733763254) · [Elis Hair - Olio per capelli rigenerante](#elis-hair-olio-per-capelli-rigenerante-679599606)

**BENESSERE MUSCOLARE e DERMOCURA** — [Hempilla SHAYANA 30 - Estratto Naturale di Canapa](#hempilla-shayana-30-estratto-naturale-di-canapa-779064590) · [Hempilla SOMA 20 - Estratto Naturale di Canapa](#hempilla-soma-20-estratto-naturale-di-canapa-779064588) · [Hempilla SHANTI 10 - Estratto Naturale di Canapa](#hempilla-shanti-10-estratto-naturale-di-canapa-779060136) · [Olio di Iperico Lenitivo](#olio-di-iperico-lenitivo-760499148) · [Happy Feet – Balsamo Naturale per il benessere dei piedi](#happy-feet-balsamo-naturale-per-il-benessere-dei-piedi-760202063) · [Hempilla ANANDA 5 - Estratto Naturale di Canapa](#hempilla-ananda-5-estratto-naturale-di-canapa-745529566) · [PsorCream Dermocalmante e Lenitiva](#psorcream-dermocalmante-e-lenitiva-660161320) · [SportCream - Crema Muscolare Lenitiva](#sportcream-crema-muscolare-lenitiva-522417741) · [Olio Corpo per Massaggi](#olio-corpo-per-massaggi-454711844) · [Olio Corpo Post-Epilazione](#olio-corpo-post-epilazione-367226103)

**TATTOO-CARE** — [Tattoo Cream- Crema Nutriente](#tattoo-cream-crema-nutriente-723221221) · [Tattoo Balm - Balsamo Lenitivo](#tattoo-balm-balsamo-lenitivo-538411089)

**DETERGENTI** — [Bagno Doccia Detergente e Idratante](#bagno-doccia-detergente-e-idratante-733723745) · [Detergente Intimo Delicato](#detergente-intimo-delicato-733735292) · [Sapone Mani Delicato](#sapone-mani-delicato-733723503)

**MELABILLA** — [MELABILLA - Crema Mani Idratante alla Mela Rosa](#melabilla-crema-mani-idratante-alla-mela-rosa-731861529) · [MELABILLA - Crema Viso Idratante alla Mela Rosa](#melabilla-crema-viso-idratante-alla-mela-rosa-731668886)

**MERCHANDISING** — [T-Shirt Unisex - Logo Cannabilla](#t-shirt-unisex-logo-cannabilla-745649266) · [Berretto con Risvolto - Logo Cannabilla](#berretto-con-risvolto-logo-cannabilla-745559972) · [Cappello con Visiera - Logo Cannabilla](#cappello-con-visiera-logo-cannabilla-745542230) · [Berretto - Logo Cannabilla](#berretto-logo-cannabilla-719002182) · [Felpa Unisex - Logo Cannabilla](#felpa-unisex-logo-cannabilla-719002107) · [Borraccia in Acciaio Inossidabile - Logo Cannabilla](#borraccia-in-acciaio-inossidabile-logo-cannabilla-718984967)

### Alphabetical

| Product | € | Slug | Dept |
|---|---|---|---|
| [Bagno Doccia Detergente e Idratante](#bagno-doccia-detergente-e-idratante-733723745) | €9,60 | `bagno-doccia-detergente-e-idratante` | DETERGENTI |
| [Berretto - Logo Cannabilla](#berretto-logo-cannabilla-719002182) | €14,95 | `berretto-logo-cannabilla` | MERCHANDISING |
| [Berretto con Risvolto - Logo Cannabilla](#berretto-con-risvolto-logo-cannabilla-745559972) | €13,00 | `berretto-con-risvolto-logo-cannabilla` | MERCHANDISING |
| [Borraccia in Acciaio Inossidabile - Logo Cannabilla](#borraccia-in-acciaio-inossidabile-logo-cannabilla-718984967) | €24,00 | `borraccia-in-acciaio-inossidabile-logo-cannabilla` | MERCHANDISING |
| [Cappello con Visiera - Logo Cannabilla](#cappello-con-visiera-logo-cannabilla-745542230) | €15,00 | `cappello-con-visiera-logo-cannabilla` | MERCHANDISING |
| [Carta Regalo Digitale Cannabilla](#carta-regalo-digitale-cannabilla-768731040) | €0,00 | `carta-regalo-digitale-cannabilla` | — |
| [Crema Corpo Idratazione Intensiva](#crema-corpo-idratazione-intensiva-449333379) | €18,80 | `crema-corpo-idratazione-intensiva` | CORPO |
| [Crema DopoSole Lenitiva](#crema-doposole-lenitiva-683253581) | €18,80 | `crema-doposole-lenitiva` | SOLARI |
| [Crema Mani Idratante](#crema-mani-idratante-655951926) | €13,80 | `crema-mani-idratante` | CORPO |
| [Crema Viso Idratante](#crema-viso-idratante-449326699) | €17,50 | `crema-viso-idratante` | VISO |
| [Crema Viso Solare SPF 50](#crema-viso-solare-spf-50-832585807) | €13,80 | `crema-viso-solare-spf-50` | VISO |
| [Detergente Intimo Delicato](#detergente-intimo-delicato-733735292) | €8,70 | `detergente-intimo-delicato` | DETERGENTI |
| [Elis Hair - Olio per capelli rigenerante](#elis-hair-olio-per-capelli-rigenerante-679599606) | €14,90 | `elis-hair-olio-per-capelli-rigenerante` | CAPELLI |
| [Escar Glow - Siero Viso Ultra-Idratante](#escar-glow-siero-viso-ultra-idratante-683231653) | €25,60 | `escar-glow-siero-viso-ultra-idratante` | VISO |
| [Felpa Unisex - Logo Cannabilla](#felpa-unisex-logo-cannabilla-719002107) | €27,00 | `felpa-unisex-logo-cannabilla` | MERCHANDISING |
| [Golden Hemp - Siero Viso Idratante](#golden-hemp-siero-viso-idratante-683153006) | €32,30 | `golden-hemp-siero-viso-idratante` | VISO |
| [Happy Feet – Balsamo Naturale per il benessere dei piedi](#happy-feet-balsamo-naturale-per-il-benessere-dei-piedi-760202063) | €15,80 | `happy-feet-balsamo-naturale-per-il-benessere-dei-piedi` | BENESSERE MUSCOLARE e DERMOCURA |
| [Hemp Kiss - Balsamo Labbra Arancia](#hemp-kiss-balsamo-labbra-arancia-719846075) | €4,90 | `hemp-kiss-balsamo-labbra-arancia` | VISO |
| [Hemp Kiss - Balsamo Labbra Nocciola](#hemp-kiss-balsamo-labbra-nocciola-367226942) | €4,90 | `hemp-kiss-balsamo-labbra-nocciola` | VISO |
| [Hemp-oo - Shampoo Delicato e Nutriente](#hemp-oo-shampoo-delicato-e-nutriente-733763254) | €9,90 | `hemp-oo-shampoo-delicato-e-nutriente` | CAPELLI |
| [Hempilla ANANDA 5 - Estratto Naturale di Canapa](#hempilla-ananda-5-estratto-naturale-di-canapa-745529566) | €19,60 | `hempilla-ananda-5-estratto-naturale-di-canapa` | BENESSERE MUSCOLARE e DERMOCURA |
| [Hempilla SHANTI 10 - Estratto Naturale di Canapa](#hempilla-shanti-10-estratto-naturale-di-canapa-779060136) | €27,00 | `hempilla-shanti-10-estratto-naturale-di-canapa` | BENESSERE MUSCOLARE e DERMOCURA |
| [Hempilla SHAYANA 30 - Estratto Naturale di Canapa](#hempilla-shayana-30-estratto-naturale-di-canapa-779064590) | €40,00 | `hempilla-shayana-30-estratto-naturale-di-canapa` | BENESSERE MUSCOLARE e DERMOCURA |
| [Hempilla SOMA 20 - Estratto Naturale di Canapa](#hempilla-soma-20-estratto-naturale-di-canapa-779064588) | €34,00 | `hempilla-soma-20-estratto-naturale-di-canapa` | BENESSERE MUSCOLARE e DERMOCURA |
| [I'm Perfect - Siero Viso Anti Imperfezioni](#i-m-perfect-siero-viso-anti-imperfezioni-653949370) | €23,90 | `im-perfect-siero-viso-anti-imperfezioni` | VISO |
| [Latte Solare Idratante SPF 30](#latte-solare-idratante-spf-30-683228963) | €16,80 | `latte-solare-idratante-spf-30` | SOLARI |
| [Latte Solare Idratante SPF 50](#latte-solare-idratante-spf-50-670883482) | €16,80 | `latte-solare-idratante-spf-50` | SOLARI |
| [Liquido igienizzante spray](#liquido-igienizzante-spray-184319121) | €4,90 | `liquido-igienizzante-spray` | — |
| [Make-up Remover Bifasico](#make-up-remover-bifasico-657775738) | €12,90 | `make-up-remover-bifasico` | VISO |
| [MELABILLA - Crema Mani Idratante alla Mela Rosa](#melabilla-crema-mani-idratante-alla-mela-rosa-731861529) | €16,50 | `melabilla-crema-mani-idratante-alla-mela-rosa` | MELABILLA |
| [MELABILLA - Crema Viso Idratante alla Mela Rosa](#melabilla-crema-viso-idratante-alla-mela-rosa-731668886) | €23,10 | `melabilla-crema-viso-idratante-alla-mela-rosa` | VISO |
| [Mousse Detergente Delicata](#mousse-detergente-delicata-655210357) | €16,20 | `mousse-detergente-delicata` | VISO |
| [Olio Barba Ammorbidente](#olio-barba-ammorbidente-407333431) | €11,00 | `olio-barba-ammorbidente` | CAPELLI |
| [Olio Corpo Nutriente ed Idratante](#olio-corpo-nutriente-ed-idratante-659654040) | €16,50 | `olio-corpo-nutriente-ed-idratante` | CORPO |
| [Olio Corpo per Massaggi](#olio-corpo-per-massaggi-454711844) | €17,90 | `olio-corpo-per-massaggi` | BENESSERE MUSCOLARE e DERMOCURA |
| [Olio Corpo Post-Epilazione](#olio-corpo-post-epilazione-367226103) | €11,60 | `olio-corpo-post-epilazione` | BENESSERE MUSCOLARE e DERMOCURA |
| [Olio di Iperico Lenitivo](#olio-di-iperico-lenitivo-760499148) | €12,50 | `olio-di-iperico-lenitivo-760499148` | BENESSERE MUSCOLARE e DERMOCURA |
| [Olio DopoSole Lenitivo](#olio-doposole-lenitivo-683253612) | €14,50 | `olio-doposole-lenitivo` | SOLARI |
| [PsorCream Dermocalmante e Lenitiva](#psorcream-dermocalmante-e-lenitiva-660161320) | €16,90 | `psorcream-dermocalmante-e-lenitiva` | BENESSERE MUSCOLARE e DERMOCURA |
| [Sapone Mani Delicato](#sapone-mani-delicato-733723503) | €5,80 | `sapone-mani-delicato` | DETERGENTI |
| [Scrub Viso 100% Naturale](#scrub-viso-100-naturale-186266261) | €12,50 | `scrub-viso-100-naturale` | VISO |
| [SportCream - Crema Muscolare Lenitiva](#sportcream-crema-muscolare-lenitiva-522417741) | €16,20 | `sportcream-crema-muscolare-lenitiva` | BENESSERE MUSCOLARE e DERMOCURA |
| [Sunny Kiss](#sunny-kiss-658845203) _(disabled)_ | €4,90 | `sunny-kiss` | VISO |
| [T-Shirt Unisex - Logo Cannabilla](#t-shirt-unisex-logo-cannabilla-745649266) | €13,00 | `t-shirt-unisex-logo-cannabilla` | MERCHANDISING |
| [Tattoo Balm - Balsamo Lenitivo](#tattoo-balm-balsamo-lenitivo-538411089) | €15,80 | `tattoo-balm-balsamo-lenitivo` | TATTOO-CARE |
| [Tattoo Cream- Crema Nutriente](#tattoo-cream-crema-nutriente-723221221) | €12,80 | `tattoo-cream-crema-nutriente` | TATTOO-CARE |

---

## 4. Full Product Details

### Olio Barba Ammorbidente
<a id="olio-barba-ammorbidente-407333431"></a>

*Disciplinante*

| | |
|---|---|
| **ID / SKU** | `407333431` / `VISOIL+30` |
| **Price** | €11,00 |
| **Slug / URL** | `olio-barba-ammorbidente` → https://cannabilla.it/products/olio-barba-ammorbidente |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > CAPELLI • Shop > CAPELLI > Olio Capelli |
| **Brand / GTIN / MPN** | — / 8053617090003 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care > Body Oil |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 2 (primary + 1 gallery) |
| **Options / Variants** | none |
| **Meta title** | Olio Barba Ammorbidente |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 655210357, 449326699 |
| **Created / Updated** | 2021-10-18 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/407333431/4914219934.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/407333431/5871316831.jpg

**Key benefits:** Nutriente

**Formato:** 30 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** Presenta ingredienti di origine 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare alcune gocce sulla barba umida, dopo il lavaggio, e massaggiare in modo da favorirne l'assorbimento. Ideale da utilizzare dopo aver deterso il viso con la Mousse Detergente Cannabilla per donare idratazione a tutto il viso.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi |
| Olio di Vinaccioli e Avocado | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva |
| Olio essenziale di Eucalipto e Bergamotto | opportunamente veicolati, possono svolgere azione antisettica e balsamica. |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Cannabis Sativa Seed Oil, Prunus Amygdalus Dulcis Oil, Caprylic/capric Triglyceride, Simmondsia Chinensis Seed Oil, Persea Gratissima Oil, Dicaprylyl Ether, Vitis Vinifera Seed Oil, Tocopheryl Acetate, Eucalyptus Globulus Leaf Oil, Cannabidiol, Euclyptol, Limonene

**Descrizione (testo):**

> L'olio per la cura della barba è un trattamento ammorbidente che disciplina la barba lunga e corta, rendendo la pelle nutrita e la barba morbida al tatto. Composto da oli pregiati come l' olio di Canapa e di Vinaccioli , ideale per dare morbidezza alla barba. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 30 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 Presenta ingredienti di origine 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare alcune gocce sulla barba umida, dopo il lavaggio, e massaggiare in modo da favorirne l'assorbimento. Ideale da utilizzare dopo aver deterso il viso con la Mousse Detergente Cannabilla per donare idratazione a tutto il viso. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene : 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi 🍃 Olio di Vinaccioli e Avocado: oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva 🍃 Olio essenziale di Eucalipto e Bergamotto: opportunamente veicolati, possono svolgere azione antisettica e balsamica. 🍃 Vitamina E: svolge un'azione antiossidante nei confronti dei radicali liberi Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie INCI: Cannabis Sativa Seed Oil, Prunus Amygdalus Dulcis Oil, Caprylic/capric  …[full HTML in 05-products-clean.json]

---

### Olio DopoSole Lenitivo
<a id="olio-doposole-lenitivo-683253612"></a>

| | |
|---|---|
| **ID / SKU** | `683253612` / `8053617092700` |
| **Price** | €14,50 |
| **Slug / URL** | `olio-doposole-lenitivo` → https://cannabilla.it/products/olio-doposole-lenitivo |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Blog > Iperico: il fiore giallo dalle mille proprietà • Shop > SOLARI • Shop > SOLARI > Doposole |
| **Brand / GTIN / MPN** | — / 8053617092700 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.115 kg / not set |
| **Images** | 2 (primary + 1 gallery) |
| **Options / Variants** | none |
| **Meta title** | Olio DopoSole Lenitivo |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | — |
| **Created / Updated** | 2024-07-23 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683253612/4449124239.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683253612/5871335568.png

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Rigenerante ed elasticizzante

**Formato:** 100 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare il prodotto sulla parte del corpo da trattare, sulla pelle detersa e umida, e massaggiare favorendo l'assorbimento. Ideale da applicare dopo aver deterso il corpo con il Bagno Doccia Cannabilla per una pelle ancora più morbida e curata.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Made in Italy (Monti Sibillini)

**INCI:** Cannabis Sativa Seed Oil,Prunus Amygdalus Dulcis Oil, Caprylic/Capric Triglyceride, Dicaprylyl Ether, Helianthus Annuus Seed Oil, Calendula Officinalis Flower Extract, Chamomilla Recutita Flower Extract, Hypericum Perforatum Flower Extract, Tocopheryl Acetate, Cannabidiol, Parfum, Vanillin

**Descrizione (testo):**

> L’Olio DopoSole è in grado di rigenerare e reidratare la pelle in profondità dopo una eccessiva esposizione solare, riducendo l’arrossamento della cute. La formula è arricchita con Estratto di Iperico ad azione fortemente riepitelizzante e rigenerante. L' Olio di Canapa e l'Estratto di camomilla e Calendula svolgono un'azione lenitiva ed emolliente. E’ un olio leggero, dal tocco asciutto e profumo unico, si assorbe rapidamente senza ungere e renderà la tua pelle luminosa e brillante. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴Formato: 100 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare il prodotto sulla parte del corpo da trattare, sulla pelle detersa e umida, e massaggiare favorendo l'assorbimento. Ideale da applicare dopo aver deterso il corpo con il Bagno Doccia Cannabilla per una pelle ancora più morbida e curata. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. INCI : Cannabis Sativa Seed Oil,Prunus Amygdalus Dulcis Oil, Caprylic/Capric Triglyceride, Dicaprylyl Ether, Helianthus Annuus Seed Oil, Calendula Officinalis Flower Extract, Chamomilla Recutita Flower Extract, Hypericum Perforatum Flower Extract, Tocopheryl Acetate, Cannabidiol, Parfum, Vanillin

---

### Golden Hemp - Siero Viso Idratante
<a id="golden-hemp-siero-viso-idratante-683153006"></a>

*Per pelli Secche*

| | |
|---|---|
| **ID / SKU** | `683153006` / `8053617090508` |
| **Price** | €32,30 |
| **Slug / URL** | `golden-hemp-siero-viso-idratante` → https://cannabilla.it/products/golden-hemp-siero-viso-idratante |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > VISO • Blog > Proprietà della canapa • Shop > VISO > Sieri |
| **Brand / GTIN / MPN** | — / 8053617090508 / — |
| **Google product category** | Health & Beauty |
| **Weight / Dimensions** | 0.085 kg / not set |
| **Images** | 6 (primary + 5 gallery) |
| **Options / Variants** | none |
| **Meta title** | Golden Hemp - Siero Viso Idratante |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 719846075, 683231653, 449326699, 655210357, 186266261 |
| **Created / Updated** | 2024-07-23 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683153006/4448673255.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683153006/5868004642.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683153006/5868010777.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683153006/5868005437.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683153006/5868004666.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683153006/5868010809.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Nutriente · Adatta a pelli secche · Per pelli grasse / a tendenza acneica

**Formato:** 30 ml  
**Packaging:** Flacone in vetro 100% riciclabile con pipetta contagocce con sigillo di garanzia.  
**Nota:** 100% naturale. L'eventuale variazione di colore rivela la naturalezza degli ingredienti  

**Come usarlo:** Applicare alcune gocce sul viso deterso e massaggiare con movimenti circolari in modo da favorirne l'assorbimento. Ideale da usare dopo la Mousse Detergente Cannabilla per un'idratazione maggiore e un risultato ancora più evidente.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatori |
| Squalano | ha caratteristiche emollienti e idratanti. E' la forma stabile dello squalene, componente del sebo, risulta efficace anche come agente anti-pruriginoso in situazioni di pelle molto secca. |
| Olio di Jojoba | in realtà non è un olio, ma una cera. Ha una composizione simile a quella del sebo, riesce quindi ad essere assorbito in maniera efficace dalla pelle. Funge da penetration enhancer, riesce cioè a far penetrare meglio gli attivi. Ripara la barriera cutanea, ha un effetto antinfiammatorio, antiossidante e riparatore |
| Estratto di calendula | grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l’estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emolliente e riepitelizzante |
| Estratto di rosmarino | contiene antiossidanti che aiutano a combattere la secchezza della pelle rendendola più morbida ed elastica |
| Olio di carota | contiene vitamina A e betacarotene, aumenta l'elasticità e la compattezza della pelle |
| Bisabololo | attivo calmante, lenitivo e disarrossante, si ottine dall’olio essenziale di camomilla matricaria |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Cannabis Sativa Seed Oil, Caprylic/capric Triglyceride, Dicaprylyl Ether, Squalane, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Calendula Officinalis Flower Extract, Rosmarinus Officinalis Extract, Daucus Carota Sativa Root, Bisabolol, Cannabidiol, Helianthus Annuus Seed Oil, Zea Mays Germ Oil, Melaleuca Alternifolia Leaf Oil, Parfum, Benzyl Alcohol, Limonene, Linalool, Geraniol

**Descrizione (testo):**

> Golden Hemp è un olio viso concentrato ad azione antiossidante ed emolliente, che nutre la pelle in profondità, fornendo idratazione soprattutto nel periodo invernale, periodo dell'anno in cui la pelle risulta maggiormente disidratata. Presenta una formula esclusiva, con il 60% di Olio di Canapa , ricco di acidi grassi essenziali e antiossidanti e grazie alle sue proprietà lenitive aiuta a ridurre i rossori e le imperfezioni e migliora la texture cutanea. E' un olio dal tocco leggero, arricchito con vitamina E ad azione antiossidante, estratti di calendula e rosmarino che svolgono un' azione protettiva ed emolliente. Si assorbe rapidamente e dona immediatamente luminosità e morbidezza al viso. E' adatto alle pelli secche, ma anche alle pelli grasse e con imperfezioni. Formulato e prodotto nel cuore dei Monti Sibillini . Cruelty-free e senza parabeni . 🥕 Yuka: 79/100 Eccellente (Yuka.io è l'app che valuta i prodotti cosmetici - controlla qui https://app.yuka.io/HEUM63qeiHAJ9E659) 🧴 Formato: 30 ml ♻ Flacone in vetro 100% riciclabile con pipetta contagocce con sigillo di garanzia. 🌿 100% naturale. L'eventuale variazione di colore rivela la naturalezza degli ingredienti ______________________________________________________________________________ Come usarlo: Applicare alcune gocce sul viso deterso e massaggiare con movimenti circolari in modo da favorirne l'assorbimento. Ideale da usare dopo la Mousse Detergente Cannabilla per un'idratazione maggiore e un risultato ancora più evidente. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie a …[full HTML in 05-products-clean.json]

---

### Escar Glow - Siero Viso Ultra-Idratante
<a id="escar-glow-siero-viso-ultra-idratante-683231653"></a>

*Per pelli Secche e Mature*

| | |
|---|---|
| **ID / SKU** | `683231653` / `8053617090485` |
| **Price** | €25,60 |
| **Slug / URL** | `escar-glow-siero-viso-ultra-idratante` → https://cannabilla.it/products/escar-glow-siero-viso-ultra-idratante |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > VISO • Shop > VISO > Sieri |
| **Brand / GTIN / MPN** | — / 8053617090485 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.085 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Escar Glow - Siero Viso Ultra-Idratante |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 719846075, 683153006, 449326699, 655210357, 186266261 |
| **Created / Updated** | 2024-07-23 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683231653/4449124048.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683231653/5868005383.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683231653/5868005389.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683231653/5871192700.png

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Adatta a pelli mature · Per pelli grasse / a tendenza acneica · Azione antiossidante

**Formato:** 30 ml  
**Packaging:** Flacone in vetro 100% riciclabile. Scatola in cartone riciclabile.  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare il prodotto m attina e/o sera sul viso deterso e asciutto. Massaggiare delicatamente per favorire l'assorbimento. Può essere applicato prima della crema viso. Per una pelle ancora più morbida e luminosa detergi il viso con la Mousse Detergente Cannabilla prima di applicare il Siero, e dopo che si sarà assorbito applica la Crema Viso Idratante Cannabilla .

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie |
| Bava di lumaca | è una miscela complessa, costituita da acqua una componente idratante ed umettante data da proteoglicani e glicosamminoglicani, dall'acido ialuronico e dal collagene. Vi è inoltre una componente esfoliante data dall'acido glicolico. La miscela contiene anche elastina e allantoina |
| Acido ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle |
| Niacinamide | nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli grasse, tra il 4% e il 5% agisce contro le macchie cutanee |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo. Svolge significativamente un'azione lenitiva e cicatrizzante. |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Snail Secretion Filtrate, Niacinamide, Sodium Hyaluronate, Glycerin, Allantoin, Cannabidiol, Propanediol, Citric Acid, Sodium Benzoate, Potassium Sorbate, Croton Lechleri Resin Powder, Polysorbate-20, Parfum, Benzyl Salicylate, Limonene, Linalyl Acetate, Hexyl Cinnamal, Citrus Aurantium Dulcis Peel Oil, Citronellol, Linalool, Alpha-isomethyl Ionone, Geranyl Acetate, Benzyl Alcohol, Citral

**Descrizione (testo):**

> Il Siero Viso Escar Glow è un siero ad azione ultra-idratante, è un concentrato di idratazione e rigenerazione per la tua pelle. Questa formula combina ingredienti dall'efficacia provata e naturali per offrire un trattamento completo. Contiene Canapa , dalle proprietà lenitive e antiossidanti, che calma la pelle e la protegge dagli stress ambientali, bava di lumaca nota per stimolare il rinnovamento cellulare, riducendo le imperfezioni e i segni del tempo, lasciando la pelle morbida e luminosa, acido ialuronico per donare un'idratazione profonda e un aspetto rimpolpato e fresco. Il complesso degli ingredienti assieme alla niacinamide , svolge un'azione idratante, lenitiva e rigenerante. E' adatto a tutti i tipi di pelle, ma agisce positivamente in particolar modo alle pelli più secche e mature. Un utilizzo quotidiano garantisce una pelle più sana e luminosa. Formulato e prodotto nel cuore dei Monti Sibillini . Cruelty-free e senza parabeni . 🧴 Formato: 30 ml ♻ Flacone in vetro 100% riciclabile. Scatola in cartone riciclabile. 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare il prodotto m attina e/o sera sul viso deterso e asciutto. Massaggiare delicatamente per favorire l'assorbimento. Può essere applicato prima della crema viso. Per una pelle ancora più morbida e luminosa detergi il viso con la Mousse Detergente Cannabilla prima di applicare il Siero, e dopo che si sarà assorbito applica la Crema Viso Idratante Cannabilla . Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie 🍃 Bava di lumaca: è una miscela complessa, costituita da acqua una componente idratante ed umettante data da proteoglicani e glicosamminoglicani, dall'acido ialuro …[full HTML in 05-products-clean.json]

---

### Crema DopoSole Lenitiva
<a id="crema-doposole-lenitiva-683253581"></a>

| | |
|---|---|
| **ID / SKU** | `683253581` / `8053617090218` |
| **Price** | €18,80 |
| **Slug / URL** | `crema-doposole-lenitiva` → https://cannabilla.it/products/crema-doposole-lenitiva |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > SOLARI • Shop > SOLARI > Doposole |
| **Brand / GTIN / MPN** | — / 8053617090218 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.225 kg / not set |
| **Images** | 5 (primary + 4 gallery) |
| **Options / Variants** | none |
| **Meta title** | Crema DopoSole Lenitiva |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 832585807, 683228963, 670883482, 733723745, 683253612 |
| **Created / Updated** | 2024-07-23 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683253581/4449101231.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683253581/4886463394.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683253581/4886484503.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683253581/4886463399.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683253581/5868002270.jpg

**Key benefits:** Azione lenitiva e calmante · Azione antiossidante · Texture leggera, assorbimento rapido

**Formato:** 200 ml  
**Packaging:** Flacone in vetro100% riciclabile  
**Nota:** Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto.  

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie |
| Niacinamide | nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli grasse, tra il 4% e il 5% agisce anche contro le macchie cutanee. Nella crema viso Cannabilla la niacinamide è al 5% |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo |
| Acido ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle |
| Mentolo | svolge un'azione rinfrescante |
| Estratto di Iperico | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Aloe Barbadensis Leaf Juice, Caprylic / Capric Triglyceride, Prunus Amygdalus Dulcis Oil, Cannabis Sativa Seed Oil, Niacinamide, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, C15-19 Alkane, Glycerin, Tocopheryl Acetate, Cannabidiol, Sodium Hyaluronate, Allantoin, Hypericum Perforatum Flower Extract, Chamomilla Recutita Flower Extract, Mangifera Indica Seed Butter, Menthol, Bisabolol, Potassium Sorbate, Sodium Benzoate, Sodium Gluconate, Citric Acid, Polyacrylate Crosspolymer-6, Polyglyceryl-6 Laurate, Polyglyceryl-6, Parfum, Linalyl Acetate, Pinene, Limonene, Terpineol, Alpha-isomethyl Ionone, Hexamethylindanopyran, Linalool, Pogostemon Cablin Oil, Geranyl Acetate, Terpinolene

**Descrizione (testo):**

> La Crema DopoSole ha una forte azione lenitiva ed emolliente grazie alla presenza di Olio di Semi di Canapa , Estratto di Camomilla, Aloe Vera e Acido ialuronico. La formula è arricchita con Vitamina E e Mentolo per un'azione antiossidante e rinfrescante. Permette un rapido recupero dell'equilibrio epidermico dopo l'esposizione solare. L' Olio di Semi di Canapa contenuto nel latte solare favorisce il ripristino del naturale equilibrio epidermico contrastando quindi i danni a lungo termine che l'esposizione al sole procura. La crema risulta molto piacevole da applicare grazie alla sua texture leggera e setosa e alla sua capacità di assorbimento rapido , senza ungere. La Crema DopoSole Lenitiva può essere usata anche come una normale crema per il corpo. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 200 ml ♻ Flacone in vetro100% riciclabile 🌿Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto. Come usarla: Applicare il prodotto dopo l'esposizione solare sulla pelle detersa e umida, e massaggiare favorendo l'assorbimento. Può anche essere usata quotidianamente come crema idratante. Per un risultato ancora più piacevole applica la Crema DopoSole Lenitiva dopo aver deterso la pelle con il Bagno Doccia Cannabilla. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa : ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie 🍃 Niacinamide : nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda del …[full HTML in 05-products-clean.json]

---

### Latte Solare Idratante SPF 30
<a id="latte-solare-idratante-spf-30-683228963"></a>

| | |
|---|---|
| **ID / SKU** | `683228963` / `8053617090188` |
| **Price** | €16,80 |
| **Slug / URL** | `latte-solare-idratante-spf-30` → https://cannabilla.it/products/latte-solare-idratante-spf-30 |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > SOLARI • Shop > SOLARI > Protezione Solare |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.12 kg / not set |
| **Images** | 5 (primary + 4 gallery) |
| **Options / Variants** | Formato (2) · 2 combinations |
| **Meta title** | Latte Solare Idratante SPF 30 |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 832585807, 670883482, 683253581, 683253612, 733723745 |
| **Created / Updated** | 2024-07-23 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683228963/4449136554.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683228963/4449135706.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683228963/5868014742.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683228963/5868020510.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683228963/5868020528.jpg

**Key benefits:** Idratazione profonda · Azione antiossidante · Protezione

**Formato:** 100 ml e 200ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  

**Come usarlo:** Applicare sulla pelle prima dell’esposizione al sole. Ripetere l’operazione ogni volta che se ne sente il bisogno. Per proteggere ancora di più la tua pelle, applica la Crema DopoSole Lenitiva Cannabilla dopo una detersione delicata con il Bagno Doccia Detergente e Idratante Cannabilla.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie |
| Filtri UV | riducono al minimo gli effetti indesiderati della radiazione UV sulla pelle, come eritemi, ustioni, fotosensibilizzazioni, macchie cutanee |
| Acido ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle Niacinamide: nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli grasse, tra il 4% e il 5% agisce anche contro le macchie cutanee. Nella crema viso Cannabilla la niacinamide è al 5% |
| Aloe Vera | è un ottimo idratante, utile in caso di pelle irritata o arrossata, aiuta la pelle a ristabilirsi e dona anche un effetto rinfrescante |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Caprylic/capric Triglyceride, Ethylhexyl Methoxycinnamate, Bis-ethylhexyloxyphenol Methoxyphenyl Triazine, Butyl Methoxydibenzoylmethane, Ethylhexyl Dimethyl Paba, Cannabis Sativa Seed Oil, Aloe Barbadensis Leaf Juice Powder, Niacinamide, Glycerin, Sodium Hyaluronate, Tocopheryl Acetate, Polysorbate 20, Sodium Acrylate/sodium Acryloyldimethyl Taurate Copolymer C15-19 Alkane, Polyglyceryl-6 Laurate, Polyglycerin-6, Polyacrylate Crosspolymer-6, Cannabidiol, Propanediol, Parfum, Sodium Gluconate, Citric Acid, Potassium Sorbate, Sodium Benzoate, Terpineol, Cinnamyl Alcohol, Linalool, Amyl Salicylate, Linalyl Acetate, Vanillin

**Descrizione (testo):**

> Il Latte Solare Idratante con SPF 30 protegge dai raggi UV e previene i danni cellulari che possono creare. Ha una consistenza fluida, facile da applicare, perfetta per un utilizzo quotidiano. La presenza di Canapa e Vitamina E svolge un'azione antiossidante contro i radicali liberi responsabili del fotoinvecchiamento. La formula si caratterizza anche per un complesso idratante dato dall' Olio di semi di Canapa, Acido Ialuronico, Niacinamide e Aloe Vera. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 100 ml e 200ml ♻Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna Come usarlo: Applicare sulla pelle prima dell’esposizione al sole. Ripetere l’operazione ogni volta che se ne sente il bisogno. Per proteggere ancora di più la tua pelle, applica la Crema DopoSole Lenitiva Cannabilla dopo una detersione delicata con il Bagno Doccia Detergente e Idratante Cannabilla. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa : ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie 🍃Filtri UV : riducono al minimo gli effetti indesiderati della radiazione UV sulla pelle, come eritemi, ustioni, fotosensibilizzazioni, macchie cutanee 🍃 Acido ialuronico: svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle 🍃 Niacinamide : nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatteric …[full HTML in 05-products-clean.json]

---

### Scrub Viso 100% Naturale
<a id="scrub-viso-100-naturale-186266261"></a>

*Esfoliazione Delicata*

| | |
|---|---|
| **ID / SKU** | `186266261` / `5X04100` |
| **Price** | €12,50 |
| **Slug / URL** | `scrub-viso-100-naturale` → https://cannabilla.it/products/scrub-viso-100-naturale |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > VISO • Shop > VISO > Esfoliazione |
| **Brand / GTIN / MPN** | — / 8053617090102 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.7 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Scrub Viso 100% Naturale |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 719846075, 655210357, 657775738, 653949370, 449326699 |
| **Created / Updated** | 2020-03-31 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/186266261/4447200219.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/186266261/5871370667.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/186266261/5871370661.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/186266261/5871377035.png

**Key benefits:** Rigenerante ed elasticizzante · Esfoliazione delicata

**Formato:** 50 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Prelevare una piccola quantità di prodotto, applicarla sulla pelle detersa e umida e massaggiare dolcemente con movimenti circolari per pochi minuti. Successivamente risciacquare con acqua tiepida. Utilizzare 1-2 volte alla settimana. Ideale da utilizzare dopo la Mousse Detergente Cannabilla per una pelle ancora più detersa e radiosa. Si può poi concludere la skincare routine con l'applicazione della Crema Viso Idratante Cannabilla per una pelle ancora più levigata e nutrita.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi |
| Estratto di Iperico dei Monti Sibillini | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina |
| Olio di Mandorle Dolci | olio in grado di alleviare la secchezza cutanea, svolge un’azione emolliente e lenitiva |
| Glicerina | mantiene la pelle morbida e idratata |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo. |
| VItamina E | svolge un'attività antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aloe Barbadensis Leaf Juice, Aqua, Prunus Armeniaca Seed Powder, Caprylic/Capric Triglyceride, Simmondsia Chinensis Seed Oil, Dicaprylyl Ether, Mangifera Indica Seed Butter, Cannabis Sativa Seed Oil, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Glycerin, C15-19 Alkane, Persea Gratissima Oil, Tocopheryl Acetate, Cannabidiol, Polyglyceryl-6 Laurate, Citric Acid, Polyglycerin-6, Propanediol, Allantoin, Sodium Benzoate, Potassium Sorbate, Polyacrylate Crosspolymer-6, Parfum, Terpineol, Cinnamyl Alcohol, Linalool, Amyl Salicylate, Linalyl Acetate, Vanillin

**Descrizione (testo):**

> Lo Scrub Viso 100% Naturale a base di Canapa è un trattamento indicato per rigenerare i tessuti cutanei, esfoliando l'epidermide in modo dolce, ma efficace. Una volta applicato sulla cute e massaggiato con movimenti rotatori, lo scrub rimuove gli strati più superficiali dell'epidermide rivelando una carnagione radiosa e brillante. Formulato con attivi in grado di ripristinare il film idrolipidico come olio di mandorle e estratto di iperico dei Monti Sibillini e microgranuli di albicocca per un'azione esfoliante naturale e non irritante. Formulato e prodotto nel cuore dei Monti Sibillini . Cruelty-free e senza parabeni . 🧴Formato: 50 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Prelevare una piccola quantità di prodotto, applicarla sulla pelle detersa e umida e massaggiare dolcemente con movimenti circolari per pochi minuti. Successivamente risciacquare con acqua tiepida. Utilizzare 1-2 volte alla settimana. Ideale da utilizzare dopo la Mousse Detergente Cannabilla per una pelle ancora più detersa e radiosa. Si può poi concludere la skincare routine con l'applicazione della Crema Viso Idratante Cannabilla per una pelle ancora più levigata e nutrita. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi 🍃 Estratto di Iperico dei Monti Sibillini: particolarmente indicato per pelli secche, h …[full HTML in 05-products-clean.json]

---

### Liquido igienizzante spray
<a id="liquido-igienizzante-spray-184319121"></a>

| | |
|---|---|
| **ID / SKU** | `184319121` / `1X04100` |
| **Price** | €4,90 |
| **Slug / URL** | `liquido-igienizzante-spray` → https://cannabilla.it/products/liquido-igienizzante-spray |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** |  • Shop |
| **Brand / GTIN / MPN** | — / 8053617090133 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.15 kg / not set |
| **Images** | 3 (primary + 2 gallery) |
| **Options / Variants** | none |
| **Meta title** | Liquido igienizzante spray |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 733723503, 731861529, 655951926 |
| **Created / Updated** | 2020-03-25 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/184319121/4447185173.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/184319121/5868019029.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/184319121/5871235441.png

**Key benefits:** Idratazione profonda

**Formato:** 100 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Spruzzare il prodotto sul palmo delle mani, strofinare per alcuni secondi fino a completo assorbimento.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Alcol etilico denaturato | con una parte di acqua l'alcol riesce a penetrare attraverso la parete cellulare all'interno dei batteri dove provoca una denaturazione delle proteine fino alla distruzione del batterio stesso. Nella formula è presente all'80% |
| Glicerina | mantiene la pelle morbida e idratata |

**Certificazioni:** Cruelty-free · Senza parabeni · Made in Italy (Monti Sibillini)

**INCI:** Alcohol denat, Aqua, Glycerin, Parfum, linalool, hexyl cinnamal, limonene

**Descrizione (testo):**

> Igienizzante spray per mani a base di alcol, non necessita risciacquo. Igienizza profondamente grazie alla presenza dell' 80% di alcol di origine vegetale, la formula è arricchita con glicerina per mantenere idratate le mani. Piacevole da applicare grazie alla sua formulazione a rapido assorbimento e profumata. Formulato e prodotto nel cuore dei Monti Sibillini . Cruelty-free e senza parabeni . 🧴Formato: 100 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Spruzzare il prodotto sul palmo delle mani, strofinare per alcuni secondi fino a completo assorbimento. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Cosa contiene: 🍃 Alcol etilico denaturato: con una parte di acqua l'alcol riesce a penetrare attraverso la parete cellulare all'interno dei batteri dove provoca una denaturazione delle proteine fino alla distruzione del batterio stesso. Nella formula è presente all'80% 🍃 Glicerina : mantiene la pelle morbida e idratata INCI: Alcohol denat, Aqua, Glycerin, Parfum, linalool, hexyl cinnamal, limonene

---

### Crema Viso Solare SPF 50
<a id="crema-viso-solare-spf-50-832585807"></a>

*Protezione Quotidiana*

| | |
|---|---|
| **ID / SKU** | `832585807` / `00048` |
| **Price** | €13,80 |
| **Slug / URL** | `crema-viso-solare-spf-50` → https://cannabilla.it/products/crema-viso-solare-spf-50 |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > VISO • Shop > VISO > Creme Viso |
| **Brand / GTIN / MPN** | — / 8053617090195 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.12 kg / not set |
| **Images** | 5 (primary + 4 gallery) |
| **Options / Variants** | none |
| **Meta title** | Crema Viso Solare SPF 50 |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | — |
| **Created / Updated** | 2026-04-29 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/832585807/5736277786.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/832585807/5868004522.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/832585807/5868005275.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/832585807/5868002367.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/832585807/5868002349.jpg

**Key benefits:** Idratazione profonda · Protezione

**Formato:** 50 ml and 200ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  

**Come usarlo:** Applicare il prodotto ogni mattina prima dell’esposizione al sole, e ogni volta che se ne sente la necessità durante il periodo estivo e le giornate particolarmente assolate.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie |
| Filtri UV | riducono al minimo gli effetti indesiderati della radiazione UV sulla pelle, come eritemi, ustioni, fotosensibilizzazioni, macchie cutanee |
| Acido ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle Niacinamide: nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli grasse, tra il 4% e il 5% agisce anche contro le macchie cutanee. Nella crema viso Cannabilla la niacinamide è al 5% |
| Aloe Vera | è un ottimo idratante, utile in caso di pelle irritata o arrossata, aiuta la pelle a ristabilirsi e dona anche un effetto rinfrescante |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Caprylic/capric Triglyceride, Ethylhexyl Methoxycinnamate, Bis-ethylhexyloxyphenol Methoxyphenyl Triazine, Butyl Methoxydibenzoylmethane, Ethylhexyl Dimethyl Paba, Cannabis Sativa Seed Oil, Aloe Barbadensis Leaf Juice Powder, Niacinamide, Glycerin, Sodium Hyaluronate, Tocopheryl Acetate, Polysorbate 20, Sodium Acrylate/sodium Acryloyldimethyl Taurate Copolymer C15-19 Alkane, Polyglyceryl-6 Laurate, Polyglycerin-6, Polyacrylate Crosspolymer-6, Cannabidiol, Propanediol, Hydrated Silica, Parfum, Sodium Gluconate, Citric Acid, Potassium Sorbate, Sodium Benzoate, Terpineol, Cinnamyl Alcohol, Linalool, Amyl Salicylate, Linalyl Acetate, Vanillin

**Descrizione (testo):**

> La Crema Solare SPF 50 è formulata per essere il tuo scudo quotidiano contro i raggi UV , offrendo al contempo un vero e proprio trattamento idratante e anti-age grazie all'azione combinata della Canapa e di attivi botanici selezionati. Si presenta con una texture piacevole e facile da spalmare. La Crema Solare SPF 50 non lascia patine bianche sul viso e assorbendosi rapidamente non unge e non crea la tipica sensazione di pelle lucida o appesantita, rendendola perfetta per l'uso quotidiano, in città o in montagna, e ideale come base per il trucco. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 50 ml and 200ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna Come usarlo: Applicare il prodotto ogni mattina prima dell’esposizione al sole, e ogni volta che se ne sente la necessità durante il periodo estivo e le giornate particolarmente assolate. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa : ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie 🍃Filtri UV : riducono al minimo gli effetti indesiderati della radiazione UV sulla pelle, come eritemi, ustioni, fotosensibilizzazioni, macchie cutanee 🍃 Acido ialuronico: svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle 🍃 Niacinamide : nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e se …[full HTML in 05-products-clean.json]

---

### Hempilla SHAYANA 30 - Estratto Naturale di Canapa
<a id="hempilla-shayana-30-estratto-naturale-di-canapa-779064590"></a>

*Dalla tradizione Ayurvedica*

| | |
|---|---|
| **ID / SKU** | `779064590` / `00047` |
| **Price** | €40,00 |
| **Slug / URL** | `hempilla-shayana-30-estratto-naturale-di-canapa` → https://cannabilla.it/products/hempilla-shayana-30-estratto-naturale-di-canapa |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > BENESSERE MUSCOLARE e DERMOCURA • Blog > Appplicazioni di estratto di canapa sull'ombelico: funziona davvero? |
| **Brand / GTIN / MPN** | Cannabilla / 8053617090362 / — |
| **Google product category** | Health & Beauty > Personal Care > Massage & Relaxation |
| **Weight / Dimensions** | 0.1 kg / not set |
| **Images** | 7 (primary + 6 gallery) |
| **Options / Variants** | none |
| **Meta title** | Hempilla SHAYANA 30 - Estratto Naturale di Canapa |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 779064588, 779060136, 745529566, 454711844 |
| **Created / Updated** | 2025-09-02 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064590/5871267583.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064590/5875604236.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064590/4884752842.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064590/5871267575.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064590/5875619544.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064590/5875619574.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064590/5875616064.jpg

**Key benefits:** Texture leggera, assorbimento rapido

**Formato:** 10 ml  
**Nota:** Perché scegliere il nostro estratto:  

**Come usarlo:** Applica 2-3 gocce nell’ombelico prima di coricarti, massaggia delicatamente e lasciati avvolgere dai benefici di questo gesto millenario.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie

**Certificazioni:** 100% naturale · Registrato CPNP

**INCI:** CAPRYLIC/CAPRIC TRIGLYCERIDE, CANNABIS SATIVA LEAF EXTRACT, CANNABIDIOL 30%

**Descrizione (testo):**

> Scopri l'essenza della tradizione Ayurvedica con il nostro Estratto Naturale 100% di Canapa, appositamente formulato per l’applicazione topica e pensato in particolare per l’antica pratica dell’ungimento dell’ombelico. Secondo la tradizione Ayurvedica, l’Ombelico (detto anche N abhi ) è considerato un vero e proprio centro energetico del corpo, da cui si diramano oltre 70.000 N adis (Canali Energetici). L’applicazione di oli in questa zona viene tramandata come tecnica utile per riequilibrare le energie vitali , migliorare la digestione , favorire il rilassamento profondo , promuovere il benessere della pelle , e sostenere il naturale equilibrio ormonale e immunitario . 🌿 Perché scegliere il nostro estratto: 100% Canapa Naturale coltivata e lavorata in modo sostenibile Formula non unta , studiata per non macchiare i vestiti Assorbimento rapido , per un'applicazione semplice e discreta Delicatamente profumato , per un momento di benessere profondo 🧴 Formato: 10 ml 🌿 100% naturale. Come usarlo: Applica 2-3 gocce nell’ombelico prima di coricarti, massaggia delicatamente e lasciati avvolgere dai benefici di questo gesto millenario. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie INCI: CAPRYLIC/CAPRIC TRIGLYCERIDE, CANNABIS SATIVA LEAF EXTRACT, CANNABIDIOL 30%

---

### Hempilla SOMA 20 - Estratto Naturale di Canapa
<a id="hempilla-soma-20-estratto-naturale-di-canapa-779064588"></a>

*Dalla tradizione Ayurvedica*

| | |
|---|---|
| **ID / SKU** | `779064588` / `00046` |
| **Price** | €34,00 |
| **Slug / URL** | `hempilla-soma-20-estratto-naturale-di-canapa` → https://cannabilla.it/products/hempilla-soma-20-estratto-naturale-di-canapa |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > BENESSERE MUSCOLARE e DERMOCURA • Blog > Appplicazioni di estratto di canapa sull'ombelico: funziona davvero? |
| **Brand / GTIN / MPN** | Cannabilla / 8053617090355 / — |
| **Google product category** | Health & Beauty > Personal Care > Massage & Relaxation |
| **Weight / Dimensions** | 0.1 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Hempilla SOMA 20 - Estratto Naturale di Canapa |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 779064590, 779060136, 745529566, 454711844 |
| **Created / Updated** | 2025-09-02 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064588/5874348643.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064588/5874348647.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064588/5874225598.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779064588/5871267565.png

**Key benefits:** Texture leggera, assorbimento rapido

**Formato:** 10 ml  
**Nota:** Perché scegliere il nostro estratto:  

**Come usarlo:** Applica 2-3 gocce nell’ombelico prima di coricarti, massaggia delicatamente e lasciati avvolgere dai benefici di questo gesto millenario.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie

**Certificazioni:** 100% naturale · Registrato CPNP

**INCI:** CAPRYLIC/CAPRIC TRIGLYCERIDE, CANNABIS SATIVA LEAF EXTRACT, CANNABIDIOL 20%

**Descrizione (testo):**

> Scopri l'essenza della tradizione Ayurvedica con il nostro Estratto Naturale 100% di Canapa, appositamente formulato per l’applicazione topica e pensato in particolare per l’antica pratica dell’ungimento dell’ombelico. Secondo la tradizione Ayurvedica, l’Ombelico (detto anche N abhi ) è considerato un vero e proprio centro energetico del corpo, da cui si diramano oltre 70.000 N adis (Canali Energetici). L’applicazione di oli in questa zona viene tramandata come tecnica utile per riequilibrare le energie vitali , migliorare la digestione , favorire il rilassamento profondo , promuovere il benessere della pelle , e sostenere il naturale equilibrio ormonale e immunitario . 🌿 Perché scegliere il nostro estratto: 100% Canapa Naturale coltivata e lavorata in modo sostenibile Formula non unta , studiata per non macchiare i vestiti Assorbimento rapido , per un'applicazione semplice e discreta Delicatamente profumato , per un momento di benessere profondo 🧴 Formato: 10 ml 🌿 100% naturale. Come usarlo: Applica 2-3 gocce nell’ombelico prima di coricarti, massaggia delicatamente e lasciati avvolgere dai benefici di questo gesto millenario. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie INCI: CAPRYLIC/CAPRIC TRIGLYCERIDE, CANNABIS SATIVA LEAF EXTRACT, CANNABIDIOL 20%

---

### Hempilla SHANTI 10 - Estratto Naturale di Canapa
<a id="hempilla-shanti-10-estratto-naturale-di-canapa-779060136"></a>

*Dalla tradizione Ayurvedica*

| | |
|---|---|
| **ID / SKU** | `779060136` / `00045` |
| **Price** | €27,00 |
| **Slug / URL** | `hempilla-shanti-10-estratto-naturale-di-canapa` → https://cannabilla.it/products/hempilla-shanti-10-estratto-naturale-di-canapa |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > BENESSERE MUSCOLARE e DERMOCURA • Blog > Appplicazioni di estratto di canapa sull'ombelico: funziona davvero? |
| **Brand / GTIN / MPN** | Cannabilla / 8053617090348 / — |
| **Google product category** | Health & Beauty > Personal Care > Massage & Relaxation |
| **Weight / Dimensions** | 0.1 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Hempilla SHANTI 10 - Estratto Naturale di Canapa |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 745529566, 779064588, 779064590, 454711844 |
| **Created / Updated** | 2025-09-02 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779060136/5871247466.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779060136/5874351349.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779060136/5874348492.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/779060136/5871269768.webp

**Key benefits:** Texture leggera, assorbimento rapido

**Formato:** 10 ml  
**Nota:** Perché scegliere il nostro estratto:  

**Come usarlo:** Applica 2-3 gocce nell’ombelico prima di coricarti, massaggia delicatamente e lasciati avvolgere dai benefici di questo gesto millenario.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie

**Certificazioni:** 100% naturale · Registrato CPNP

**INCI:** CAPRYLIC/CAPRIC TRIGLYCERIDE, CANNABIS SATIVA LEAF EXTRACT, CANNABIDIOL 10%

**Descrizione (testo):**

> Scopri l'essenza della tradizione Ayurvedica con il nostro Estratto Naturale 100% di Canapa, appositamente formulato per l’applicazione topica e pensato in particolare per l’antica pratica dell’ungimento dell’ombelico. Secondo la tradizione Ayurvedica, l’Ombelico (detto anche N abhi ) è considerato un vero e proprio centro energetico del corpo, da cui si diramano oltre 70.000 N adis (Canali Energetici). L’applicazione di oli in questa zona viene tramandata come tecnica utile per riequilibrare le energie vitali , migliorare la digestione , favorire il rilassamento profondo , promuovere il benessere della pelle , e sostenere il naturale equilibrio ormonale e immunitario . 🌿 Perché scegliere il nostro estratto: 100% Canapa Naturale coltivata e lavorata in modo sostenibile Formula non unta , studiata per non macchiare i vestiti Assorbimento rapido , per un'applicazione semplice e discreta Delicatamente profumato, per un momento di benessere profondo 🧴 Formato: 10 ml 🌿 100% naturale. Come usarlo: Applica 2-3 gocce nell’ombelico prima di coricarti, massaggia delicatamente e lasciati avvolgere dai benefici di questo gesto millenario. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie INCI: CAPRYLIC/CAPRIC TRIGLYCERIDE, CANNABIS SATIVA LEAF EXTRACT, CANNABIDIOL 10%

---

### Carta Regalo Digitale Cannabilla
<a id="carta-regalo-digitale-cannabilla-768731040"></a>

| | |
|---|---|
| **ID / SKU** | `768731040` / `00044` |
| **Price** | €0,00 |
| **Slug / URL** | `carta-regalo-digitale-cannabilla` → https://cannabilla.it/products/carta-regalo-digitale-cannabilla |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | — |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | — / not set |
| **Images** | 1 (primary + 0 gallery) |
| **Options / Variants** |  (4) |
| **Meta title** | Carta Regalo Digitale Cannabilla |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | — |
| **Created / Updated** | 2025-07-22 / 2026-07-05 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg

**Descrizione (testo):**

> Regala la libertà di scegliere con la Carta Regalo Digitale Cannabilla. Dopo l'acquisto, la carta regalo verrà inviata via e-mail insieme alle istruzioni per il suo utilizzo. Può essere utilizzata come metodo di pagamento per qualsiasi prodotto disponibile sullo shop Cannabilla, rendendola il regalo perfetto per ogni occasione. Ideale per compleanni, festività e occasioni speciali. 🎁 Come funziona La Carta Regalo viene consegnata via e-mail e può essere utilizzata su tutti i prodotti Cannabilla. Facile da riscattare durante il checkout.

---

### Olio di Iperico Lenitivo
<a id="olio-di-iperico-lenitivo-760499148"></a>

| | |
|---|---|
| **ID / SKU** | `760499148` / `00043` |
| **Price** | €12,50 |
| **Slug / URL** | `olio-di-iperico-lenitivo-760499148` → https://cannabilla.it/products/olio-di-iperico-lenitivo-760499148 |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > BENESSERE MUSCOLARE e DERMOCURA |
| **Brand / GTIN / MPN** | Cannabilla / 8053617090232 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.8 kg / not set |
| **Images** | 2 (primary + 1 gallery) |
| **Options / Variants** | none |
| **Meta title** | Olio di Iperico Lenitivo |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | — |
| **Created / Updated** | 2025-06-18 / 2026-07-04 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/760499148/4987347171.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/760499148/5871307922.png

**Key benefits:** Azione lenitiva e calmante · Adatta a pelli sensibili · Azione antiossidante · Rigenerante ed elasticizzante

**Formato:** 30 ml  
**Packaging:** Packaging plastic free: vetro ambrato con pipetta contagocce, 100% riciclabile  
**Nota:** 100% naturale, autoprodotto, senza profumo né conservanti  

**Come usarlo:** Applicare poche gocce direttamente sulla parte interessata, massaggiando fino a completo assorbimento. Ripetere l’applicazione al bisogno. Evitare l’esposizione al sole dopo l’uso: l’olio di iperico è fotosensibilizzante.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi |
| Estratto di Calendula | grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l’estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emolliente e riepitelizzante. |
| Estratto di Camomilla | ha proprietà antipruriginose, cicatrizzanti e disarrossanti, grazie al contenuto di flavonoidi a livello topico svolge un’azione antinfiammatoria. |
| Olio di mandorle | è in grado di alleviare la secchezza cutanea, svolge un’azione emolliente e lenitiva |
| Estratto di Iperico | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini) · Ingredienti biologici

**INCI:** Helianthus Annuus Seed Oil, Hypericum Perforatum Flower Extract, Tocopheryl Acetate

**Descrizione (testo):**

> L’olio di Iperico, conosciuto anche come olio di San Giovanni , è un macerato oleoso tradizionale dalle proprietà lenitive, cicatrizzanti e rigeneranti, ideale per trattare pelle irritata, sensibile o arrossata. Viene realizzato tramite macerazione solare dei fiori freschi in olio di girasole biologico, arricchito con vitamina E(antiossidante naturale), per offrire un prodotto puro, efficace e naturalmente protettivo. Ideale in caso di: Arrossamenti e screpolature; Irritazioni da sole, freddo, vento o sfregamento; Scottature, piccoli tagli o lesioni; Post depilazione o rasatura; Pelle secca, sensibile o stressata Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato : 30 ml ♻ Packaging plastic free : vetro ambrato con pipetta contagocce, 100% riciclabile 🌿 100% naturale, autoprodotto, senza profumo né conservanti Come usarlo Applicare poche gocce direttamente sulla parte interessata, massaggiando fino a completo assorbimento. Ripetere l’applicazione al bisogno. Evitare l’esposizione al sole dopo l’uso: l’olio di iperico è fotosensibilizzante. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD: svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi 🍃 Estratto di Calendula: grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l’estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emolliente e riepitelizzante. 🍃 Estratto di Camomilla: ha proprietà antipruriginose, cicatrizzanti e disar …[full HTML in 05-products-clean.json]

---

### Happy Feet – Balsamo Naturale per il benessere dei piedi
<a id="happy-feet-balsamo-naturale-per-il-benessere-dei-piedi-760202063"></a>

*Protegge e Idrata i Piedi*

| | |
|---|---|
| **ID / SKU** | `760202063` / `00042` |
| **Price** | €15,80 |
| **Slug / URL** | `happy-feet-balsamo-naturale-per-il-benessere-dei-piedi` → https://cannabilla.it/products/happy-feet-balsamo-naturale-per-il-benessere-dei-piedi |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > BENESSERE MUSCOLARE e DERMOCURA • Shop > CORPO |
| **Brand / GTIN / MPN** | Cannabilla / 8053617090270 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.3 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Happy Feet – Balsamo Naturale per il benessere dei piedi |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 655951926, 449333379, 659654040, 522417741, 660161320 |
| **Created / Updated** | 2025-06-17 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/760202063/4985242827.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/760202063/5081538224.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/760202063/5081547905.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/760202063/5871253259.png

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Nutriente · Rigenerante ed elasticizzante

**Formato:** 50 ml  
**Packaging:** Vaso in plastica 100% riciclabile, con etichetta informativa, privo di confezione esterna  
**Nota:** 100% naturale. Eventuali variazioni di colore o odore sono indice della naturalità degli ingredienti.  

**Come usarlo:** Applicare il prodotto sui piedi puliti, insistendo su talloni, pianta e zone più secche o ispessite. Massaggiare fino a completo assorbimento. Utilizzare una o più volte al giorno secondo necessità.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di omega 3 e 6, ha azione emolliente e riequilibrante, perfetto per ammorbidire la pelle secca dei piedi |
| CBD | aiuta a ridurre prurito, irritazioni e rossori |
| Olio di Carota | ricco di betacarotene e vitamina A, stimola il rinnovamento cutaneo |
| Estratto di Calendula | emolliente, idratante e protettivo, ideale per la pelle fragile e stressata |
| Olio di Jojoba | riparatore della barriera cutanea, contribuisce a proteggere la pelle da screpolature e micro-lesioni |
| Estratto di Camomilla & Bisabololo | azione calmante e disarrossante |
| Oli essenziali di Tea Tree, Eucalipto, Menta | freschezza immediata, azione purificante e deodorante |
| Burro di Mango, Cacao e Karité | ricchi e nutrienti, aitano a contrastare la secchezza profonda e restituiscono morbidezza |
| Olio di Mandorle e Vinaccioli | lenitivi, ottimi per pelli irritate o stressate |
| Lanolina e Cera d’Api | creano una barriera protettiva contro gli agenti esterni e aiutano a trattenere l’idratazione |
| Estratto di Iperico | lenitivo e rigenerante, utile in caso di pelle danneggiata o stressata |
| Sangue di Drago | resina vegetale nota per le sue proprietà protettive, ideale per pelli irritate o soggette a stress |
| Vitamina E | antiossidante, contribuisce a proteggere la pelle dall’invecchiamento e dalle aggressioni esterne |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Mangifera Indica Seed Butter, Butyrospermum Parkii Butter, Prunus Amygdalus Dulcis Oil, Lanolin, Caprylic/Capric Triglyceride, Beeswax, Rosa Moschata Seed Oil, Cannabis Sativa Seed Oil, Theobroma Cacao Seed Butter, Helianthus Annuus Seed Oil, Zea Mays Germ Oil, Butyrospermum Parkii Butter Extract, Calendula Officinalis Flower Extract, Hypericum Perforatum Flower Extract, Cannabidiol, Daucus Carota Sativa Root, Croton Lechleri Resin Powder, Rosmarinus Officinalis Extract, Argania Spinosa Kernel Oil, Vitis Vinifera Seed Oil, Chamomilla Recutita Flower Extract, Bisabolol, Melaleuca Alternifolia Leaf Oil, Eucalyptus Globulus Leaf Oil, Mentha Piperita Oil, Tocopheryl Acetate, Parfum, Benzyl Salicylate, Limonene, Linalyl Acetate, Hexyl Cinnamal, Citrus Aurantium Dulcis Peel Oil, Citronellol, Linalool, Alpha-Isomethyl Ionone, Geranyl Acetate, Benzyl Alcohol, Citral, Pinene, Beta-Caryophyllene, Limonene, Alpha-Terpinene, Terpineol, Terpinolene, Menthol

**Descrizione (testo):**

> Happy Feet è un balsamo pensato per il benessere dei piedi, utile come coadiuvante nel trattamento di inestetismi e disagi cutanei tipici di questa zona. Ideale in caso di: Ispessimento e indurimento della pelle dei piedi; Secchezza estrema, screpolature e desquamazione ; Prurito , irritazioni e fastidi cutanei. La sua formula ricca e concentrata è studiata per nutrire, ammorbidire e rigenerare anche la pelle più dura e arida, rendendo i piedi morbidi, lisci e visibilmente più sani. Contiene un mix di estratti vegetali e oli essenziali dalle proprietà lenitive, emollienti e rinfrescanti come Olio di Semi di Canapa, Camomilla, Calendula, Carota, Menta, Tea Tree ed Eucalipto. Applicato regolarmente, Happy Feet aiuta a mantenere l’idratazione ottimale, prevenendo la formazione di calli e indurimenti. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 50 ml ♻ Vaso in plastica 100% riciclabile , con etichetta informativa, privo di confezione esterna 🌿 100% naturale. Eventuali variazioni di colore o odore sono indice della naturalità degli ingredienti. Come usarlo: Applicare il prodotto sui piedi puliti, insistendo su talloni, pianta e zone più secche o ispessite. Massaggiare fino a completo assorbimento. Utilizzare una o più volte al giorno secondo necessità. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di omega 3 e 6, ha azione emolliente e riequilibrante, perfetto per ammorbidire la pelle secca dei piedi 🍃 CBD: aiuta a ridurre prurito, irritazioni e rossori 🍃 Olio di Carota: ricco di betacarotene e vitamina A, stimola il rinnovamento cutaneo 🍃 Estratto di Calendula: emolliente, idratante e protettivo, ideale per la pelle fragile e stressata 🍃 Olio di Jojoba: riparatore della barriera cutanea, contr …[full HTML in 05-products-clean.json]

---

### T-Shirt Unisex - Logo Cannabilla
<a id="t-shirt-unisex-logo-cannabilla-745649266"></a>

| | |
|---|---|
| **ID / SKU** | `745649266` / `00041` |
| **Price** | €13,00 |
| **Slug / URL** | `t-shirt-unisex-logo-cannabilla` → https://cannabilla.it/products/t-shirt-unisex-logo-cannabilla |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > MERCHANDISING |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.13 kg / not set |
| **Images** | 7 (primary + 6 gallery) |
| **Options / Variants** | Size (7) |
| **Meta title** | Unisex t-shirt |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | — |
| **Created / Updated** | 2025-04-25 / 2026-07-05 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885319667.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885328140.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885326099.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885328145.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885326104.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885311738.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885311743.jpg

**Key benefits:** Texture leggera, assorbimento rapido · Rigenerante ed elasticizzante

**Descrizione (testo):**

> La T-Shirt Unisex con il Logo Cannabilla è una maglia morbida e leggera, con la giusta elasticità. Comoda e valorizzante per tutte le forme è ideale per outfit da tutti i giorni soprattutto nelle giornate calde. 🧢 Materiale 100% cotone pettinato e filato ad anello (i colori mélange contengono poliestere) 📏 Vestibilità Vestibilità aderente con design Unisex. 🧼 Cura del prodotto Lavare in lavatrice a bassa temperatura. Non candeggiare. Asciugare all'aria per preservare qualità e stampa. Questo prodotto viene realizzato appositamente per te non appena effettui un ordine, motivo per cui impieghiamo un po' più di tempo per la consegna. Produrre prodotti su richiesta anziché in grandi quantità aiuta a ridurre la sovrapproduzione, quindi grazie per aver preso decisioni di acquisto ponderate! Prodotto greggio proveniente da Nicaragua, Messico, Honduras o Stati Uniti. Restrizioni di età: Per adulti Garanzia UE: 2 anni Altre informazioni sulla conformità: Conforme ai requisiti sui livelli di piombo, cadmio, ftalati e bisfenoli. In conformità con il Regolamento generale sulla sicurezza dei prodotti (GPSR), Oak Inc. garantisce che tutti i prodotti di consumo offerti siano sicuri e conformi agli standard UE. Per qualsiasi domanda o dubbio in merito alla sicurezza dei prodotti, contattateci all'indirizzo alex.oak@company.com oppure scriveteci a 123 Main Street, Anytown, Country.

---

### Berretto con Risvolto - Logo Cannabilla
<a id="berretto-con-risvolto-logo-cannabilla-745559972"></a>

| | |
|---|---|
| **ID / SKU** | `745559972` / `00040` |
| **Price** | €13,00 |
| **Slug / URL** | `berretto-con-risvolto-logo-cannabilla` → https://cannabilla.it/products/berretto-con-risvolto-logo-cannabilla |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > MERCHANDISING |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.09 kg / not set |
| **Images** | 12 (primary + 11 gallery) |
| **Options / Variants** | Color (6) |
| **Meta title** | Berretto con Risvolto - Logo Cannabilla |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 718984967, 745542230, 719002182, 745649266, 719002107 |
| **Created / Updated** | 2025-04-25 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885303627.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885300972.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885247409.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885300997.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885276270.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885303670.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885276275.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885300992.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885276280.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885305526.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885247419.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885305566.png

**Descrizione (testo):**

> Il Berretto con Risvolto Cannabilla è l'accessorio perfetto per affrontare le giornate più fredde con comfort e stile. Realizzato in morbido Acrilico Turbo 100% , offre una vestibilità aderente e confortevole, ideale per l'uso quotidiano. Il design con risvolto e lo stile Unisex lo rendono un capo versatile, perfetto per completare qualsiasi outfit. Leggero, resistente e ipoallergenico, è pensato per garantire calore e praticità durante tutta la stagione 🧢 Materiale 100% Acrilico Turbo. Ipoallergenico 📏 Vestibilità Vestibilità aderente con design Unisex. 🧼 Cura del prodotto Lavare a mano e lasciare asciugare naturalmente. Questo prodotto viene realizzato appositamente per te non appena effettui un ordine, motivo per cui impieghiamo un po' più di tempo per la consegna. Produrre prodotti su richiesta anziché in grandi quantità aiuta a ridurre la sovrapproduzione, quindi grazie per aver preso decisioni di acquisto ponderate! Prodotto proveniente da Vietnam, Bangladesh o Repubblica di Corea Restrizioni di età: Per adulti Garanzia UE: 2 anni Altre informazioni sulla conformità: Conforme ai requisiti sui livelli di piombo, cadmio, ftalati e bisfenoli. In conformità con il Regolamento generale sulla sicurezza dei prodotti (GPSR), Oak Inc. garantisce che tutti i prodotti di consumo offerti siano sicuri e conformi agli standard UE. Per qualsiasi domanda o dubbio in merito alla sicurezza dei prodotti, contattateci all'indirizzo alex.oak@company.com oppure scriveteci a 123 Main Street, Anytown, Country.

---

### Cappello con Visiera - Logo Cannabilla
<a id="cappello-con-visiera-logo-cannabilla-745542230"></a>

| | |
|---|---|
| **ID / SKU** | `745542230` / `00039` |
| **Price** | €15,00 |
| **Slug / URL** | `cappello-con-visiera-logo-cannabilla` → https://cannabilla.it/products/cappello-con-visiera-logo-cannabilla |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > MERCHANDISING |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.09 kg / not set |
| **Images** | 9 (primary + 8 gallery) |
| **Options / Variants** | Color (2) |
| **Meta title** | Cappello con Visiera - Logo Cannabilla |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 745559972, 718984967, 719002182, 745649266, 719002107 |
| **Created / Updated** | 2025-04-25 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885312914.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885195854.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885161381.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885305659.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885312917.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885199068.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885161376.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885305664.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885305669.png

**Descrizione (testo):**

> Il Cappello con Visiera Cannabilla è un accessorio versatile dal design classico, perfetto per completare qualsiasi look casual. Realizzato in morbido twill di cotone chino, offre comfort, leggerezza e una vestibilità regolabile per l'uso quotidiano. Il profilo basso, la visiera curva e il cinturino regolabile con fibbia anticata donano uno stile intramontabile, ideale per il tempo libero e le attività all'aperto. 🧢 Materiale 100% twill di cotone chino. (Versione Green Camo: 35% twill di cotone chino, 65% poliestere.) 📏 Vestibilità Design destrutturato a 6 pannelli con profilo basso e cinturino regolabile. 🧼 Cura del prodotto Pulire con un panno umido o lavare delicatamente a mano quando necessario. Questo prodotto viene realizzato appositamente per te non appena effettui un ordine, motivo per cui impieghiamo un po' più di tempo per la consegna. Produrre prodotti su richiesta anziché in grandi quantità aiuta a ridurre la sovrapproduzione, quindi grazie per aver preso decisioni di acquisto ponderate! Prodotto proveniente da Vietnam o Bangladesh. Restrizioni di età: Per adulti Garanzia UE: 2 anni Altre informazioni sulla conformità: Conforme ai requisiti sui livelli di piombo, cadmio, ftalati e bisfenoli. In conformità con il Regolamento generale sulla sicurezza dei prodotti (GPSR), Oak Inc. garantisce che tutti i prodotti di consumo offerti siano sicuri e conformi agli standard UE. Per qualsiasi domanda o dubbio in merito alla sicurezza dei prodotti, contattateci all'indirizzo alex.oak@company.com oppure scriveteci a 123 Main Street, Anytown, Country.

---

### Hempilla ANANDA 5 - Estratto Naturale di Canapa
<a id="hempilla-ananda-5-estratto-naturale-di-canapa-745529566"></a>

*Dalla tradizione Ayurvedica*

| | |
|---|---|
| **ID / SKU** | `745529566` / `00038` |
| **Price** | €19,60 |
| **Slug / URL** | `hempilla-ananda-5-estratto-naturale-di-canapa` → https://cannabilla.it/products/hempilla-ananda-5-estratto-naturale-di-canapa |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > BENESSERE MUSCOLARE e DERMOCURA • Blog > Appplicazioni di estratto di canapa sull'ombelico: funziona davvero? |
| **Brand / GTIN / MPN** | Cannabilla / 8053617090331 / — |
| **Google product category** | Health & Beauty > Personal Care > Massage & Relaxation |
| **Weight / Dimensions** | 0.1 kg / not set |
| **Images** | 5 (primary + 4 gallery) |
| **Options / Variants** | none |
| **Meta title** | Hempilla ANANDA 5 - Estratto Naturale di Canapa |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 779060136, 779064588, 779064590, 454711844 |
| **Created / Updated** | 2025-04-25 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745529566/5875619526.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745529566/5875619512.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745529566/5875616030.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745529566/4884752842.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745529566/5875619506.jpg

**Key benefits:** Texture leggera, assorbimento rapido

**Formato:** 10 ml  
**Nota:** Perché scegliere il nostro estratto:  

**Come usarlo:** Applica 2-3 gocce nell’ombelico prima di coricarti, massaggia delicatamente e lasciati avvolgere dai benefici di questo gesto millenario.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie

**Certificazioni:** 100% naturale · Registrato CPNP

**INCI:** CAPRYLIC/CAPRIC TRIGLYCERIDE, CANNABIS SATIVA LEAF EXTRACT, CANNABIDIOL 5%

**Descrizione (testo):**

> Scopri l'essenza della tradizione Ayurvedica con il nostro Estratto Naturale 100% di Canapa, appositamente formulato per l’applicazione topica e pensato in particolare per l’antica pratica dell’ungimento dell’ombelico. Secondo la tradizione Ayurvedica, l’Ombelico (detto anche N abhi ) è considerato un vero e proprio centro energetico del corpo, da cui si diramano oltre 70.000 N adis (Canali Energetici). L’applicazione di oli in questa zona viene tramandata come tecnica utile per riequilibrare le energie vitali , migliorare la digestione , favorire il rilassamento profondo , promuovere il benessere della pelle , e sostenere il naturale equilibrio ormonale e immunitario . 🌿 Perché scegliere il nostro estratto: 100% canapa naturale coltivata e lavorata in modo sostenibile Formula non unta , studiata per non macchiare i vestiti Assorbimento rapido , per un'applicazione semplice e discreta Delicatamente profumato, per un momento di benessere profondo 🧴 Formato: 10 ml 🌿 100% naturale. Come usarlo: Applica 2-3 gocce nell’ombelico prima di coricarti, massaggia delicatamente e lasciati avvolgere dai benefici di questo gesto millenario. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie INCI: CAPRYLIC/CAPRIC TRIGLYCERIDE, CANNABIS SATIVA LEAF EXTRACT, CANNABIDIOL 5%

---

### Hemp-oo - Shampoo Delicato e Nutriente
<a id="hemp-oo-shampoo-delicato-e-nutriente-733763254"></a>

| | |
|---|---|
| **ID / SKU** | `733763254` / `00037` |
| **Price** | €9,90 |
| **Slug / URL** | `hemp-oo-shampoo-delicato-e-nutriente` → https://cannabilla.it/products/hemp-oo-shampoo-delicato-e-nutriente |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > CAPELLI • Blog > Come prendersi cura delle pelle in inverno • Shop > CAPELLI > Shampoo |
| **Brand / GTIN / MPN** | — / 8053617090553 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care > Makeup Removers |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Hemp-oo - Shampoo Delicato e Nutriente |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 733723745, 679599606, 733723503, 733735292, 655210357, 407333431 |
| **Created / Updated** | 2025-03-12 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733763254/4911996421.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733763254/5868012521.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733763254/5868012527.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733763254/5868012533.jpg

**Key benefits:** Idratazione profonda · Nutriente · Per pelli grasse / a tendenza acneica · Rigenerante ed elasticizzante · Protezione

**Formato:** 200 ml  
**Packaging:** Flacone in plastica 100% riciclabile  
**Nota:** Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto.  

**Come usarlo:** Applicare massaggiando su cute e capelli bagnati, successivamente risciacquare e proseguire con la routine. Per dei capelli ancora più idratati e nutriti applica anche l’olio Elis Hair - Olio per capelli Cannabilla.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva |
| Cheratina vegetale | cheratina vegetale ottenuta da proteine idrolizzate di canapa e riso. Contribuisce alla creazione di un film protettivo e ristrutturante sulla fibra capillare compressa. Possiede spiccate proprietà condizionanti e sostantivanti nei confronti dei capelli. Migliora la districabilità e dona corpo, volume e lucentezza alla capigliatura. Grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l'estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emolliente e riepitelizzante |
| Estratto di Ortica | stimola la microcircolazione del cuoio capelluto, rinforza le radici e regola l’eccesso di sebo per un cuoio capelluto più fresco e pulito. |
| Estratto di Rosmarino | svolge un'azine antiossidante e migliora il microcircolo del cuoio capelluto |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini) · CPNP n. 5147852

**INCI:** Aqua, Ammonium lauryl sulfate, Rosmarinus officinalis leaf water, Cocamidopropyl betaine, Sodium chloride, Glycerin, Urtica dioica root extract, Rosmarinus officinalis leaf extract, Hydrolyzed rice protein, Cannabis sativa seed oil, Hydrolyzed hemp seed extract, Parfum, Phenoxyethanol, Ethylhexylglycerin, Potassium sorbate, Sodium benzoate, Benzyl alcohol, Citric acid, Linalyl acetate, Limonene, Hexamethylindanopyran

**Descrizione (testo):**

> Hemp-oo è uno Shampoo delicato e nutriente, adatto anche ad un uso frequente. Contiene Cheratina Vegetale ottenuta da proteine idrolizzate da Semi di Canapa e Riso che contribuisce alla creazione di un film protettivo e ristrutturante sulla fibra capillare, fortificando i capelli e conferendogli una maggiore elasticità. Hemp-oo contiene anche Olio di canapa che idrata i capelli senza appesantirli, calma e protegge il cuoio capelluto. E’ presente anche l’ estratto di Ortica , pianta nota per stimolare la microcircolazione del cuoio capelluto, rinforzare le radici e regolare l’eccesso di sebo per un cuoio capelluto più fresco e pulito. Contiene anche estratto di rosmarino che svolge un’azione purificante, per una detersione profonda, ma delicata. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 200 ml ♻ Flacone in plastica 100% riciclabile 🌿Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto. Come usarlo: Applicare massaggiando su cute e capelli bagnati, successivamente risciacquare e proseguire con la routine. Per dei capelli ancora più idratati e nutriti applica anche l’olio Elis Hair - Olio per capelli Cannabilla. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva 🍃 Cheratina vegetale: cheratina vegetale ottenuta da proteine idrolizzate di canapa e riso. Contribuisce alla creazione di un film protettivo e ristrutturante sulla fibra capillare compressa. Possiede spiccate proprietà condizionanti e sostantivanti nei confronti dei capelli. Migliora  …[full HTML in 05-products-clean.json]

---

### Bagno Doccia Detergente e Idratante
<a id="bagno-doccia-detergente-e-idratante-733723745"></a>

*Deterge delicatamente la Pelle*

| | |
|---|---|
| **ID / SKU** | `733723745` / `00036` |
| **Price** | €9,60 |
| **Slug / URL** | `bagno-doccia-detergente-e-idratante` → https://cannabilla.it/products/bagno-doccia-detergente-e-idratante |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > DETERGENTI • Blog > Come prendersi cura delle pelle in inverno |
| **Brand / GTIN / MPN** | Cannabilla / 8053617090577 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care > Makeup Removers |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 5 (primary + 4 gallery) |
| **Options / Variants** | none |
| **Meta title** | Bagno Doccia Detergente e Idratante |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 733723503, 733735292, 655210357, 449333379, 659654040, 367226103, 454711844 |
| **Created / Updated** | 2025-03-12 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723745/4911999906.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723745/4886452361.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723745/4886439232.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723745/4886442691.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723745/4886442696.png

**Key benefits:** Idratazione profonda · Per pelli grasse / a tendenza acneica

**Formato:** 250 ml  
**Packaging:** Flacone in plastica 100% riciclabile  
**Nota:** Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto.  

**Come usarlo:** Applicare sulla pelle umida e massaggiare ottenendo una leggera schiuma, successivamente risciacquare. Per una pelle ancora più morbida ed idratata applicare successivamente, sulla pelle asciutta, la Crema Corpo Idratante Cannabilla o l’Olio Corpo Idratante Cannabilla .

**Avvertenze:** Conservare in luogo fresco e asciutto al riparo da luce. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Evitare di lasciare il prodotto aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva |
| Glicerina vegetale | mantiene la pelle idratata e morbida |
| Estratto di Calendula | grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l'estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emolliente e riepitelizzante |
| Estratto di Malva | svolge un'azione antipruriginosa e astringente, contiene mucillagini che la rendono un ottimo idratante |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini) · CPNP n. 5147817

**INCI:** Aqua, Ammonium lauryl sulfate, Lavandula angustifolia flower water, Cocamidopropyl betaine, Sodium chloride, Glycerin, Malva sylvestris flower extract, Calendula officinalis flower extract, Cannabis sativa seed oil, Parfum, Phenoxyethanol, Ethylhexylglycerin, Potassium sorbate, Sodium benzoate, Benzyl alcohol, Citric acid, Hydroxycitronellal, Citronellol, Amyl salicylate, Citrus aurantium dulcis peel oil, Limonene, Linalyl acetate

**Descrizione (testo):**

> Il Bagno Doccia deterge delicatamente la pelle grazie alla sua base lavante delicata. La formula è arricchita con estratti vegetali i n grado di mantenere l’idratazione a lungo, come la Malva e la Calendula . Queste piante contengono mucillagini che ammorbidiscono la pelle e la proteggono dalla disidratazione. L’ Olio di canapa , ricco di acidi grassi omega 3 e omega 6, e la Glicerina potenziano il potere idratante del bagnodoccia, lasciando la pelle morbida, fresca e protetta. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 250 ml ♻ Flacone in plastica 100% riciclabile 🌿Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto. Come usarlo: Applicare sulla pelle umida e massaggiare ottenendo una leggera schiuma, successivamente risciacquare. Per una pelle ancora più morbida ed idratata applicare successivamente, sulla pelle asciutta, la Crema Corpo Idratante Cannabilla o l’Olio Corpo Idratante Cannabilla . Conservare in luogo fresco e asciutto al riparo da luce. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Evitare di lasciare il prodotto aperto per lunghi periodi. Cosa contiene: 🍃 Olio di canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva 🍃 Glicerina vegetale: mantiene la pelle idratata e morbida 🍃 Estratto di Calendula: grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l'estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emolliente e riepitelizzante 🍃 Estratto di Malva: svolge un'azione antipruriginosa e astringente, contiene mucillagini che la rendono un ottimo idratante Prodotto cosmetico a base di canapa, conforme alle norme nazionali ed europee, registrato nel portale …[full HTML in 05-products-clean.json]

---

### Detergente Intimo Delicato
<a id="detergente-intimo-delicato-733735292"></a>

| | |
|---|---|
| **ID / SKU** | `733735292` / `00035` |
| **Price** | €8,70 |
| **Slug / URL** | `detergente-intimo-delicato` → https://cannabilla.it/products/detergente-intimo-delicato |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > DETERGENTI • Blog > Come prendersi cura delle pelle in inverno |
| **Brand / GTIN / MPN** | — / 8053617090560 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care > Makeup Removers |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 3 (primary + 2 gallery) |
| **Options / Variants** | none |
| **Meta title** | Detergente Intimo Delicato |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 733723503, 733723745, 733763254, 655210357, 449333379, 367226103 |
| **Created / Updated** | 2025-03-12 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733735292/4911999944.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733735292/5868002409.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733735292/5868005299.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante

**Formato:** 200 ml  
**Packaging:** Flacone in plastica 100% riciclabile  
**Nota:** Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto.  

**Come usarlo:** Applicare una piccola quantità di prodotto sulla zona interessata e risciacquare con cura.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva |
| Glicerina vegetale | mantiene la pelle idratata e morbida |
| Estratto di Camomilla | ha proprietà lenitive e calmanti |
| Estratto di Altea | nutre e lenisce le pelli sensibili |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini) · CPNP n. 5147846

**INCI:** Aqua, Ammonium lauryl sulfate, Chamomilla recutita flower water, Cocamidopropyl betaine, Sodium chloride, Glycerin, Achillea millefolium extract, Althaea officinalis root extract, Avena sativa leaf/stalk extract, Cannabis sativa seed oil, Saccharomyces ferment lysate filtrate, Parfum, Phenoxyethanol, Ethylhexylglycerin, Potassium sorbate, Sodium benzoate, Benzyl alcohol, Citric acid, Menthol

**Descrizione (testo):**

> Il Detergente Intimo Delicato è adatto all’utilizzo quotidiano. Contiene Camomilla, Achillea, Altea e Avena : questi estratti garantiscono una profonda idratazione lasciando una sensazione di freschezza e benessere che dura tutto il giorno e contemporaneamente hanno anche un’azione emolliente, lenitiva e antipruriginosa. La presenza dell’ Olio di Canapa aiuta a mantenere la pelle idratata e svolge un’azione lenitiva. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 200 ml ♻ Flacone in plastica 100% riciclabile 🌿Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto. Come usarlo: Applicare una piccola quantità di prodotto sulla zona interessata e risciacquare con cura. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva 🍃 Glicerina vegetale: mantiene la pelle idratata e morbida 🍃 Estratto di Camomilla: ha proprietà lenitive e calmanti 🍃 Estratto di Altea : nutre e lenisce le pelli sensibili Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP con il numero 5147846, non destinato a diagnosi/cura malattie INCI: Aqua, Ammonium lauryl sulfate, Chamomilla recutita flower water, Cocamidopropyl betaine, Sodium chloride, Glycerin, Achillea millefolium extract, Althaea officinalis root extract, Avena sativa leaf/stalk extract, Cannabis sativa seed oil, Saccharomyces ferment lysate filtrate, Parfum, Phenoxyethanol, Ethylhexylglycerin, Potassium sorbate, Sodium benzoate, Benzyl a …[full HTML in 05-products-clean.json]

---

### Sapone Mani Delicato
<a id="sapone-mani-delicato-733723503"></a>

| | |
|---|---|
| **ID / SKU** | `733723503` / `00034` |
| **Price** | €5,80 |
| **Slug / URL** | `sapone-mani-delicato` → https://cannabilla.it/products/sapone-mani-delicato |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > DETERGENTI • Blog > Come prendersi cura delle pelle in inverno • Shop > CORPO > Mani |
| **Brand / GTIN / MPN** | — / 8053617090584 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care > Makeup Removers |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Sapone Mani Delicato |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 449326699, 186266261 |
| **Created / Updated** | 2025-03-12 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723503/4911996436.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723503/5871235471.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723503/5871235477.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/733723503/5871236449.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Nutriente · Per pelli grasse / a tendenza acneica · Rigenerante ed elasticizzante

**Formato:** 250 ml  
**Packaging:** Flacone in plastica 100% riciclabile  
**Nota:** Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto.  

**Come usarlo:** Applicare sulle mani e strofinare ottenendo una leggera schiuma, quindi risciacquare. Per una cura ideale della pelle delle mani applicare dopo la Crema Mani Idratante Cannabilla

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva |
| Glicerina vegetale | mantiene la pelle idratata e morbida |
| Estratto di Verbasco | chiamato anche tasso barbasso, è noto per le due proprietà addolcenti, antipruriginose e per il trattamento emolliente di pelli secche e screpoalte |
| Estratto di Elicriso | azione astringente e antipruriginosa che allevia rossori e screpolature della pelle |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini) · CPNP n. 5147633

**INCI:** Aqua, Ammonium lauryl sulfate, Helichrysum italicum flower water, Cocamidopropyl betaine, Sodium chloride, Glycerin, Helichrysum italicum flower extract, Verbascum thapsus extract, Cannabis sativa seed oil, Saccharomyces ferment lysate filtrate, Parfum, Phenoxyethanol, Ethylhexylglycerin, Potassium sorbate, Sodium benzoate, Benzyl alcohol, Citric acid, Benzyl salicylate

**Descrizione (testo):**

> Il Sapone Mani Delicato igienizza le mani lasciando una sensazione di freschezza e nutrendo in profondità. Contiene olio di canapa ricco di acidi grassi essenziali e vitamina E proteggendo la barriera cutanea e mantenendo le mani morbide e idratate. L’olio di canapa agisce in sinergia con gli estratti di Elicriso, noto per le sue proprietà lenitive e rigeneranti e Verbasco, noto per il suo utilizzo sulle pelli screpolate Ideale per calmare la pelle stressata prevenendo arrossamenti e secchezza anche dopo lavaggi frequenti. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 250 ml ♻ Flacone in plastica 100% riciclabile 🌿Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto. Come usarlo: Applicare sulle mani e strofinare ottenendo una leggera schiuma, quindi risciacquare. Per una cura ideale della pelle delle mani applicare dopo la Crema Mani Idratante Cannabilla Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva 🍃 Glicerina vegetale: mantiene la pelle idratata e morbida 🍃 Estratto di Verbasco: chiamato anche tasso barbasso, è noto per le due proprietà addolcenti, antipruriginose e per il trattamento emolliente di pelli secche e screpoalte 🍃 Estratto di Elicriso: azione astringente e antipruriginosa che allevia rossori e screpolature della pelle Prodotto cosmetico a base di canapa, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP con il numero 5147633 , non destinato a diagnosi/cura malattie INCI: Aqua, Ammo …[full HTML in 05-products-clean.json]

---

### MELABILLA - Crema Mani Idratante alla Mela Rosa
<a id="melabilla-crema-mani-idratante-alla-mela-rosa-731861529"></a>

*Protegge e Idrata le Mani*

| | |
|---|---|
| **ID / SKU** | `731861529` / `00033` |
| **Price** | €16,50 |
| **Slug / URL** | `melabilla-crema-mani-idratante-alla-mela-rosa` → https://cannabilla.it/products/melabilla-crema-mani-idratante-alla-mela-rosa |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Blog > Proprietà della canapa • Blog > Come prendersi cura delle pelle in inverno • Shop > MELABILLA • Shop > CORPO > Mani |
| **Brand / GTIN / MPN** | — / 8053617090539 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | MELABILLA - Crema Mani Idratante alla Mela Rosa |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 731668886, 733723503, 733723745, 449333379, 659654040 |
| **Created / Updated** | 2025-03-05 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/731861529/4911975337.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/731861529/5082137304.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/731861529/5082137284.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/731861529/5871173696.jpg

**Key benefits:** Idratazione profonda · Nutriente · Azione antiossidante · Texture leggera, assorbimento rapido · Protezione

**Formato:** 50 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare una piccola quantità di prodotto e massaggiare fino a completo assorbimento. Ideale per un utilizzo quotidiano, in ogni stagione.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Estratto di Mela Rosa dei Monti Sibillini | la mela rosa è ricca di polifenoli, in particolare flavonoidi derivati della quercetina, catechina e acido clorogenico che hanno proprietà antiossidanti. Grazie alla loro capacità di neutralizzare i radicali liberi, contrastano l'invecchiamento cellulare. |
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| Olio di Carota | ricco di betacarotene, vitamina A, e vitamine del gruppo B, PP, E, e D. Mantiene la pelle morbida ed elastica |
| Burro di Mango | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea |
| Olio di Jojoba | in realtà non è un olio, ma una cera. Contiene esteri cerosi che rendono adatto a pelli con una barriera cutanea compromessa per questo è perfetto per pelli con dermatiti. Ripara la barriera cutanea, ha un effetto antinfiammatorio che lo rende perfetto in tutti i casi in cui la pelle subisce infezioni. |
| Glicerina | mantiene la pelle idratata e morbida |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo. |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aloe Barbadensis Leaf Juice, Aqua, Caprylic/capric Triglyceride, Simmondsia Chinensis Seed Oil, Zea Mays Germ Oil, Cannabis Sativa Seed Oil, Mangifera Indica Seed Butter, Dicaprylyl Ether, Sodium Acrylate/sodium Acryloyldimethyl Taurate Copolymer, Glycerin, C15-19 Alkane, Daucus Carota Sativa Root, Malus Domestica Peel Extract, Aloe Barbadensis Leaf Juice, Allantoin, Tocopheryl Acetate, Citric Acid, Sodium Benzoate, Potassium Sorbate, Citric Acid, Polyacrylate Crosspolymer-6, Propanediol, Polyglyceryl-6 Laurate, Polyglyceryl-6, Parfum, Hexyl Cinnamal, Dimethyl Phenethyl Acetate, Hexamethylindanopyra, Citral

**Descrizione (testo):**

> La Crema Mani Idratante della linea MELABILLA è una crema altamente nutriente che protegge la pelle delle tue mani. Contiene estratto di Mela Rosa dei Monti Sibillini, una varietà di mela ricca di polifenoli come la Quercetina e la Rutina , composti noti per le loro proprietà antiossidanti, che neutralizzano i radicali liberi e aiutano la pelle a ritrovare un aspetto sano e luminoso. La crema contiene altri estratti vegetali ad azione emolliente come Olio di Canapa , Carota e Avocado . La presenza, inoltre, di Aloe Vera e Vitamina E unisce l'azione idratante a quella antiossidante. La Crema, nonostante sia ricca e nutriente, risulta leggera e si assorbe facilmente, evitando la sensazione di unto sulle mani e rendendola perfetta per un utilizzo quotidiano. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 50 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare una piccola quantità di prodotto e massaggiare fino a completo assorbimento. Ideale per un utilizzo quotidiano, in ogni stagione. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Estratto di Mela Rosa dei Monti Sibillini: la mela rosa è ricca di polifenoli, in particolare flavonoidi derivati della quercetina, catechina e acido clorogenico che hanno proprietà antiossidanti. Grazie alla loro capacità di neutralizzare i radicali liberi, contrastano l'invecchiamento cellulare. 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 Olio di Carota : ricco di betacarotene, vita …[full HTML in 05-products-clean.json]

---

### MELABILLA - Crema Viso Idratante alla Mela Rosa
<a id="melabilla-crema-viso-idratante-alla-mela-rosa-731668886"></a>

*Idratazione Quotidiana*

| | |
|---|---|
| **ID / SKU** | `731668886` / `00032` |
| **Price** | €23,10 |
| **Slug / URL** | `melabilla-crema-viso-idratante-alla-mela-rosa` → https://cannabilla.it/products/melabilla-crema-viso-idratante-alla-mela-rosa |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > VISO • Blog > Come prendersi cura delle pelle in inverno • Shop > MELABILLA • Shop > VISO > Creme Viso |
| **Brand / GTIN / MPN** | — / 8053617090522 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | MELABILLA - Crema Viso Idratante alla Mela Rosa |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 653949370, 657775738, 186266261, 655210357, 407333431 |
| **Created / Updated** | 2025-03-04 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/731668886/4911963920.png

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/731668886/5082142163.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/731668886/5082142158.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/731668886/5082150771.jpg

**Key benefits:** Idratazione profonda · Nutriente · Per pelli grasse / a tendenza acneica · Azione antiossidante

**Formato:** 50 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare il prodotto mattina e sera sul viso deterso e asciutto. Massaggiare delicatamente per favorire l'assorbimento. Per un risultato ancora più idratato e setoso, applicare la Crema Viso alla Mela Rosa dopo aver deterso il viso con la Mousse Detergente Idratante Cannabilla

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Estratto di Mela Rosa dei Monti Sibillini | la mela rosa è ricca di polifenoli, in particolare flavonoidi derivati della quercetina, catechina e acido clorogenico che hanno proprietà antiossidanti. Grazie alla loro capacità di neutralizzare i radicali liberi, contrastano l'invecchiamento cellulare. |
| Bava di lumaca | è una miscela complessa, costituita da acqua una componente idratante ed umettante data da proteoglicani e glicosamminoglicani, dall'acido ialuronico e dal collagene. Vi è inoltre una componente esfoliante data dall'acido glicolico. La miscela contiene anche elastina e allantoina |
| Burro di karitè | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea |
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| Olio di mandorle e vinaccioli | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva |
| Acido ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle |
| Niacinamide | nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli grasse, tra il 4% e il 5% agisce contro le macchie cutanee. |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo. |
| Bisabololo | attivo calmante, lenitivo e disarrossante, ottenuto dall’olio essenziale di camomilla matricaria. |
| Aloe Vera | è un ottimo idratante, utile in caso di pelle irritata o arrossata, aiuta la pelle a ristabilirsi e dona anche un effetto rinfrescante |
| Estratto di Iperico | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina |
| Estratto di Calendula | grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l’estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emolliente e riepitelizzante |
| Estratto di Carota | ricco di betacarotene, vitamina A, e vitamine del gruppo B, PP, E, e D. Mantiene la pelle morbida ed elastica |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Aloe Barbadensis Leaf Juice, Snail Secretion Filtrate, Cannabis Sativa Seed Oil, Vitis Vinifera Seed Oil, Prunus Amygdalus Dulcis Oil, Niacinamide, Caprylic/capric Trygliceride, Sodium Acrylate/sodium Acryloyldimethyl Taurate Copolymer, Helianthus Annuus Seed Oil, Glycerin, Butyrospermum Parkii Butter, Tocopheryl Acetate, Malus Domestica Peel Extract, Hypericum Perforatum Flower Extract, Rosmarinus Officinalis Extract, Chamomilla Recutita Flower Extract, Daucus Carota Sativa Root, Calendula Officinalis Flower Extract, Sodium Hyaluronate, Bisabolol, Allantoin, Propanediol, Zea Mays Germ Oil, Sodium Benzoate, Potassium Sorbate, Acido Citrico, C15-19 Alkane, Polyglyceryl-6 Laurate, Polyglyceryl-6, Parfum, Hexyl Cinnamal, Hexamethylindanopyran

**Descrizione (testo):**

> La Crema Viso Idratante della linea MELABILLA è una crema altamente nutriente dalla texture ricca e allo stesso tempo setosa. Contiene estratto di Mela Rosa dei Monti Sibillini , una varietà di mela ricca di polifenoli come la Quercetina e la Rutina , composti noti per le loro proprietà antiossidanti che neutralizzano i radicali liberi e aiutano la pelle a ritrovare un aspetto sano e luminoso. La formula è arricchita con Bava di Lumaca, Burro di Karitè e Acido Ialuronico per fornire un'idratazione profonda e duratura. Sono presenti anche Oli pregiati come quelli di Canapa, Carota, Mandorle e Vinaccioli che apportano acidi grassi essenziali senza i quali la pelle risulta secca, spenta e senza tono. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 50 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare il prodotto mattina e sera sul viso deterso e asciutto. Massaggiare delicatamente per favorire l'assorbimento. Per un risultato ancora più idratato e setoso, applicare la Crema Viso alla Mela Rosa dopo aver deterso il viso con la Mousse Detergente Idratante Cannabilla Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Estratto di Mela Rosa dei Monti Sibillini: la mela rosa è ricca di polifenoli, in particolare flavonoidi derivati della quercetina, catechina e acido clorogenico che hanno proprietà antiossidanti. Grazie alla loro capacità di neutralizzare i radicali liberi, contrastano l'invecchiamento cellulare. 🍃 Bava di lumaca: è una miscela complessa, costituita da acqua una componente idratante ed umettante data da proteoglicani e glicosamminoglicani, dall'acido ial …[full HTML in 05-products-clean.json]

---

### Tattoo Cream- Crema Nutriente
<a id="tattoo-cream-crema-nutriente-723221221"></a>

| | |
|---|---|
| **ID / SKU** | `723221221` / `00031` |
| **Price** | €12,80 |
| **Slug / URL** | `tattoo-cream-crema-nutriente` → https://cannabilla.it/products/tattoo-cream-crema-nutriente |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > TATTOO-CARE |
| **Brand / GTIN / MPN** | — / 8053617090034 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 5 (primary + 4 gallery) |
| **Options / Variants** | none |
| **Meta title** | Tattoo Cream- Crema Nutriente |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 660161320, 184319121 |
| **Created / Updated** | 2025-01-28 / 2026-07-05 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/723221221/4750210439.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/723221221/5871386177.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/723221221/5871388221.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/723221221/5871388227.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/723221221/5871388429.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Texture leggera, assorbimento rapido

**Formato:** 50 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare una piccola quantità di prodotto e massaggiare fino a completo assorbimento. Ideale per un utilizzo quotidiano.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi |
| Pantenolo | è un umettante, il che significa che attira e trattiene l'umidità nella pelle, aiutando a mantenere la zona tatuata idratata e prevenendo la secchezza, ha anche proprietà lenitive, svolge quindi un effetto calmante sulla pelle, riducendo irritazioni, rossori e prurito che possono verificarsi durante il processo di guarigione del tatuaggio. |
| Burro di Mango | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Prunus Amygdalus Dulcis Oil, Caprylic/Capric Triglyceride, Cannabis Sativa Seed Oil, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Glycerin, Mangifera Indica Seed Butter, Cannabidiol, Panthenol, Aloe Barbadensis Leaf Juice, Allantoin, Tocopheryl Acetate, C15-19 Alkane, Polyglyceryl-6 Laurate, Polyglyceryl-6, Sodium Benzoate, Potassium Sorbate, Citric Acid, Polyacrylate Crosspolymer-6, Parfum, Menthol

**Descrizione (testo):**

> La Crema per tatuaggi a base di Olio di Semi di Canapa ha un'azione idratante adatta alla pelle tatuata. L'emulsione è caratterizzata da una consistenza piacevole e leggera. Contiene principi attivi ad azione idratante, emolliente e riparatrice quali l'olio di Canapa e il pantenolo. La Canapa svolge un'azione lenitiva e calmante grazie alle sue proprietà antinfiammatorie. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 50 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare una piccola quantità di prodotto e massaggiare fino a completo assorbimento. Ideale per un utilizzo quotidiano. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi 🍃 Pantenolo: è un umettante, il che significa che attira e trattiene l'umidità nella pelle, aiutando a mantenere la zona tatuata idratata e prevenendo la secchezza, ha anche proprietà lenitive, svolge quindi un effetto calmante sulla pelle, riducendo irritazioni, rossori e prurito che possono verificarsi durante il processo di guarigione del tatuaggio. 🍃 Burro di Mango : ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea 🍃Vitamina E: svolge un’azione antiossidante nei confronti dei radicali liberi Prodotto cosmetico a base di canapa e CBD, conf …[full HTML in 05-products-clean.json]

---

### Hemp Kiss - Balsamo Labbra Arancia
<a id="hemp-kiss-balsamo-labbra-arancia-719846075"></a>

| | |
|---|---|
| **ID / SKU** | `719846075` / `00030` |
| **Price** | €4,90 |
| **Slug / URL** | `hemp-kiss-balsamo-labbra-arancia` → https://cannabilla.it/products/hemp-kiss-balsamo-labbra-arancia |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > VISO • Shop > BENESSERE MUSCOLARE e DERMOCURA > Hemp Kiss |
| **Brand / GTIN / MPN** | — / 8053617090072 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 30 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Hemp Kiss - Balsamo Labbra Arancia e Miele |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 367226942, 832585807, 731668886, 731861529, 449326699, 655951926 |
| **Created / Updated** | 2025-01-14 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719846075/4726944891.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719846075/5868010867.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719846075/5868004726.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719846075/5868012503.jpg

**Key benefits:** Idratazione profonda · Nutriente · Protezione

**Formato:** 4.5 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Stendere sulle labbra uno strato sottile di prodotto e strofinare le labbra tra loro. Applica il prodotto sulle labbra tutte le volte che desideri.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. |
| CBD | ha proprietà antiossidanti e lenitive |
| Burro di Cacao | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea |
| Cera d'api | trattiene l'acqua dalla pelle rivestendola con una pellicola protettiva. Rende le pelli secche e screpolate incredibilmente morbide |
| Olio di Macadamia | ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Beeswax, Theobroma Cacao Seed Butter, Prunus Amygdalus Dulcis Oil, Macadamia Ternifolia Seed Oil, Aroma, Cannabis Sativa Seed Oil, Tocopheryl Acetate, Cannabidiol

**Descrizione (testo):**

> Hemp kiss - Balsamo Labbra a base di Olio di Semi di Canapa è un trattamento per le labbra 100% Naturale al dolce gusto di arancia. Ha molteplici azioni: nutre le labbra, le protegge, le idrata e le ripara. La Cera d'Api e il Burro di Cacao insieme alla Canapa formano una barriera protettiva contro gli agenti esterni come freddo e inquinamento. Il formato in stick, pratico e leggero, ti consente di portarlo sempre con te e di usarlo ogni volta che le tue labbra ne hanno bisogno Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 4.5 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Stendere sulle labbra uno strato sottile di prodotto e strofinare le labbra tra loro. Applica il prodotto sulle labbra tutte le volte che desideri. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. 🍃 CBD: ha proprietà antiossidanti e lenitive 🍃 Burro di Cacao: ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea 🍃 Cera d'api: trattiene l'acqua dalla pelle rivestendola con una pellicola protettiva. Rende le pelli secche e screpolate incredibilmente morbide 🍃 Olio di Macadamia: ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata 🍃 Vitamina E: svolge un'azione antiossidante nei confronti dei radicali liberi Prodotto cosmetico a base di can …[full HTML in 05-products-clean.json]

---

### Berretto - Logo Cannabilla
<a id="berretto-logo-cannabilla-719002182"></a>

| | |
|---|---|
| **ID / SKU** | `719002182` / `00029` |
| **Price** | €14,95 |
| **Slug / URL** | `berretto-logo-cannabilla` → https://cannabilla.it/products/berretto-logo-cannabilla |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > MERCHANDISING |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.05 kg / not set |
| **Images** | 11 (primary + 10 gallery) |
| **Options / Variants** | Size (3) |
| **Meta title** | Berretto con logo Cannabilla |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | — |
| **Created / Updated** | 2025-01-09 / 2026-07-05 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719666000.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719662572.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719664520.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719666004.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719664530.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719662582.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719664540.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719666014.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719663550.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719666019.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719663555.jpg

**Descrizione (testo):**

> Il Berretto con Logo Cannabilla è l'accessorio perfetto per affrontare le giornate più fredde con comfort e stile. Realizzato in tessuto morbido ed elasticizzato, offre una vestibilità comoda e piacevole da indossare per tutto il giorno. La struttura a doppio strato garantisce un maggiore isolamento termico, aiutando a mantenere il calore anche durante le temperature più rigide. Il design minimal con il logo Cannabilla lo rende ideale sia per il tempo libero che per l'uso quotidiano. Leggero, resistente e facile da abbinare, è un accessorio versatile pensato per chi cerca praticità senza rinunciare allo stile. 🧢 Materiale 96% Poliestere, 4% Spandex (UE) 93% Poliestere, 7% Spandex (USA) 📏 Vestibilità Vestibilità regolare. Per un effetto più morbido si consiglia di scegliere una taglia superiore. ALTEZZA (cm) LARGHEZZA (cm) S 22.5 26 M 23.5 28 L 24.5 30 🧼 Cura del prodotto Lavare a 30°C. Non utilizzare candeggina. Lasciare asciugare naturalmente. Questo prodotto viene realizzato appositamente per te non appena effettui un ordine, motivo per cui impieghiamo un po' più di tempo per la consegna. Produrre prodotti su richiesta anziché in grandi quantità aiuta a ridurre la sovrapproduzione, quindi grazie per aver preso decisioni di acquisto ponderate! Restrizioni di età: Per adulti Garanzia UE: 2 anni Altre informazioni sulla conformità: Conforme ai requisiti sui livelli di piombo, cadmio, ftalati e bisfenoli. In conformità con il Regolamento generale sulla sicurezza dei prodotti (GPSR), Oak Inc. garantisce che tutti i prodotti di consumo offerti siano sicuri e conformi agli standard UE. Per qualsiasi domanda o dubbio in merito alla sicurezza dei prodotti, contattateci all'indirizzo alex.oak@company.com oppure scriveteci a 123 Main Street, Anytown, Country.

---

### Felpa Unisex - Logo Cannabilla
<a id="felpa-unisex-logo-cannabilla-719002107"></a>

| | |
|---|---|
| **ID / SKU** | `719002107` / `00028` |
| **Price** | €27,00 |
| **Slug / URL** | `felpa-unisex-logo-cannabilla` → https://cannabilla.it/products/felpa-unisex-logo-cannabilla |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > MERCHANDISING |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.45 kg / not set |
| **Images** | 6 (primary + 5 gallery) |
| **Options / Variants** | Size (8) |
| **Meta title** | Felpa Unisex |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | — |
| **Created / Updated** | 2025-01-09 / 2026-07-05 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719607891.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719620005.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719608843.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719620010.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719606245.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719607895.jpg

**Descrizione (testo):**

> La Felpa Unisex con Cappuccio Cannabilla combina comfort, qualità e stile in un capo perfetto per ogni giorno grazie al Logo minimal Cannabilla. Realizzata in un morbido mix di cotone e poliestere, offre una vestibilità comoda e una piacevole sensazione di calore nelle giornate più fresche. Dotata di cappuccio bifoderato con cordino regolabile, tasca frontale a marsupio e polsini a costine elasticizzate. Presenta doppie cuciture per una maggiore resistenza. Ideale per il tempo libero, le attività all'aperto e l'uso quotidiano. 🧢 Materiale 50% cotone prelavato, 50% poliestere. 📏 Vestibilità Vestibilità unisex con cappuccio regolabile. 🧼 Cura del prodotto Lavare in lavatrice a bassa temperatura. Non candeggiare. Asciugare all'aria per preservare qualità e stampa. Questo prodotto viene realizzato appositamente per te non appena effettui un ordine, motivo per cui impieghiamo un po' più di tempo per la consegna. Produrre prodotti su richiesta anziché in grandi quantità aiuta a ridurre la sovrapproduzione, quindi grazie per aver preso decisioni di acquisto ponderate! Restrizioni di età: Per adulti Garanzia UE: 2 anni Altre informazioni sulla conformità: Conforme ai requisiti sui livelli di piombo, cadmio, ftalati e bisfenoli. In conformità con il Regolamento generale sulla sicurezza dei prodotti (GPSR), Oak Inc. garantisce che tutti i prodotti di consumo offerti siano sicuri e conformi agli standard UE. Per qualsiasi domanda o dubbio in merito alla sicurezza dei prodotti, contattateci all'indirizzo alex.oak@company.com oppure scriveteci a 123 Main Street, Anytown, Country.

---

### Borraccia in Acciaio Inossidabile - Logo Cannabilla
<a id="borraccia-in-acciaio-inossidabile-logo-cannabilla-718984967"></a>

| | |
|---|---|
| **ID / SKU** | `718984967` / `00027` |
| **Price** | €24,00 |
| **Slug / URL** | `borraccia-in-acciaio-inossidabile-logo-cannabilla` → https://cannabilla.it/products/borraccia-in-acciaio-inossidabile-logo-cannabilla |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop > MERCHANDISING |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care |
| **Weight / Dimensions** | 0.43 kg / not set |
| **Images** | 3 (primary + 2 gallery) |
| **Options / Variants** | none |
| **Meta title** | Borraccia in Acciaio Inossidabile - Logo Cannabilla |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 745559972, 745542230, 719002182, 745649266, 719002107 |
| **Created / Updated** | 2025-01-09 / 2026-07-06 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/718984967/4719606019.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/718984967/4719604340.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/718984967/4719604169.jpg

**Key benefits:** Sollievo muscolare

**Descrizione (testo):**

> La Borraccia con Logo Cannabilla in Acciaio Inossidabile è progettata per mantenere le tue bevande alla temperatura ideale durante tutta la giornata. Grazie alla capacità da 950 ml, è perfetta per allenamenti, lavoro, viaggi e attività all'aperto. Realizzata in acciaio inossidabile a doppia parete con isolamento sottovuoto, aiuta a mantenere le bevande fredde o calde più a lungo. Il tappo con cannuccia pieghevole a bocca larga permette di bere comodamente senza fuoriuscite, mentre la pratica maniglia girevole facilita il trasporto. Si presenta con una finitura lucida ed è dotata di una base con inserto antiscivolo e tappo con chiusura sicura. 🥤 Capacità 950 ml 🧢 Materiale Acciaio Inossidabile a doppia parete con isolamento sottovuoto 📏 Dimensioni Altezza: 25,2 cm Diametro: 9cm 🧼 Cura del prodotto Lavare esclusivamente a mano. Non utilizzare in lavastoviglie o nel microonde. Questo prodotto viene realizzato appositamente per te non appena effettui un ordine, motivo per cui impieghiamo un po' più di tempo per la consegna. Produrre prodotti su richiesta anziché in grandi quantità aiuta a ridurre la sovrapproduzione, quindi grazie per aver preso decisioni di acquisto ponderate! Prodotto proveniente dalla Cina. Restrizioni di età: Per adulti Garanzia UE: 2 anni Altre informazioni sulla conformità: Conforme ai requisiti sui livelli di piombo, cadmio, ftalati e bisfenoli. In conformità con il Regolamento generale sulla sicurezza dei prodotti (GPSR), Oak Inc. garantisce che tutti i prodotti di consumo offerti siano sicuri e conformi agli standard UE. Per qualsiasi domanda o dubbio in merito alla sicurezza dei prodotti, contattateci all'indirizzo alex.oak@company.com oppure scriveteci a 123 Main Street, Anytown, Country.

---

### Elis Hair - Olio per capelli rigenerante
<a id="elis-hair-olio-per-capelli-rigenerante-679599606"></a>

*Ammorbidisce e dona volume ai capelli*

| | |
|---|---|
| **ID / SKU** | `679599606` / `00026` |
| **Price** | €14,90 |
| **Slug / URL** | `elis-hair-olio-per-capelli-rigenerante` → https://cannabilla.it/products/elis-hair-olio-per-capelli-rigenerante |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > CAPELLI • Shop > CAPELLI > Olio Capelli |
| **Brand / GTIN / MPN** | — / 8053617090126 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care > Body Oil |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 5 (primary + 4 gallery) |
| **Options / Variants** | none |
| **Meta title** | Olio per capelli Elis Hair - Trattamento naturale per capelli danneggiati e deboli |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 733763254, 733723745, 655210357, 449326699, 407333431 |
| **Created / Updated** | 2024-07-11 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/679599606/4447162922.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/679599606/4719754004.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/679599606/5871318994.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/679599606/5868002451.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/679599606/5868004564.jpg

**Key benefits:** Idratazione profonda · Nutriente · Texture leggera, assorbimento rapido

**Formato:** 100 ml  
**Packaging:** Flacone in vetro riciclabile e erogatore spray in plastica riciclabile.  
**Nota:** Presenta ingredienti di origine 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Differenti utilizzi dell’ Elis Hair - Olio per capelli: Impacco e Maschera pre-shampoo: applica l’Olio sulla cute e sulle lunghezze prima del lavaggio per rendere i capelli più luminosi, morbidi e disciplinati. Balsamo: applica l’Olio sulle lunghezze umide dopo aver lavato i capelli. Ideale soprattutto i per capelli ricci. Styling e Finishing: applica l’Olio solo sulle punte umide per aiutare a velocizzare la piega riducendo i nodi e disciplinando il crespo. Inoltre andrà a fissare meglio la piega rendendola ancora più bella e duratura. Protettore Solare: applica l’Olio sui capelli asciutti per proteggerli dai raggi UV durante la stagione estiva, nutrendo anche i capelli in profondità. Per un risultato ancora più morbido e lucente detergi i capelli con lo Shampoo Delicato Hemp-oo prima o dopo l’applicazione dell’Olio Elis Hair

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi |
| Olio di Vinaccioli e Avocado | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva |
| Estratto e Olio essenziale di Rosmarino | svolge un'azione antiossidante e migliora il microcircolo del cuoio capelluto |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Caprylic/capric Triglyceride, Dicaprylyl Ether, Prunus Amygdalus Dulcis Oil, Cannabis Sativa Seed Oil, Mentha Piperita Oil, Ethylhexyl Methoxycinnamate, Vitis Vinifera Seed Oil, Cocos Nucifera Oil, Eucalyptus Globulus Leaf Oil, Rosmarinus Officinalis Leaf Oil, Rosmarinus Officinalis Extract, Cannabidiol, Tocopheryl Acetate

**Descrizione (testo):**

> Elis Hair è un trattamento nutriente per tutti i tipi di capelli, in particolare quelli secchi e danneggiati. Grazie alla sua formula ultraleggera idrata i capelli senza appesantirli. Realizzato con oli naturali pregiati, come l' Olio di Semi di Canapa, Vinaccioli e Cocco , mantiene i capelli estremamente morbidi, lucidi e facilmente pettinabili. Inoltre crea una barriera protettiva dai danni causati da agenti esterni come il calore e l'inquinamento. Elis Hair - Olio per capelli è un prodotto multifunzionale utilizzabile tutto l’anno per ottenere capelli forti, idratati e protetti. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato : 100 ml ♻ Flacone in vetro riciclabile e erogatore spray in plastica riciclabile. 🌿 Presenta ingredienti di origine 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Differenti utilizzi dell’ Elis Hair - Olio per capelli: Impacco e Maschera pre-shampoo: applica l’Olio sulla cute e sulle lunghezze prima del lavaggio per rendere i capelli più luminosi, morbidi e disciplinati. Balsamo: applica l’Olio sulle lunghezze umide dopo aver lavato i capelli. Ideale soprattutto i per capelli ricci. Styling e Finishing: applica l’Olio solo sulle punte umide per aiutare a velocizzare la piega riducendo i nodi e disciplinando il crespo. Inoltre andrà a fissare meglio la piega rendendola ancora più bella e duratura. Protettore Solare: applica l’Olio sui capelli asciutti per proteggerli dai raggi UV durante la stagione estiva, nutrendo anche i capelli in profondità. Per un risultato ancora più morbido e lucente detergi i capelli con lo Shampoo Delicato Hemp-oo prima o dopo l’applicazione dell’Olio Elis Hair Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene : 🍃 Olio di  …[full HTML in 05-products-clean.json]

---

### Latte Solare Idratante SPF 50
<a id="latte-solare-idratante-spf-50-670883482"></a>

| | |
|---|---|
| **ID / SKU** | `670883482` / `00025` |
| **Price** | €16,80 |
| **Slug / URL** | `latte-solare-idratante-spf-50` → https://cannabilla.it/products/latte-solare-idratante-spf-50 |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > SOLARI • Shop > SOLARI > Protezione Solare |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | Formato (2) · 2 combinations |
| **Meta title** | Latte Solare Idratante SPF 50 |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 832585807, 683228963, 683253581, 683253612, 733723745 |
| **Created / Updated** | 2024-06-11 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/670883482/4447192512.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/670883482/4447260995.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/670883482/5868020562.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/670883482/5868020580.png

**Key benefits:** Idratazione profonda · Azione antiossidante · Protezione

**Formato:** 100 ml e 200ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare sulla pelle prima dell’esposizione al sole. Ripetere l’operazione ogni volta che se ne sente il bisogno. Per proteggere ancora di più la tua pelle, applica la Crema DopoSole Lenitiva Cannabilla dopo una detersione delicata con il Bagno Doccia Detergente e Idratante Cannabilla.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie |
| Filtri UV | riducono al minimo gli effetti indesiderati della radiazione UV sulla pelle, come eritemi, ustioni, fotosensibilizzazioni, macchie cutanee |
| Acido ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle |
| Niacinamide | nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli grasse, tra il 4% e il 5% agisce contro le macchie cutanee. |
| Aloe Vera | è un ottimo idratante, utile in caso di pelle irritata o arrossata, aiuta la pelle a ristabilirsi e dona anche un effetto rinfrescante |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Caprylic/capric Triglyceride, Ethylhexyl Methoxycinnamate, Bis-ethylhexyloxyphenol Methoxyphenyl Triazine, Butyl Methoxydibenzoylmethane, Ethylhexyl Dimethyl Paba, Cannabis Sativa Seed Oil, Aloe Barbadensis Leaf Juice Powder, Niacinamide, Glycerin, Sodium Hyaluronate, Tocopheryl Acetate, Polysorbate 20, Sodium Acrylate/sodium Acryloyldimethyl Taurate Copolymer C15-19 Alkane, Polyglyceryl-6 Laurate, Polyglycerin-6, Polyacrylate Crosspolymer-6, Cannabidiol, Propanediol, Parfum, Sodium Gluconate, Citric Acid, Potassium Sorbate, Sodium Benzoate, Terpineol, Cinnamyl Alcohol, Linalool, Amyl Salicylate, Linalyl Acetate, Vanillin

**Descrizione (testo):**

> Il Latte Solare Idratante con SPF 5 0 protegge dai raggi UV e previene i danni cellulari che possono creare. Ha una consistenza fluida, facile da applicare, perfetta per un utilizzo quotidiano. La presenza di Canapa e Vitamina E svolge un'azione antiossidante contro i radicali liberi responsabili del fotoinvecchiamento. La formula si caratterizza anche per un complesso idratante dato dall' Olio di semi di Canapa, Acido Ialuronico, Niacinamide e Aloe Vera. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 100 ml e 200ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare sulla pelle prima dell’esposizione al sole. Ripetere l’operazione ogni volta che se ne sente il bisogno. Per proteggere ancora di più la tua pelle, applica la Crema DopoSole Lenitiva Cannabilla dopo una detersione delicata con il Bagno Doccia Detergente e Idratante Cannabilla. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie 🍃 Filtri UV: riducono al minimo gli effetti indesiderati della radiazione UV sulla pelle, come eritemi, ustioni, fotosensibilizzazioni, macchie cutanee 🍃 Acido ialuronico: svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle 🍃 Niacinamide: nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. …[full HTML in 05-products-clean.json]

---

### PsorCream Dermocalmante e Lenitiva
<a id="psorcream-dermocalmante-e-lenitiva-660161320"></a>

| | |
|---|---|
| **ID / SKU** | `660161320` / `00024` |
| **Price** | €16,90 |
| **Slug / URL** | `psorcream-dermocalmante-e-lenitiva` → https://cannabilla.it/products/psorcream-dermocalmante-e-lenitiva |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Blog > Iperico: il fiore giallo dalle mille proprietà • Blog > Conoscere la psoriasi: cause, sintomi e opzioni di trattamento • Blog > Sangue di drago: storia e proprietà di una pianta magica • Shop > BENESSERE MUSCOLARE e DERMOCURA • Blog > Come prendersi cura delle pelle in inverno • Shop > CORPO > PsorCream |
| **Brand / GTIN / MPN** | — / 8053617090461 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.3 kg / not set |
| **Images** | 6 (primary + 5 gallery) |
| **Options / Variants** | none |
| **Meta title** | PsorCream Dermocalmante e Lenitiva |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 659654040, 522417741, 449333379, 655210357 |
| **Created / Updated** | 2024-05-22 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/660161320/4447201089.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/660161320/5871363897.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/660161320/5871363891.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/660161320/5871368266.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/660161320/5871370500.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/660161320/5871370520.png

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Sollievo muscolare

**Formato:** 50 ml  
**Packaging:** Vaso in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare il prodotto sulla parte del corpo da trattare. Massaggiare fino a completo assorbimento. Utilizzare come necessario durante il giorno.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi |
| Olio di carota | efficace in caso di dermatiti, contiene vitamina A e betacarotene |
| Estratto di Calendula | grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l’estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emolliente e riepitelizzante. |
| Olio di Jojoba | Una cera vegetale molto simile al sebo umano. È ideale per nutrire le pelli più secche e sensibili, aiutandole a mantenersi idratate e protette. |
| Estratto di Camomilla | ha proprietà antipruriginose, cicatrizzanti e disarrossanti, grazie al contenuto di flavonoidi a livello topico svolge un’azione antinfiammatoria. |
| Bisabololo | attivo calmante, lenitivo e disarrossante, ottenuto dall’olio essenziale di camomilla matricaria. |
| Oli essenziali di tea tree, eucalipto, menta | opportunamente veicolati, possono svolgere azione antisettica e balsamica. |
| Sangue di drago | Una preziosa resina nota nella tradizione per le sue proprietà antiossidanti. Aiuta a proteggere la pelle dagli agenti esterni. |
| Burro di mango, cacao e karitè | hanno proprietà emollienti, nutrienti e idratanti. Sono burri pregiati in grado di ripristinare il corretto livello di idratazione cutanea |
| Olio di mandorle, vinaccioli | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva |
| Lanolina e cera d’api | permettono alla pelle di rimanere sempre idratata, formando una barriera contro l’esterno, svolgono un’azione riparatrice in caso di pelle secca e screpolata |
| Estratto di Iperico | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini) · CPNP n. 4351197

**INCI:** Mangifera Indica Seed Butter, Butyrospermum Parkii Butter, Prunus Amygdalus Dulcis Oil, Lanolin, Caprylic/Capric Triglyceride, Beeswax, Rosa Moschata Seed Oil, Cannabis Sativa Seed Oil, Theobroma Cacao Seed Butter, Helianthus Annuus Seed Oil, Zea Mays Germ Oil, Butyrospermum Parkii Butter Extract, Calendula Officinalis Flower Extract, Hypericum Perforatum Flower Extract, Cannabidiol, Daucus Carota Sativa Root, Croton Lechleri Resin Powder, Rosmarinus Officinalis Extract, Argania Spinosa Kernel Oil, Vitis Vinifera Seed Oil, Chamomilla Recutita Flower Extract, Bisabolol, Melaleuca Alternifolia Leaf Oil, Eucalyptus Globulus Leaf Oil, Mentha Piperita Oil, Tocopheryl Acetate, Parfum, Benzyl Salicylate, Limonene, Linalyl Acetate, Hexyl Cinnamal, Citrus Aurantium Dulcis Peel Oil, Citronellol, Linalool, Alpha-Isomethyl Ionone, Geranyl Acetate, Benzyl Alcohol, Citral, Pinene, Beta-Caryophyllene, Limonene, Alpha-Terpinene, Terpineol, Terpinolene, Menthol

**Descrizione (testo):**

> E' un balsamo ricco formulato specificamente per le pelli estremamente secche, screpolate o squamose e che tendono ad arrossarsi e a dare prurito. Aiuta a donare sollievo e comfort, favorendo il ripristino della barriera idrolipidica e lasciando la pelle morbida ed elastica. Ideale per pelli che appaiono ispessite e ruvide al tatto. Dona sollievo in caso di sensazione di pelle che tira e prurito associato a secchezza cutanea e alla presenza di squame. La formula è arricchita con un complesso di estratti vegetali dalle proprietà lenitive come l’Olio di Semi di Canapa, emollienti e idratanti come l’Olio di Camomilla, Calendula e Carota. Contiene anche oli essenziali di eucalipto, menta e tea tree. Applicato regolarmente aiuta a mantenere la pelle idratata e a ridurre l’ispessimento cutaneo. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 50 ml ♻ Vaso in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare il prodotto sulla parte del corpo da trattare. Massaggiare fino a completo assorbimento. Utilizzare come necessario durante il giorno. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi 🍃 Olio di carota: efficace in caso di dermatiti, contiene vitamina A e betacarotene 🍃 Estratto di Calendula: grazie al suo contenuto di mucillagini, svolg …[full HTML in 05-products-clean.json]

---

### Olio Corpo Nutriente ed Idratante
<a id="olio-corpo-nutriente-ed-idratante-659654040"></a>

| | |
|---|---|
| **ID / SKU** | `659654040` / `00023` |
| **Price** | €16,50 |
| **Slug / URL** | `olio-corpo-nutriente-ed-idratante` → https://cannabilla.it/products/olio-corpo-nutriente-ed-idratante |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > CORPO • Shop > CORPO > Oli Corpo |
| **Brand / GTIN / MPN** | — / 8053617090041 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.3 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Olio Corpo Nutriente ed Idratante |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 733723745, 760202063, 655951926, 449333379, 367226103, 454711844 |
| **Created / Updated** | 2024-05-21 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/659654040/4447197339.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/659654040/5871316871.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/659654040/5871318846.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/659654040/5871318916.png

**Key benefits:** Idratazione profonda · Nutriente · Azione antiossidante · Rigenerante ed elasticizzante

**Formato:** 100 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare un'adeguata quantità di olio sulla parte del corpo da trattare. Massaggiare fino a completo assorbimento. Utilizzare come necessario durante il giorno. Ideale da applicare dopo aver deterso il corpo con il Bagno Doccia Cannabilla per una pelle ancora più morbida e curata.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | ha proprietà antiossidanti e lenitive |
| Olio di Avocado | restituisce tono ed elasticità alle pelli secche. Olio in grado di alleviare la secchezza cutanea, svolge un’azione emolliente e lenitiva |
| Estratto di Camomilla | ha proprietà lenitive e calmanti |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Cannabis Sativa Seed Oil, Prunus Amygdalus Dulcis Oil, Caprylic/capric Triglyceride, Dicaprylyl Ether, Macadamia Ternifolia Seed Oil, Rosa Moschata Seed Oil, Helianthus Annuus Seed Oil, Chamomilla Recutita Flower Extract, Mentha Piperita Oil, Melaleuca Alternifolia Leaf Oil, Tocopheryl Acetate, Cannabidiol, Parfum, Mentha Piperita Oil, Menthol, Pinene, Beta-caryophyllene, Alpha-terpinene, Terpinolene, Linalyl Acetate, Pinene, Limonene, Terpineol, Alpha-isomethyl Ionone, Hexamethylindanopyran, Linalool, Pogostemon Cablin Oil, Geranyl Acetate

**Descrizione (testo):**

> L’Olio corpo a base di Olio di Semi di Canapa ha un’azione nutriente e idratante, che restituisce alla pelle tono ed elasticità. Si assorbe rapidamente, non unge e dona una piacevole freschezza grazie alla presenza di olio essenziale di menta. Delicatamente profumato, contiene vitamina E , CBD e Tea Tree Oil , componenti dalle proprietà antiossidanti e preziosi alleati della nostra pelle. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴Formato: 100 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare un'adeguata quantità di olio sulla parte del corpo da trattare. Massaggiare fino a completo assorbimento. Utilizzare come necessario durante il giorno. Ideale da applicare dopo aver deterso il corpo con il Bagno Doccia Cannabilla per una pelle ancora più morbida e curata. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : ha proprietà antiossidanti e lenitive 🍃 Olio di Avocado: restituisce tono ed elasticità alle pelli secche. Olio in grado di alleviare la secchezza cutanea, svolge un’azione emolliente e lenitiva 🍃 Estratto di Camomilla: ha proprietà lenitive e calmanti 🍃 Vitamina E: svolge un’azione antiossidante nei confronti dei radicali liberi Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie INCI: Cannabis Sativa Seed Oil, Prunus Amygda …[full HTML in 05-products-clean.json]

---

### Sunny Kiss
<a id="sunny-kiss-658845203"></a>

| | |
|---|---|
| **ID / SKU** | `658845203` / `00022` |
| **Price** | €4,90 |
| **Slug / URL** | `sunny-kiss` → https://cannabilla.it/products/sunny-kiss |
| **Status** | **disabled** · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > VISO • Shop > SOLARI |
| **Brand / GTIN / MPN** | — / — / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 30 kg / not set |
| **Images** | 1 (primary + 0 gallery) |
| **Options / Variants** | none |
| **Meta title** | Sunny Kiss |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | — |
| **Created / Updated** | 2024-05-20 / 2025-06-29 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/4447235103.jpg

**Key benefits:** Idratazione profonda · Nutriente · Protezione

**Formato:** 4,5 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Stendere sulle labbra uno strato sottile di prodotto e strofinare tra loro. Applica il prodotto sulle labbra tutte le volte che desideri. Il formato in stick, pratico e leggero, ti consente di portarlo sempre con te e di usarlo ogni volta che le tue labbra ne hanno bisogno.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. |
| CBD | ha proprietà antiossidanti e lenitive |
| Burro di Cacao | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea |
| Cera d'api | trattiene l'acqua dalla pelle rivestendola con una pellicola protettiva. Rende le pelli secche e screpolate incredibilmente morbide |
| Olio di Macadamia | ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |
| Filtri UV | riducono al minimo gli effetti indesiderati della radiazione UV sulla pelle |

**Certificazioni:** 100% naturale · Registrato CPNP

**INCI:** Beeswax, Theobroma Cacao Seed Butter, Prunus Amygdalus Dulcis Oil, Macadamia Ternifolia Seed Oil, Aroma, Cannabis Sativa Seed Oil, Ethylhexyl Methoxycinnamate, Tocopheryl Acetate, Cannabidiol

**Descrizione (testo):**

> Sunny kiss a base di Olio di Semi di Canapa e CBD è un trattamento per le labbra tutto naturale al dolce gusto di arancia.. Ha molteplici azioni: nutre le labbra, le protegge , le idrata e le ripara. La Cera d'Api e il Burro di Cacao insieme al CBD formano una barriera protettiva contro gli agenti esterni come freddo e inquinamento. Contiene filtri UV per proteggere le labbra dagli effetti nocivi del sole. 🧴Formato: 4,5 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Stendere sulle labbra uno strato sottile di prodotto e strofinare tra loro. Applica il prodotto sulle labbra tutte le volte che desideri. Il formato in stick, pratico e leggero, ti consente di portarlo sempre con te e di usarlo ogni volta che le tue labbra ne hanno bisogno. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. 🍃 CBD: ha proprietà antiossidanti e lenitive 🍃 Burro di Cacao: ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea 🍃 Cera d'api: trattiene l'acqua dalla pelle rivestendola con una pellicola protettiva. Rende le pelli secche e screpolate incredibilmente morbide 🍃 Olio di Macadamia: ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata 🍃 Vitamina E: svolge un'azione antiossidante nei confronti dei radicali liberi 🍃 Filtri UV: riducono al minimo gli effetti indesiderati dell …[full HTML in 05-products-clean.json]

---

### Make-up Remover Bifasico
<a id="make-up-remover-bifasico-657775738"></a>

*Struccante Waterproof*

| | |
|---|---|
| **ID / SKU** | `657775738` / `00021` |
| **Price** | €12,90 |
| **Slug / URL** | `make-up-remover-bifasico` → https://cannabilla.it/products/make-up-remover-bifasico |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > VISO • Blog > Come prendersi cura delle pelle in inverno • Shop > VISO > Detersione |
| **Brand / GTIN / MPN** | — / 8053617090454 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 5 (primary + 4 gallery) |
| **Options / Variants** | none |
| **Meta title** | Make-up Remover Bifasico |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 719846075, 655210357, 186266261, 449326699, 653949370 |
| **Created / Updated** | 2024-05-16 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/657775738/4447193338.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/657775738/4738820746.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/657775738/5868010915.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/657775738/5868010909.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/657775738/5868012551.jpg

**Formato:** 100 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Agitare bene il prodotto per miscelare le due fasi, versarlo su un dischetto di cotone e passarlo sul trucco in modo da rimuoverlo. Non necessita risciacquo. Per una Skincare routine perfetta detergi poi il viso con la Mousse Detergente Delicata Cannabilla e infine idrata la tua pelle con la Crema Viso Idratante Cannabilla per un risultato ideale.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa e CBD | svolgono un'azione lenitiva, calmante e antiossidante |
| Olio di Carota | ricco di betacarotene, vitamina A, e vitamine del gruppo B, PP, E, e D. Mantiene la pelle morbida ed elastica |
| Glicerina vegetale | mantiene la pelle idratata e morbida |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Dicaprylyl Ether, Zea Mays Germ Oil, Glycerin, Cannabis Sativa Seed Oil, Daucus Carota Sativa Root, Tocopheryl Acetate, Cannabidiol, Propanediol, Sodium Chloride, Sodium Gluconate, Sodium Benzoate, Citric Acid, Parfum, Benzyl Alcohol, Limonene, Linalool, Menthol

**Descrizione (testo):**

> Lo Struccante Bifasico è in grado di rimuovere a fondo il make-up più resistente, anche quello waterproof. Arricchito con Olio di canapa e Olio di Carota , scioglie delicatamente il trucco lasciando la pelle morbida ed elastica . La formulazione risulta ultra-efficace e delicata, adatta a tutti i tipi di pelle . Non contiene coloranti . Formulata e prodotta nel cuore dei Monti Sibillini . Cruelty-free e senza parabeni . 🧴 Formato: 100 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Agitare bene il prodotto per miscelare le due fasi, versarlo su un dischetto di cotone e passarlo sul trucco in modo da rimuoverlo. Non necessita risciacquo. Per una Skincare routine perfetta detergi poi il viso con la Mousse Detergente Delicata Cannabilla e infine idrata la tua pelle con la Crema Viso Idratante Cannabilla per un risultato ideale. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa e CBD : svolgono un'azione lenitiva, calmante e antiossidante 🍃 Olio di Carota : ricco di betacarotene, vitamina A, e vitamine del gruppo B, PP, E, e D. Mantiene la pelle morbida ed elastica 🍃 Glicerina vegetale: mantiene la pelle idratata e morbida 🍃 Vitamina E: svolge un’azione antiossidante nei confronti dei radicali liberi Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP, non destinato a diagnosi/cura malattie INCI: Aqua, Dicaprylyl Ether, Zea Mays Germ Oil, Glycerin, Cannabis Sativa Seed Oil, Daucus Carota Sativa Root, Tocopheryl Acetate, Cannabidiol, Propanediol, Sodium Chloride, Sodium Gluconate, Sodium Benzoate, Citric Acid, P …[full HTML in 05-products-clean.json]

---

### Crema Mani Idratante
<a id="crema-mani-idratante-655951926"></a>

| | |
|---|---|
| **ID / SKU** | `655951926` / `00020` |
| **Price** | €13,80 |
| **Slug / URL** | `crema-mani-idratante` → https://cannabilla.it/products/crema-mani-idratante |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Blog > Proprietà della canapa • Blog > Come prendersi cura delle pelle in inverno • Shop > CORPO • Shop > CORPO > Mani |
| **Brand / GTIN / MPN** | — / 8053617090140 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 6 (primary + 5 gallery) |
| **Options / Variants** | none |
| **Meta title** | Crema Mani Idratante |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 733723503, 184319121, 660161320, 449333379 |
| **Created / Updated** | 2024-05-09 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655951926/4432858103.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655951926/5867992852.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655951926/4886465478.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655951926/5867992864.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655951926/5867990420.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655951926/5867990474.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Texture leggera, assorbimento rapido

**Formato:** 50 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare una piccola quantità di prodotto e massaggiare fino a completo assorbimento. Ideale per un utilizzo quotidiano, in ogni stagione.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi |
| Estratto di Iperico dei Monti Sibillini | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina |
| Burro di Mango | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea |
| Olio di Jojoba | in realtà non è un olio, ma una cera. Contiene esteri cerosi che rendono adatto a pelli con una barriera cutanea compromessa per questo è perfetto per pelli con dermatiti. Ripara la barriera cutanea, ha un effetto antinfiammatorio che lo rende perfetto in tutti i casi in cui la pelle subisce infezioni. |
| Glicerina | mantiene la pelle idratata e morbida |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo. |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aloe Barbadensis Leaf Juice, Aqua, Caprylic/Capric Triglyceride, Simmondsia Chinensis Seed Oil, Cannabis Sativa Seed Oil, Mangifera Indica Seed Butter, Dicaprylyl Ether, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, C15-19 Alkane, Persea Gratissima Oil, Glycerin, Tocopherol, Cannabidiol, Polyglyceryl-6 Laurate, Polyglycerin-6, Allantoin, Sodium Benzoate, Potassium Sorbate, Citric Acid, Polyacrylate Crosspolymer-6, Propanediol, Parfum, Terpineol, Cinnamyl Alcohol, Linalool, Amyl Salicylate, Linalyl Acetate, Vanillin

**Descrizione (testo):**

> La Crema Mani Idratante a base di Olio di Semi di Canapa ha un'azione riparatrice per mani secche e screpolate , Contiene principi attivi ad azione idratante, emolliente e riparatrice quali l' Estratto di Iperico dei Monti Sibillini che rendono la pelle morbida ed idratata. Svolge un'azione lenitiva e calmante grazie alle sue proprietà antinfiammatorie. L'emulsione è caratterizzata da una consistenza piacevole e leggera che dona alla pelle un tocco vellutato senza ungere. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 50 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare una piccola quantità di prodotto e massaggiare fino a completo assorbimento. Ideale per un utilizzo quotidiano, in ogni stagione. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi 🍃 Estratto di Iperico dei Monti Sibillini: particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina 🍃 Burro di Mango : ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea 🍃Olio di Jojoba: in realtà non è un olio, ma una cera. Contiene esteri cerosi che rendono adatto a pelli con una barriera cutanea compromessa per questo è perfetto p …[full HTML in 05-products-clean.json]

---

### Mousse Detergente Delicata
<a id="mousse-detergente-delicata-655210357"></a>

| | |
|---|---|
| **ID / SKU** | `655210357` / `00019` |
| **Price** | €16,20 |
| **Slug / URL** | `mousse-detergente-delicata` → https://cannabilla.it/products/mousse-detergente-delicata |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > VISO • Blog > Come prendersi cura delle pelle in inverno • Shop > VISO > Detersione |
| **Brand / GTIN / MPN** | — / 8053617090515 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics > Skin Care > Makeup Removers |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Mousse Detergente Delicata |
| **Rating / Reviews** | 5★ / 1 |
| **Related product IDs** | 719846075, 657775738, 186266261, 449326699, 683231653 |
| **Created / Updated** | 2024-05-07 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655210357/4447193221.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655210357/5868012599.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655210357/5868012617.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/655210357/5868012623.jpg

**Key benefits:** Idratazione profonda · Per pelli grasse / a tendenza acneica · Azione antiossidante · Texture leggera, assorbimento rapido

**Formato:** 150 ml  
**Packaging:** Flacone in plastica 100% riciclabile  
**Nota:** Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto.  

**Come usarlo:** Applicare il prodotto sulla pelle umida, mattina e sera, come primo step della skincare. Per una pulizia più profonda affiancare anche lo Scrub Viso 100% Naturale Cannabilla 1 o 2 volte a settimana, e per una Skincare routine perfetta terminare il processo con la Crema Viso Idratante Cannabilla .

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| CBD | svolge un'azione antiossidante, calmante e lenitiva |
| Glicerina vegetale | mantiene la pelle idratata e morbida |
| Estratto di Centella | azione purificante e astringente |
| Aloe Vera | ha un'azione idratante e lenitiva |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini) · CPNP n. 4583001

**INCI:** Aqua, Glycerin, Aloe Barbadensis Leaf Juice, Decyl Glucoside, Disodium Cocoamphodiacetate, Cocamidopropyl Betaine, Sodium Cocoyl Apple Amino Acids, Cannabidiol, Centella Asiatica Extract, Potassium Sorbate, Sodium Benzoate, Sodium Gluconate, Citric Acid, Sodium Chloride, Polysorbate20, Parfum, Linalyl Acetate, Limonene, Hexamethylindanopyran, Citrus Aurantium Dulcis Peel Oil, Hydroxycitronellal, Linalool, Citronellol, Citral, Citrus Limon Peel Oil, Pinene, Geraniol

**Descrizione (testo):**

> La Mousse Detergente Delicata è in grado di rimuovere le impurità e il sebo in eccesso, lasciando la pelle fresca e morbida. Formulata con Canapa ad azione antiossidante e seboregolatrice , estratto di Centella Asiatica che grazie alla sua azione astringente delicata aiuta a ridurre la dilatazione dei pori, a controllare l’eccesso di sebo e a tonificare la pelle . All'interno della formula ci sono sostanze che portano idratazione alla pelle come l'Aloe Vera, la Glicerina vegetale e il Pantenolo, il risultato è una pelle fresca, liscia e morbida. Inoltre la schiuma leggera rispetta l’equilibrio cutaneo preservando il film idrolipidico. Formulata e prodotta nel cuore dei Monti Sibillini . Cruelty-free e senza parabeni . 🧴 Formato: 150 ml ♻ Flacone in plastica 100% riciclabile 🌿Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto. Come usarlo: Applicare il prodotto sulla pelle umida, mattina e sera, come primo step della skincare. Per una pulizia più profonda affiancare anche lo Scrub Viso 100% Naturale Cannabilla 1 o 2 volte a settimana, e per una Skincare routine perfetta terminare il processo con la Crema Viso Idratante Cannabilla . Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 CBD: svolge un'azione antiossidante, calmante e lenitiva 🍃 Glicerina vegetale: mantiene la pelle idratata e morbida 🍃 Estratto di Centella: azione purificante e astringente 🍃 Aloe Vera: ha un'azione idratante e lenitiva Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP con il numero 4583001, non destinato a diagnosi/cura malattie INCI: Aqua, Glycerin, Aloe Barbadensis Leaf Juice, Decyl Glucoside, Disodium C …[full HTML in 05-products-clean.json]

---

### I'm Perfect - Siero Viso Anti Imperfezioni
<a id="i-m-perfect-siero-viso-anti-imperfezioni-653949370"></a>

*Contro Acne e Macchie*

| | |
|---|---|
| **ID / SKU** | `653949370` / `00018` |
| **Price** | €23,90 |
| **Slug / URL** | `im-perfect-siero-viso-anti-imperfezioni` → https://cannabilla.it/products/im-perfect-siero-viso-anti-imperfezioni |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > VISO • Shop > VISO > Sieri |
| **Brand / GTIN / MPN** | — / 8053617090492 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | I'm Perfect - Siero Viso Anti Imperfezioni |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 719846075, 655210357, 186266261, 657775738, 449326699 |
| **Created / Updated** | 2024-05-02 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/653949370/4447188033.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/653949370/5868012687.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/653949370/5868014712.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/653949370/5868014706.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Per pelli grasse / a tendenza acneica · Attenua le macchie cutanee

**Formato:** 30 ml  
**Packaging:** Flacone in vetro100% riciclabile  
**Nota:** Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto.  

**Come usarlo:** Applicare 3-4 gocce sul viso deterso e massaggiare. Può causare un leggero prurito. Può essere utilizzato prima della crema viso oppure addizionato ad essa. Per un risultato migliore consigliamo di detergere il viso con la Mousse Detergente Cannabilla ed eventualmente affiancare la Crema Viso idratante Cannabilla per una maggiore idratazione.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie |
| Niacinamide | nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli grasse, tra il 4% e il 5% agisce anche contro le macchie cutanee. Nella crema viso Cannabilla la niacinamide è al 5% |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo |
| Acido ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle |
| Estratto di salvia | svolge attività astringente e purificante |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Niacinamide, Potassium Azeloyl Diglycinate, Glycerin, Salvia Officinalis Leaf Extract, Snail Secretion Filtrate, Sodium Hyaluronate, Cannabidiol, Allantoin, Citric Acid, Sodium Benzoate, Potassium Sorbate, Propanediol, Polysorbate-20, Parfum, Menthol

**Descrizione (testo):**

> Siero ideale per chi ha la pelle grassa , a tendenza acneica, con imperfezioni e macchie cutanee . Il siero è formulato con Canapa che ha diverse proprietà, come quella a ntiossidante , lenitiva e idratante . I’m Perfect contiene anche Niacinamide e Azeloglicina, che regolarizzano la produzione di sebo , contrastano la formazione di brufoli , affinano i pori dilatati, migliorano la texture cutanea e svolgono un’azione schiarente nei confronti delle macchie post-acne. Formulato inoltre con Acido Ialuronico e Allantoina ad azione idratante e lenitiva che fornisce un trattamento completo per un viso più luminoso e dal tono uniforme. La formula è arricchita con estratto di Salvia che presenta un’ attività purificante e astringente. Formulato e prodotto nel cuore dei Monti Sibillini . Cruelty-free e senza parabeni . 🧴 Formato: 30 ml ♻ Flacone in vetro100% riciclabile 🌿Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto. Come usarlo: Applicare 3-4 gocce sul viso deterso e massaggiare. Può causare un leggero prurito. Può essere utilizzato prima della crema viso oppure addizionato ad essa. Per un risultato migliore consigliamo di detergere il viso con la Mousse Detergente Cannabilla ed eventualmente affiancare la Crema Viso idratante Cannabilla per una maggiore idratazione. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie 🍃 Niacinamide : nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli gras …[full HTML in 05-products-clean.json]

---

### Tattoo Balm - Balsamo Lenitivo
<a id="tattoo-balm-balsamo-lenitivo-538411089"></a>

| | |
|---|---|
| **ID / SKU** | `538411089` / `00017` |
| **Price** | €15,80 |
| **Slug / URL** | `tattoo-balm-balsamo-lenitivo` → https://cannabilla.it/products/tattoo-balm-balsamo-lenitivo |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Blog > Sangue di drago: storia e proprietà di una pianta magica • Shop > TATTOO-CARE |
| **Brand / GTIN / MPN** | — / 8053617090263 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.7 kg / not set |
| **Images** | 9 (primary + 8 gallery) |
| **Options / Variants** | none |
| **Meta title** | Balsamo Naturale Tatuaggi: Cura, Idratazione e Lucentezza per Pelle Sensibile |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 659654040, 449333379 |
| **Created / Updated** | 2023-03-14 / 2026-07-05 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/4447208798.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/5871388149.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/5871388373.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/5871386125.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/5871388125.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/5871388355.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/5871388131.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/5871388137.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/538411089/5871388361.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Azione antiossidante · Rigenerante ed elasticizzante · Protezione

**Formato:** 50 ml  
**Packaging:** Vaso in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare il prodotto sulla parte del corpo da trattare. Massaggiare fino a completo assorbimento. Utilizzare come necessario durante il giorno.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi |
| Sangue di drago | resina di colore rosso usata dai tempi antichi per guarire le ferite, disordini della pelle come eczemi |
| Burro di mango, cacao e karitè | hanno proprietà emollienti, nutrienti e idratanti. Sono burri pregiati in grado di ripristinare il corretto livello di idratazione cutanea |
| Olio di mandorle, vinaccioli | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva |
| Lanolina e cera d’api | permettono alla pelle di rimanere sempre idratata, formando una barriera contro l’esterno, svolgono un’azione riparatrice in caso di pelle secca e screpolata |
| Estratto di Iperico | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Mangifera Indica Seed Butter, Butyrospermum Parkii Butter, Lanolin, Prunus Amygdalus Dulcis Oil, Caprylic/capric Triglyceride, Beeswax, Macadamia Ternifolia Seed Oil, Cannabis Sativa Seed Oil, Helianthus Annuus Seed Oil, Simmondsia Chinensis Seed Oil, Theobroma Cacao Seed Butter, Chamomilla Recutita Oil, Cannabidiol, Tocopheryl Acetate, Croton Lechleri Resin Powder, Hypericum Perforatum Flower Extract, Rosmarinus Officinalis Extract, Calendula Officinalis Flower Extract, Argania Spinosa Kernel Oil, Butyrospermum Parkii Butter Extract, Canola Oil, Bisabolol, Parfum, Menthol, Camphor.

**Descrizione (testo):**

> Balsamo Tatuaggi Lenitivo con ingredienti 100% Naturali, perfetto per la cura della pelle appena tatuata e la rigenerazione dei tatuaggi datati. Idrata la pelle senza ungerla. Formulato appositamente per preparare la pelle al tatuaggio e promuovere, nelle settimane seguenti, la rapida rigenerazione della barriera cutanea. Arricchito con Olio di Canapa , Sangue di Drago ed Estratto di Iperico , stimola la rigenerazione e protegge la pelle tatuata. Contiene Olio di Canapa per un'azione emolliente e lenitiva, mentre il Sangue di Drago e Estratto di Iperico lavorano per stimolare la rigenerazione della pelle e offrire un'azione antiossidante. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴Formato: 50 ml ♻ Vaso in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare il prodotto sulla parte del corpo da trattare. Massaggiare fino a completo assorbimento. Utilizzare come necessario durante il giorno. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi 🍃 Sangue di drago: resina di colore rosso usata dai tempi antichi per guarire le ferite, disordini della pelle come eczemi 🍃 Burro di mango, cacao e karitè: hanno proprietà emollienti, nutrienti e idratanti. Sono burri pregiati in grado di ripristinare il corretto livello di idratazione cutanea 🍃 Olio di m …[full HTML in 05-products-clean.json]

---

### SportCream - Crema Muscolare Lenitiva
<a id="sportcream-crema-muscolare-lenitiva-522417741"></a>

| | |
|---|---|
| **ID / SKU** | `522417741` / `00016` |
| **Price** | €16,20 |
| **Slug / URL** | `sportcream-crema-muscolare-lenitiva` → https://cannabilla.it/products/sportcream-crema-muscolare-lenitiva |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Blog > Iperico: il fiore giallo dalle mille proprietà • Blog > L’Arnica, la pianta amica degli sportivi • Shop > BENESSERE MUSCOLARE e DERMOCURA • Shop > CORPO > Sport |
| **Brand / GTIN / MPN** | Cannabilla / 8053617092250 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 8 (primary + 7 gallery) |
| **Options / Variants** | Formato (2) · 2 combinations |
| **Meta title** | Crema Sportiva con Arnica e Tea Tree per Dolori Articolari e Muscolari 100ml |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 449333379, 454711844 |
| **Created / Updated** | 2023-01-10 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/522417741/4447205571.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/522417741/4447204442.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/522417741/5871376967.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/522417741/5871377199.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/522417741/5871377205.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/522417741/5871376973.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/522417741/5871376955.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/522417741/5871377193.png

**Key benefits:** Azione lenitiva e calmante · Sollievo muscolare

**Formato:** 100 ml - 200 ml  
**Packaging:** Flacone in vetro100% riciclabile  
**Nota:** Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto.  

**Come usarlo:** Applicare il prodotto sulla zona interessata e massaggiare favorendo l'assorbimento.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| CBD | svolge un’azione calmante e lenitiva. |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo |
| Estratto di Arnica Montana | L'estratto di Arnica montana è noto per le sue proprietà lenitive e rinfrescanti, utili per pelli sensibili e stanche. Ricco di flavonoidi, aiuta a ridurre rossori e favorire il benessere cutaneo. Ideale in formulazioni cosmetiche dolci e non aggressive, sempre nel rispetto della normativa vigente. |
| Estratto di Artiglio del Diavolo | L'estratto di Artiglio del Diavolo è noto nella tradizione erboristica per le sue proprietà lenitive. Se applicato tramite massaggio, contribuisce a donare una sensazione di benessere alle zone interessate. |
| Estratto di Rusco e Centella | la loro azione combinata, applicata tramite massaggio, è ideale per donare una sensazione di leggerezza e tonicità alle gambe. |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Aloe Barbadensis Leaf Juice , Prunus Amygdalus Dulcis Oil, Caprylic/Capric Triglyceride, Cannabis Sativa Seed Oil, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Propylene Glycol, Harpagophytum Procumbens Root Extract, Menthol, Glycerin, C15-19 Alkane, Tocopheryl Acetate, Chamomilla Recutita Flower Extract, Hypericum Perforatum Flower Extract, Cannabidiol, Arnica Montana Flower Extract, Taraxacum Officinale Root Extract, Ruscus Aculeatus Root Extract, Centella Asiatica Extract, Caffeine, , Propanediol, Allantoin, Sodium Benzoate, Potassium Sorbate, Citric Acid, Camphor, Sodium Gluconate, Eucalyptus Globulus Leaf Oil, Melaleuca Alternifolia Leaf Oil, Mentha Piperita Oil, Polyglyceryl-6 Laurate, Polyglycerin-6 , Polyacrylate Crosspolymer-6, Linalool, Geraniol

**Descrizione (testo):**

> SportCream è una crema ideata per donare un’immediata e piacevole sensazione di sollievo e leggerezza dopo un allenamento intenso, una lunga giornata passata in piedi o quando senti il corpo appesantito. La crema è pensata per accompagnare e potenziare i benefici di un massaggio distensivo aiutando muscoli e articolazioni a recuperare dopo uno sforzo. La formulazione include piante rinomate nella tradizione erboristica per la loro efficacia, come la Canapa , l'Arnica , l'Artiglio del diavolo , il Rusco , la Centella asiatica e l'Iperico. Sono inoltre presenti oli essenziali di Eucalipto , Menta e Tea tree. A queste piante sono state aggiunte delle sostanze attive per amplificare l'effetto lenitivo, come l'allantoina e la caffeina. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 100 ml - 200 ml ♻ Flacone in vetro100% riciclabile 🌿Contiene ingredienti di origine naturale, l’eventuale variazione di colore o odore indica la naturalezza degli ingredienti e non altera la qualità del prodotto. Come usarlo: Applicare il prodotto sulla zona interessata e massaggiare favorendo l'assorbimento. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 CBD : svolge un’azione calmante e lenitiva. 🍃 Allantoina : idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo 🍃 Estratto di Arnica Montana : L'estratto di Arnica montana è noto per le sue proprietà lenitive e rinfrescanti, utili per pelli sensibili e stanche. Ricco di flavonoidi, aiuta a ridurre rossori e favorire il benessere cutaneo. Ideale in formulazioni cosmetiche dolci e non aggressive, sempre nel rispetto …[full HTML in 05-products-clean.json]

---

### Olio Corpo per Massaggi
<a id="olio-corpo-per-massaggi-454711844"></a>

| | |
|---|---|
| **ID / SKU** | `454711844` / `00005` |
| **Price** | €17,90 |
| **Slug / URL** | `olio-corpo-per-massaggi` → https://cannabilla.it/products/olio-corpo-per-massaggi |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Blog > L’Arnica, la pianta amica degli sportivi • Shop > BENESSERE MUSCOLARE e DERMOCURA • Shop > CORPO > Oli Corpo |
| **Brand / GTIN / MPN** | — / 8053617090089 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.3 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Olio Corpo per Massaggi |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 659654040, 522417741, 449333379 |
| **Created / Updated** | 2022-03-23 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/454711844/4447197444.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/454711844/5871335675.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/454711844/5871335693.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/454711844/5871343810.png

**Key benefits:** Azione lenitiva e calmante · Sollievo muscolare

**Formato:** 200 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare un'adeguata quantità di olio sulla parte del corpo da trattare. Massaggiare fino a completo assorbimento. Utilizzare come necessario durante il giorno.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | ha proprietà antiossidanti e lenitive |
| Arnica montana | ha proprietà analgesiche, antinfiammatorie e decongestionanti, viene usata contro dolori muscolari e articolari |
| Olio di Mandorle Dolci | allevia la secchezza cutanea, svolge un’azione emolliente e lenitiva |
| Estratto di Camomilla | ha proprietà lenitive e disarrossanti |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |
| Olio essenziale di Rosmarino | ha proprietà purificanti sulla pelle, é un ottimo tonificante per il sistema nervoso e per il corpo in generale. Ha proprietà antiossidanti, antibatteriche, antivirali e antiparassitarie, cui si aggiungono proprietà dermopurificanti, astringenti, deodoranti e tonificanti |
| Olio essenziale di Menta | ha un'azione antipruriginosa e rinfrescante, è utile anche per purificare la pelle e lenire arrossamenti e scottature |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Cannabis Sativa Seed Oil, Prunus Amygdalus Dulcis Oil, Caprylic/capric Triglyceride, Dicaprylyl Ether, Chamomilla Recutita Oil, Macadamia Ternifolia Seed Oil, Persea Gratissima Oil, Helianthus Annuus Seed Oil, Heterotheca Inuloides Flower Extract, Mentha Piperita Oil, Rosmarinus Officinalis Leaf Oil, Melaleuca Alternifolia Leaf Oil, Tocopheryl Acetate, Cannabidiol, Parfum, Pinene, Beta-caryophyllene, Mentha Piperita Oil, Menthol, Camphor, Terpineol, Terpinolene, Alpha-terpinene, Benzyl Salicylate, Limonene, Linalyl Acetate, Hexyl Cinnamal, Citrus Aurantium Dulcis Peel Oil, Citronellol, Linalool, Alpha-isomethyl Ionone, Geranyl Acetate, Benzyl Alcohol, Citral

**Descrizione (testo):**

> L'Olio Corpo per Massaggi a base di Olio di Semi di Canapa amplifica l'effetto del massaggio. Efficace per alleviare tensioni muscolari e indolenzimenti. Tutta la parte sottoposta a massaggio beneficia delle proprietà della Canapa e dell' Arnica Montana , piante rinomate per le loro azioni antinfiammatorie, lenitive e calmanti. Sono presenti inoltre oli vegetali come l'olio di avocado , macadamia e mandorle . La formula è arricchita con Oli essenziali di Rosmarino, Menta e Tea tree. Oltre a migliorare il tuo benessere muscolare, renderà la tua pelle luminosa, elastica e ti avvolgerà con il suo delicato profumo. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 200 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare un'adeguata quantità di olio sulla parte del corpo da trattare. Massaggiare fino a completo assorbimento. Utilizzare come necessario durante il giorno. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : ha proprietà antiossidanti e lenitive 🍃 Arnica montana: ha proprietà analgesiche, antinfiammatorie e decongestionanti, viene usata contro dolori muscolari e articolari 🍃 Olio di Mandorle Dolci: allevia la secchezza cutanea, svolge un’azione emolliente e lenitiva 🍃 Estratto di Camomilla: ha proprietà lenitive e disarrossanti 🍃 Vitamina E: svolge un’azione antiossidante nei confronti dei radicali liberi 🍃 Olio essenziale di Rosmarino: ha pro …[full HTML in 05-products-clean.json]

---

### Crema Viso Idratante
<a id="crema-viso-idratante-449326699"></a>

*Idratazione Quotidiana*

| | |
|---|---|
| **ID / SKU** | `449326699` / `00004` |
| **Price** | €17,50 |
| **Slug / URL** | `crema-viso-idratante` → https://cannabilla.it/products/crema-viso-idratante |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > VISO • Blog > Come prendersi cura delle pelle in inverno • Shop > VISO > Creme Viso |
| **Brand / GTIN / MPN** | — / 8053617090096 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 6 (primary + 5 gallery) |
| **Options / Variants** | none |
| **Meta title** | Crema Viso Idratante |
| **Rating / Reviews** | 4★ / 1 |
| **Related product IDs** | 719846075, 655210357, 683231653, 683153006, 657775738, 186266261 |
| **Created / Updated** | 2022-03-03 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449326699/4447159144.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449326699/5868004504.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449326699/5867990498.png
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449326699/5868002324.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449326699/5867992985.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449326699/5867992955.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Adatta a pelli secche · Adatta a pelli sensibili · Adatta a pelli mature

**Formato:** 50 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare il prodotto m attina e sera sul viso deterso e asciutto. Massaggiare delicatamente per favorire l'assorbimento. Per una pelle ancora più luminosa e idratata detergi il viso mattina e sera con la Mousse Detergente Cannabilla prima di applicare la Crema Viso e se necessario valuta l'utilizzo di un Siero per un'idratazione ancora più profonda.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie |
| Acido ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle |
| Niacinamide | nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatterica, lenitiva e sebonormalizzante, ottima per le pelli grasse, tra il 4% e il 5% agisce anche contro le macchie cutanee. Nella crema viso Cannabilla la niacinamide è al 5% |
| Allantoina | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astringente e disarrossante, è un ottimo lenitivo. |
| Bisabololo | attivo calmante, lenitivo e disarrossante, ottenuto dall’olio essenziale di camomilla matricaria. |
| Aloe Vera | è un ottimo idratante, utile in caso di pelle irritata o arrossata, aiuta la pelle a ristabilirsi e dona anche un effetto rinfrescante |
| Olio di Jojoba | in realtà non è un olio, ma una cera. Ha una composizione simile a quella del sebo, riesce quindi ad essere assorbito in maniera efficace dalla pelle. Funge da penetration enhancer, riesce cioè a far penetrare meglio gli attivi. Ripara la barriera cutanea, ha un effetto antinfiammatorio, antiossidante e riparatore. |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aloe Barbadensis Leaf Juice, Cannabis Sativa Seed Oil, Caprylic/capric Triglyceride, Niacinamide, Sodium Acrylate/Sodium Acryloyldiethyl Taurate Copolymer, C15-19 Alkane, Simmondsia Chinensis Seed Oil, Aqua, Sodium Hyaluronate, Cannabidiol, Prunus Amygdalus Dulcis Oil, Allantoin, Glycerin, Tocopherol, Citric Acid, Sodium Benzoate, Potassium Sorbate, Bisabolol, Polyglyceryl-6 Laurate, Polyglyceryl-6, Polyacrylate Crosspolymer-6, Parfum, Hydroxycitronellal, Citronellol, Amyl Salicylate, Citrus Aurantium Dulcis Peel Oil, Limonene, Linalyl Acetate, Hexyl Cinnamal, Linalool, Alpha-isomethyl Ionone, Hexamethylindanopyran, Terpineol, Benzyl Salicylate, Geraniol, Tetramethyl Acetyloctahydronaphthalenes, Benzyl Benzoate

**Descrizione (testo):**

> La Crema Viso Idratante a base di Olio di Canapa idrata la pelle rendendola più morbida e luminosa. Adatta per pelli secche ma anche per pelli sensibili e mature . Ha una consistenza leggera e setosa in grado di garantire un assorbimento rapido , rendendola un'ottima base per il trucco o come ultimo step della skincare routine quotidiana. Grazie alla presenza di Acido Ialuronico e Glicerina dona una profonda idratazione che dura tutto il giorno. Formulata con Niacinamide ad azione seboregolatrice , antiossidante e schiarente contro le macchie cutanee . Sono presenti attivi lenitivi come Allantoina e Bisabololo. Formulata e prodotta nel cuore dei Monti Sibillini . Cruelty-free e senza parabeni . 🧴 Formato: 50 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare il prodotto m attina e sera sul viso deterso e asciutto. Massaggiare delicatamente per favorire l'assorbimento. Per una pelle ancora più luminosa e idratata detergi il viso mattina e sera con la Mousse Detergente Cannabilla prima di applicare la Crema Viso e se necessario valuta l'utilizzo di un Siero per un'idratazione ancora più profonda. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie 🍃 Acido ialuronico: svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle 🍃 Niacinamide: nota come Vitamina B3 o Vitamina PP, svolge diverse f …[full HTML in 05-products-clean.json]

---

### Crema Corpo Idratazione Intensiva
<a id="crema-corpo-idratazione-intensiva-449333379"></a>

*Ammorbidisce e Leviga la Pelle*

| | |
|---|---|
| **ID / SKU** | `449333379` / `00003` |
| **Price** | €18,80 |
| **Slug / URL** | `crema-corpo-idratazione-intensiva` → https://cannabilla.it/products/crema-corpo-idratazione-intensiva |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > CORPO • Shop > CORPO > Crema Corpo |
| **Brand / GTIN / MPN** | — / 8053617090478 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.2 kg / not set |
| **Images** | 3 (primary + 2 gallery) |
| **Options / Variants** | none |
| **Meta title** | Crema Corpo Idratazione Intensiva |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 733723745, 670883482, 683253581, 659654040, 367226103, 454711844 |
| **Created / Updated** | 2022-03-03 / 2026-07-07 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449333379/4432856638.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449333379/5867967044.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/449333379/5867990372.jpg

**Key benefits:** Idratazione profonda · Azione lenitiva e calmante · Azione antiossidante · Texture leggera, assorbimento rapido

**Formato:** 200 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare una piccola quantità di prodotto e massaggiare fino a completo assorbimento. Ideale per un utilizzo quotidiano, in ogni stagione. Per un risultato ancora più piacevole e setoso applica la Crema Corpo Idratazione Intensiva dopo aver deterso la pelle con il Bagno Doccia Cannabilla.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. |
| CBD | ha proprietà antiossidanti e lenitive |
| Acido Ialuronico | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle |
| Olio di Mandorle Dolci | allevia la secchezza cutanea, svolge un’azione emolliente e lenitiva |
| Estratto di Camomilla | ha proprietà lenitive e disarrossanti |
| Aloe Vera | svolge un'azione idratante e lenitiva |
| Allantoina | ha un'azione lenitiva |
| Vitamina E | svolge un’azione antiossidante nei confronti dei radicali liberi |
| Estratto di Iperico | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina |
| Mentolo | ha un'azione rinfrescante |

**Certificazioni:** Cruelty-free · Senza parabeni · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Aqua, Aloe Barbadensis Leaf Juice, Caprylic / Capric Triglyceride, Prunus Amygdalus Dulcis Oil, Cannabis Sativa Seed Oil, Niacinamide, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, C15-19 Alkane, Glycerin, Tocopheryl Acetate, Cannabidiol, Sodium Hyaluronate, Allantoin, Hypericum Perforatum Flower Extract, Chamomilla Recutita Flower Extract, Mangifera Indica Seed Butter, Menthol, Bisabolol, Potassium Sorbate, Sodium Benzoate, Sodium Gluconate, Citric Acid, Polyacrylate Crosspolymer-6, Polyglyceryl-6 Laurate, Polyglyceryl-6, Parfum, Linalyl Acetate, Pinene, Limonene, Terpineol, Alpha-isomethyl Ionone, Hexamethylindanopyran, Linalool, Pogostemon Cablin Oil, Geranyl Acetate, Terpinolene

**Descrizione (testo):**

> La Crema Corpo Idratazione Intensiva, grazie alla presenza dell’ Olio di Canapa , è una crema dalla forte azione lenitiva ed emolliente. Formulata anche con Acido Ialuronico che garantisce una pelle più sana, luminosa ed elastica, ed arricchita con Vitamina E e Mentolo per un'azione antiossidante e rinfrescante. Piacevole da applicare grazie alla texture fluida e alla profumazione gradevole e leggera. Ideale per alleviare lo stress cutaneo e assicurare un'idratazione profonda della pelle di tutto il corpo. Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 200 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare una piccola quantità di prodotto e massaggiare fino a completo assorbimento. Ideale per un utilizzo quotidiano, in ogni stagione. Per un risultato ancora più piacevole e setoso applica la Crema Corpo Idratazione Intensiva dopo aver deterso la pelle con il Bagno Doccia Cannabilla. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. 🍃 CBD : ha proprietà antiossidanti e lenitive 🍃 Acido Ialuronico : svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle 🍃 Olio di Mandorle Dolci: allevia la secchezza cutanea, svolge un’azione emolliente e lenitiva 🍃 Estratto di Camomilla: ha proprietà lenitive e disarrossanti 🍃 Aloe Vera: svolge un'azione idratante e lenitiva 🍃 Allantoina: ha un'azione lenitiva 🍃 Vit …[full HTML in 05-products-clean.json]

---

### Hemp Kiss - Balsamo Labbra Nocciola
<a id="hemp-kiss-balsamo-labbra-nocciola-367226942"></a>

| | |
|---|---|
| **ID / SKU** | `367226942` / `00001` |
| **Price** | €4,90 |
| **Slug / URL** | `hemp-kiss-balsamo-labbra-nocciola` → https://cannabilla.it/products/hemp-kiss-balsamo-labbra-nocciola |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop •  • Shop > VISO • Blog > Come prendersi cura delle pelle in inverno • Shop > BENESSERE MUSCOLARE e DERMOCURA > Hemp Kiss |
| **Brand / GTIN / MPN** | — / 8053617090294 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 30 kg / not set |
| **Images** | 3 (primary + 2 gallery) |
| **Options / Variants** | none |
| **Meta title** | Hemp Kiss - Balsamo Labbra Nocciola e Miele |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 719846075, 832585807, 731861529, 731668886, 655951926, 449326699 |
| **Created / Updated** | 2021-06-16 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/367226942/4447254187.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/367226942/5868004738.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/367226942/5868004732.jpg

**Key benefits:** Idratazione profonda · Nutriente · Protezione

**Formato:** 4.5 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Stendere sulle labbra uno strato sottile di prodotto e strofinare le labbra tra loro. Applica il prodotto sulle labbra tutte le volte che desideri.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. |
| CBD | ha proprietà antiossidanti e lenitive |
| Burro di Cacao | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea |
| Cera d'api | trattiene l'acqua dalla pelle rivestendola con una pellicola protettiva. Rende le pelli secche e screpolate incredibilmente morbide |
| Olio di Macadamia | ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Beeswax, Theobroma Cacao Seed Butter, Prunus Amygdalus Dulcis Oil, Macadamia Ternifolia Seed Oil, Aroma, Cannabis Sativa Seed Oil, Tocopheryl Acetate, Cannabidiol

**Descrizione (testo):**

> Hemp kiss - Balsamo Labbra a base di Olio di Semi di Canapa è un trattamento per le labbra 100% Naturale al dolce gusto di nocciola. Ha molteplici azioni: nutre le labbra, le protegge, le idrata e le ripara. La Cera d'Api e il Burro di Cacao insieme alla Canapa formano una barriera protettiva contro gli agenti esterni come freddo e inquinamento. Il formato in stick, pratico e leggero, ti consente di portarlo sempre con te e di usarlo ogni volta che le tue labbra ne hanno bisogno Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 4.5 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Stendere sulle labbra uno strato sottile di prodotto e strofinare le labbra tra loro. Applica il prodotto sulle labbra tutte le volte che desideri. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. 🍃 CBD: ha proprietà antiossidanti e lenitive 🍃 Burro di Cacao: ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea 🍃 Cera d'api: trattiene l'acqua dalla pelle rivestendola con una pellicola protettiva. Rende le pelli secche e screpolate incredibilmente morbide 🍃 Olio di Macadamia: ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata 🍃 Vitamina E: svolge un'azione antiossidante nei confronti dei radicali liberi Prodotto cosmetico a base di ca …[full HTML in 05-products-clean.json]

---

### Olio Corpo Post-Epilazione
<a id="olio-corpo-post-epilazione-367226103"></a>

| | |
|---|---|
| **ID / SKU** | `367226103` / `00000` |
| **Price** | €11,60 |
| **Slug / URL** | `olio-corpo-post-epilazione` → https://cannabilla.it/products/olio-corpo-post-epilazione |
| **Status** | enabled · in-stock (unlimited) |
| **Categories** | Shop • Shop > BENESSERE MUSCOLARE e DERMOCURA • Shop > CORPO > Oli Corpo |
| **Brand / GTIN / MPN** | — / 8053617090058 / — |
| **Google product category** | Health & Beauty > Personal Care > Cosmetics |
| **Weight / Dimensions** | 0.15 kg / not set |
| **Images** | 4 (primary + 3 gallery) |
| **Options / Variants** | none |
| **Meta title** | Olio Corpo Post-Epilazione |
| **Rating / Reviews** | — / 0 |
| **Related product IDs** | 659654040, 449333379 |
| **Created / Updated** | 2021-06-16 / 2026-07-08 |

**Primary image:** https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/367226103/4447200074.jpg

**Gallery:**
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/367226103/5871347297.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/367226103/5871347303.jpg
- https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/367226103/5871347334.png

**Key benefits:** Azione lenitiva e calmante · Azione antiossidante

**Formato:** 100 ml  
**Packaging:** Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna  
**Nota:** 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti  

**Come usarlo:** Applicare sulla zona depilata ed eseguire un delicato massaggio.

**Avvertenze:** Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi.

**Ingredienti (Cosa contiene):**

| Ingrediente | Beneficio |
|---|---|
| Olio di Semi di Canapa | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante |
| CBD | svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi |
| Estratto di Camomilla | ha proprietà antipruriginose, cicatrizzanti e disarrossanti, grazie al contenuto di flavonoidi a livello topico svolge un’azione antinfiammatoria |
| Olio di Mandorle dolci e Rosa | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva |
| Olio di Macadamia | ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata |
| Vitamina E | svolge un'azione antiossidante nei confronti dei radicali liberi |

**Certificazioni:** Cruelty-free · Senza parabeni · 100% naturale · Registrato CPNP · Made in Italy (Monti Sibillini)

**INCI:** Cannabis Sativa Seed Oil, Prunus Amygdalus Dulcis Oil, Caprylic/capric Triglyceride, Dicaprylyl Ether, Chamomilla Recutita Oil, Rosa Moschata Seed Oil, Macadamia Ternifolia Seed Oil, Cannabidiol, Tocopheryl Acetate

**Descrizione (testo):**

> L'Olio Post-Epilazione a base di Olio di Semi di Canapa è un trattamento indicato per donare benessere e lucentezza alla pelle, rimuovendo gli eventuali residui di cera. Non contiene profumo ed è totalmente privo di allergeni , ideale anche sulla pelle irritata. Ha una formula delicata con olio di canapa e estratto di camomilla per un effetto lenitivo e rilassante e Vitamina E ad azione antiossidante. Formulato e prodotto nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni. 🧴 Formato: 100 ml ♻ Flacone in plastica 100% riciclabile, riporta le informazioni complete, evitando un'ulteriore confezione esterna 🌿 100% naturale. L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti Come usarlo: Applicare sulla zona depilata ed eseguire un delicato massaggio. Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini. Conservare in luogo fresco e asciutto, al riparo dalla luce e fonti di calore. Evitare di lasciarlo aperto per lunghi periodi. Cosa contiene: 🍃 Olio di Semi di Canapa: ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e calmante 🍃 CBD : svolge un’azione calmante e lenitiva, grazie alle sue proprietà antinfiammatorie e antipruriginose evidenziate da diversi studi 🍃 Estratto di Camomilla: ha proprietà antipruriginose, cicatrizzanti e disarrossanti, grazie al contenuto di flavonoidi a livello topico svolge un’azione antinfiammatoria 🍃 Olio di Mandorle dolci e Rosa: oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva 🍃 Olio di Macadamia: ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata 🍃 Vitamina E: svolge un'azione antiossidante nei confronti dei radicali liberi Prodotto cosmetico a base di canapa e CBD, conforme alle norme nazionali ed europee, registrato nel portale europeo de …[full HTML in 05-products-clean.json]

---

## 5. Brand Voice Reference

Full reference: **`07-brand-voice.md`**. In brief: warm, botanical, benefit-first Italian; every cosmetic follows Intro → `🧴 Formato/♻/🌿` → `Come usarlo` → storage → `Cosa contiene (🍃)` → CPNP + `INCI`. Leads with **canapa**, keeps CBD detail deeper. Signature line: *"Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni."*

## 6. Ingredient Master Dictionary (61 unique)

| Ingredient | Benefit (IT) | usedIn |
|---|---|---|
| **CBD** | svolge un’azione calmante e lenitiva, grazie alle proprietà antinfiammatorie e antipruriginose del CBD evidenziate da diversi studi | 21 |
| **Vitamina E** | antiossidante, contribuisce a proteggere la pelle dall’invecchiamento e dalle aggressioni esterne | 18 |
| **Olio di Semi di Canapa** | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, lenitiva e ricostituisce la barriera cutanea. | 13 |
| **Allantoina** | idrata la pelle e ammorbidisce la cheratina, la proteina che costituisce buona parte della pelle, aiutando il turn over cellulare svolge quindi una delicata azione esfoliante. Inoltre ha azione astrin | 10 |
| **Acido ialuronico** | svolge una profonda azione idratante, come una spugna trattiene l'acqua sulla superficie della pelle Niacinamide: nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentua | 7 |
| **Aloe Vera** | è un ottimo idratante, utile in caso di pelle irritata o arrossata, aiuta la pelle a ristabilirsi e dona anche un effetto rinfrescante | 7 |
| **Estratto di Camomilla** | ha proprietà antipruriginose, cicatrizzanti e disarrossanti, grazie al contenuto di flavonoidi a livello topico svolge un’azione antinfiammatoria. | 7 |
| **Estratto di Iperico** | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina | 7 |
| **Estratto di Calendula** | grazie al suo contenuto di mucillagini, svolge una specifica azione idratante, emolliente, filmogena e protettiva, inoltre l’estratto oleoso contiene fitosteroli e alcoli triterpenici con azione emoll | 5 |
| **Glicerina vegetale** | mantiene la pelle idratata e morbida | 5 |
| **Niacinamide** | nota come Vitamina B3 o Vitamina PP, svolge diverse funzioni a seconda della percentuale inserita nella formulazione. Fino al 2% ha un'azione idratante, tra il 2% e il 4% svolge un'azione antibatteric | 5 |
| **Bisabololo** | attivo calmante, lenitivo e disarrossante, si ottine dall’olio essenziale di camomilla matricaria | 4 |
| **Filtri UV** | riducono al minimo gli effetti indesiderati della radiazione UV sulla pelle, come eritemi, ustioni, fotosensibilizzazioni, macchie cutanee | 4 |
| **Glicerina** | mantiene la pelle morbida e idratata | 4 |
| **Olio di canapa** | ricco di acidi grassi omega 3 e omega 6, questi hanno un ruolo fondamentale nell'equilibrio delle membrane cellulari. Svolge un'azione emolliente, calmante e lenitiva | 4 |
| **Olio di Macadamia** | ha proprietà emollienti e rigeneranti, perfetto per restituire idratazione e morbidezza alla pelle secca e irritata | 4 |
| **Burro di Cacao** | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea | 3 |
| **Burro di Mango** | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea | 3 |
| **Cera d'api** | trattiene l'acqua dalla pelle rivestendola con una pellicola protettiva. Rende le pelli secche e screpolate incredibilmente morbide | 3 |
| **Olio di Carota** | ricco di betacarotene, vitamina A, e vitamine del gruppo B, PP, E, e D. Mantiene la pelle morbida ed elastica | 3 |
| **Olio di Mandorle Dolci** | olio in grado di alleviare la secchezza cutanea, svolge un’azione emolliente e lenitiva | 3 |
| **Bava di lumaca** | è una miscela complessa, costituita da acqua una componente idratante ed umettante data da proteoglicani e glicosamminoglicani, dall'acido ialuronico e dal collagene. Vi è inoltre una componente esfol | 2 |
| **Burro di mango, cacao e karitè** | hanno proprietà emollienti, nutrienti e idratanti. Sono burri pregiati in grado di ripristinare il corretto livello di idratazione cutanea | 2 |
| **Estratto di Iperico dei Monti Sibillini** | particolarmente indicato per pelli secche, ha azione lenitiva e riepitelizzante, svolge un’attività antinfiammatoria grazie alla presenza di iperforina | 2 |
| **Estratto di Mela Rosa dei Monti Sibillini** | la mela rosa è ricca di polifenoli, in particolare flavonoidi derivati della quercetina, catechina e acido clorogenico che hanno proprietà antiossidanti. Grazie alla loro capacità di neutralizzare i r | 2 |
| **Estratto di rosmarino** | contiene antiossidanti che aiutano a combattere la secchezza della pelle rendendola più morbida ed elastica | 2 |
| **Lanolina e cera d’api** | permettono alla pelle di rimanere sempre idratata, formando una barriera contro l’esterno, svolgono un’azione riparatrice in caso di pelle secca e screpolata | 2 |
| **Mentolo** | svolge un'azione rinfrescante | 2 |
| **Olio di mandorle, vinaccioli** | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva | 2 |
| **Olio di Vinaccioli e Avocado** | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva | 2 |
| **Sangue di drago** | Una preziosa resina nota nella tradizione per le sue proprietà antiossidanti. Aiuta a proteggere la pelle dagli agenti esterni. | 2 |
| **Alcol etilico denaturato** | con una parte di acqua l'alcol riesce a penetrare attraverso la parete cellulare all'interno dei batteri dove provoca una denaturazione delle proteine fino alla distruzione del batterio stesso. Nella  | 1 |
| **Arnica montana** | ha proprietà analgesiche, antinfiammatorie e decongestionanti, viene usata contro dolori muscolari e articolari | 1 |
| **Burro di karitè** | ha proprietà emollienti, nutrienti e idratanti. E' in grado di ripristinare il corretto livello di idratazione cutanea | 1 |
| **Burro di Mango, Cacao e Karité** | ricchi e nutrienti, aitano a contrastare la secchezza profonda e restituiscono morbidezza | 1 |
| **Cheratina vegetale** | cheratina vegetale ottenuta da proteine idrolizzate di canapa e riso. Contribuisce alla creazione di un film protettivo e ristrutturante sulla fibra capillare compressa. Possiede spiccate proprietà co | 1 |
| **Estratto di Altea** | nutre e lenisce le pelli sensibili | 1 |
| **Estratto di Arnica Montana** | L'estratto di Arnica montana è noto per le sue proprietà lenitive e rinfrescanti, utili per pelli sensibili e stanche. Ricco di flavonoidi, aiuta a ridurre rossori e favorire il benessere cutaneo. Ide | 1 |
| **Estratto di Artiglio del Diavolo** | L'estratto di Artiglio del Diavolo è noto nella tradizione erboristica per le sue proprietà lenitive. Se applicato tramite massaggio, contribuisce a donare una sensazione di benessere alle zone intere | 1 |
| **Estratto di Camomilla & Bisabololo** | azione calmante e disarrossante | 1 |
| **Estratto di Carota** | ricco di betacarotene, vitamina A, e vitamine del gruppo B, PP, E, e D. Mantiene la pelle morbida ed elastica | 1 |
| **Estratto di Centella** | azione purificante e astringente | 1 |
| **Estratto di Elicriso** | azione astringente e antipruriginosa che allevia rossori e screpolature della pelle | 1 |
| **Estratto di Malva** | svolge un'azione antipruriginosa e astringente, contiene mucillagini che la rendono un ottimo idratante | 1 |
| **Estratto di Ortica** | stimola la microcircolazione del cuoio capelluto, rinforza le radici e regola l’eccesso di sebo per un cuoio capelluto più fresco e pulito. | 1 |
| **Estratto di Rusco e Centella** | la loro azione combinata, applicata tramite massaggio, è ideale per donare una sensazione di leggerezza e tonicità alle gambe. | 1 |
| **Estratto di salvia** | svolge attività astringente e purificante | 1 |
| **Estratto di Verbasco** | chiamato anche tasso barbasso, è noto per le due proprietà addolcenti, antipruriginose e per il trattamento emolliente di pelli secche e screpoalte | 1 |
| **Estratto e Olio essenziale di Rosmarino** | svolge un'azione antiossidante e migliora il microcircolo del cuoio capelluto | 1 |
| **Oli essenziali di tea tree, eucalipto, menta** | opportunamente veicolati, possono svolgere azione antisettica e balsamica. | 1 |
| **Olio di Avocado** | restituisce tono ed elasticità alle pelli secche. Olio in grado di alleviare la secchezza cutanea, svolge un’azione emolliente e lenitiva | 1 |
| **Olio di Jojoba** | in realtà non è un olio, ma una cera. Ha una composizione simile a quella del sebo, riesce quindi ad essere assorbito in maniera efficace dalla pelle. Funge da penetration enhancer, riesce cioè a far  | 1 |
| **Olio di mandorle** | è in grado di alleviare la secchezza cutanea, svolge un’azione emolliente e lenitiva | 1 |
| **Olio di Mandorle dolci e Rosa** | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva | 1 |
| **Olio di mandorle e vinaccioli** | oli in grado di alleviare la secchezza cutanea, svolgono un’azione emolliente e lenitiva | 1 |
| **Olio di Semi di Canapa e CBD** | svolgono un'azione lenitiva, calmante e antiossidante | 1 |
| **Olio essenziale di Eucalipto e Bergamotto** | opportunamente veicolati, possono svolgere azione antisettica e balsamica. | 1 |
| **Olio essenziale di Menta** | ha un'azione antipruriginosa e rinfrescante, è utile anche per purificare la pelle e lenire arrossamenti e scottature | 1 |
| **Olio essenziale di Rosmarino** | ha proprietà purificanti sulla pelle, é un ottimo tonificante per il sistema nervoso e per il corpo in generale. Ha proprietà antiossidanti, antibatteriche, antivirali e antiparassitarie, cui si aggiu | 1 |
| **Pantenolo** | è un umettante, il che significa che attira e trattiene l'umidità nella pelle, aiutando a mantenere la zona tatuata idratata e prevenendo la secchezza, ha anche proprietà lenitive, svolge quindi un ef | 1 |
| **Squalano** | ha caratteristiche emollienti e idratanti. E' la forma stabile dello squalene, componente del sebo, risulta efficace anche come agente anti-pruriginoso in situazioni di pelle molto secca. | 1 |

## 7. Certifications & Compliance Phrases

| Claim | Products |
|---|---|
| Registrato CPNP | 37 |
| Cruelty-free | 34 |
| Senza parabeni | 34 |
| Made in Italy (Monti Sibillini) | 34 |
| 100% naturale | 20 |
| Ingredienti biologici | 1 |

Recurring compliance/marketing phrases (reusable):
- *Solo per uso esterno* — 38 products
- *Registrato nel portale europeo CPNP* — 37 products
- *Conforme alle norme nazionali ed europee* — 37 products
- *Formulato e prodotto nel cuore dei Monti Sibillini* — 34 products
- *Cruelty-free e senza parabeni* — 34 products
- *L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti* — 31 products
- *A base di Olio di Canapa* — 30 products

## 8. Files Generated (`/reference/`)

| File | Contents |
|---|---|
| `00-store-profile.json` | Store profile, features, CDN/SDK config, MCP-limitation notes |
| `01-categories.json` | Full category tree (shop + blog), raw MCP fields |
| `02-products-raw.json` | Untouched Ecwid full dump — all 46 products, every field |
| `03-static-pages.json` | Static-page URLs (bodies not MCP-retrievable) |
| `04-promotions.json` | Coupons/promos (not MCP-retrievable; 0 product-level sales) |
| `05-products-clean.json` | Clean structured 46 products + extractedSections |
| `06-categories-clean.md` | Human-readable nested taxonomy with product lists |
| `07-brand-voice.md` | Voice, phrases, ingredient dict, concerns, certifications |
| `08-images.json` | Every image URL in all 6 sizes, per product |
| `08-images-summary.md` | Image stats, single-image flags, top-5, broken check |
| `CANNABILLA_CONTENT_MASTER.md` | This file — the self-contained index |
| `build_*.cjs` | The read-only local transform scripts (reproducible) |

## 9. Fields Missing / Gaps (flagged for client cleanup — NOT invented)

- **Brand attribute empty:** 37/45 enabled (only 8 carry brand="Cannabilla").
- **Dimensions (L/W/H) unset:** 45/45 — all zero; carriers rate by weight only.
- **Sale price (compareToPrice):** 0/45 — no product-level sale annotations.
- **GTIN missing:** 9/45 (mostly merch/gift). GTINs present sit in a custom "GTIN" attribute, not Ecwid's native barcode field.
- **MPN missing:** 45/45 — none set (SKUs exist and could seed MPN).
- **CPNP number not stated in copy:** 32 cosmetics have INCI but no CPNP number in the description (only 6 state a CPNP number).
- **Ingredients as INCI-only (no annotated 🍃 benefits):** Olio DopoSole Lenitivo, Hempilla SHAYANA 30 - Estratto Naturale di Canapa, Hempilla SOMA 20 - Estratto Naturale di Canapa, Hempilla SHANTI 10 - Estratto Naturale di Canapa, Hempilla ANANDA 5 - Estratto Naturale di Canapa.
- **Category description HTML & hero images:** not exposed by MCP `list_categories`.
- **Payment/shipping/tax config & feed URLs:** not exposed by MCP profile tool (see 00-store-profile.json).
- **Static page bodies & coupons:** no MCP read tool available.
- **Uncategorized product:** `Liquido igienizzante spray` sits in no shopping department.
- **Disabled placeholder:** `Sunny Kiss` (`658845203`) — filter out (`enabled=false`).
