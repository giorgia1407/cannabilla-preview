#!/usr/bin/env node
// READ-ONLY: reads reference/02-products-raw.json, writes reference/05-products-clean.json
// No network, no Ecwid writes. Pure local transform.
const fs = require('fs');
const path = require('path');
const RAW = require('./02-products-raw.json');
const CATS = require('./01-categories.json');

// ---- category tree ----
const catById = {};
[...CATS.roots, ...CATS.shopCategories, ...CATS.blogArticleCategories].forEach(c => catById[c.id] = c);
const TOP_SHOP = new Set([168093539,168093540,168117863,168093542,168937320,172904516,182395501,182395513,180176114]);
function catPath(id) {
  const chain = []; let c = catById[id]; let g = 0;
  while (c && g++ < 12) { chain.unshift(c.name); c = c.parentId ? catById[c.parentId] : null; }
  return chain.join(' > ');
}
function primaryTop(catIds, defaultCategoryId) {
  // prefer a top-level shop category
  for (const id of catIds) { let c = catById[id]; let g=0; while(c&&g++<12){ if(TOP_SHOP.has(c.id)) return c.name; c=c.parentId?catById[c.parentId]:null; } }
  return null;
}

// ---- html helpers ----
function decode(s){return (s||'')
  .replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
  .replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&egrave;/g,'è').replace(/&agrave;/g,'à');}
