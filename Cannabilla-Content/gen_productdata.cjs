#!/usr/bin/env node
/* Generate cannabilla-preview/data/productData.ts from 05-products-clean.json + image manifest. */
const fs=require('fs');
const C=require('./05-products-clean.json');
const MAN=require('/Users/sarang/Websites/cannabilla-preview/public/products/_manifest.json');
const OUT='/Users/sarang/Websites/cannabilla-preview/data/productData.ts';
const byId={}; C.forEach(p=>byId[p.id]=p);
const bySlug={}; C.forEach(p=>bySlug[p.slug]=p);

// category assignment (slug -> our category) for the 38 photographed products
const CAT={
  'crema-viso-idratante':'viso','crema-viso-solare-spf-50':'viso','melabilla-crema-viso-idratante-alla-mela-rosa':'viso',
  'golden-hemp-siero-viso-idratante':'viso','escar-glow-siero-viso-ultra-idratante':'viso','im-perfect-siero-viso-anti-imperfezioni':'viso',
  'make-up-remover-bifasico':'viso','mousse-detergente-delicata':'viso','scrub-viso-100-naturale':'viso',
  'hemp-kiss-balsamo-labbra-arancia':'viso','hemp-kiss-balsamo-labbra-nocciola':'viso',
  'crema-corpo-idratazione-intensiva':'corpo','olio-corpo-nutriente-ed-idratante':'corpo','crema-mani-idratante':'corpo',
  'melabilla-crema-mani-idratante-alla-mela-rosa':'corpo','sapone-mani-delicato':'corpo',
  'latte-solare-idratante-spf-30':'solari','latte-solare-idratante-spf-50':'solari','crema-doposole-lenitiva':'solari','olio-doposole-lenitivo':'solari',
  'elis-hair-olio-per-capelli-rigenerante':'capelli','hemp-oo-shampoo-delicato-e-nutriente':'capelli','olio-barba-ammorbidente':'capelli',
  'sportcream-crema-muscolare-lenitiva':'benessere','olio-corpo-per-massaggi':'benessere','happy-feet-balsamo-naturale-per-il-benessere-dei-piedi':'benessere',
  'olio-di-iperico-lenitivo-760499148':'benessere','psorcream-dermocalmante-e-lenitiva':'benessere','olio-corpo-post-epilazione':'benessere',
  'tattoo-cream-crema-nutriente':'benessere','tattoo-balm-balsamo-lenitivo':'benessere',
  'hempilla-ananda-5-estratto-naturale-di-canapa':'hempilla','hempilla-shanti-10-estratto-naturale-di-canapa':'hempilla',
  'hempilla-soma-20-estratto-naturale-di-canapa':'hempilla','hempilla-shayana-30-estratto-naturale-di-canapa':'hempilla',
  'bagno-doccia-detergente-e-idratante':'detergenti','detergente-intimo-delicato':'detergenti','liquido-igienizzante-spray':'detergenti',
};
const SUBCAT={
  'crema-viso-idratante':'Creme Viso','crema-viso-solare-spf-50':'Creme Viso','melabilla-crema-viso-idratante-alla-mela-rosa':'Creme Viso',
  'golden-hemp-siero-viso-idratante':'Sieri','escar-glow-siero-viso-ultra-idratante':'Sieri','im-perfect-siero-viso-anti-imperfezioni':'Sieri',
  'make-up-remover-bifasico':'Detersione','mousse-detergente-delicata':'Detersione','scrub-viso-100-naturale':'Esfoliazione',
  'hemp-kiss-balsamo-labbra-arancia':'Balsami Labbra','hemp-kiss-balsamo-labbra-nocciola':'Balsami Labbra',
  'crema-corpo-idratazione-intensiva':'Creme Corpo','olio-corpo-nutriente-ed-idratante':'Oli Corpo',
  'crema-mani-idratante':'Mani','melabilla-crema-mani-idratante-alla-mela-rosa':'Mani','sapone-mani-delicato':'Mani',
  'latte-solare-idratante-spf-30':'Protezione Solare','latte-solare-idratante-spf-50':'Protezione Solare',
  'crema-doposole-lenitiva':'Doposole','olio-doposole-lenitivo':'Doposole',
  'elis-hair-olio-per-capelli-rigenerante':'Olio Capelli','hemp-oo-shampoo-delicato-e-nutriente':'Shampoo','olio-barba-ammorbidente':'Barba',
  'sportcream-crema-muscolare-lenitiva':'Sport','olio-corpo-per-massaggi':'Massaggio','happy-feet-balsamo-naturale-per-il-benessere-dei-piedi':'Piedi',
  'olio-di-iperico-lenitivo-760499148':'Oli Lenitivi','psorcream-dermocalmante-e-lenitiva':'Dermocura','olio-corpo-post-epilazione':'Post-Epilazione',
  'tattoo-cream-crema-nutriente':'Tattoo Care','tattoo-balm-balsamo-lenitivo':'Tattoo Care',
  'hempilla-ananda-5-estratto-naturale-di-canapa':'Estratti di Canapa','hempilla-shanti-10-estratto-naturale-di-canapa':'Estratti di Canapa',
  'hempilla-soma-20-estratto-naturale-di-canapa':'Estratti di Canapa','hempilla-shayana-30-estratto-naturale-di-canapa':'Estratti di Canapa',
  'bagno-doccia-detergente-e-idratante':'Corpo','detergente-intimo-delicato':'Intimo','liquido-igienizzante-spray':'Mani',
};
function brandOf(p){ if(/^MELABILLA/i.test(p.name)) return 'MELABILLA'; if(/^Hempilla/i.test(p.name)) return 'Hempilla'; return 'Cannabilla'; }
// featured (spread) & bestsellers & demo offers
const FEATURED=new Set(['golden-hemp-siero-viso-idratante','crema-viso-idratante','psorcream-dermocalmante-e-lenitiva','sportcream-crema-muscolare-lenitiva','hempilla-shayana-30-estratto-naturale-di-canapa','latte-solare-idratante-spf-30','tattoo-balm-balsamo-lenitivo','melabilla-crema-viso-idratante-alla-mela-rosa','happy-feet-balsamo-naturale-per-il-benessere-dei-piedi','escar-glow-siero-viso-ultra-idratante','elis-hair-olio-per-capelli-rigenerante','olio-di-iperico-lenitivo-760499148']);
const BEST=new Set(['crema-viso-idratante','psorcream-dermocalmante-e-lenitiva','sportcream-crema-muscolare-lenitiva','golden-hemp-siero-viso-idratante','make-up-remover-bifasico','happy-feet-balsamo-naturale-per-il-benessere-dei-piedi','tattoo-cream-crema-nutriente','latte-solare-idratante-spf-30']);
const NEW=new Set(['hempilla-ananda-5-estratto-naturale-di-canapa','hempilla-shanti-10-estratto-naturale-di-canapa','hempilla-soma-20-estratto-naturale-di-canapa','hempilla-shayana-30-estratto-naturale-di-canapa','melabilla-crema-mani-idratante-alla-mela-rosa','melabilla-crema-viso-idratante-alla-mela-rosa']);
// DEMO offers only (real store has NO sale prices) — for the "Le nostre offerte" carousel
const OFFERS={'make-up-remover-bifasico':0.80,'crema-mani-idratante':0.85,'bagno-doccia-detergente-e-idratante':0.85,'olio-corpo-per-massaggi':0.85,'scrub-viso-100-naturale':0.80,'hemp-oo-shampoo-delicato-e-nutriente':0.85};

