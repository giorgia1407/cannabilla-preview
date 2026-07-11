#!/usr/bin/env node
// READ-ONLY generator for CANNABILLA_CONTENT_MASTER.md
const fs=require('fs');
const C=require('./05-products-clean.json');
const CATS=require('./01-categories.json');
const AGG=require('./_agg.json');
const HEAD=require('./_headtest.json');
const eur=n=>n==null?'—':('€'+Number(n).toFixed(2).replace('.',','));
const catById={}; [...CATS.roots,...CATS.shopCategories,...CATS.blogArticleCategories].forEach(c=>catById[c.id]=c);
const TOP=[168093539,182395501,168093540,168117863,168093542,172904516,168937320,182395513,180176114];
const anchor=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

let m='';
m+='# Cannabilla — Complete Content Reference\n\n';
m+='**Generated:** 2026-07-10 · **Source:** Live Ecwid store `26630034` via MCP (READ-ONLY) · **Status:** nothing modified on the live store.\n\n';
m+='This is the single source of truth for the Cannabilla Next.js frontend. A designer/developer can populate the entire frontend from this file plus the JSON references in `/reference/`. Assumes no prior context.\n\n';
m+='---\n\n## 1. Store Snapshot\n';
m+='| Field | Value |\n|---|---|\n';
m+='| Store ID | `26630034` |\n| Store name | Cannabilla |\n| Company | Società Biochimica Galloppa srls, Amandola (FM), Italy |\n| Contact | info@cannabilla.it · 0736096736 |\n| Public storefront | https://cannabilla.it |\n| Currency | EUR (display `€XX,XX`, comma decimal) |\n| Weight unit | kg |\n| Languages | IT (default), EN |\n| Storefront SDK | `https://app.ecwid.com/script.js?26630034` |\n| Image CDN | `https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/` |\n';
m+=`| Total products | ${C.length} (${C.filter(p=>p.enabled).length} enabled + ${C.filter(p=>!p.enabled).length} disabled) |\n`;
m+=`| Shopping categories | 9 top-level + 14 subcategories (under \`Shop\`) |\n`;
m+=`| Total images | ${AGG.totalImages} |\n`;
m+='| Payments (prior verified) | PayPal, PayPal Pay-in-3, Card via Stripe |\n| Shipping (prior verified) | GLS, Printful (merch), Packlink PRO |\n| Tax | ⚠️ VAT rate / price-inclusivity NOT exposed by MCP — confirm in admin |\n\n';
m+='> ⚠️ **Hybrid-routing note:** product / cart / checkout stay on Ecwid. Preserve `/products/*`, `/cart`, `/products/cart`, `/products/search`. See the delta docs (`../MERCHANT_CENTER_URLS.md`) for the 45 live URLs + 39 redirect map.\n\n';

m+='---\n\n## 2. Category Taxonomy\n\n';
m+='| Department | Ecwid ID | # | Subcategories |\n|---|---|---|---|\n';
for(const tid of TOP){ const tc=catById[tid]; const subs=CATS.shopCategories.filter(c=>c.parentId===tid);
  m+=`| ${tc.name} | \`${tid}\` | ${tc.productCount} | ${subs.map(s=>s.name).join(', ')||'—'} |\n`; }
m+='\nFull nested taxonomy with per-category product lists: **`06-categories-clean.md`**.\n\n';