function strip(html){return decode((html||'').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();}
function stripKeepBreaks(html){
  return decode((html||'')
    .replace(/<\s*br\s*\/?>/gi,'\n')
    .replace(/<\/(p|div|li|h[1-6])>/gi,'\n')
    .replace(/<[^>]+>/g,''))
    .replace(/[ \t]+/g,' ')
    .replace(/\n{2,}/g,'\n').split('\n').map(s=>s.trim()).filter(Boolean).join('\n');
}
function firstSentences(text, n){
  const parts = text.replace(/\s+/g,' ').trim().split(/(?<=[.!?])\s+/);
  return parts.slice(0, n).join(' ').trim();
}

// ---- section extraction ----
function extractSections(html){
  const out = {openingParagraphs:null,keyBenefits:[],format:null,packaging:null,variationNote:null,
    howToUse:null,storageWarnings:null,ingredients:[],certifications:[],cpnpNumber:null,inci:null};
  if (!html) return out;
  // split by <hr>
  const blocks = html.split(/<hr\s*\/?>/i);
  const intro = strip(blocks[0]||'');
  out.openingParagraphs = intro ? firstSentences(intro, 3) : null;

  const fullText = strip(html);
  const fullBreaks = stripKeepBreaks(html);

  // format 🧴
  let m = fullText.match(/🧴\s*Formato\s*:?\s*([^\n♻🌿]+?)(?=\s*(?:♻|🌿|$))/i);
  if (!m) m = fullText.match(/Formato\s*:\s*([0-9]+\s*(?:ml|g|gr|pz|pezzi|capsule)[^\n♻🌿.]*)/i);
  if (m) out.format = m[1].replace(/\s+/g,' ').trim();

  // packaging ♻
  m = fullBreaks.match(/♻\s*([^\n]+)/);
  if (m) out.packaging = m[1].trim();

  // variation note 🌿
  m = fullBreaks.match(/🌿\s*([^\n]+)/);
  if (m) out.variationNote = m[1].trim();

  // Come usarlo / uso: capture text after "Come usarlo" up to "Cosa contiene" or "INCI"
  m = fullText.match(/Come\s+usarlo\s*:?\s*(.+?)(?=Cosa\s+contiene|INCI\s*:|🍃|$)/i)
    || fullText.match(/Modo\s+d['’]uso\s*:?\s*(.+?)(?=Cosa\s+contiene|INCI\s*:|🍃|$)/i);
  if (m) {
    let use = m[1].trim();
    // pull storage sentence out of the usage text
    const stMatch = use.match(/(Solo per uso esterno.*|Conservare .*|Tenere fuori dalla portata.*)/i);
    if (stMatch) { out.storageWarnings = stMatch[1].trim(); use = use.slice(0, use.indexOf(stMatch[1])).trim(); }
    out.howToUse = use || null;
  }
  // storage fallback anywhere
  if (!out.storageWarnings) {
    m = fullText.match(/(Solo per uso esterno[^]*?(?:calore\.|periodi\.|bambini\.)|Conservare in luogo fresco[^.]*\.)/i);
    if (m) out.storageWarnings = m[1].replace(/\s+/g,' ').trim();
  }

  // ingredients 🍃 Name: benefit  (from line-broken text)
  const ingLines = fullBreaks.split('\n').filter(l=>/🍃/.test(l));
  for (let line of ingLines) {
    line = line.replace(/🍃/g,'').replace(/\s+/g,' ').trim();
    const c = line.indexOf(':');
    if (c > 0 && c < 80) {
      const name = line.slice(0,c).replace(/[*_]/g,'').trim();
      const benefit = line.slice(c+1).trim();
      if (name) out.ingredients.push({name, benefit: benefit||null});
    } else if (line) {
      out.ingredients.push({name: line.replace(/[*_]/g,'').trim(), benefit: null});
    }
  }

  // INCI (handles Title-case and ALL-CAPS lists, and % concentrations)
  m = fullText.match(/INCI\s*:?\s*([A-Za-z][A-Za-z0-9 ,/%\-().]+)/);
  if (m && m[1] && m[1].split(',').length >= 2) {
    let inci = m[1].replace(/\s+/g,' ').trim();
    // trim any trailing non-INCI prose accidentally captured
    inci = inci.replace(/\s+(Prodotto cosmetico|Come usarlo|Cosa contiene).*$/i,'').trim();
    out.inci = inci;
  }

  // CPNP number
  m = fullText.match(/CPNP[^0-9]{0,60}?(?:numero|n[°.]?)\s*([0-9]{3,})/i)
    || fullText.match(/(?:numero|n[°.]?)\s*([0-9]{3,})[^0-9]{0,20}?CPNP/i);
  if (m) out.cpnpNumber = m[1];

  // certifications (scan)
  const certScan = fullText.toLowerCase();
  const certMap = [
    [/cruelty[\s-]?free/, 'Cruelty-free'],
    [/senza parabeni/, 'Senza parabeni'],
    [/senza siliconi/, 'Senza siliconi'],
    [/senza sles|senza sls|senza solfati/, 'Senza solfati/SLES'],
    [/100%\s*naturale|100%\s*natural/, '100% naturale'],
    [/\bvegan[oe]?\b/, 'Vegano'],
    [/nichel tested|nickel tested/, 'Nichel tested'],
    [/dermatologicamente testato/, 'Dermatologicamente testato'],
    [/\bcpnp\b/, 'Registrato CPNP'],
    [/made in italy|monti sibillini|prodotta nel cuore/, 'Made in Italy (Monti Sibillini)'],
    [/biologic[oa]/, 'Ingredienti biologici'],
  ];
  for (const [re,label] of certMap) if (re.test(certScan)) out.certifications.push(label);

  // keyBenefits: derive 3-5 from subtitle-ish keywords in intro
  const kbScan = intro.toLowerCase();
  const kbMap = [
    [/idrata|idratante|idratazione/, 'Idratazione profonda'],
    [/lenit|calmant|disarross/, 'Azione lenitiva e calmante'],
    [/nutr/, 'Nutriente'],
    [/pelli secche/, 'Adatta a pelli secche'],
    [/sensibil/, 'Adatta a pelli sensibili'],
    [/matur/, 'Adatta a pelli mature'],
    [/gras|acne|imperfezion|sebo/, 'Per pelli grasse / a tendenza acneica'],
    [/antiossidant/, 'Azione antiossidante'],
    [/macchie|schiarent/, 'Attenua le macchie cutanee'],
    [/assorbimento rapido|leggera/, 'Texture leggera, assorbimento rapido'],
    [/rigenera|rimpolp|elasticit/, 'Rigenerante ed elasticizzante'],
    [/protegge|protezion|spf/, 'Protezione'],
    [/muscol|sport|sollievo/, 'Sollievo muscolare'],
    [/esfolia|scrub|levigat/, 'Esfoliazione delicata'],
  ];
  const seen=new Set();
  for (const [re,label] of kbMap) if (re.test(kbScan) && !seen.has(label)) { out.keyBenefits.push(label); seen.add(label); }
  out.keyBenefits = out.keyBenefits.slice(0,5);

  return out;
}

// ---- attribute helpers ----
function attr(p, reArr){
  const a=(p.attributes||[]).find(x=> reArr.some(re=>re.test(x.name||'')));
  return a? (a.value||null): null;
}

// ---- image helpers ----
function images(p){
  const gallery = (p.galleryImages||[]).map(g=>({
    id:g.id, alt:g.alt||null, orderBy:g.orderBy,
    sizes:{ original:g.originalImageUrl||g.url||null, url:g.url||null, hd:g.hdThumbnailUrl||null,
      image:g.imageUrl||null, thumbnail:g.thumbnailUrl||g.thumbnail||null, small:g.smallThumbnailUrl||null },
    width:g.width||null, height:g.height||null
  }));
  const primary = p.imageUrl || p.originalImageUrl || (gallery[0]&&gallery[0].sizes.image) || null;
  const galleryUrls = gallery.map(g=>g.sizes.original||g.sizes.image).filter(Boolean);
  return {
    primary,
    primarySizes:{ original:p.originalImageUrl||null, image:p.imageUrl||null, hd:p.hdThumbnailUrl||null,
      thumbnail:p.thumbnailUrl||null, small:p.smallThumbnailUrl||null },
    gallery: galleryUrls,
    galleryDetailed: gallery,
    count: (p.imageUrl?1:0) + (p.galleryImages? p.galleryImages.length:0),
    videos: ((p.media&&p.media.videos)||[]).length
  };
}

// ---- options/variants ----
function options(p){
  return (p.options||[]).map(o=>({name:o.name, type:o.type, required:o.required,
    choices:(o.choices||[]).map(c=>({text:c.text, priceModifier:c.priceModifier, priceModifierType:c.priceModifierType}))}));
}

// ---- build ----
const clean = RAW.products.map(p=>{
  const slug = (p.url||'').replace(/^https?:\/\/cannabilla\.it\/products\//,'');
  const cats = (p.categoryIds||[]).map(id=>({id, name:(catById[id]&&catById[id].name)||String(id), path:catPath(id)}));
  const sections = extractSections(p.description);
  const brand = attr(p,[/^brand$/i,/^marca$/i]);
  const gtin = attr(p,[/gtin|upc|ean|barcode/i]);
  const mpn = attr(p,[/^mpn$/i,/manufacturer part/i]);
  const knownCustom = new Set(['brand','marca','gtin','upc','ean','barcode','mpn']);
  const customAttributes = {};
  (p.attributes||[]).forEach(a=>{ if(a.name && !knownCustom.has(a.name.toLowerCase().trim())) customAttributes[a.name]=a.value; });
  return {
    id:String(p.id), sku:p.sku||null, name:p.name, subtitle:p.subtitle||null, slug,
    publicUrl:p.url||null,
    price:p.price, priceFormatted:p.defaultDisplayedPriceFormatted||null,
    originalPrice:p.compareToPrice||null, onSale: !!(p.compareToPrice && p.compareToPrice>p.price),
    costPrice: p.costPrice!==undefined? p.costPrice : null,
    stockStatus: p.inStock? 'in-stock':'out-of-stock', unlimitedStock: !!p.unlimited,
    quantity: (p.quantity!==undefined? p.quantity : null),
    enabled: !!p.enabled, isGiftCard: !!p.isGiftCard,
    categories: cats, primaryCategory: primaryTop(p.categoryIds||[], p.defaultCategoryId),
    defaultCategoryId: p.defaultCategoryId||null,
    googleProductCategory: p.googleProductCategory!==undefined? String(p.googleProductCategory) : null,
    googleProductCategoryName: p.googleProductCategoryName||null,
    gtin: gtin||null, brand: brand||null, mpn: mpn||null,
    weight: p.weight, dimensions: p.dimensions||{length:null,width:null,height:null},
    images: images(p),
    descriptionHtml: p.description||null,
    descriptionText: strip(p.description),
    extractedSections: sections,
    metaTitle: p.seoTitle||null, metaDescription: p.seoDescription? strip(p.seoDescription).slice(0,320) : null,
    rating: p.rating||null, reviewsPublished: p.reviewsPublished||0,
    relatedProductIds: (p.relatedProducts&&p.relatedProducts.productIds)||[],
    createdAt: p.created||null, updatedAt: p.updated||null,
    customAttributes,
    options: options(p),
    hasVariants: (p.combinations||[]).length>0,
    variantCount: (p.combinations||[]).length,
    ribbon: (p.ribbon&&p.ribbon.text)||null,
    showOnFrontpage: !!p.showOnFrontpage
  };
});

fs.writeFileSync(path.join(__dirname,'05-products-clean.json'), JSON.stringify(clean,null,2));
console.log('wrote 05-products-clean.json with', clean.length, 'products');
// quick QA
const noImg = clean.filter(p=>!p.images.primary).map(p=>p.name);
const noDesc = clean.filter(p=>!p.descriptionText).map(p=>p.name);
const noIng = clean.filter(p=>p.extractedSections.ingredients.length===0).map(p=>p.name);
const noFmt = clean.filter(p=>!p.extractedSections.format).map(p=>p.name);
console.log('no primary image:', noImg.length, JSON.stringify(noImg));
console.log('no descriptionText:', noDesc.length, JSON.stringify(noDesc));
console.log('no ingredients extracted:', noIng.length, JSON.stringify(noIng));
console.log('no format extracted:', noFmt.length, JSON.stringify(noFmt));
