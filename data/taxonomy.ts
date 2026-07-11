/**
 * Cannabilla — metadati tassonomia (categorie, esigenze, tipi di pelle) e
 * struttura della navigazione / mega-menu. Linguaggio cosmetico conforme:
 * nessun termine medicale nei label di categoria o esigenza.
 */

import type { CategorySlug, ConcernSlug, SkinType } from "./catalog";
import { type ImgKey } from "@/lib/images";

export interface CategoryMeta {
  slug: CategorySlug;
  label: string;
  short: string;
  tagline: string;
  description: string;
  /** Editoriale sotto la griglia (150-200 parole). */
  editorial: string;
  guide: string[];
  hero: ImgKey;
  tile: ImgKey;
  subcategories: string[];
  relatedConcerns: ConcernSlug[];
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "viso",
    label: "Viso",
    short: "Viso",
    tagline: "Detersione, idratazione e trattamenti mirati",
    description:
      "Sieri, creme, detergenti ed esfolianti all'olio di semi di canapa per ogni tipo di pelle: idratano, illuminano e proteggono con delicatezza.",
    editorial:
      "La cura del viso Cannabilla nasce dall'olio di semi di canapa dei Monti Sibillini, ricco di acidi grassi omega 3 e omega 6, e da attivi botanici selezionati come calendula, iperico e camomilla. Ogni formula è pensata per accompagnare la pelle con gesti semplici: una detersione delicata che non altera il film idrolipidico, sieri concentrati per esigenze specifiche e creme dalla texture leggera che si assorbono in fretta. Le composizioni sono pulite, senza parabeni, cruelty-free e registrate CPNP, per una routine quotidiana efficace e rispettosa. Che tu abbia una pelle secca in cerca di nutrimento, una pelle mista da riequilibrare o una pelle matura da rimpolpare, nella linea viso trovi il gesto giusto — dal primo passo della detersione fino alla protezione solare quotidiana.",
    guide: [
      "Inizia sempre dalla detersione, mattina e sera, con la Mousse Detergente Delicata.",
      "Scegli il siero in base all'esigenza: idratazione, imperfezioni o luminosità.",
      "Completa con una crema idratante adatta al tuo tipo di pelle.",
      "Di giorno non dimenticare la protezione solare SPF 50.",
    ],
    hero: "skincare2",
    tile: "catViso",
    subcategories: ["Detersione", "Creme", "Sieri", "Esfoliazione", "SPF / Sole"],
    relatedConcerns: ["pelle-secca", "imperfezioni-lucentezza", "pelle-matura"],
  },
  {
    slug: "corpo",
    label: "Corpo",
    short: "Corpo",
    tagline: "Nutrimento naturale dalla testa ai piedi",
    description:
      "Creme, oli corpo, trattamenti mani e detersione alla canapa che nutrono e ammorbidiscono la pelle ogni giorno.",
    editorial:
      "La linea corpo Cannabilla porta il nutrimento dell'olio di canapa su tutta la pelle. Dalle creme corpo ricche pensate per l'idratazione intensiva agli oli avvolgenti per il massaggio, fino ai trattamenti dedicati a mani e piedi, ogni prodotto è formulato con ingredienti di origine vegetale e attivi lenitivi. La detersione — bagno doccia, sapone mani, detergente intimo — pulisce rispettando l'equilibrio naturale della pelle. Sono gesti quotidiani che diventano un piccolo rituale di benessere, con profumazioni delicate e texture che si assorbono senza ungere. Made in Italy, cruelty-free e con packaging riciclabile.",
    guide: [
      "Applica la crema o l'olio corpo sulla pelle ancora umida dopo la doccia.",
      "Per le zone più secche (mani, piedi, gomiti) scegli trattamenti dedicati.",
      "Massaggia con movimenti lenti per favorire l'assorbimento.",
    ],
    hero: "wellness1",
    tile: "catCorpo",
    subcategories: ["Idratazione", "Oli", "Mani", "Piedi", "Detersione", "Igiene", "Post-epilazione"],
    relatedConcerns: ["pelle-secca", "sensibilita-rossore"],
  },
  {
    slug: "sole",
    label: "Sole",
    short: "Sole",
    tagline: "Protezione e riparazione con la canapa",
    description:
      "Latti solari idratanti SPF 30 e 50 e doposole lenitivi: esposizione consapevole e pelle reidratata dopo il sole.",
    editorial:
      "La linea solare Cannabilla unisce protezione e cura. I latti solari SPF 30 e SPF 50 proteggono la pelle dai raggi UV con una texture leggera che non lascia aloni bianchi, arricchita con olio di canapa e attivi idratanti. Dopo l'esposizione, i doposole in crema e olio reidratano la pelle, la leniscono e aiutano a prolungare l'abbronzatura. Formule pensate per la famiglia, per la città e per la montagna, sempre con lo sguardo alla naturalità e al rispetto della pelle. La protezione solare è il gesto quotidiano più importante per mantenere la pelle sana e luminosa nel tempo.",
    guide: [
      "Applica il solare 20 minuti prima dell'esposizione e riapplica ogni 2 ore.",
      "Scegli SPF 50 per pelli chiare, bambini e prime esposizioni.",
      "Dopo il sole usa sempre un doposole per reidratare la pelle.",
    ],
    hero: "meadow1",
    tile: "catSole",
    subcategories: ["Corpo SPF", "Doposole"],
    relatedConcerns: ["protezione-solare", "sensibilita-rossore"],
  },
  {
    slug: "capelli-e-barba",
    label: "Capelli e Barba",
    short: "Capelli",
    tagline: "Forza e morbidezza dalla radice alle punte",
    description:
      "Shampoo delicato, olio rigenerante per capelli e olio da barba ammorbidente: nutrimento naturale all'olio di canapa.",
    editorial:
      "Anche i capelli e la barba trovano nella canapa un alleato prezioso. Lo shampoo delicato deterge senza aggredire, adatto ai lavaggi frequenti, mentre l'olio rigenerante nutre le lunghezze secche e sfibrate donando morbidezza e lucentezza. Per la barba, l'olio ammorbidente disciplina il pelo e idrata la pelle sottostante. Formule semplici, ingredienti di origine vegetale e profumazioni discrete per un rituale di cura maschile e femminile.",
    guide: [
      "Usa lo shampoo delicato per lavaggi frequenti senza appesantire.",
      "Applica l'olio capelli sulle lunghezze umide o asciutte per nutrire le punte.",
      "Per la barba, poche gocce di olio dopo la doccia ammorbidiscono il pelo.",
    ],
    hero: "wellness4",
    tile: "catCapelli",
    subcategories: ["Capelli", "Barba"],
    relatedConcerns: ["pelle-secca"],
  },
  {
    slug: "labbra",
    label: "Labbra",
    short: "Labbra",
    tagline: "Coccola nutriente per le labbra",
    description:
      "Balsami labbra all'olio di canapa e cera d'api che nutrono e proteggono le labbra secche.",
    editorial:
      "I balsami labbra Hemp Kiss uniscono l'olio di semi di canapa alla cera d'api e al burro di cacao per una coccola nutriente che protegge le labbra dal freddo e dalla secchezza. Disponibili nelle profumazioni arancia e nocciola, hanno una texture avvolgente e un formato tascabile, perfetto da portare sempre con sé. Un piccolo gesto quotidiano per labbra morbide tutto l'anno.",
    guide: [
      "Applica il balsamo ogni volta che senti le labbra secche.",
      "Ottimo prima di uscire al freddo o al vento.",
      "Formato tascabile: tienilo sempre in borsa.",
    ],
    hero: "cosmetics1",
    tile: "catLabbra",
    subcategories: ["Balsami Labbra"],
    relatedConcerns: ["pelle-secca"],
  },
  {
    slug: "trattamenti",
    label: "Trattamenti",
    short: "Trattamenti",
    tagline: "Cura mirata per esigenze specifiche",
    description:
      "Trattamenti dermocura come PsorCream, SportCream e la linea Tattoo: comfort e sollievo con estratti vegetali.",
    editorial:
      "I Trattamenti Mirati Cannabilla rispondono a esigenze specifiche con formule dedicate. PsorCream è la crema dermocalmante e lenitiva pensata per le pelli molto secche; SportCream accompagna chi fa attività fisica con il suo effetto fresco prima e dopo lo sport; la linea Tattoo — balsamo e crema — si prende cura della pelle tatuata, mantenendo i colori vivi nel tempo. Ogni prodotto combina l'olio di canapa con attivi botanici selezionati per un comfort immediato.",
    guide: [
      "PsorCream: applica sulle zone di pelle molto secca più volte al giorno.",
      "SportCream: massaggia prima e dopo l'attività per un effetto fresco.",
      "Linea Tattoo: usa il balsamo nei primi giorni, poi la crema per il mantenimento.",
    ],
    hero: "botanical4",
    tile: "catTrattamenti",
    subcategories: ["Pelle molto secca", "Sport", "Tattoo"],
    relatedConcerns: ["pelle-secca", "sensibilita-rossore"],
  },
  {
    slug: "estratti",
    label: "Estratti",
    short: "Estratti",
    tagline: "La linea premium di estratti di canapa",
    description:
      "Estratti naturali di canapa Hempilla per applicazione topica, ispirati alla tradizione ayurvedica dell'ungimento.",
    editorial:
      "La linea Hempilla è la proposta premium di Cannabilla: estratti naturali di canapa in quattro concentrazioni — Ananda 5%, Shanti 10%, Soma 20% e Shayana 30% — pensati per l'applicazione topica e ispirati alla tradizione ayurvedica dell'ungimento. Ogni estratto è formulato con cura per un rituale di benessere che unisce la sapienza antica alla ricerca cosmetica contemporanea. Un gesto lento e consapevole, da dedicare al proprio corpo.",
    guide: [
      "Scegli la concentrazione in base all'esperienza: parti da Ananda 5%.",
      "Applica poche gocce sulla zona desiderata e massaggia lentamente.",
      "Ideale come rituale serale di benessere.",
    ],
    hero: "botanical2",
    tile: "catEstratti",
    subcategories: ["Estratti di Canapa"],
    relatedConcerns: ["sensibilita-rossore"],
  },
  {
    slug: "lifestyle",
    label: "Lifestyle",
    short: "Lifestyle",
    tagline: "Il mondo Cannabilla, oltre la cosmesi",
    description:
      "Abbigliamento e accessori con il logo Cannabilla, per portare con te lo spirito dei Monti Sibillini.",
    editorial:
      "La linea Lifestyle raccoglie l'abbigliamento e gli accessori Cannabilla: berretti, cappelli, felpe, t-shirt e borracce con il nostro logo. Piccoli oggetti quotidiani che raccontano l'appartenenza a un modo naturale e consapevole di prendersi cura di sé, ispirato ai Monti Sibillini. Perfetti anche come idea regalo per chi ama il brand.",
    guide: [
      "Scegli la tua taglia sullo shop Cannabilla.",
      "Ottimi come idea regalo per gli amanti del brand.",
      "Materiali morbidi e loghi ricamati o stampati con cura.",
    ],
    hero: "wellness1",
    tile: "catLifestyle",
    subcategories: ["Abbigliamento", "Accessori"],
    relatedConcerns: [],
  },
  {
    slug: "regali",
    label: "Regali",
    short: "Regali",
    tagline: "L'idea regalo perfetta",
    description:
      "Carta regalo digitale Cannabilla: il pensiero giusto quando vuoi lasciar scegliere.",
    editorial:
      "Non sai quale prodotto scegliere? La Carta Regalo Digitale Cannabilla è il pensiero perfetto: chi la riceve potrà scegliere liberamente tra tutti i cosmetici naturali dello shop. Un modo semplice ed elegante per regalare benessere e naturalità, con consegna digitale immediata.",
    guide: [
      "Scegli l'importo della carta regalo sullo shop.",
      "La consegna è digitale e immediata via email.",
      "Chi la riceve sceglie i prodotti che preferisce.",
    ],
    hero: "cosmetics1",
    tile: "catRegali",
    subcategories: ["Carta Regalo"],
    relatedConcerns: [],
  },
];

