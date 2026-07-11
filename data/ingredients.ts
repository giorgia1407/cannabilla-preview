/**
 * Cannabilla — dizionario ingredienti (funzioni cosmetiche conformi).
 *
 * I 9 ingredienti "hero" (blueprint §5.1) hanno una pagina dedicata
 * /ingredienti/[slug]. Gli altri compaiono nella directory /ingredienti.
 * "Prodotti che contengono X" è calcolato dai principali attivi di catalogo.
 */

import { PRODUCTS, type CatalogProduct } from "./catalog";
import { type ImgKey } from "@/lib/images";

export interface Ingredient {
  slug: string;
  name: string;
  inci?: string;
  /** Funzione cosmetica in una riga (conforme). */
  fn: string;
  /** Descrizione estesa (solo hero). */
  long?: string;
  hero: boolean;
  imgKey?: ImgKey;
  /** Termini per associare i prodotti (match su nome attivi). */
  match: string[];
}

export const INGREDIENTS: Ingredient[] = [
  {
    slug: "olio-di-semi-di-canapa",
    name: "Olio di Semi di Canapa",
    inci: "Cannabis Sativa Seed Oil",
    fn: "Ricco di acidi grassi omega 3 e 6, svolge un'azione emolliente, lenitiva e nutriente.",
    long:
      "L'olio di semi di canapa è il cuore di ogni formula Cannabilla. Ottenuto dai semi della pianta coltivata nei Monti Sibillini, è ricchissimo di acidi grassi essenziali omega 3 e omega 6, in un rapporto ideale per la pelle. Questi lipidi contribuiscono all'equilibrio delle membrane cellulari e rafforzano la barriera cutanea, mentre l'azione emolliente e lenitiva rende la pelle più morbida e confortevole. È un olio dal tocco leggero, che si assorbe con facilità e si adatta a tutti i tipi di pelle, anche le più sensibili.",
    hero: true,
    imgKey: "ingCanapa",
    match: ["canapa", "hemp"],
  },
  {
    slug: "acido-ialuronico",
    name: "Acido Ialuronico",
    inci: "Sodium Hyaluronate",
    fn: "Come una spugna trattiene l'acqua sulla superficie della pelle per un'idratazione profonda.",
    long:
      "L'acido ialuronico è tra gli attivi idratanti più apprezzati in cosmesi. Grazie alla sua straordinaria capacità di legare l'acqua, agisce come una spugna trattenendo l'idratazione sulla superficie cutanea e donando alla pelle un aspetto immediatamente più rimpolpato, fresco e disteso. Nelle formule Cannabilla lavora in sinergia con l'olio di canapa per un comfort idratante duraturo, adatto a ogni tipo di pelle.",
    hero: true,
    imgKey: "ingIaluronico",
    match: ["ialuronico", "hyaluron"],
  },
  {
    slug: "niacinamide",
    name: "Niacinamide",
    inci: "Niacinamide",
    fn: "Vitamina B3: idrata, aiuta a riequilibrare il sebo e a uniformare la grana della pelle.",
    long:
      "La niacinamide, nota anche come vitamina B3 o vitamina PP, è un attivo versatile e ben tollerato. A seconda della concentrazione, svolge un'azione idratante, aiuta a riequilibrare la produzione di sebo e contribuisce ad affinare la texture e a uniformare l'incarnato. È particolarmente apprezzata nelle routine per pelli miste e a tendenza lucida, dove aiuta a mantenere la pelle fresca e opaca senza seccarla.",
    hero: true,
    imgKey: "ingNiacinamide",
    match: ["niacinamide"],
  },
  {
    slug: "aloe-vera",
    name: "Aloe Vera",
    inci: "Aloe Barbadensis Leaf Juice",
    fn: "Idratante e lenitiva, utile in caso di pelle arrossata, con un piacevole effetto rinfrescante.",
    long:
      "L'aloe vera è un classico della cosmesi naturale. Il suo gel è ricco d'acqua e di mucillagini che idratano la pelle e le donano una sensazione di freschezza immediata. Ha proprietà lenitive che la rendono preziosa per calmare la pelle arrossata dal sole o dagli agenti esterni. Nelle formule Cannabilla accompagna spesso l'olio di canapa per un'azione idratante e confortante.",
    hero: true,
    imgKey: "ingAloe",
    match: ["aloe"],
  },
  {
    slug: "vitamina-e",
    name: "Vitamina E",
    inci: "Tocopheryl Acetate",
    fn: "Antiossidante che aiuta a proteggere la pelle dai radicali liberi.",
    long:
      "La vitamina E è uno degli antiossidanti più conosciuti. Aiuta a proteggere la pelle dallo stress ossidativo causato dai radicali liberi, contribuendo a preservarne la giovinezza e la luminosità. Nelle formule cosmetiche svolge anche un ruolo stabilizzante, proteggendo gli oli vegetali dall'irrancidimento. È un alleato discreto ma prezioso in molti prodotti Cannabilla.",
    hero: true,
    imgKey: "ingVitaminaE",
    match: ["vitamina e", "tocopher"],
  },
  {
    slug: "calendula",
    name: "Calendula",
    inci: "Calendula Officinalis Flower Extract",
    fn: "Emolliente e protettiva, dona comfort alle pelli che tendono a seccarsi.",
    long:
      "L'estratto di calendula è tradizionalmente apprezzato per la sua delicatezza. Ricco di mucillagini e fitosteroli, svolge un'azione emolliente, idratante e protettiva, formando un velo confortante sulla pelle. È particolarmente indicato per le pelli secche e sensibili, a cui dona una sensazione di comfort e morbidezza. Cresce spontanea nei prati dei Monti Sibillini.",
    hero: true,
    imgKey: "ingCalendula",
    match: ["calendula"],
  },
  {
    slug: "malva",
    name: "Malva",
    inci: "Malva Sylvestris Extract",
    fn: "Emolliente e addolcente, avvolge la pelle con delicatezza.",
    long:
      "La malva è una pianta dalle proprietà emollienti note fin dall'antichità. Ricca di mucillagini, ammorbidisce e addolcisce la pelle, donando una piacevole sensazione di comfort. È indicata per le pelli delicate e reattive, che avvolge con la sua azione lenitiva. Nel territorio dei Monti Sibillini è una presenza spontanea dei prati e dei sentieri.",
    hero: true,
    imgKey: "ingMalva",
    match: ["malva"],
  },
  {
    slug: "iperico",
    name: "Iperico",
    inci: "Hypericum Perforatum Flower Extract",
    fn: "Lenitivo ed emolliente, particolarmente indicato per le pelli secche.",
    long:
      "L'iperico, o erba di San Giovanni, è una pianta preziosa che nei Monti Sibillini fiorisce d'estate colorando i prati di giallo. Il suo estratto oleoso è tradizionalmente apprezzato per l'azione lenitiva ed emolliente, particolarmente indicata per le pelli secche e provate. Cannabilla lo raccoglie e lo valorizza in oli e creme dedicati al comfort della pelle.",
    hero: true,
    imgKey: "ingIperico",
    match: ["iperico", "hypericum"],
  },
  {
    slug: "jojoba",
    name: "Olio di Jojoba",
    inci: "Simmondsia Chinensis Seed Oil",
    fn: "Simile al sebo, ripara la barriera cutanea e favorisce l'assorbimento degli attivi.",
    long:
      "L'olio di jojoba è in realtà una cera liquida dalla composizione molto simile a quella del sebo umano. Questa affinità le permette di essere assorbita facilmente dalla pelle e di aiutare la penetrazione degli altri attivi. Contribuisce a riparare la barriera cutanea e ha un'azione emolliente e riparatrice. È un ingrediente prezioso e versatile, adatto a tutti i tipi di pelle.",
    hero: true,
    imgKey: "ingJojoba",
    match: ["jojoba"],
  },
  // ---- directory (non hero) ----
  { slug: "cbd", name: "CBD", inci: "Cannabidiol", fn: "Attivo calmante e lenitivo dalle proprietà antiossidanti.", hero: false, match: ["cbd"] },
  { slug: "squalano", name: "Squalano", inci: "Squalane", fn: "Emolliente e idratante, forma stabile dello squalene del sebo.", hero: false, match: ["squalano", "squalane"] },
  { slug: "bava-di-lumaca", name: "Bava di Lumaca", inci: "Snail Secretion Filtrate", fn: "Ricca di acido ialuronico, allantoina ed elastina: idrata e leviga.", hero: false, match: ["bava di lumaca", "snail"] },
  { slug: "allantoina", name: "Allantoina", inci: "Allantoin", fn: "Idratante e lenitiva, favorisce il rinnovamento cutaneo.", hero: false, match: ["allantoina", "allantoin"] },
  { slug: "bisabololo", name: "Bisabololo", inci: "Bisabolol", fn: "Calmante e disarrossante, ottenuto dalla camomilla.", hero: false, match: ["bisabolo"] },
  { slug: "centella-asiatica", name: "Centella Asiatica", inci: "Centella Asiatica Extract", fn: "Purificante e astringente, aiuta a tonificare la pelle.", hero: false, match: ["centella"] },
  { slug: "burro-di-karite", name: "Burro di Karité", inci: "Butyrospermum Parkii Butter", fn: "Emolliente e nutriente, ripristina l'idratazione cutanea.", hero: false, match: ["karit"] },
  { slug: "olio-di-mandorle", name: "Olio di Mandorle Dolci", inci: "Prunus Amygdalus Dulcis Oil", fn: "Emolliente e lenitivo, allevia la secchezza cutanea.", hero: false, match: ["mandorl"] },
  { slug: "olio-di-carota", name: "Olio di Carota", inci: "Daucus Carota Sativa Root", fn: "Ricco di betacarotene, mantiene la pelle morbida ed elastica.", hero: false, match: ["carota"] },
  { slug: "rosmarino", name: "Rosmarino", inci: "Rosmarinus Officinalis Extract", fn: "Antiossidante, aiuta a rendere la pelle morbida ed elastica.", hero: false, match: ["rosmarino"] },
  { slug: "camomilla", name: "Camomilla", inci: "Chamomilla Recutita Flower Extract", fn: "Lenitiva e addolcente per le pelli delicate.", hero: false, match: ["camomilla"] },
  { slug: "glicerina", name: "Glicerina Vegetale", inci: "Glycerin", fn: "Umettante, mantiene la pelle idratata e morbida.", hero: false, match: ["glicerina", "glycerin"] },
  { slug: "salvia", name: "Salvia", inci: "Salvia Officinalis Leaf Extract", fn: "Astringente e purificante, ideale per pelli miste.", hero: false, match: ["salvia"] },
  { slug: "azeloglicina", name: "Azeloglicina", inci: "Potassium Azeloyl Diglycinate", fn: "Aiuta a riequilibrare il sebo e ad affinare la texture.", hero: false, match: ["azelo"] },
  { slug: "pantenolo", name: "Pantenolo", inci: "Panthenol", fn: "Idratante e addolcente, migliora il comfort della pelle.", hero: false, match: ["pantenolo", "panthenol"] },
  { slug: "cera-dapi", name: "Cera d'Api", inci: "Cera Alba", fn: "Emolliente e protettiva, forma un velo nutriente sulle labbra.", hero: false, match: ["cera d'api", "cera d’api", "cera alba"] },
  { slug: "burro-di-cacao", name: "Burro di Cacao", inci: "Theobroma Cacao Seed Butter", fn: "Nutriente e protettivo, dona morbidezza a labbra e pelle.", hero: false, match: ["cacao"] },
  { slug: "mela-rosa", name: "Mela Rosa dei Sibillini", inci: "Malus Domestica Peel Extract", fn: "Ricca di polifenoli antiossidanti, contrasta i radicali liberi.", hero: false, match: ["mela rosa"] },
  { slug: "filtri-uv", name: "Filtri UV", inci: "UV Filters", fn: "Proteggono la pelle dai raggi UVA e UVB durante l'esposizione.", hero: false, match: ["filtri uv", "filtro uv"] },
  { slug: "olio-di-vinaccioli", name: "Olio di Vinaccioli", inci: "Vitis Vinifera Seed Oil", fn: "Emolliente e antiossidante, allevia la secchezza.", hero: false, match: ["vinaccioli"] },
];

export function ingredientBySlug(slug: string): Ingredient | undefined {
  return INGREDIENTS.find((i) => i.slug === slug);
}

export const HERO_INGREDIENTS = INGREDIENTS.filter((i) => i.hero);

/** Prodotti che contengono un dato ingrediente (match sui principali attivi). */
export function productsForIngredient(ing: Ingredient): CatalogProduct[] {
  const terms = ing.match.map((m) => m.toLowerCase());
  return PRODUCTS.filter((p) =>
    p.keyIngredients.some((k) => terms.some((t) => k.toLowerCase().includes(t))),
  );
}
