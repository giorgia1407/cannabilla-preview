/**
 * Cannabilla — informazioni di contatto e flusso d'ordine (anteprima).
 *
 * PREVIEW: nessun backend. Il carrello è mock (React Context + sessionStorage) e
 * il pulsante WhatsApp genera un messaggio precompilato. Cambia i valori qui per
 * aggiornare contatti, WhatsApp, indirizzo e soglia di spedizione ovunque.
 */

export const SHOP_INFO = {
  name: "Cannabilla",
  tagline: "Cosmetici naturali alla canapa dai Monti Sibillini",
  address: "Via Caccianebbia 10, 63857 Amandola (FM)",
  phone: "+39 0736 096736",
  phoneHref: "tel:+390736096736",
  email: "info@cannabilla.it",
  emailHref: "mailto:info@cannabilla.it",
  hours: "Lun-Ven 9:00 - 18:00 · Sab-Dom chiuso",
  deliveryZone: "Spedizione in tutta Italia · Consegna gratuita sopra €25",
  freeShippingThreshold: 25,
  vatLabel: "Società Biochimica Galloppa srls",
  whatsapp: {
    /** Numero dimostrativo per l'anteprima. */
    phone: "390736096736",
    display: "+39 0736 096736",
    message: "Ciao Cannabilla! Vorrei informazioni su...",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
} as const;

/** Base WhatsApp deep link con il messaggio precompilato in italiano. */
export function getWhatsAppUrl(message?: string): string {
  const text = message ?? SHOP_INFO.whatsapp.message;
  return `https://wa.me/${SHOP_INFO.whatsapp.phone}?text=${encodeURIComponent(text)}`;
}

/** WhatsApp link precompilato con interesse per un singolo prodotto. */
export function getWhatsAppProductUrl(name: string, vintage?: number): string {
  const label = vintage ? `${name} (${vintage})` : name;
  const text = `Ciao Cannabilla! Vorrei informazioni su: ${label}`;
  return getWhatsAppUrl(text);
}

export interface WhatsAppOrderLine {
  name: string;
  vintage?: number;
  qty: number;
  price: number;
  lineTotal: number;
}

/** Formattatore valuta — euro italiano, es. "€ 24,90". */
export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

/**
 * Costruisce un messaggio d'ordine WhatsApp multi-riga dal carrello corrente.
 * Anteprima: sostituto del checkout reale.
 */
export function buildWhatsAppOrder(lines: WhatsAppOrderLine[], total: number): string {
  const header = "Ciao Cannabilla! Vorrei ordinare:";
  const body = lines
    .map((l) => {
      const label = l.vintage ? `${l.name} ${l.vintage}` : l.name;
      return `• ${l.qty}× ${label} — ${formatEuro(l.lineTotal)}`;
    })
    .join("\n");
  const totalLine = `\nTotale: ${formatEuro(total)}`;
  const shipping =
    total >= SHOP_INFO.freeShippingThreshold
      ? "Consegna gratuita ✔"
      : `Aggiungi ${formatEuro(SHOP_INFO.freeShippingThreshold - total)} per la consegna gratuita.`;
  const footer = "\n\nConfermo nome, indirizzo di consegna e recapito. Grazie!";
  return `${header}\n\n${body}${totalLine}\n${shipping}${footer}`;
}

/** Full order WhatsApp deep link. */
export function getWhatsAppOrderUrl(lines: WhatsAppOrderLine[], total: number): string {
  return getWhatsAppUrl(buildWhatsAppOrder(lines, total));
}
