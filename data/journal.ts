/**
 * Cannabilla — Journal (4 articoli di esempio).
 * // TODO Sarang: sostituire con i contenuti reali del cliente.
 */

import { type ImgKey } from "@/lib/images";

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string; // ISO
  dateLabel: string;
  readTime: string;
  imgKey: ImgKey;
  relatedProducts: string[];
  /** Corpo articolo in paragrafi (alcuni con sottotitolo H2). */
  body: { heading?: string; text: string }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "come-costruire-una-routine-skincare-naturale-in-4-step",
    title: "Come costruire una routine skincare naturale in 4 step",
    category: "Routine e consigli",
    excerpt:
      "Detergere, trattare, idratare e proteggere: quattro gesti semplici per una pelle sana con la cosmesi naturale alla canapa.",
    author: "Redazione Cannabilla",
    date: "2026-06-18",
    dateLabel: "18 giugno 2026",
    readTime: "5 min",
    imgKey: "jrRoutine",
    relatedProducts: [
      "mousse-detergente-delicata",
      "golden-hemp-siero-viso-idratante",
      "crema-viso-idratante",
      "crema-viso-solare-spf-50",
    ],
    body: [
      {
        text: "Una buona routine skincare non deve essere complicata. Al contrario: bastano pochi gesti costanti, fatti con i prodotti giusti, per aiutare la pelle a stare bene. Con la cosmesi naturale alla canapa Cannabilla, la routine si riduce a quattro passaggi fondamentali che valgono per quasi tutti i tipi di pelle. Vediamoli insieme.",
      },
      {
        heading: "1. Detergere",
        text: "Il primo passo, mattina e sera, è la detersione. Serve a rimuovere impurità, sebo in eccesso e residui di make-up senza alterare il film idrolipidico della pelle. La Mousse Detergente Delicata Cannabilla, con canapa e centella asiatica, pulisce in profondità lasciando la pelle fresca e morbida, mai tirata. Alla sera, se usi il trucco, anticipa la detersione con lo struccante bifasico.",
      },
      {
        heading: "2. Trattare con un siero",
        text: "Dopo la detersione è il momento del siero, il prodotto più concentrato della routine. Si sceglie in base all'esigenza: il Golden Hemp per un nutrimento intenso, l'Escar Glow per un'idratazione rimpolpante, l'I'm Perfect per riequilibrare le pelli miste. Poche gocce, massaggiate con delicatezza fino ad assorbimento.",
      },
      {
        heading: "3. Idratare",
        text: "La crema idratante sigilla i benefici del siero e mantiene la pelle morbida durante la giornata. La Crema Viso Idratante Cannabilla ha una texture leggera che si assorbe in fretta ed è un'ottima base per il trucco. Applicala mattina e sera come ultimo step della cura.",
      },
      {
        heading: "4. Proteggere",
        text: "Di giorno, il gesto più importante è la protezione solare. La Crema Viso Solare SPF 50 protegge dai raggi UV con una texture invisibile e non unta, adatta all'uso quotidiano in città come in montagna. È il segreto per mantenere la pelle luminosa nel tempo. Quattro step, un rituale semplice: la costanza fa il resto.",
      },
    ],
  },
  {
    slug: "i-benefici-dell-olio-di-semi-di-canapa-nella-cosmesi",
    title: "I benefici dell'olio di semi di canapa nella cosmesi",
    category: "Ingredienti",
    excerpt:
      "Ricco di omega 3 e 6, emolliente e lenitivo: perché l'olio di semi di canapa è il cuore di ogni formula Cannabilla.",
    author: "Redazione Cannabilla",
    date: "2026-05-30",
    dateLabel: "30 maggio 2026",
    readTime: "6 min",
    imgKey: "jrCanapa",
    relatedProducts: [
      "golden-hemp-siero-viso-idratante",
      "olio-corpo-nutriente-ed-idratante",
      "hemp-oo-shampoo-delicato-e-nutriente",
    ],
    body: [
      {
        text: "Se c'è un ingrediente che racconta l'anima di Cannabilla, è l'olio di semi di canapa. Presente in quasi tutte le nostre formule, è un olio vegetale prezioso, ottenuto dai semi della pianta coltivata nel cuore dei Monti Sibillini. Ma cosa lo rende così speciale per la pelle?",
      },
      {
        heading: "Un profilo lipidico ideale",
        text: "L'olio di semi di canapa è ricchissimo di acidi grassi essenziali omega 3 e omega 6, presenti in un rapporto molto vicino a quello ideale per la pelle. Questi lipidi contribuiscono all'equilibrio delle membrane cellulari e aiutano a mantenere la barriera cutanea integra ed efficiente, per una pelle più protetta e confortevole.",
      },
      {
        heading: "Emolliente e lenitivo",
        text: "Grazie alla sua composizione, l'olio di canapa svolge un'azione emolliente e lenitiva: ammorbidisce la pelle, ne migliora l'elasticità e dona una piacevole sensazione di comfort. È particolarmente apprezzato dalle pelli secche e reattive, ma il suo tocco leggero lo rende adatto praticamente a tutti.",
      },
      {
        heading: "Versatile, dal viso ai capelli",
        text: "La versatilità è un'altra grande qualità di questo olio: lo troviamo nei sieri e nelle creme viso, negli oli e nelle creme corpo, negli shampoo e negli oli per capelli. Ovunque porta il suo nutrimento naturale. Un ingrediente semplice, sostenibile e profondamente legato al nostro territorio: la miglior sintesi della filosofia Cannabilla.",
      },
    ],
  },
  {
    slug: "spf-30-vs-spf-50-quale-scegliere-per-l-estate-italiana",
    title: "SPF 30 vs SPF 50: quale scegliere per l'estate italiana",
    category: "Sole",
    excerpt:
      "Fattore di protezione, tipo di pelle e contesto: una guida semplice per scegliere il solare giusto e proteggere la pelle.",
    author: "Redazione Cannabilla",
    date: "2026-06-05",
    dateLabel: "5 giugno 2026",
    readTime: "5 min",
    imgKey: "jrSpf",
    relatedProducts: [
      "latte-solare-idratante-spf-30",
      "latte-solare-idratante-spf-50",
      "crema-viso-solare-spf-50",
      "crema-doposole-lenitiva",
    ],
    body: [
      {
        text: "Con l'arrivo dell'estate torna la domanda di sempre: meglio un SPF 30 o un SPF 50? Entrambi proteggono la pelle dai raggi UV, ma la scelta giusta dipende da alcuni fattori. Facciamo chiarezza.",
      },
      {
        heading: "Cosa significa il numero SPF",
        text: "Il numero SPF (Sun Protection Factor) indica quanto un solare protegge la pelle dai raggi UVB. Un SPF 30 filtra circa il 97% dei raggi, un SPF 50 circa il 98%. La differenza in percentuale è piccola, ma per le pelli più delicate ogni punto conta. In ogni caso, nessun solare protegge al 100%: la riapplicazione regolare resta fondamentale.",
      },
      {
        heading: "Quando scegliere SPF 50",
        text: "Opta per il Latte Solare SPF 50 o la Crema Viso Solare SPF 50 se hai la pelle chiara, se ti esponi nelle ore centrali, in alta montagna o al mare, e per le prime esposizioni della stagione. È la scelta ideale anche per il viso, la zona più esposta e delicata, da proteggere tutti i giorni.",
      },
      {
        heading: "Quando basta SPF 30",
        text: "Il Latte Solare SPF 30 è perfetto per le pelli già abituate al sole, per le esposizioni più brevi e per la vita all'aria aperta di tutti i giorni. Qualunque sia la tua scelta, ricordati sempre del doposole: la Crema DopoSole Lenitiva reidrata la pelle dopo l'esposizione e aiuta a prolungare l'abbronzatura.",
      },
    ],
  },
  {
    slug: "le-origini-di-cannabilla-nel-cuore-dei-monti-sibillini",
    title: "Le origini di Cannabilla: nel cuore dei Monti Sibillini",
    category: "Cannabilla stories",
    excerpt:
      "Tra prati fioriti e aria pura, la storia di un progetto di cosmesi naturale nato dal legame con un territorio unico.",
    author: "Redazione Cannabilla",
    date: "2026-04-22",
    dateLabel: "22 aprile 2026",
    readTime: "6 min",
    imgKey: "jrOrigini",
    relatedProducts: [
      "golden-hemp-siero-viso-idratante",
      "olio-di-iperico-lenitivo-760499148",
      "melabilla-crema-viso-idratante-alla-mela-rosa",
    ],
    body: [
      {
        text: "Cannabilla nasce in un luogo speciale: i Monti Sibillini, tra le Marche e l'Umbria, un massiccio dell'Appennino centrale fatto di cime, faggete, prati fioriti e antiche leggende. È qui, in un ambiente incontaminato, che affondano le radici del nostro progetto di cosmesi naturale.",
      },
      {
        heading: "Un territorio generoso",
        text: "I Monti Sibillini sono uno scrigno di biodiversità. Nei loro prati crescono spontanee piante preziose per la cosmesi: l'iperico, che d'estate colora di giallo i sentieri, la calendula, la malva. E poi la Mela Rosa dei Sibillini, un'antica varietà ricca di polifenoli antiossidanti. Questa ricchezza botanica è la nostra prima fonte d'ispirazione.",
      },
      {
        heading: "La scelta della canapa",
        text: "Al centro delle nostre formule c'è l'olio di semi di canapa, una pianta che unisce sostenibilità e straordinarie proprietà cosmetiche. Coltivarla e valorizzarla significa per noi restare fedeli a un'idea di bellezza semplice, naturale e rispettosa dell'ambiente.",
      },
      {
        heading: "Una promessa",
        text: "Ogni prodotto Cannabilla è formulato e realizzato in Italia, cruelty-free, senza parabeni e con packaging riciclabile. Ma soprattutto porta con sé un pezzo di questo territorio: la sua purezza, la sua generosità, il suo ritmo lento. Prendersi cura della propria pelle, per noi, significa anche prendersi cura di ciò che ci circonda.",
      },
    ],
  },
];

export function articleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
