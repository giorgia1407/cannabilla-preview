/**
 * Cannabilla — configurazione sito (anteprima Phase 1a).
 *
 * NESSUN backend: nessun carrello reale, nessun checkout. Ogni interazione con i
 * prodotti apre il negozio Ecwid esistente su cannabilla.it nella stessa finestra.
 * Il pulsante WhatsApp genera un messaggio precompilato in italiano.
 */

export const SHOP_INFO = {
  name: "Cannabilla",
  tagline: "Cosmetica naturale italiana alla canapa dei Monti Sibillini",
  // TODO Sarang: dati reali cliente (placeholder in anteprima)
  address: "Via Caccianebbia 10, 63857 Amandola (FM)",
  legalName: "Società Biochimica Galloppa srls",
  vat: "P.IVA 0000000000", // TODO Sarang
  rea: "REA FM-000000", // TODO Sarang
  phone: "+39 0736 096736",
  phoneHref: "tel:+390736096736",
  email: "info@cannabilla.it",
  emailHref: "mailto:info@cannabilla.it",
  hours: "Lun-Ven 9:00 - 18:00 · Sab-Dom chiuso",
  freeShippingThreshold: 39.9,
  social: {
    instagram: "https://instagram.com/cannabilla",
    facebook: "https://facebook.com/cannabilla",
    tiktok: "https://tiktok.com/@cannabilla",
  },
  whatsapp: {
    phone: "393493262657",
    display: "+39 349 326 2657",
    message: "Ciao Cannabilla! Vorrei un consiglio sui vostri prodotti.",
  },
} as const;

/** Negozio Ecwid esistente — tutte le CTA prodotto puntano qui (stessa finestra). */
export const ECWID_BASE = "https://cannabilla.it";

/** URL della scheda prodotto sul negozio Ecwid. `slug` è l'URL Ecwid. */
export function ecwidProductUrl(slug: string): string {
  return `${ECWID_BASE}/products/${slug}`;
}

/** Carrello Ecwid (l'icona in header punta qui). */
export const ECWID_CART_URL = `${ECWID_BASE}/cart`;

/** Area account Ecwid. */
export function ecwidAccountUrl(path = ""): string {
  return `${ECWID_BASE}/account${path}`;
}

/** Deep link WhatsApp con messaggio precompilato. */
export function getWhatsAppUrl(message?: string): string {
  const text = message ?? SHOP_INFO.whatsapp.message;
  return `https://wa.me/${SHOP_INFO.whatsapp.phone}?text=${encodeURIComponent(text)}`;
}

/** WhatsApp precompilato con interesse per un prodotto. */
export function getWhatsAppProductUrl(name: string): string {
  return getWhatsAppUrl(`Ciao Cannabilla! Vorrei un consiglio su: ${name}`);
}

/** Formattatore valuta — euro italiano, es. "€ 24,90". */
export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
