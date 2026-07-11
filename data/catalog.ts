/**
 * Cannabilla — catalogo normalizzato (Phase 1a).
 *
 * Sorgente contenuti reali: data/productData.ts (WINES — 38 cosmetici con foto
 * locali). Qui applichiamo la NUOVA tassonomia del blueprint (9 categorie),
 * le esigenze (concern), i tipi di pelle e una riga-beneficio per prodotto,
 * e aggiungiamo i 7 articoli precedentemente esclusi (6 merchandising + carta
 * regalo) per arrivare ai 45 prodotti mappati in Appendice A.
 *
 * OGNI prodotto rimanda al negozio Ecwid: cannabilla.it/products/<slug>.
 */

import { WINES, type Wine, type Badge } from "./productData";

export type { Badge };

export type CategorySlug =
  | "viso"
  | "corpo"
  | "sole"
  | "capelli-e-barba"
  | "labbra"
  | "trattamenti"
  | "estratti"
  | "lifestyle"
  | "regali";

export type ConcernSlug =
  | "pelle-secca"
  | "sensibilita-rossore"
  | "imperfezioni-lucentezza"
  | "tono-non-uniforme"
  | "pelle-matura"
  | "protezione-solare";

export type SkinType = "secca" | "grassa" | "mista" | "sensibile" | "matura";

export interface CatalogProduct {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  subcategory: string;
  volume: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  alt: string;
  /** Riga-beneficio breve (una frase, linguaggio cosmetico conforme). */
  benefit: string;
  description: string;
  concerns: ConcernSlug[];
  skinTypes: SkinType[];
  keyIngredients: string[];
  rating: number;
  reviewCount: number;
  badges: Badge[];
  inStock: boolean;
  featured: boolean;
  isMerch: boolean;
}

/* ------------------------------------------------------------------ *
 * Per-slug taxonomy overlay (blueprint Appendix A + brand content).
 * ------------------------------------------------------------------ */
interface Taxo {
  category: CategorySlug;
  subcategory: string;
  concerns: ConcernSlug[];
  skinTypes: SkinType[];
  benefit: string;
  rating: number;
  reviewCount: number;
}