// index
m+='---\n\n## 3. Product Index\n\n### By department\n';
for(const tid of TOP){ const tc=catById[tid]; const prods=C.filter(p=>p.categories.some(c=>c.id===tid));
  m+=`\n**${tc.name}** — ${prods.map(p=>`[${p.name}](#${anchor(p.name+'-'+p.id)})`).join(' · ')}\n`; }
m+='\n### Alphabetical\n\n| Product | € | Slug | Dept |\n|---|---|---|---|\n';
[...C].sort((a,b)=>a.name.localeCompare(b.name)).forEach(p=>{
  m+=`| [${p.name}](#${anchor(p.name+'-'+p.id)})${p.enabled?'':' _(disabled)_'} | ${eur(p.price)} | \`${p.slug}\` | ${p.primaryCategory||'—'} |\n`; });

// full details
m+='\n---\n\n## 4. Full Product Details\n\n';
for(const p of C){
  const s=p.extractedSections;
  m+=`### ${p.name}\n`;
  m+=`<a id="${anchor(p.name+'-'+p.id)}"></a>\n\n`;
  if(p.subtitle) m+=`*${p.subtitle}*\n\n`;
  m+='| | |\n|---|---|\n';
  m+=`| **ID / SKU** | \`${p.id}\` / \`${p.sku||'—'}\` |\n`;
  m+=`| **Price** | ${eur(p.price)}${p.onSale?` (was ${eur(p.originalPrice)})`:''} |\n`;
  m+=`| **Slug / URL** | \`${p.slug}\` → ${p.publicUrl} |\n`;
  m+=`| **Status** | ${p.enabled?'enabled':'**disabled**'} · ${p.stockStatus}${p.unlimitedStock?' (unlimited)':''} |\n`;
  m+=`| **Categories** | ${p.categories.map(c=>c.path).join(' • ')||'—'} |\n`;
  m+=`| **Brand / GTIN / MPN** | ${p.brand||'—'} / ${p.gtin||'—'} / ${p.mpn||'—'} |\n`;
  m+=`| **Google product category** | ${p.googleProductCategoryName||'—'} |\n`;
  m+=`| **Weight / Dimensions** | ${p.weight!=null?p.weight+' kg':'—'} / ${(p.dimensions&&(p.dimensions.length||p.dimensions.width||p.dimensions.height))?JSON.stringify(p.dimensions):'not set'} |\n`;
  m+=`| **Images** | ${p.images.count} (primary + ${Math.max(0,p.images.count-1)} gallery) |\n`;
  m+=`| **Options / Variants** | ${p.options.length? p.options.map(o=>o.name+' ('+o.choices.length+')').join(', '):'none'}${p.variantCount?` · ${p.variantCount} combinations`:''} |\n`;
  m+=`| **Meta title** | ${p.metaTitle||'—'} |\n`;
  m+=`| **Rating / Reviews** | ${p.rating?p.rating+'★':'—'} / ${p.reviewsPublished} |\n`;
  m+=`| **Related product IDs** | ${p.relatedProductIds.join(', ')||'—'} |\n`;
  m+=`| **Created / Updated** | ${(p.createdAt||'—').slice(0,10)} / ${(p.updatedAt||'—').slice(0,10)} |\n`;
  m+='\n**Primary image:** '+(p.images.primary||'—')+'\n\n';
  if(p.images.gallery.length){ m+='**Gallery:**\n'+p.images.gallery.map(u=>'- '+u).join('\n')+'\n\n'; }
  // extracted
  if(s.keyBenefits.length) m+=`**Key benefits:** ${s.keyBenefits.join(' · ')}\n\n`;
  if(s.format) m+=`**Formato:** ${s.format}  \n`;
  if(s.packaging) m+=`**Packaging:** ${s.packaging}  \n`;
  if(s.variationNote) m+=`**Nota:** ${s.variationNote}  \n`;
  if(s.format||s.packaging||s.variationNote) m+='\n';
  if(s.howToUse) m+=`**Come usarlo:** ${s.howToUse}\n\n`;
  if(s.storageWarnings) m+=`**Avvertenze:** ${s.storageWarnings}\n\n`;
  if(s.ingredients.length){ m+='**Ingredienti (Cosa contiene):**\n\n| Ingrediente | Beneficio |\n|---|---|\n';
    s.ingredients.forEach(i=>m+=`| ${i.name} | ${(i.benefit||'—').replace(/\|/g,'/')} |\n`); m+='\n'; }
  if(s.certifications.length) m+=`**Certificazioni:** ${s.certifications.join(' · ')}${s.cpnpNumber?` · CPNP n. ${s.cpnpNumber}`:''}\n\n`;
  if(s.inci) m+=`**INCI:** ${s.inci}\n\n`;
  m+='**Descrizione (testo):**\n\n> '+ (p.descriptionText||'').replace(/\n/g,' ').slice(0,2000) + (p.descriptionText.length>2000?' …[full HTML in 05-products-clean.json]':'') +'\n\n';
  m+='---\n\n';
}

// brand voice
m+='## 5. Brand Voice Reference\n\nFull reference: **`07-brand-voice.md`**. In brief: warm, botanical, benefit-first Italian; every cosmetic follows Intro → `🧴 Formato/♻/🌿` → `Come usarlo` → storage → `Cosa contiene (🍃)` → CPNP + `INCI`. Leads with **canapa**, keeps CBD detail deeper. Signature line: *"Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni."*\n\n';

// ingredient dictionary
m+=`## 6. Ingredient Master Dictionary (${AGG.ingredients.length} unique)\n\n| Ingredient | Benefit (IT) | usedIn |\n|---|---|---|\n`;
AGG.ingredients.forEach(i=>m+=`| **${i.name}** | ${(i.benefit||'—').replace(/\|/g,'/').replace(/\s+/g,' ').slice(0,200)} | ${i.usedInCount} |\n`);

// certifications
m+='\n## 7. Certifications & Compliance Phrases\n\n| Claim | Products |\n|---|---|\n';
Object.entries(AGG.certCount).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>m+=`| ${k} | ${v} |\n`);
m+='\nRecurring compliance/marketing phrases (reusable):\n';
AGG.phrases.forEach(p=>m+=`- *${p.phrase}* — ${p.products} products\n`);

// files
m+='\n## 8. Files Generated (`/reference/`)\n\n';
m+='| File | Contents |\n|---|---|\n';
m+='| `00-store-profile.json` | Store profile, features, CDN/SDK config, MCP-limitation notes |\n';
m+='| `01-categories.json` | Full category tree (shop + blog), raw MCP fields |\n';
m+='| `02-products-raw.json` | Untouched Ecwid full dump — all 46 products, every field |\n';
m+='| `03-static-pages.json` | Static-page URLs (bodies not MCP-retrievable) |\n';
m+='| `04-promotions.json` | Coupons/promos (not MCP-retrievable; 0 product-level sales) |\n';
m+='| `05-products-clean.json` | Clean structured 46 products + extractedSections |\n';
m+='| `06-categories-clean.md` | Human-readable nested taxonomy with product lists |\n';
m+='| `07-brand-voice.md` | Voice, phrases, ingredient dict, concerns, certifications |\n';
m+='| `08-images.json` | Every image URL in all 6 sizes, per product |\n';
m+='| `08-images-summary.md` | Image stats, single-image flags, top-5, broken check |\n';
m+='| `CANNABILLA_CONTENT_MASTER.md` | This file — the self-contained index |\n';
m+='| `build_*.cjs` | The read-only local transform scripts (reproducible) |\n';

// gaps
const noBrand=C.filter(p=>p.enabled&&!p.brand);
const noGtin=C.filter(p=>p.enabled&&!p.gtin);
const noDim=C.filter(p=>p.enabled&&!(p.dimensions&&(p.dimensions.length||p.dimensions.width||p.dimensions.height)));
const noMeta=C.filter(p=>p.enabled&&!p.metaDescription);
const noMpn=C.filter(p=>p.enabled&&!p.mpn);
const inciOnly=C.filter(p=>p.enabled&&p.extractedSections.inci&&p.extractedSections.ingredients.length===0);
const noCpnp=C.filter(p=>p.enabled&&p.extractedSections.inci&&!p.extractedSections.cpnpNumber);
m+='\n## 9. Fields Missing / Gaps (flagged for client cleanup — NOT invented)\n\n';
m+=`- **Brand attribute empty:** ${noBrand.length}/45 enabled (only ${45-noBrand.length} carry brand="Cannabilla").\n`;
m+=`- **Dimensions (L/W/H) unset:** ${noDim.length}/45 — all zero; carriers rate by weight only.\n`;
m+=`- **Sale price (compareToPrice):** 0/45 — no product-level sale annotations.\n`;
m+=`- **GTIN missing:** ${noGtin.length}/45 (mostly merch/gift). GTINs present sit in a custom "GTIN" attribute, not Ecwid's native barcode field.\n`;
m+=`- **MPN missing:** ${noMpn.length}/45 — none set (SKUs exist and could seed MPN).\n`;
m+=`- **CPNP number not stated in copy:** ${noCpnp.length} cosmetics have INCI but no CPNP number in the description (only ${45-noBrand.length>0?AGG.ingredients&&'':''}${C.filter(p=>p.extractedSections.cpnpNumber).length} state a CPNP number).\n`;
m+=`- **Ingredients as INCI-only (no annotated 🍃 benefits):** ${inciOnly.map(p=>p.name).join(', ')}.\n`;
m+='- **Category description HTML & hero images:** not exposed by MCP `list_categories`.\n';
m+='- **Payment/shipping/tax config & feed URLs:** not exposed by MCP profile tool (see 00-store-profile.json).\n';
m+='- **Static page bodies & coupons:** no MCP read tool available.\n';
m+='- **Uncategorized product:** `Liquido igienizzante spray` sits in no shopping department.\n';
m+='- **Disabled placeholder:** `Sunny Kiss` (`658845203`) — filter out (`enabled=false`).\n';

fs.writeFileSync('./CANNABILLA_CONTENT_MASTER.md',m);
console.log('wrote CANNABILLA_CONTENT_MASTER.md, chars:',m.length);
console.log('gaps: noBrand',noBrand.length,'noDim',noDim.length,'noGtin',noGtin.length,'inciOnly',inciOnly.length,'cpnpStated',C.filter(p=>p.extractedSections.cpnpNumber).length);
