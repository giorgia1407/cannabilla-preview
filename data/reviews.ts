/**
 * Cannabilla — recensioni Google (contenuti dimostrativi per l'anteprima).
 * // TODO Sarang: collegare le recensioni reali (Google Business).
 */

export interface Review {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
}

export const GOOGLE_RATING = 5.0;
export const GOOGLE_COUNT = 214;

export const RATING_DISTRIBUTION: { stars: number; pct: number }[] = [
  { stars: 5, pct: 82 },
  { stars: 4, pct: 14 },
  { stars: 3, pct: 3 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

export const REVIEWS: Review[] = [
  {
    name: "Giulia M.",
    initials: "GM",
    rating: 5,
    date: "2 settimane fa",
    text: "Il siero Golden Hemp ha cambiato la mia pelle secca: la sento nutrita e morbida come non mai. Profumo delicato e assorbimento perfetto.",
  },
  {
    name: "Marco T.",
    initials: "MT",
    rating: 5,
    date: "1 mese fa",
    text: "Prodotti naturali di qualità e spedizione velocissima. Ho preso il kit corpo, mia moglie è entusiasta. Consiglio anche l'assistenza su WhatsApp, super gentili.",
  },
  {
    name: "Francesca R.",
    initials: "FR",
    rating: 5,
    date: "3 settimane fa",
    text: "Finalmente una crema viso che non unge e va bene sotto il trucco. Si vede che sono fatti con cura e ingredienti veri. Tornerò a comprare.",
  },
  {
    name: "Alessandro P.",
    initials: "AP",
    rating: 5,
    date: "2 mesi fa",
    text: "Uso lo shampoo e l'olio barba da mesi, ottimi. Bello anche il legame con i Monti Sibillini, un brand italiano che merita di crescere.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

/** FAQ homepage (6 voci). */
export const HOME_FAQ: FaqItem[] = [
  {
    q: "Dove nascono i prodotti Cannabilla?",
    a: "Tutti i cosmetici Cannabilla sono formulati e realizzati in Italia, nel cuore dei Monti Sibillini, con olio di semi di canapa e attivi botanici selezionati.",
  },
  {
    q: "I prodotti sono cruelty-free?",
    a: "Sì. Tutti i prodotti Cannabilla sono cruelty-free, senza parabeni e registrati CPNP. Non testiamo su animali in nessuna fase.",
  },
  {
    q: "Come scelgo il prodotto giusto per me?",
    a: "Puoi fare il nostro quiz della pelle in 90 secondi per ricevere una routine su misura, oppure scriverci su WhatsApp: ti risponde un esperto della cosmetica.",
  },
  {
    q: "Come funziona la spedizione?",
    a: "Spediamo in tutta Italia con consegna in 24/48h. La spedizione è gratuita per ordini superiori a 39,90€.",
  },
  {
    q: "Posso effettuare un reso?",
    a: "Sì, hai diritto di recesso entro 14 giorni dalla ricezione dell'ordine, secondo la normativa vigente. Trovi tutti i dettagli nella pagina Resi.",
  },
  {
    q: "Quanto durano i prodotti dopo l'apertura?",
    a: "Ogni prodotto riporta il simbolo PAO con il periodo di utilizzo consigliato dopo l'apertura (in genere 6-12 mesi). Conservali al riparo da luce e calore.",
  },
];
