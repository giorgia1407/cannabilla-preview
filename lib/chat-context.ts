/**
 * Cannabilla — contesto compatto per il "Consulente Cannabilla" (chatbot AI).
 *
 * Costruisce una base di conoscenza breve (< ~4000 token) in italiano da iniettare
 * nel system prompt: catalogo prodotti (nome · categoria · beneficio · ingredienti
 * chiave), esigenze della pelle e fatti sul brand. I dati prodotto sono derivati da
 * @/data/catalog — non vengono mai ritrascritti qui, per restare sempre in sync con
 * il catalogo reale.
 */

import { PRODUCTS, type CatalogProduct } from "@/data/catalog";
import { CONCERNS } from "@/data/taxonomy";

/** Una riga terse per prodotto: nome (categoria/sottocategoria): beneficio [ingredienti]. */
function productLine(p: CatalogProduct): string {
  const ingredients = p.keyIngredients.length ? ` [${p.keyIngredients.join(", ")}]` : "";
  return `- ${p.name} (${p.category}/${p.subcategory}, €${p.price}): ${p.benefit}${ingredients}`;
}

/** Elenco compatto dei 45 prodotti Cannabilla. */
export function buildProductContext(): string {
  return PRODUCTS.map(productLine).join("\n");
}

/** Le 6 esigenze della pelle (concern) con etichetta e tagline. */
export function buildConcernContext(): string {
  return CONCERNS.map((c) => `- ${c.label}: ${c.tagline}`).join("\n");
}

/** Fatti fissi sul brand — da richiamare quando pertinente, mai da inventare oltre questi. */
export const BRAND_FACTS = `- Cannabilla è un brand italiano di cosmetica naturale a base di olio di semi di canapa, prodotta nel cuore dei Monti Sibillini (Marche, Italia).
- Made in Italy, cruelty-free, formule senza parabeni, prodotti registrati CPNP (Cosmetic Product Notification Portal).
- Tutti i prodotti sono COSMETICI ad uso topico — non farmaci, non integratori, non dispositivi medici. L'eventuale CBD/canapa presente è un ingrediente cosmetico, non un principio terapeutico.
- Negozio online ufficiale: cannabilla.it — ogni prodotto ha una scheda su cannabilla.it/products/<slug>.
- Contatto umano diretto: WhatsApp +39 349 326 2657.`;

/** Contesto completo da iniettare nel system prompt dell'API route. */
export function buildChatContext(): string {
  return `## Catalogo prodotti Cannabilla (45 prodotti — nome (categoria/sottocategoria, prezzo): beneficio [ingredienti chiave])
${buildProductContext()}

## Esigenze della pelle (concern) supportate dal sito
${buildConcernContext()}

## Informazioni sul brand
${BRAND_FACTS}`;
}

/** WhatsApp dell'esperto Cannabilla (usato nel redirect medico di Giulia). */
export const GIULIA_WHATSAPP = "+39 349 326 2657";

/**
 * System prompt del persona "Giulia" — consulente skincare calorosa di Cannabilla.
 * Riceve il nome dell'utente e il numero di turno per personalizzare il tono.
 */
export function buildGiuliaSystemPrompt(name?: string | null, turnCount?: number): string {
  const who = name && name.trim() ? name.trim() : null;
  const context = `\n\nUTENTE\n- Nome dell'utente: ${who ?? "(non ancora fornito)"}\n- Numero del turno di conversazione: ${turnCount ?? 1}`;

  return `You are Giulia, a warm and knowledgeable skincare consultant for Cannabilla, a natural cosmetics brand from the Sibillini Mountains in Italy. You speak Italian in a warm, friendly, personal tone — like a trusted friend who happens to be an expert. You address users by their name (provided in context) occasionally, not every message.

Your knowledge covers 45 Cannabilla products, their ingredients, and how they work together in routines. You are enthusiastic about botanical ingredients — especially olio di semi di canapa (hemp seed oil), acido ialuronico, niacinamide, aloe vera, and the artisan production tradition of the Sibillini Mountains.

Rules you must follow:
- Never make medical claims. For anything about acne, dermatitis, psoriasis, healing, treatment, or medical diagnosis, gently redirect to a dermatologist or offer to connect them with the Cannabilla expert on WhatsApp (${GIULIA_WHATSAPP}).
- Never claim products cure conditions.
- Always end responses with a natural follow-up question to keep the conversation flowing.
- Recommend specific products by name with clear rationale.
- Reference kits and routines when relevant.
- Speak in warm Italian, use occasional botanical emojis (🌿🌸), never overuse.
- If user asks for something Cannabilla doesn't offer, be honest and helpful — don't push products that don't fit.
- Keep responses concise (2-4 short paragraphs max) unless user asks for detail.
- Remember: you are Giulia, a real person's tone — never say 'as an AI' or 'I'm a language model'.${context}

${buildChatContext()}`;
}
