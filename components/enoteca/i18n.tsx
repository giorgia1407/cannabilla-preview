"use client";

/**
 * Cannabilla — dizionario UI (SOLO italiano).
 *
 * L'anteprima è monolingua italiana: il provider resta per compatibilità con i
 * componenti (t()), ma la lingua è fissata su "it" e non c'è alcun selettore.
 */

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

export type Locale = "it";

type Dict = Record<string, string>;

const IT: Dict = {
  // Announcement bar
  "ann.shipping": "Consegna gratuita sopra €25",
  "ann.selection": "Cosmetici naturali alla canapa · Made in Italy",
  "ann.whatsapp": "Scrivici su WhatsApp per una consulenza skincare",
  // Nav
  "nav.home": "Home",
  "nav.catalog": "Catalogo",
  "nav.offers": "Offerte",
  "nav.about": "Chi Siamo",
  "nav.contact": "Contatti",
  "nav.business": "Rivenditore?",
  "nav.search": "Cerca prodotto, ingrediente, linea…",
  "nav.account": "Account",
  "nav.cart": "Carrello",
  "nav.menu": "Menu",
  "nav.close": "Chiudi",
  "nav.allCategories": "Tutte le categorie",
  "nav.orderNow": "Acquista ora",
  // Facets in mega-menu
  "facet.region": "Brand",
  "facet.denomination": "Linea",
  "facet.grape": "Ingrediente",
  "facet.vintage": "Novità",
  "facet.type": "Tipologia",
  "facet.price": "Prezzo",
  "facet.format": "Formato",
  // Buttons / actions
  "btn.orderWhatsapp": "Chiedi su WhatsApp",
  "btn.addToCart": "Aggiungi",
  "btn.added": "Aggiunto ✓",
  "btn.viewAll": "Vedi tutto",
  "btn.discover": "Scopri",
  "btn.explore": "Esplora il catalogo",
  "btn.details": "Dettagli",
  "btn.filters": "Filtri",
  "btn.resetFilters": "Azzera filtri",
  "btn.applyFilters": "Mostra risultati",
  // Home
  "home.hero.eyebrow": "Cosmesi naturale alla canapa",
  "home.hero.title": "La forza della canapa per la tua pelle",
  "home.hero.subtitle":
    "Cosmetici naturali formulati e prodotti nel cuore dei Monti Sibillini. Viso, corpo, solari e benessere all'olio di canapa — cruelty-free e senza parabeni.",
  "home.hero.cta": "Esplora il catalogo",
  "home.hero.cta2": "Consulenza via WhatsApp",
  "home.vantaggi.title": "Perché Cannabilla",
  "home.v1.title": "Consegna gratuita",
  "home.v1.text": "In tutta Italia sopra €25",
  "home.v2.title": "Ingredienti naturali",
  "home.v2.text": "Olio di canapa e attivi vegetali",
  "home.v3.title": "Made in Italy",
  "home.v3.text": "Formulati nei Monti Sibillini",
  "home.v4.title": "Cruelty-free",
  "home.v4.text": "Senza parabeni, non testati su animali",
  "home.categories.title": "Le nostre categorie",
  "home.categories.subtitle": "Trova il rituale di bellezza giusto per te",
  "home.featured.title": "I nostri preferiti",
  "home.featured.subtitle": "I prodotti che amiamo in questo momento",
  "home.bestsellers.title": "I più amati",
  "home.bestsellers.subtitle": "I preferiti dei nostri clienti",
  "home.offers.title": "Le nostre offerte",
  "home.offers.subtitle": "Prodotti selezionati a prezzo speciale",
  "home.story.eyebrow": "La nostra storia",
  "home.story.title": "La canapa dei Monti Sibillini",
  "home.story.p1":
    "Cannabilla nasce nel cuore dei Monti Sibillini, dove la tradizione erboristica incontra la ricerca cosmetica. Ogni formula parte dall'olio di semi di canapa, ricco di acidi grassi omega 3 e 6, per prendersi cura della pelle in modo naturale.",
  "home.story.p2":
    "Sviluppiamo e produciamo i nostri cosmetici in Italia, con attivi vegetali selezionati e formule delicate, adatte anche alle pelli più sensibili. Cruelty-free e senza parabeni, registrati nel portale europeo CPNP.",
  "home.story.p3":
    "Dalla cura del viso al benessere del corpo, fino alla linea Hempilla di estratti naturali: la canapa diventa un gesto quotidiano di bellezza e benessere.",
  "home.location.title": "Contattaci",
  "home.location.hours": "Orari",
  "home.location.address": "Sede",
  "home.location.delivery": "Spedizione",
  "home.location.cta": "Scrivici su WhatsApp",
  "home.testimonials.title": "Cosa dicono di noi",
  // Category page
  "cat.results": "risultati",
  "cat.result": "risultato",
  "cat.sortBy": "Ordina per",
  "cat.sort.featured": "In evidenza",
  "cat.sort.priceAsc": "Prezzo crescente",
  "cat.sort.priceDesc": "Prezzo decrescente",
  "cat.sort.name": "Nome A-Z",
  "cat.sort.vintage": "Novità",
  "cat.sort.novelty": "Novità",
  "cat.empty": "Nessun prodotto corrisponde ai filtri selezionati. Prova a modificare la selezione o rimuovi tutti i filtri.",
  "cat.filter.region": "Brand",
  "cat.filter.denomination": "Linea",
  "cat.filter.type": "Tipologia",
  "cat.filter.grape": "Ingrediente",
  "cat.filter.vintage": "Novità",
  "cat.filter.price": "Prezzo massimo",
  "cat.filter.inStock": "Solo disponibili",
  // Product page
  "prod.from": "Prezzo",
  "prod.perPiece": "",
  "prod.inStock": "Disponibile",
  "prod.outOfStock": "Non disponibile",
  "prod.producer": "Brand",
  "prod.tab.tasting": "Descrizione",
  "prod.tab.pairings": "Benefici",
  "prod.tab.tech": "Ingredienti & INCI",
  "prod.tab.cellar": "Come usarlo",
  "prod.attr.region": "Origine",
  "prod.attr.denomination": "Linea",
  "prod.attr.grape": "Ingredienti chiave",
  "prod.attr.vintage": "Novità",
  "prod.attr.alcohol": "Attivo",
  "prod.attr.volume": "Formato",
  "prod.attr.category": "Categoria",
  "prod.related": "Ti potrebbe piacere anche",
  "prod.cellarText":
    "Formulato e prodotto nel cuore dei Monti Sibillini con olio di canapa e attivi vegetali. Cruelty-free e senza parabeni, registrato nel portale europeo dei cosmetici CPNP.",
  "prod.awards": "Certificazioni",
  // Cart drawer
  "cart.title": "Il tuo carrello",
  "cart.empty": "Il carrello è vuoto",
  "cart.emptyHint": "Aggiungi i tuoi prodotti preferiti e completa l'ordine.",
  "cart.subtotal": "Subtotale",
  "cart.total": "Totale",
  "cart.freeShippingReached": "Consegna gratuita raggiunta ✔",
  "cart.freeShippingLeft": "Aggiungi {x} per la consegna gratuita",
  "cart.order": "Vai alla cassa",
  "cart.clear": "Svuota carrello",
  "cart.remove": "Rimuovi",
  "cart.continue": "Continua lo shopping",
  "cart.note": "Anteprima dimostrativa: il pagamento non è attivo.",
  // Footer
  "footer.tagline": "Cosmetici naturali alla canapa dai Monti Sibillini. Cruelty-free e senza parabeni.",
  "footer.newsletter.title": "Iscriviti e ricevi consigli e offerte in esclusiva",
  "footer.newsletter.placeholder": "Il tuo indirizzo e-mail",
  "footer.newsletter.cta": "Iscriviti",
  "footer.col.shop": "Catalogo",
  "footer.col.info": "Informazioni",
  "footer.col.help": "Assistenza",
  "footer.info.about": "Chi siamo",
  "footer.info.story": "La nostra storia",
  "footer.info.stores": "Ingredienti",
  "footer.info.events": "Il blog",
  "footer.help.contact": "Contatti",
  "footer.help.shipping": "Spedizioni e resi",
  "footer.help.faq": "Domande frequenti",
  "footer.help.terms": "Termini e condizioni",
  "footer.help.privacy": "Privacy & Cookie",
  "footer.drink": "Cosmetici per uso esterno",
  "footer.rights": "Tutti i diritti riservati.",
  // Misc
  "badge.new": "Novità",
  "badge.bestseller": "Best Seller",
  "badge.offer": "In Offerta",
  "badge.bio": "Naturale",
};

const DICTS: Record<Locale, Dict> = { it: IT };

interface I18nValue {
  locale: Locale;
  t: (key: string, vars?: Record<string, string>) => string;
  setLocale: (l: Locale) => void;
  toggle: () => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const t = useMemo(
    () => (key: string, vars?: Record<string, string>) => {
      let str = DICTS.it[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) str = str.replace(`{${k}}`, v);
      }
      return str;
    },
    [],
  );

  const value = useMemo<I18nValue>(
    () => ({ locale: "it", t, setLocale: () => {}, toggle: () => {} }),
    [t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}
