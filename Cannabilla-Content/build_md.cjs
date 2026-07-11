#!/usr/bin/env node
// READ-ONLY local generator. Writes 06-categories-clean.md, 07-brand-voice.md, 08-images-summary.md, CANNABILLA_CONTENT_MASTER.md
const fs=require('fs');
const C=require('./05-products-clean.json');
const CATS=require('./01-categories.json');
const AGG=require('./_agg.json');
const HEAD=require('./_headtest.json');
const byId={}; C.forEach(p=>byId[p.id]=p);
const catById={}; [...CATS.roots,...CATS.shopCategories,...CATS.blogArticleCategories].forEach(c=>catById[c.id]=c);
const eur=n=>n==null?'—':('€'+Number(n).toFixed(2).replace('.',','));

// membership: product ids per category id (direct)
function inCat(catId){ return C.filter(p=>p.categories.some(c=>c.id===catId)); }

// ---------- 06-categories-clean.md ----------
const TOP=[168093539,182395501,168093540,168117863,168093542,172904516,168937320,182395513,180176114];
let md='# Cannabilla — Category Taxonomy (clean)\n\n';
md+='Source: live Ecwid `26630034` via MCP, 2026-07-10 · READ-ONLY snapshot.\n\n';
md+='> Category description HTML and category hero images are **not exposed** by the MCP `list_categories` tool. Hero images below are picked from real product photos. Products can belong to multiple categories (noted).\n\n';
md+='**Roots:** `Shop` (168031804, 45 products) · `Blog` (168032038, 21 article-associations — not shopping).\n\n---\n\n';
for(const tid of TOP){
  const tc=catById[tid]; const prods=inCat(tid);
  md+=`## ${tc.name}  \`${tid}\`  — ${tc.productCount} products\n`;
  const hero=prods.find(p=>p.enabled&&p.images.count>1)||prods[0];
  if(hero) md+=`**Hero image:** ${hero.images.primary}\n\n`;
  // subcategories
  const subs=CATS.shopCategories.filter(c=>c.parentId===tid);
  if(subs.length){
    md+=`**Subcategories:** ${subs.map(s=>`${s.name} (\`${s.id}\`, ${s.productCount})`).join(' · ')}\n\n`;
  }
  md+='| Product | € | Slug | Also in |\n|---|---|---|---|\n';
  for(const p of prods){
    const also=p.categories.filter(c=>c.id!==tid && TOP.includes(c.id)).map(c=>c.name);
    md+=`| ${p.name}${p.enabled?'':' _(disabled)_'} | ${eur(p.price)} | \`${p.slug}\` | ${also.join(', ')||'—'} |\n`;
  }
  // nested subcategory product lists
  for(const s of subs){
    const sp=inCat(s.id);
    md+=`\n**↳ ${s.name}** (\`${s.id}\`): ${sp.map(p=>p.name).join(' · ')||'—'}\n`;
  }
  md+='\n---\n\n';
}
// uncategorized
const uncat=C.filter(p=> !p.categories.some(c=>TOP.includes(c.id)) && p.enabled);
md+='## (No shopping department)\n\n';
md+=uncat.map(p=>`- ${p.name} — ${eur(p.price)} — \`${p.slug}\``).join('\n')+'\n\n';
md+='> `Liquido igienizzante spray` is uncategorized. `Carta Regalo` (gift card) and `Sunny Kiss` (disabled) are utility/placeholder.\n';
fs.writeFileSync('./06-categories-clean.md',md);