export function categoryMeta(slug: CategorySlug): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/* ----------------------------- ESIGENZE (concern) ----------------------------- */
export interface ConcernMeta {
  slug: ConcernSlug;
  label: string; // etichetta bianca sovrapposta (Miamo)
  tagline: string;
  description: string;
  why: string;
  imgKey: ImgKey;
  /** Routine consigliata (in sequenza) — slug Ecwid. */
  routine: string[];
}

export const CONCERNS: ConcernMeta[] = [
  {
    slug: "pelle-secca",
    label: "PELLE SECCA",
    tagline: "Nutrimento e comfort per pelli che tirano",
    description:
      "La pelle secca ha bisogno di nutrimento e di una barriera ben protetta. Le nostre formule ricche di olio di canapa, acido ialuronico e burri vegetali donano idratazione profonda e comfort duraturo, per una pelle di nuovo morbida ed elastica.",
    why:
      "Abbiamo selezionato prodotti ricchi di acidi grassi essenziali, squalano e attivi umettanti come l'acido ialuronico: nutrono, trattengono l'acqua e rinforzano la barriera cutanea senza appesantire.",
    imgKey: "cnSecca",
    routine: [
      "mousse-detergente-delicata",
      "golden-hemp-siero-viso-idratante",
      "crema-viso-idratante",
      "crema-viso-solare-spf-50",
    ],
  },
  {
    slug: "sensibilita-rossore",
    label: "SENSIBILITÀ E ROSSORE",
    tagline: "Delicatezza per pelli reattive",
    description:
      "Le pelli sensibili chiedono formule delicate e lenitive. Con canapa, bisabololo, calendula e camomilla, i nostri prodotti calmano la sensazione di fastidio e donano una piacevole sensazione di comfort.",
    why:
      "Selezione di prodotti con attivi calmanti e disarrossanti — bisabololo, allantoina, aloe e iperico — e senza ingredienti aggressivi, per rispettare l'equilibrio delle pelli più delicate.",
    imgKey: "cnSensibile",
    routine: [
      "mousse-detergente-delicata",
      "crema-viso-idratante",
      "olio-di-iperico-lenitivo-760499148",
    ],
  },
  {
    slug: "imperfezioni-lucentezza",
    label: "IMPERFEZIONI E LUCENTEZZA",
    tagline: "Equilibrio per pelli miste e a tendenza lucida",
    description:
      "Per le pelli miste e a tendenza lucida, l'obiettivo è riequilibrare senza seccare. Niacinamide, centella e canapa aiutano ad affinare la texture, opacizzare la zona T e mantenere la pelle fresca e uniforme.",
    why:
      "Prodotti con niacinamide e attivi seboregolatori che aiutano a controllare la lucidità, affinare i pori e uniformare la grana della pelle, mantenendo la giusta idratazione.",
    imgKey: "cnImperfezioni",
    routine: [
      "mousse-detergente-delicata",
      "im-perfect-siero-viso-anti-imperfezioni",
      "melabilla-crema-viso-idratante-alla-mela-rosa",
      "crema-viso-solare-spf-50",
    ],
  },
  {
    slug: "tono-non-uniforme",
    label: "TONO NON UNIFORME",
    tagline: "Luminosità e uniformità del colorito",
    description:
      "Quando il colorito appare spento o poco uniforme, servono attivi che illuminano e levigano. Con niacinamide, estratti antiossidanti e un'esfoliazione delicata, la pelle ritrova luminosità e un aspetto più fresco.",
    why:
      "Selezione di sieri, esfolianti e creme con antiossidanti e niacinamide che aiutano a rivelare un incarnato più luminoso e uniforme, gesto dopo gesto.",
    imgKey: "cnTono",
    routine: [
      "scrub-viso-100-naturale",
      "escar-glow-siero-viso-ultra-idratante",
      "melabilla-crema-viso-idratante-alla-mela-rosa",
      "crema-viso-solare-spf-50",
    ],
  },
  {
    slug: "pelle-matura",
    label: "PELLE MATURA",
    tagline: "Rimpolpa e nutre la pelle nel tempo",
    description:
      "La pelle matura desidera nutrimento, elasticità e comfort. Le nostre formule ricche di olio di canapa, acido ialuronico e antiossidanti aiutano a rimpolpare la pelle e a mantenerla morbida e luminosa.",
    why:
      "Prodotti nutrienti e rimpolpanti con acido ialuronico e antiossidanti botanici, per una pelle più elastica, idratata e luminosa nel tempo.",
    imgKey: "cnMatura",
    routine: [
      "mousse-detergente-delicata",
      "escar-glow-siero-viso-ultra-idratante",
      "golden-hemp-siero-viso-idratante",
      "crema-viso-solare-spf-50",
    ],
  },
  {
    slug: "protezione-solare",
    label: "PROTEZIONE SOLARE",
    tagline: "Difesa quotidiana e riparazione dopo il sole",
    description:
      "La protezione solare è il gesto anti-età più importante. I nostri solari SPF 30 e 50 proteggono con una texture leggera, mentre i doposole reidratano e leniscono la pelle dopo l'esposizione.",
    why:
      "Solari ad ampio spettro con texture idratanti e doposole lenitivi: proteggono la pelle dai raggi UV e la reidratano dopo il sole, per mantenerla sana e luminosa.",
    imgKey: "cnSolare",
    routine: [
      "crema-viso-solare-spf-50",
      "latte-solare-idratante-spf-50",
      "crema-doposole-lenitiva",
    ],
  },
];