const q=s=>JSON.stringify(s==null?'':s);
const round2=n=>Math.round(n*100)/100;

const products=Object.keys(CAT).map(slug=>{
  const p=bySlug[slug]; const s=p.extractedSections;
  const images=MAN[slug]||[];
  const brand=brandOf(p);
  const benefits=(s.keyBenefits||[]).slice(0,5);
  const actives=(s.ingredients||[]).slice(0,4).map(i=>i.name);
  const desc = s.openingParagraphs || p.descriptionText.slice(0,400);
  const badges=[]; if(NEW.has(slug))badges.push('Novità'); if(BEST.has(slug))badges.push('Best Seller');
  if(OFFERS[slug])badges.push('In Offerta');
  if((s.certifications||[]).some(c=>/naturale|biologic/i.test(c)))badges.push('Biologico');
  const originalPrice = OFFERS[slug]? round2(p.price/OFFERS[slug]) : undefined;
  return {
    id:p.id, slug, name:p.name, producer:brand, category:CAT[slug], subcategory:SUBCAT[slug]||undefined,
    origin:'Monti Sibillini, Italia', keyIngredients:actives.length?actives:undefined,
    volume: s.format || '—', price:p.price, originalPrice,
    image: images[0]||'', images,
    alt: p.images && p.images.primary ? (p.name+' — Cannabilla') : (p.name),
    description: desc, benefits, howToUse: s.howToUse||undefined,
    certifications: (s.certifications||[]), inci: s.inci||undefined,
    ingredients: s.ingredients||[], format: s.format||undefined, packaging: s.packaging||undefined,
    subtitleText: p.subtitle||undefined,
    inStock:true, featured:FEATURED.has(slug)||undefined, badges: badges.length?badges:undefined,
  };
});