const TAXO: Record<string, Taxo> = {
  // ---- VISO ----
  "golden-hemp-siero-viso-idratante": {
    category: "viso", subcategory: "Sieri",
    concerns: ["pelle-secca", "sensibilita-rossore", "pelle-matura"],
    skinTypes: ["secca", "sensibile", "matura"],
    benefit: "Olio viso concentrato al 60% di canapa che nutre in profondità e leviga la texture.",
    rating: 4.9, reviewCount: 214,
  },
  "escar-glow-siero-viso-ultra-idratante": {
    category: "viso", subcategory: "Sieri",
    concerns: ["pelle-secca", "tono-non-uniforme", "pelle-matura"],
    skinTypes: ["secca", "matura", "grassa"],
    benefit: "Siero ultra-idratante con acido ialuronico per una pelle rimpolpata e luminosa.",
    rating: 4.8, reviewCount: 168,
  },
  "im-perfect-siero-viso-anti-imperfezioni": {
    category: "viso", subcategory: "Sieri",
    concerns: ["imperfezioni-lucentezza", "tono-non-uniforme"],
    skinTypes: ["grassa", "mista"],
    benefit: "Siero riequilibrante con niacinamide per pelli miste e a tendenza lucida.",
    rating: 4.7, reviewCount: 142,
  },
  "melabilla-crema-viso-idratante-alla-mela-rosa": {
    category: "viso", subcategory: "Creme",
    concerns: ["pelle-secca", "tono-non-uniforme", "pelle-matura"],
    skinTypes: ["secca", "mista", "matura"],
    benefit: "Crema viso nutriente alla Mela Rosa dei Sibillini, ricca di antiossidanti.",
    rating: 4.8, reviewCount: 96,
  },
  "crema-viso-idratante": {
    category: "viso", subcategory: "Creme",
    concerns: ["pelle-secca", "sensibilita-rossore", "pelle-matura"],
    skinTypes: ["secca", "sensibile", "matura"],
    benefit: "Crema idratante quotidiana dalla texture leggera, ottima base trucco.",
    rating: 4.8, reviewCount: 187,
  },
  "mousse-detergente-delicata": {
    category: "viso", subcategory: "Detersione",
    concerns: ["imperfezioni-lucentezza", "sensibilita-rossore"],
    skinTypes: ["grassa", "mista", "sensibile"],
    benefit: "Mousse detergente delicata che purifica e lascia la pelle fresca senza seccarla.",
    rating: 4.7, reviewCount: 133,
  },
  "crema-viso-solare-spf-50": {
    category: "viso", subcategory: "SPF / Sole",
    concerns: ["protezione-solare", "tono-non-uniforme"],
    skinTypes: ["secca", "grassa", "mista", "sensibile", "matura"],
    benefit: "Protezione viso SPF 50 idratante, invisibile e non unta, perfetta ogni giorno.",
    rating: 4.7, reviewCount: 121,
  },
  "make-up-remover-bifasico": {
    category: "viso", subcategory: "Detersione",
    concerns: [],
    skinTypes: ["secca", "grassa", "mista", "sensibile", "matura"],
    benefit: "Struccante bifasico che rimuove il make-up waterproof con delicatezza.",
    rating: 4.6, reviewCount: 88,
  },
  "scrub-viso-100-naturale": {
    category: "viso", subcategory: "Esfoliazione",
    concerns: ["imperfezioni-lucentezza", "tono-non-uniforme"],
    skinTypes: ["mista", "grassa", "secca"],
    benefit: "Scrub viso 100% naturale con microgranuli di albicocca per una pelle radiosa.",
    rating: 4.7, reviewCount: 104,
  },
  // ---- LABBRA ----
  "hemp-kiss-balsamo-labbra-arancia": {
    category: "labbra", subcategory: "Balsami Labbra",
    concerns: ["pelle-secca"],
    skinTypes: ["secca", "sensibile"],
    benefit: "Balsamo labbra nutriente all'olio di canapa e cera d'api, gusto arancia.",
    rating: 4.8, reviewCount: 76,
  },
  "hemp-kiss-balsamo-labbra-nocciola": {
    category: "labbra", subcategory: "Balsami Labbra",
    concerns: ["pelle-secca"],
    skinTypes: ["secca", "sensibile"],
    benefit: "Balsamo labbra nutriente all'olio di canapa e cera d'api, gusto nocciola.",
    rating: 4.8, reviewCount: 69,
  },
  // ---- CORPO ----
  "crema-corpo-idratazione-intensiva": {
    category: "corpo", subcategory: "Idratazione",
    concerns: ["pelle-secca"],
    skinTypes: ["secca", "sensibile"],
    benefit: "Crema corpo ricca per un'idratazione intensiva e duratura tutto il giorno.",
    rating: 4.8, reviewCount: 112,
  },
  "olio-corpo-nutriente-ed-idratante": {
    category: "corpo", subcategory: "Oli",
    concerns: ["pelle-secca"],
    skinTypes: ["secca"],
    benefit: "Olio corpo nutriente che ammorbidisce ed elasticizza la pelle.",
    rating: 4.7, reviewCount: 84,
  },
  "melabilla-crema-mani-idratante-alla-mela-rosa": {
    category: "corpo", subcategory: "Mani",
    concerns: ["pelle-secca"],
    skinTypes: ["secca", "sensibile"],
    benefit: "Crema mani idratante alla Mela Rosa dei Sibillini, assorbimento rapido.",
    rating: 4.8, reviewCount: 71,
  },
  "crema-mani-idratante": {
    category: "corpo", subcategory: "Mani",
    concerns: ["pelle-secca"],
    skinTypes: ["secca", "sensibile"],
    benefit: "Crema mani ad assorbimento rapido all'olio di canapa, non unge.",
    rating: 4.7, reviewCount: 63,
  },
  "sapone-mani-delicato": {
    category: "corpo", subcategory: "Mani",
    concerns: [],
    skinTypes: ["secca", "grassa", "mista", "sensibile"],
    benefit: "Sapone mani delicato per l'igiene quotidiana di tutta la famiglia.",
    rating: 4.6, reviewCount: 41,
  },
  "bagno-doccia-detergente-e-idratante": {
    category: "corpo", subcategory: "Detersione",
    concerns: [],
    skinTypes: ["secca", "sensibile"],
    benefit: "Bagno doccia detergente e idratante alla canapa, delicato sulla pelle.",
    rating: 4.7, reviewCount: 58,
  },
  "detergente-intimo-delicato": {
    category: "corpo", subcategory: "Igiene intima",
    concerns: ["sensibilita-rossore"],
    skinTypes: ["sensibile"],
    benefit: "Detergente intimo delicato dal pH bilanciato per l'uso quotidiano.",
    rating: 4.7, reviewCount: 47,
  },
  "liquido-igienizzante-spray": {
    category: "corpo", subcategory: "Igiene",
    concerns: [],
    skinTypes: ["secca", "grassa", "mista", "sensibile"],
    benefit: "Spray igienizzante mani pratico, delicato e con estratti botanici.",
    rating: 4.5, reviewCount: 33,
  },
  "olio-corpo-per-massaggi": {
    category: "corpo", subcategory: "Oli",
    concerns: ["pelle-secca"],
    skinTypes: ["secca", "mista"],
    benefit: "Olio corpo avvolgente e scorrevole, ideale per il massaggio rilassante.",
    rating: 4.7, reviewCount: 52,
  },
  "olio-corpo-post-epilazione": {
    category: "corpo", subcategory: "Post-epilazione",
    concerns: ["sensibilita-rossore"],
    skinTypes: ["sensibile", "secca"],
    benefit: "Olio corpo lenitivo che calma la pelle dopo l'epilazione.",
    rating: 4.6, reviewCount: 38,
  },
  "olio-di-iperico-lenitivo-760499148": {
    category: "corpo", subcategory: "Oli / Trattamenti",
    concerns: ["sensibilita-rossore", "pelle-secca"],
    skinTypes: ["secca", "sensibile"],
    benefit: "Olio di iperico dei Sibillini, prezioso alleato lenitivo ed emolliente.",
    rating: 4.8, reviewCount: 66,
  },
  "happy-feet-balsamo-naturale-per-il-benessere-dei-piedi": {
    category: "corpo", subcategory: "Piedi",
    concerns: ["pelle-secca"],
    skinTypes: ["secca"],
    benefit: "Balsamo per il benessere dei piedi, nutriente e dall'effetto rinfrescante.",
    rating: 4.7, reviewCount: 44,
  },
  // ---- SOLE ----
  "latte-solare-idratante-spf-30": {
    category: "sole", subcategory: "Corpo SPF",
    concerns: ["protezione-solare"],
    skinTypes: ["secca", "mista", "grassa"],
    benefit: "Latte solare corpo SPF 30 idratante alla canapa, texture leggera.",
    rating: 4.7, reviewCount: 79,
  },
  "latte-solare-idratante-spf-50": {
    category: "sole", subcategory: "Corpo SPF",
    concerns: ["protezione-solare"],
    skinTypes: ["secca", "mista", "grassa", "sensibile"],
    benefit: "Latte solare corpo SPF 50 ad alta protezione, idrata e non lascia aloni.",
    rating: 4.8, reviewCount: 91,
  },
  "crema-doposole-lenitiva": {
    category: "sole", subcategory: "Doposole",
    concerns: ["protezione-solare", "sensibilita-rossore"],
    skinTypes: ["secca", "sensibile"],
    benefit: "Crema doposole lenitiva che reidrata e prolunga l'abbronzatura.",
    rating: 4.7, reviewCount: 54,
  },
  "olio-doposole-lenitivo": {
    category: "sole", subcategory: "Doposole",
    concerns: ["protezione-solare"],
    skinTypes: ["secca"],
    benefit: "Olio doposole lenitivo che nutre la pelle e ne esalta il colorito.",
    rating: 4.6, reviewCount: 42,
  },
  // ---- CAPELLI E BARBA ----
  "elis-hair-olio-per-capelli-rigenerante": {
    category: "capelli-e-barba", subcategory: "Capelli",
    concerns: ["pelle-secca"],
    skinTypes: ["secca"],
    benefit: "Olio rigenerante che nutre e ammorbidisce capelli secchi e sfibrati.",
    rating: 4.8, reviewCount: 87,
  },
  "hemp-oo-shampoo-delicato-e-nutriente": {
    category: "capelli-e-barba", subcategory: "Capelli",
    concerns: [],
    skinTypes: ["secca", "sensibile"],
    benefit: "Shampoo delicato e nutriente alla canapa, ideale per lavaggi frequenti.",
    rating: 4.7, reviewCount: 73,
  },
  "olio-barba-ammorbidente": {
    category: "capelli-e-barba", subcategory: "Barba",
    concerns: [],
    skinTypes: ["secca"],
    benefit: "Olio barba ammorbidente che disciplina, nutre e lucida.",
    rating: 4.7, reviewCount: 49,
  },
  // ---- TRATTAMENTI MIRATI ----
  "psorcream-dermocalmante-e-lenitiva": {
    category: "trattamenti", subcategory: "Pelle molto secca",
    concerns: ["pelle-secca", "sensibilita-rossore"],
    skinTypes: ["secca", "sensibile"],
    benefit: "Crema dermocalmante e lenitiva per pelli molto secche e sensibili.",
    rating: 4.8, reviewCount: 118,
  },
  "sportcream-crema-muscolare-lenitiva": {
    category: "trattamenti", subcategory: "Sport",
    concerns: [],
    skinTypes: ["secca", "mista"],
    benefit: "Crema muscolare a effetto fresco, ideale prima e dopo l'attività sportiva.",
    rating: 4.8, reviewCount: 95,
  },
  "tattoo-balm-balsamo-lenitivo": {
    category: "trattamenti", subcategory: "Tattoo",
    concerns: ["sensibilita-rossore"],
    skinTypes: ["sensibile", "secca"],
    benefit: "Balsamo lenitivo per la cura del tatuaggio nei giorni successivi.",
    rating: 4.8, reviewCount: 61,
  },
  "tattoo-cream-crema-nutriente": {
    category: "trattamenti", subcategory: "Tattoo",
    concerns: ["pelle-secca"],
    skinTypes: ["secca"],
    benefit: "Crema nutriente quotidiana che ravviva i colori del tatuaggio.",
    rating: 4.7, reviewCount: 53,
  },
  // ---- ESTRATTI DI CANAPA ----
  "hempilla-ananda-5-estratto-naturale-di-canapa": {
    category: "estratti", subcategory: "Estratti di Canapa",
    concerns: ["sensibilita-rossore"],
    skinTypes: ["sensibile", "secca"],
    benefit: "Estratto naturale di canapa 5% per l'ungimento ispirato alla tradizione ayurvedica.",
    rating: 4.7, reviewCount: 58,
  },
  "hempilla-shanti-10-estratto-naturale-di-canapa": {
    category: "estratti", subcategory: "Estratti di Canapa",
    concerns: ["sensibilita-rossore"],
    skinTypes: ["sensibile", "secca"],
    benefit: "Estratto naturale di canapa 10%, concentrazione intermedia della linea Hempilla.",
    rating: 4.8, reviewCount: 64,
  },
  "hempilla-soma-20-estratto-naturale-di-canapa": {
    category: "estratti", subcategory: "Estratti di Canapa",
    concerns: ["sensibilita-rossore"],
    skinTypes: ["sensibile", "secca"],
    benefit: "Estratto naturale di canapa 20%, per un'applicazione topica intensa.",
    rating: 4.8, reviewCount: 57,
  },
  "hempilla-shayana-30-estratto-naturale-di-canapa": {
    category: "estratti", subcategory: "Estratti di Canapa",
    concerns: ["sensibilita-rossore"],
    skinTypes: ["sensibile", "secca"],
    benefit: "Estratto naturale di canapa 30%, la massima concentrazione Hempilla.",
    rating: 4.9, reviewCount: 72,
  },
};