export function concernMeta(slug: ConcernSlug): ConcernMeta | undefined {
  return CONCERNS.find((c) => c.slug === slug);
}

export const SKIN_TYPE_LABELS: Record<SkinType, string> = {
  secca: "Pelle secca",
  grassa: "Pelle grassa",
  mista: "Pelle mista",
  sensibile: "Pelle sensibile",
  matura: "Pelle matura",
};

/* --------------------------- NAVIGAZIONE --------------------------- */
export interface NavCaption {
  title: string;
  description: string;
}
export interface NavSubLink {
  label: string;
  href: string;
  /** Foto mostrata nel pannello destro del mega-menu all'hover della voce. */
  imgKey?: ImgKey;
  caption?: NavCaption;
}
/** Stato di default del pannello destro (nessuna voce ancora in hover). */
export interface CategoryHero {
  imgKey: ImgKey;
  title: string;
  description: string;
  ctaHref: string;
}
/** Tile della griglia immagini del mega-menu (Step 4). */
export interface GridTile {
  label: string;
  href: string;
  imgKey: ImgKey;
  /** Etichetta piccola sopra il nome (es. "Journal", "Kit"). */
  tag?: string;
}
export interface MegaMenu {
  label: string;
  href: string;
  columns: NavSubLink[];
  categoryHero?: CategoryHero;
  /**
   * Step 4 — griglia immagini larga nel mega-menu.
   *  - `gridProducts`: slug di prodotti reali del catalogo (foto Cloudfront/locali).
   *    Le voci Kit e Routines sono risolte a runtime da KITS/ROUTINES nell'header.
   *  - `gridContent`: tile di pagine editoriali (foto stock semantiche).
   */
  gridProducts?: string[];
  gridContent?: GridTile[];
}