// order products by category then price desc for a pleasant catalog
const CATORDER=['viso','corpo','solari','capelli','benessere','hempilla','detergenti'];
products.sort((a,b)=> CATORDER.indexOf(a.category)-CATORDER.indexOf(b.category) || b.price-a.price);

// category metas — hero image = a representative product's first image
const heroFor={viso:'golden-hemp-siero-viso-idratante',corpo:'crema-corpo-idratazione-intensiva',solari:'latte-solare-idratante-spf-30',capelli:'elis-hair-olio-per-capelli-rigenerante',benessere:'sportcream-crema-muscolare-lenitiva',hempilla:'hempilla-shayana-30-estratto-naturale-di-canapa',detergenti:'bagno-doccia-detergente-e-idratante'};
const CATMETA=[
  ['viso','Cura del Viso','Face Care','Idratazione, luminosità e trattamenti mirati','Creme, sieri, detergenti ed esfolianti all’olio di canapa per ogni tipo di pelle: idratano, illuminano e proteggono con delicatezza, made in Italy.'],
  ['corpo','Cura del Corpo','Body Care','Nutrimento naturale dalla testa ai piedi','Creme, oli corpo e trattamenti mani alla canapa che nutrono e leniscono la pelle ogni giorno, con attivi vegetali dei Monti Sibillini.'],
  ['solari','Solari & Doposole','Sun Care','Protezione e riparazione con la canapa','Latti solari idratanti SPF 30 e 50 e doposole lenitivi: esposizione sicura e pelle reidratata dopo il sole, con formule naturali.'],
  ['capelli','Capelli & Barba','Hair & Beard','Forza e morbidezza dalla radice alle punte','Shampoo delicato, olio rigenerante per capelli e olio da barba ammorbidente: nutrimento naturale all’olio di canapa.'],
  ['benessere','Benessere & Dermocura','Wellness','Sollievo e comfort per corpo e pelle','Dalla crema muscolare SportCream ai balsami dermocura come PsorCream, Happy Feet e la linea Tattoo: cura mirata con estratti vegetali.'],
  ['hempilla','Estratti Hempilla','Hemp Extracts','La linea premium di estratti di canapa','Estratti naturali 100% di canapa per applicazione topica, ispirati alla tradizione ayurvedica dell’ungimento. Quattro concentrazioni: Ananda, Shanti, Soma, Shayana.'],
  ['detergenti','Detergenti','Cleansers','Detersione delicata quotidiana','Bagno doccia, detergente intimo e igienizzante alla canapa: puliscono rispettando la pelle e la sua naturale idratazione.'],
];