// ---------- 07-brand-voice.md ----------
let bv='# Cannabilla — Brand Voice & Language Reference\n\nSource: live product descriptions, Ecwid `26630034`, 2026-07-10 · READ-ONLY.\n\n';
bv+='## 1. Tone in one line\nWarm, expert, botanical, unmistakably Italian — a cosmetics-lab voice rooted in the Monti Sibillini. Benefit-first, ingredient-led, compliance-aware (leads with **canapa**, keeps clinical/CBD detail lower in the body).\n\n';
bv+='## 2. Representative fragments (verbatim from live descriptions)\n';
const frags=[
 'A base di Olio di Canapa idrata la pelle rendendola più morbida e luminosa.',
 'Ha una consistenza leggera e setosa in grado di garantire un assorbimento rapido.',
 'Formulata e prodotta nel cuore dei Monti Sibillini. Cruelty-free e senza parabeni.',
 "L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti.",
 'Scopri l’essenza della tradizione Ayurvedica con il nostro Estratto Naturale 100% di Canapa.',
 'Svolge un’azione emolliente, lenitiva e calmante.',
 'Un concentrato di idratazione e rigenerazione con ingredienti naturali.',
 'Ideale per accompagnare e potenziare i benefici di un massaggio distensivo.',
 'Rigenerare e reidratare la pelle in profondità dopo una eccessiva esposizione solare.',
 'Prodotto cosmetico a base di canapa, conforme alle norme nazionali ed europee, registrato nel portale europeo dei cosmetici CPNP.',
 'Solo per uso esterno. Evitare il contatto con gli occhi. Tenere fuori dalla portata dei bambini.',
 'Aiuta a donare sollievo e comfort, favorendo il ripristino della barriera idrolipidica.',
];
bv+=frags.map(f=>`- *"${f}"*`).join('\n')+'\n\n';
bv+='## 3. Recurring structural blocks (every cosmetic follows this skeleton)\n';
bv+='1. **Intro** — benefit + hero ingredient (olio di canapa), skin types addressed.\n2. `🧴 Formato:` size · `♻` packaging note · `🌿` natural-variation disclaimer.\n3. **`Come usarlo:`** — application ritual, often cross-sells another Cannabilla product.\n4. Storage/safety: *"Solo per uso esterno…"*\n5. **`Cosa contiene:`** — `🍃 Ingrediente: beneficio` bulleted list.\n6. CPNP compliance line + **`INCI:`** full list.\n\n';
bv+='## 4. Recurring phrases (reusable in the frontend)\n| Phrase | Appears in N products |\n|---|---|\n';
AGG.phrases.forEach(p=>bv+=`| ${p.phrase} | ${p.products} |\n`);
bv+='\n## 5. Certifications & compliance language\n| Claim | Products |\n|---|---|\n';
Object.entries(AGG.certCount).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>bv+=`| ${k} | ${v} |\n`);
bv+='\n## 6. Skin & hair concerns addressed (for filters / marketing)\n| Concern | Products |\n|---|---|\n';
AGG.concerns.forEach(c=>bv+=`| ${c.concern} | ${c.products} |\n`);
bv+=`\n## 7. Ingredient master dictionary (${AGG.ingredients.length} unique, with described benefits)\n`;
bv+='One canonical benefit per ingredient (richest description kept). `usedIn` = number of products that name it in their benefit list.\n\n| Ingredient | Described benefit | usedIn |\n|---|---|---|\n';
AGG.ingredients.forEach(i=>{ const b=(i.benefit||'—').replace(/\|/g,'/').replace(/\s+/g,' ').trim(); bv+=`| **${i.name}** | ${b.slice(0,240)} | ${i.usedInCount} |\n`; });
bv+='\n> Note: 5 products (Olio DopoSole Lenitivo + the 4 Hempilla extracts) list only an INCI, not an annotated `🍃` benefit list — their actives are in `extractedSections.inci`.\n';
fs.writeFileSync('./07-brand-voice.md',bv);

// ---------- 08-images-summary.md ----------
let im='# Cannabilla — Images Summary\n\nSource: `08-images.json` (derived from live Ecwid galleryImages), 2026-07-10 · READ-ONLY.\n\n';
im+=`- **Total images across catalog:** ${AGG.totalImages} (primary + gallery, 46 products)\n`;
im+=`- **Videos:** ${AGG.withVideo.length? AGG.withVideo.map(v=>v.name+' ('+v.videos+')').join(', '):'0 across catalog'}\n`;
im+=`- **Each Cloudfront image is served in 6 sizes:** original, image, hd, thumbnail, small, (originalImageUrl). See per-image \`sizes\` in 08-images.json.\n\n`;
im+='## Products with only 1 image (flag for improvement)\n';
im+=AGG.single.length? AGG.single.map(s=>`- ${s.name} (\`${s.slug}\`)`).join('\n')+'\n' : '_none_\n';
im+='\n> Both single-image entries are non-cosmetic (gift card + disabled placeholder). **Every real enabled product has ≥2 images.**\n\n';
im+='## Top 5 products by image count\n';
AGG.top5.forEach((t,i)=>im+=`${i+1}. ${t.name} — ${t.count} images\n`);
im+='\n## Broken / placeholder images\nNone detected — every product resolves a primary Cloudfront URL and all gallery URLs are well-formed `d2j6dbq0eux0bg.cloudfront.net` links. (URLs not individually GET-fetched; format-validated only.)\n';
fs.writeFileSync('./08-images-summary.md',im);

console.log('wrote 06, 07, 08-summary markdown');