/**
 * `columns: []` marks a top-level link WITHOUT a mega-menu (rendered as a plain
 * nav item, no chevron) — e.g. "Estratti".
 *
 * Ogni voce ha `imgKey` + `caption`: il mega-menu è un pannello a 2 zone
 * (elenco testo a sinistra, foto+didascalia a destra che cambia all'hover).
 * Le foto riusano la libreria IMG verificata visivamente + i nuovi slot `mm*`.
 */
export const NAV: MegaMenu[] = [
  {
    label: "Prodotti",
    href: "/prodotti",
    gridProducts: [
      "golden-hemp-siero-viso-idratante",
      "mousse-detergente-delicata",
      "crema-viso-idratante",
      "crema-corpo-idratazione-intensiva",
      "latte-solare-idratante-spf-50",
      "elis-hair-olio-per-capelli-rigenerante",
      "hemp-kiss-balsamo-labbra-arancia",
      "psorcream-dermocalmante-e-lenitiva",
      "hempilla-ananda-5-estratto-naturale-di-canapa",
    ],
    categoryHero: {
      imgKey: "catEstratti",
      title: "Tutti i Prodotti",
      description: "L'intera collezione di cosmesi naturale alla canapa.",
      ctaHref: "/prodotti",
    },
    columns: [
      { label: "Novità", href: "/prodotti/novita", imgKey: "catEstratti", caption: { title: "Novità", description: "Gli ultimi arrivi dai Monti Sibillini." } },
      { label: "Best Seller", href: "/prodotti/bestseller", imgKey: "skincare1", caption: { title: "Best Seller", description: "I prodotti più amati dai nostri clienti." } },
      { label: "In Offerta", href: "/prodotti/offerta", imgKey: "cosmetics1", caption: { title: "In Offerta", description: "Promozioni e bundle da non perdere." } },
      { label: "Kit", href: "/kits", imgKey: "catViso", caption: { title: "Kit & Routine", description: "Set completi per una routine semplice." } },
      { label: "Routine", href: "/routines", imgKey: "skincare2", caption: { title: "Routine", description: "Percorsi guidati mattina e sera." } },
      { label: "Carta Regalo", href: "/categoria/regali", imgKey: "catRegali", caption: { title: "Carta Regalo", description: "Il pensiero perfetto, consegna digitale." } },
    ],
  },
  {
    label: "Viso",
    href: "/categoria/viso",
    gridProducts: [
      "golden-hemp-siero-viso-idratante",
      "escar-glow-siero-viso-ultra-idratante",
      "crema-viso-idratante",
      "mousse-detergente-delicata",
      "im-perfect-siero-viso-anti-imperfezioni",
      "scrub-viso-100-naturale",
      "crema-viso-solare-spf-50",
      "melabilla-crema-viso-idratante-alla-mela-rosa",
    ],
    categoryHero: {
      imgKey: "catViso",
      title: "Cura Viso Naturale",
      description: "Formule pensate per idratare e proteggere la tua pelle.",
      ctaHref: "/categoria/viso",
    },
    columns: [
      { label: "Detersione", href: "/categoria/viso?sub=Detersione", imgKey: "mmDetersione", caption: { title: "Detersione", description: "Deterge senza alterare il film idrolipidico." } },
      { label: "Creme", href: "/categoria/viso?sub=Creme", imgKey: "catViso", caption: { title: "Creme Viso", description: "Idratazione leggera che si assorbe in fretta." } },
      { label: "Sieri", href: "/categoria/viso?sub=Sieri", imgKey: "catEstratti", caption: { title: "Sieri", description: "Attivi concentrati per ogni esigenza." } },
      { label: "Esfoliazione", href: "/categoria/viso?sub=Esfoliazione", imgKey: "mmEsfoliazione", caption: { title: "Esfoliazione", description: "Rinnova la grana della pelle con delicatezza." } },
      { label: "SPF", href: "/categoria/viso?sub=SPF", imgKey: "catSole", caption: { title: "SPF Viso", description: "Protezione quotidiana dai raggi UV." } },
    ],
  },
  {
    label: "Corpo",
    href: "/categoria/corpo",
    gridProducts: [
      "crema-corpo-idratazione-intensiva",
      "olio-corpo-nutriente-ed-idratante",
      "melabilla-crema-mani-idratante-alla-mela-rosa",
      "crema-mani-idratante",
      "bagno-doccia-detergente-e-idratante",
      "olio-corpo-per-massaggi",
      "happy-feet-balsamo-naturale-per-il-benessere-dei-piedi",
      "olio-di-iperico-lenitivo-760499148",
    ],
    categoryHero: {
      imgKey: "catCorpo",
      title: "Cura Corpo",
      description: "Nutrimento naturale dalla testa ai piedi.",
      ctaHref: "/categoria/corpo",
    },
    columns: [
      { label: "Bagno e doccia", href: "/categoria/corpo?sub=Detersione", imgKey: "mmBagnoDoccia", caption: { title: "Bagno e Doccia", description: "Detersione delicata per tutti i giorni." } },
      { label: "Creme corpo", href: "/categoria/corpo?sub=Idratazione", imgKey: "catCorpo", caption: { title: "Creme Corpo", description: "Idratazione intensiva e comfort." } },
      { label: "Oli corpo", href: "/categoria/corpo?sub=Oli", imgKey: "oil1", caption: { title: "Oli Corpo", description: "Nutrimento avvolgente per il massaggio." } },
      { label: "Mani", href: "/categoria/corpo?sub=Mani", imgKey: "wellness1", caption: { title: "Mani", description: "Trattamenti dedicati alle zone più secche." } },
      { label: "Piedi", href: "/categoria/corpo?sub=Piedi", imgKey: "wellness1", caption: { title: "Piedi", description: "Comfort e morbidezza per i piedi." } },
      { label: "Igiene", href: "/categoria/corpo?sub=Igiene", imgKey: "mmIgiene", caption: { title: "Igiene", description: "Detergenti che rispettano l'equilibrio naturale." } },
      { label: "Post-epilazione", href: "/categoria/corpo?sub=Post-epilazione", imgKey: "cnTono", caption: { title: "Post-Epilazione", description: "Lenisce e ammorbidisce la pelle." } },
    ],
  },
  {
    label: "Sole",
    href: "/categoria/sole",
    gridProducts: [
      "latte-solare-idratante-spf-30",
      "latte-solare-idratante-spf-50",
      "crema-doposole-lenitiva",
      "olio-doposole-lenitivo",
    ],
    categoryHero: {
      imgKey: "catSole",
      title: "Protezione Solare",
      description: "Esposizione consapevole e pelle reidratata dopo il sole.",
      ctaHref: "/categoria/sole",
    },
    columns: [
      { label: "SPF viso", href: "/categoria/viso?sub=SPF", imgKey: "catSole", caption: { title: "SPF Viso", description: "Protezione leggera per il viso." } },
      { label: "SPF 30", href: "/categoria/sole?sub=Corpo+SPF", imgKey: "jrSpf", caption: { title: "SPF 30", description: "Per la vita all'aria aperta di ogni giorno." } },
      { label: "SPF 50", href: "/categoria/sole?sub=Corpo+SPF", imgKey: "mountain2", caption: { title: "SPF 50", description: "Protezione alta per mare e montagna." } },
      { label: "Doposole", href: "/categoria/sole?sub=Doposole", imgKey: "ingAloe", caption: { title: "Doposole", description: "Reidrata e lenisce la pelle dopo il sole." } },
      { label: "Kit sole", href: "/kits/kit-sole", imgKey: "field1", caption: { title: "Kit Sole", description: "Tutto il necessario per l'estate." } },
    ],
  },
  {
    label: "Capelli & Barba",
    href: "/categoria/capelli-e-barba",
    gridProducts: [
      "elis-hair-olio-per-capelli-rigenerante",
      "hemp-oo-shampoo-delicato-e-nutriente",
      "olio-barba-ammorbidente",
    ],
    categoryHero: {
      imgKey: "catCapelli",
      title: "Capelli e Barba",
      description: "Forza e morbidezza dalla radice alle punte.",
      ctaHref: "/categoria/capelli-e-barba",
    },
    columns: [
      { label: "Shampoo", href: "/categoria/capelli-e-barba?sub=Capelli", imgKey: "catCapelli", caption: { title: "Shampoo", description: "Deterge senza aggredire, per lavaggi frequenti." } },
      { label: "Olio capelli", href: "/categoria/capelli-e-barba?sub=Capelli", imgKey: "oil2", caption: { title: "Olio Capelli", description: "Nutre lunghezze secche e sfibrate." } },
      { label: "Olio barba", href: "/categoria/capelli-e-barba?sub=Barba", imgKey: "mmRoutineUomo", caption: { title: "Olio Barba", description: "Ammorbidisce il pelo e idrata la pelle." } },
      { label: "Routine capelli", href: "/kits/kit-capelli-secchi", imgKey: "wellness4", caption: { title: "Routine Capelli", description: "Il rituale completo per capelli sani." } },
    ],
  },
  {
    label: "Kit",
    href: "/kits",
    categoryHero: {
      imgKey: "cosmetics1",
      title: "Kit & Routine",
      description: "Set completi per una routine senza pensieri.",
      ctaHref: "/kits",
    },
    columns: [
      { label: "Kit Viso Idratazione", href: "/kits/routine-viso-idratazione", imgKey: "catViso", caption: { title: "Kit Viso Idratazione", description: "La routine viso completa e idratante." } },
      { label: "Kit Viso Pelle Secca", href: "/kits/routine-pelle-secca-matura", imgKey: "cnSecca", caption: { title: "Kit Pelle Secca", description: "Nutrimento intenso per pelli che tirano." } },
      { label: "Kit Corpo Idratazione", href: "/kits/kit-corpo-idratazione", imgKey: "catCorpo", caption: { title: "Kit Corpo", description: "Idratazione dalla testa ai piedi." } },
      { label: "Kit Sole", href: "/kits/kit-sole", imgKey: "catSole", caption: { title: "Kit Sole", description: "Protezione e doposole insieme." } },
      { label: "Kit Capelli Secchi", href: "/kits/kit-capelli-secchi", imgKey: "catCapelli", caption: { title: "Kit Capelli", description: "Rinascita per capelli secchi e sfibrati." } },
      { label: "Kit Tattoo", href: "/kits/kit-tattoo", imgKey: "wellness3", caption: { title: "Kit Tattoo", description: "Cura dedicata alla pelle tatuata." } },
      { label: "Kit Routine Imperfezioni", href: "/kits/routine-imperfezioni", imgKey: "cnImperfezioni", caption: { title: "Kit Imperfezioni", description: "Equilibrio per pelli miste e a tendenza lucida." } },
      { label: "Starter Kit Discovery", href: "/kits/starter-discovery-kit", imgKey: "cosmetics1", caption: { title: "Starter Kit", description: "Prova i nostri prodotti must-have." } },
    ],
  },
  {
    label: "Routines",
    href: "/routines",
    categoryHero: {
      imgKey: "jrRoutine",
      title: "Le Routine",
      description: "Percorsi guidati per la tua pelle, passo dopo passo.",
      ctaHref: "/routines",
    },
    columns: [
      { label: "Routine Mattina Idratante", href: "/routines/routine-mattina-idratante", imgKey: "skincare2", caption: { title: "Routine Mattina", description: "Idrata e protegge per iniziare la giornata." } },
      { label: "Routine Sera Nutriente", href: "/routines/routine-sera-nutriente", imgKey: "skincare5", caption: { title: "Routine Sera", description: "Nutre e rigenera la pelle durante la notte." } },
      { label: "Routine Antietà Completa", href: "/routines/routine-antieta-completa", imgKey: "cnMatura", caption: { title: "Routine Antietà", description: "Rimpolpa ed elastizza la pelle matura." } },
      { label: "Routine Pelle Sensibile", href: "/routines/routine-pelle-sensibile", imgKey: "cnSensibile", caption: { title: "Routine Pelle Sensibile", description: "Gesti delicati per pelli reattive." } },
      { label: "Routine Uomo Essenziale", href: "/routines/routine-uomo-essenziale", imgKey: "mmRoutineUomo", caption: { title: "Routine Uomo", description: "Semplice ed efficace, ogni giorno." } },
      { label: "Crea la tua routine", href: "/routine-quiz", imgKey: "skincare7", caption: { title: "Crea la Tua Routine", description: "Il quiz che trova i gesti giusti per te." } },
    ],
  },
  {
    label: "Trattamenti",
    href: "/categoria/trattamenti",
    gridProducts: [
      "psorcream-dermocalmante-e-lenitiva",
      "sportcream-crema-muscolare-lenitiva",
      "tattoo-balm-balsamo-lenitivo",
      "tattoo-cream-crema-nutriente",
    ],
    categoryHero: {
      imgKey: "catTrattamenti",
      title: "Trattamenti Mirati",
      description: "Cura specifica per esigenze precise.",
      ctaHref: "/categoria/trattamenti",
    },
    columns: [
      { label: "Pelle molto secca", href: "/categoria/trattamenti?sub=Pelle+molto+secca", imgKey: "botanical4", caption: { title: "Pelle Molto Secca", description: "Dermocalmante per le zone molto secche." } },
      { label: "Sport", href: "/categoria/trattamenti?sub=Sport", imgKey: "mmSport", caption: { title: "Sport", description: "Effetto fresco prima e dopo l'attività." } },
      { label: "Tattoo", href: "/categoria/trattamenti?sub=Tattoo", imgKey: "wellness3", caption: { title: "Tattoo", description: "Mantiene vivi i colori del tatuaggio nel tempo." } },
      { label: "Piedi", href: "/categoria/corpo?sub=Piedi", imgKey: "wellness1", caption: { title: "Piedi", description: "Comfort per piedi affaticati." } },
      { label: "Oli mirati", href: "/categoria/corpo?sub=Oli", imgKey: "oil1", caption: { title: "Oli Mirati", description: "Trattamenti oleosi per zone specifiche." } },
    ],
  },
  {
    label: "Estratti",
    href: "/categoria/estratti",
    columns: [],
  },
  {
    label: "Scopri",
    href: "/chi-siamo",
    gridContent: [
      { label: "Storia", href: "/chi-siamo", imgKey: "mmStoria", tag: "Il brand" },
      { label: "Monti Sibillini", href: "/monti-sibillini", imgKey: "mountain1", tag: "Territorio" },
      { label: "Ingredienti", href: "/ingredienti", imgKey: "botanical1", tag: "Formule" },
      { label: "Qualità", href: "/qualita", imgKey: "mmQualita", tag: "Garanzie" },
      { label: "Sostenibilità", href: "/sostenibilita", imgKey: "mmSostenibilita", tag: "Impegno" },
      { label: "Journal", href: "/journal", imgKey: "jrRoutine", tag: "Magazine" },
      { label: "Rivenditori", href: "/rivenditori", imgKey: "mmRivenditori", tag: "Trova negozio" },
    ],
    categoryHero: {
      imgKey: "mountain1",
      title: "Scopri Cannabilla",
      description: "La storia, il territorio e gli ingredienti dietro ogni formula.",
      ctaHref: "/chi-siamo",
    },
    columns: [
      { label: "Storia", href: "/chi-siamo", imgKey: "mmStoria", caption: { title: "La Storia", description: "Come nasce Cannabilla dai Monti Sibillini." } },
      { label: "Monti Sibillini", href: "/monti-sibillini", imgKey: "mountain1", caption: { title: "Monti Sibillini", description: "Il territorio che ispira ogni formula." } },
      { label: "Ingredienti", href: "/ingredienti", imgKey: "botanical1", caption: { title: "Ingredienti", description: "Attivi botanici naturali selezionati." } },
      { label: "Qualità", href: "/qualita", imgKey: "mmQualita", caption: { title: "Qualità", description: "Formule pulite, artigianali e registrate CPNP." } },
      { label: "Sostenibilità", href: "/sostenibilita", imgKey: "mmSostenibilita", caption: { title: "Sostenibilità", description: "Packaging riciclabile e scelte responsabili." } },
      { label: "Journal", href: "/journal", imgKey: "jrRoutine", caption: { title: "Journal", description: "Consigli, storie e approfondimenti." } },
      { label: "Rivenditori", href: "/rivenditori", imgKey: "mmRivenditori", caption: { title: "Rivenditori", description: "Trova Cannabilla in un punto vendita vicino a te." } },
    ],
  },
];