// ---- emit TS ----
let ts=`/**
 * Cannabilla — catalogo cosmetici naturali alla canapa (contenuti REALI).
 *
 * Generato dallo snapshot READ-ONLY del negozio Ecwid (vedi ecwid-audit/reference/):
 * nomi, descrizioni, formati, ingredienti, INCI e certificazioni sono presi dai
 * dati reali dei prodotti. Le foto sono file locali in /public/products/<slug>/.
 *
 * NOTE PREVIEW:
 *  - Catalogo limitato ai ${products.length} prodotti cosmetici con foto reali
 *    (esclusi merchandising/gift card, privi di foto).
 *  - I prezzi "originalPrice" (barrati) sono SOLO DIMOSTRATIVI per mostrare la UI
 *    offerte: il negozio reale non ha prezzi scontati.
 *  - "featured"/"Best Seller"/"Novità" sono curati per la demo, non dati di vendita.
 *
 * Il tipo si chiama ancora \`Wine\` per compatibilità con i componenti del template
 * ("il Tempio di Vino"): i campi sono riadattati ai cosmetici (producer=brand,
 * region=origin, volume=formato, tastingNotes=descrizione, foodPairings=benefici).
 */

export type WineCategory =
  | "viso"
  | "corpo"
  | "solari"
  | "capelli"
  | "benessere"
  | "hempilla"
  | "detergenti";

export type Badge = "Novità" | "Best Seller" | "In Offerta" | "Biologico";

export interface Ingredient { name: string; benefit: string | null; }

export interface Wine {
  id: string;
  slug: string;
  name: string;
  /** Brand: Cannabilla / MELABILLA / Hempilla (shown where the template shows the producer). */
  producer: string;
  category: WineCategory;
  subcategory?: string;
  /** Origine — repurposes the template's \`region\` field. */
  region?: string;
  denomination?: string;
  /** Principali attivi — repurposes \`grapeVarieties\` for facets/filters. */
  grapeVarieties?: string[];
  vintage?: number;
  alcohol?: number;
  /** Formato, es. "50 ml". */
  volume: string;
  price: number;
  originalPrice?: number;
  /** Primary image (first of \`images\`). */
  image: string;
  /** Full real photo gallery (local /public paths). */
  images: string[];
  alt: string;
  /** Descrizione — repurposes \`tastingNotes\`. */
  tastingNotes: string;
  /** Benefici chiave — repurposes \`foodPairings\`. */
  foodPairings: string[];
  /** Certificazioni — repurposes \`awards\`. */
  awards?: string[];
  howToUse?: string;
  certifications?: string[];
  inci?: string;
  ingredients?: Ingredient[];
  format?: string;
  packaging?: string;
  subtitleText?: string;
  inStock: boolean;
  featured?: boolean;
  badges?: Badge[];
}

export interface CategoryMeta {
  id: WineCategory;
  slug: WineCategory;
  label: string;
  labelEn: string;
  tagline: string;
  description: string;
  image: string;
}

export const CATEGORIES: CategoryMeta[] = [
`;
for(const [id,label,labelEn,tagline,description] of CATMETA){
  const img=(MAN[heroFor[id]]||[])[0]||'';
  ts+=`  { id: ${q(id)}, slug: ${q(id)}, label: ${q(label)}, labelEn: ${q(labelEn)}, tagline: ${q(tagline)}, description: ${q(description)}, image: ${q(img)} },\n`;
}
ts+=`];

export const WINES: Wine[] = [
`;
for(const p of products){
  ts+='  {\n';
  ts+=`    id: ${q(p.id)}, slug: ${q(p.slug)},\n`;
  ts+=`    name: ${q(p.name)}, producer: ${q(p.producer)},\n`;
  ts+=`    category: ${q(p.category)},${p.subcategory?` subcategory: ${q(p.subcategory)},`:''}\n`;
  ts+=`    region: ${q(p.origin)},${p.keyIngredients?` grapeVarieties: ${JSON.stringify(p.keyIngredients)},`:''}\n`;
  ts+=`    volume: ${q(p.volume)}, price: ${p.price},${p.originalPrice?` originalPrice: ${p.originalPrice},`:''}\n`;
  ts+=`    image: ${q(p.image)},\n`;
  ts+=`    images: ${JSON.stringify(p.images)},\n`;
  ts+=`    alt: ${q(p.alt)},\n`;
  ts+=`    tastingNotes: ${q(p.description)},\n`;
  ts+=`    foodPairings: ${JSON.stringify(p.benefits)},\n`;
  if(p.certifications && p.certifications.length) ts+=`    awards: ${JSON.stringify(p.certifications)},\n`;
  if(p.howToUse) ts+=`    howToUse: ${q(p.howToUse)},\n`;
  if(p.certifications && p.certifications.length) ts+=`    certifications: ${JSON.stringify(p.certifications)},\n`;
  if(p.inci) ts+=`    inci: ${q(p.inci)},\n`;
  if(p.ingredients && p.ingredients.length) ts+=`    ingredients: ${JSON.stringify(p.ingredients)},\n`;
  if(p.format) ts+=`    format: ${q(p.format)},\n`;
  if(p.packaging) ts+=`    packaging: ${q(p.packaging)},\n`;
  if(p.subtitleText) ts+=`    subtitleText: ${q(p.subtitleText)},\n`;
  ts+=`    inStock: true,${p.featured?' featured: true,':''}${p.badges?` badges: ${JSON.stringify(p.badges)},`:''}\n`;
  ts+='  },\n';
}
ts+=`];

export function getCategory(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function getWinesByCategory(slug: WineCategory): Wine[] {
  return WINES.filter((w) => w.category === slug);
}
export function getWineBySlug(slug: string): Wine | undefined {
  return WINES.find((w) => w.slug === slug);
}
export function getFeatured(limit?: number): Wine[] {
  const list = WINES.filter((w) => w.featured);
  return limit ? list.slice(0, limit) : list;
}
export function getBestSellers(limit = 8): Wine[] {
  return WINES.filter((w) => w.badges?.includes("Best Seller")).slice(0, limit);
}
export function getOnOffer(limit?: number): Wine[] {
  const list = WINES.filter((w) => w.originalPrice && w.originalPrice > w.price);
  return limit ? list.slice(0, limit) : list;
}
export function getRelated(wine: Wine, limit = 4): Wine[] {
  const sameSub = WINES.filter(
    (w) => w.id !== wine.id && wine.subcategory && w.subcategory === wine.subcategory,
  );
  const sameCategory = WINES.filter(
    (w) => w.id !== wine.id && w.category === wine.category && !sameSub.includes(w),
  );
  return [...sameSub, ...sameCategory].slice(0, limit);
}
export function discountPct(wine: Wine): number | null {
  if (!wine.originalPrice || wine.originalPrice <= wine.price) return null;
  return Math.round((1 - wine.price / wine.originalPrice) * 100);
}
export function facetsFor(wines: Wine[]) {
  const regions = new Set<string>();
  const subcats = new Set<string>();
  const grapes = new Set<string>();
  let minPrice = Infinity;
  let maxPrice = 0;
  for (const w of wines) {
    if (w.producer) regions.add(w.producer);
    if (w.subcategory) subcats.add(w.subcategory);
    w.grapeVarieties?.forEach((g) => grapes.add(g));
    minPrice = Math.min(minPrice, w.price);
    maxPrice = Math.max(maxPrice, w.price);
  }
  return {
    regions: [...regions].sort(),
    denominations: [...subcats].sort(),
    grapes: [...grapes].sort(),
    vintages: [] as number[],
    minPrice: Number.isFinite(minPrice) ? Math.floor(minPrice) : 0,
    maxPrice: Math.ceil(maxPrice),
  };
}
`;
fs.writeFileSync(OUT,ts);
console.log('wrote productData.ts:',ts.length,'chars,',products.length,'products,',CATMETA.length,'categories');
console.log('featured:',products.filter(p=>p.featured).length,'offers:',products.filter(p=>p.originalPrice).length,'best:',products.filter(p=>p.badges&&p.badges.includes('Best Seller')).length);