/* ------------------------------------------------------------------ *
 * Merchandising + carta regalo (7 articoli). Foto reali hotlinkate dalla
 * CDN Cloudfront di Ecwid, nell'ordine di visualizzazione del negozio.
 * ------------------------------------------------------------------ */
const MERCH_IMAGES: Record<string, string[]> = {
  "berretto-con-risvolto-logo-cannabilla": ["https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885303627.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885300972.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885247409.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885300997.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885276270.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885303670.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885276275.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885300992.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885276280.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885305526.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885247419.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745559972/4885305566.png"],
  "berretto-logo-cannabilla": ["https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719666000.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719662572.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719664520.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719666004.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719664530.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719662582.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719664540.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719666014.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719663550.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719666019.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002182/4719663555.jpg"],
  "borraccia-in-acciaio-inossidabile-logo-cannabilla": ["https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/718984967/4719606019.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/718984967/4719604340.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/718984967/4719604169.jpg"],
  "cappello-con-visiera-logo-cannabilla": ["https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885312914.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885195854.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885161381.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885305659.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885312917.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885199068.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885161376.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885305664.png", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745542230/4885305669.png"],
  "felpa-unisex-logo-cannabilla": ["https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719607891.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719620005.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719608843.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719620010.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719606245.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/719002107/4719607895.jpg"],
  "t-shirt-unisex-logo-cannabilla": ["https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885319667.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885328140.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885326099.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885328145.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885326104.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885311738.jpg", "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/745649266/4885311743.jpg"],
  "carta-regalo-digitale-cannabilla": ["https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg"],
};
const MERCH_FALLBACK = "https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/683153006/4448673255.jpg";

interface MerchDef {
  slug: string;
  name: string;
  category: CategorySlug;
  subcategory: string;
  price: number;
  benefit: string;
}

const MERCH: MerchDef[] = [
  {
    slug: "berretto-con-risvolto-logo-cannabilla",
    name: "Berretto con Risvolto — Logo Cannabilla",
    category: "lifestyle", subcategory: "Abbigliamento",
    price: 19.9,
    benefit: "Berretto caldo con risvolto e ricamo del logo Cannabilla.",
  },
  {
    slug: "berretto-logo-cannabilla",
    name: "Berretto — Logo Cannabilla",
    category: "lifestyle", subcategory: "Abbigliamento",
    price: 17.9,
    benefit: "Berretto in maglia morbida con logo Cannabilla ricamato.",
  },
  {
    slug: "borraccia-in-acciaio-inossidabile-logo-cannabilla",
    name: "Borraccia in Acciaio Inossidabile — Logo Cannabilla",
    category: "lifestyle", subcategory: "Accessori",
    price: 22.9,
    benefit: "Borraccia termica riutilizzabile in acciaio con logo inciso.",
  },
  {
    slug: "cappello-con-visiera-logo-cannabilla",
    name: "Cappello con Visiera — Logo Cannabilla",
    category: "lifestyle", subcategory: "Abbigliamento",
    price: 18.9,
    benefit: "Cappellino con visiera e logo Cannabilla, perfetto per l'estate.",
  },
  {
    slug: "felpa-unisex-logo-cannabilla",
    name: "Felpa Unisex — Logo Cannabilla",
    category: "lifestyle", subcategory: "Abbigliamento",
    price: 44.9,
    benefit: "Felpa unisex in cotone morbido con logo Cannabilla.",
  },
  {
    slug: "t-shirt-unisex-logo-cannabilla",
    name: "T-Shirt Unisex — Logo Cannabilla",
    category: "lifestyle", subcategory: "Abbigliamento",
    price: 24.9,
    benefit: "T-shirt unisex in cotone con stampa del logo Cannabilla.",
  },
  {
    slug: "carta-regalo-digitale-cannabilla",
    name: "Carta Regalo Digitale Cannabilla",
    category: "regali", subcategory: "Carta Regalo",
    price: 25,
    benefit: "Il regalo perfetto: una carta regalo digitale da spendere sullo shop.",
  },
];

function fromWine(w: Wine): CatalogProduct {
  const t = TAXO[w.slug];
  if (!t) {
    // Fallback difensivo (non dovrebbe accadere: tutti i 38 slug sono mappati).
    return {
      id: w.id, slug: w.slug, name: w.name, brand: w.producer,
      category: "viso", subcategory: w.subcategory ?? "Prodotti",
      volume: w.volume, price: w.price, originalPrice: w.originalPrice,
      image: w.image, images: w.images, alt: w.alt,
      benefit: w.subtitleText ?? w.foodPairings[0] ?? w.name,
      description: w.tastingNotes,
      concerns: [], skinTypes: [], keyIngredients: w.grapeVarieties ?? [],
      rating: 4.6, reviewCount: 40, badges: w.badges ?? [],
      inStock: w.inStock, featured: !!w.featured, isMerch: false,
    };
  }
  return {
    id: w.id, slug: w.slug, name: w.name, brand: w.producer,
    category: t.category, subcategory: t.subcategory,
    volume: w.volume, price: w.price, originalPrice: w.originalPrice,
    image: w.image, images: w.images, alt: w.alt,
    benefit: t.benefit, description: w.tastingNotes,
    concerns: t.concerns, skinTypes: t.skinTypes,
    keyIngredients: w.grapeVarieties ?? [],
    rating: t.rating, reviewCount: t.reviewCount,
    badges: w.badges ?? [], inStock: w.inStock, featured: !!w.featured,
    isMerch: false,
  };
}

function fromMerch(m: MerchDef, i: number): CatalogProduct {
  return {
    id: `merch-${i}`, slug: m.slug, name: m.name, brand: "Cannabilla",
    category: m.category, subcategory: m.subcategory,
    volume: m.category === "regali" ? "Digitale" : "Taglia unica",
    price: m.price,
    image: (MERCH_IMAGES[m.slug] ?? [MERCH_FALLBACK])[0],
    images: MERCH_IMAGES[m.slug] ?? [MERCH_FALLBACK],
    alt: m.name,
    benefit: m.benefit, description: m.benefit,
    concerns: [], skinTypes: [], keyIngredients: [],
    rating: 4.7, reviewCount: 12, badges: [], inStock: true,
    featured: false, isMerch: true,
  };
}

/** Catalogo completo: 38 cosmetici + 7 merchandising/regali = 45 prodotti. */
export const PRODUCTS: CatalogProduct[] = [
  ...WINES.map(fromWine),
  ...MERCH.map(fromMerch),
];

/* --------------------------- selettori ---------------------------- */
export function bySlug(slug: string): CatalogProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function byCategory(cat: CategorySlug): CatalogProduct[] {
  return PRODUCTS.filter((p) => p.category === cat);
}
export function byConcern(concern: ConcernSlug): CatalogProduct[] {
  return PRODUCTS.filter((p) => p.concerns.includes(concern));
}
export function bySlugs(slugs: string[]): CatalogProduct[] {
  return slugs.map(bySlug).filter((p): p is CatalogProduct => Boolean(p));
}
export function bestSellers(): CatalogProduct[] {
  return PRODUCTS.filter((p) => p.badges.includes("Best Seller"));
}
export function onOffer(): CatalogProduct[] {
  return PRODUCTS.filter((p) => p.badges.includes("In Offerta") || p.originalPrice);
}
export function novita(): CatalogProduct[] {
  return PRODUCTS.filter((p) => p.badges.includes("Novità"));
}
export function featured(): CatalogProduct[] {
  return PRODUCTS.filter((p) => p.featured);
}
/** Tutti i prodotti ordinati: in evidenza prima, poi alfabetico (it). */
export function allSorted(): CatalogProduct[] {
  return [...PRODUCTS].sort(
    (a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name, "it"),
  );
}
/** Prodotti in una sotto-categoria di una categoria (match tollerante). */
export function bySubcategory(cat: CategorySlug, sub: string): CatalogProduct[] {
  const s = sub.trim().toLowerCase();
  return byCategory(cat).filter((p) => {
    const ps = p.subcategory.toLowerCase();
    return ps.includes(s) || s.includes(ps);
  });
}
