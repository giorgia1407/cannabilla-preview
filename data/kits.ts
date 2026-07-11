/**
 * Cannabilla — Kit & Routine (Phase 1a). 8 kit = routine pronte.
 *
 * I kit NON esistono (ancora) come SKU su Ecwid: la CTA "Aggiungi il kit" apre
 * WhatsApp con una richiesta precompilata (o l'URL Ecwid se impostato in futuro).
 */

import { bySlug, type CatalogProduct } from "./catalog";
import { type ImgKey } from "@/lib/images";

export interface Kit {
  slug: string;
  name: string;
  tagline: string;
  idealFor: string;
  intro: string;
  productSlugs: string[];
  routineMorning: string[];
  routineEvening: string[];
  usagePeriod: string;
  savingPct: number;
  rating: number;
  reviewCount: number;
  imgKey: ImgKey;
  /** Se il kit esiste su Ecwid, imposta lo slug; altrimenti CTA → WhatsApp. */
  ecwidSlug?: string;
}

export const KITS: Kit[] = [
  {
    slug: "starter-discovery-kit",
    name: "Starter Kit Idratazione",
    tagline: "Il primo passo nel mondo Cannabilla",
    idealFor: "Chi vuole scoprire la routine viso essenziale",
    intro:
      "Un kit pensato per iniziare: detersione delicata, idratazione quotidiana e protezione. I tre gesti fondamentali per una pelle sana, in un'unica soluzione a prova di principiante.",
    productSlugs: ["mousse-detergente-delicata", "crema-viso-idratante", "crema-viso-solare-spf-50"],
    routineMorning: ["mousse-detergente-delicata", "crema-viso-idratante", "crema-viso-solare-spf-50"],
    routineEvening: ["mousse-detergente-delicata", "crema-viso-idratante"],
    usagePeriod: "Circa 2 mesi",
    savingPct: 12,
    rating: 4.8,
    reviewCount: 64,
    imgKey: "skincare1",
  },
  {
    slug: "routine-viso-idratazione",
    name: "Routine Viso Idratazione",
    tagline: "Idratazione profonda in 4 step",
    idealFor: "Pelli normali e disidratate in cerca di comfort",
    intro:
      "La routine completa per un'idratazione luminosa: detersione, siero ultra-idratante, crema viso e protezione solare. Quattro prodotti che lavorano in sinergia mattina e sera.",
    productSlugs: [
      "mousse-detergente-delicata",
      "escar-glow-siero-viso-ultra-idratante",
      "crema-viso-idratante",
      "crema-viso-solare-spf-50",
    ],
    routineMorning: [
      "mousse-detergente-delicata",
      "escar-glow-siero-viso-ultra-idratante",
      "crema-viso-idratante",
      "crema-viso-solare-spf-50",
    ],
    routineEvening: [
      "mousse-detergente-delicata",
      "escar-glow-siero-viso-ultra-idratante",
      "crema-viso-idratante",
    ],
    usagePeriod: "Circa 2-3 mesi",
    savingPct: 15,
    rating: 4.9,
    reviewCount: 88,
    imgKey: "skincare2",
  },
  {
    slug: "routine-imperfezioni",
    name: "Routine Imperfezioni",
    tagline: "Equilibrio per pelli miste e a tendenza lucida",
    idealFor: "Pelli miste e grasse con imperfezioni",
    intro:
      "Una routine riequilibrante che affina la texture e opacizza la zona T senza seccare: detersione, siero anti-imperfezioni con niacinamide, crema e protezione.",
    productSlugs: [
      "mousse-detergente-delicata",
      "im-perfect-siero-viso-anti-imperfezioni",
      "melabilla-crema-viso-idratante-alla-mela-rosa",
      "crema-viso-solare-spf-50",
    ],
    routineMorning: [
      "mousse-detergente-delicata",
      "im-perfect-siero-viso-anti-imperfezioni",
      "melabilla-crema-viso-idratante-alla-mela-rosa",
      "crema-viso-solare-spf-50",
    ],
    routineEvening: [
      "mousse-detergente-delicata",
      "im-perfect-siero-viso-anti-imperfezioni",
      "melabilla-crema-viso-idratante-alla-mela-rosa",
    ],
    usagePeriod: "Circa 2-3 mesi",
    savingPct: 15,
    rating: 4.8,
    reviewCount: 71,
    imgKey: "skincare6",
  },
  {
    slug: "routine-pelle-secca-matura",
    name: "Kit Viso Pelle Secca",
    tagline: "Nutrimento e rimpolpo per pelli secche e mature",
    idealFor: "Pelli secche, mature e in cerca di nutrimento",
    intro:
      "Una routine ricca che nutre in profondità e rimpolpa: detersione, siero ultra-idratante, olio viso concentrato Golden Hemp e protezione solare.",
    productSlugs: [
      "mousse-detergente-delicata",
      "escar-glow-siero-viso-ultra-idratante",
      "golden-hemp-siero-viso-idratante",
      "crema-viso-solare-spf-50",
    ],
    routineMorning: [
      "mousse-detergente-delicata",
      "escar-glow-siero-viso-ultra-idratante",
      "crema-viso-solare-spf-50",
    ],
    routineEvening: [
      "mousse-detergente-delicata",
      "golden-hemp-siero-viso-idratante",
    ],
    usagePeriod: "Circa 3 mesi",
    savingPct: 15,
    rating: 4.9,
    reviewCount: 79,
    imgKey: "skincare5",
  },
  {
    slug: "kit-corpo-idratazione",
    name: "Kit Corpo Idratazione",
    tagline: "Il rituale corpo dalla doccia al massaggio",
    idealFor: "Chi cerca morbidezza e nutrimento su tutto il corpo",
    intro:
      "Dalla detersione delicata al nutrimento profondo: bagno doccia, crema corpo ad idratazione intensiva e olio corpo nutriente per una pelle setosa.",
    productSlugs: [
      "bagno-doccia-detergente-e-idratante",
      "crema-corpo-idratazione-intensiva",
      "olio-corpo-nutriente-ed-idratante",
    ],
    routineMorning: ["bagno-doccia-detergente-e-idratante", "crema-corpo-idratazione-intensiva"],
    routineEvening: ["olio-corpo-nutriente-ed-idratante"],
    usagePeriod: "Circa 2 mesi",
    savingPct: 12,
    rating: 4.8,
    reviewCount: 52,
    imgKey: "wellness2",
  },
  {
    slug: "kit-sole",
    name: "Kit Sole",
    tagline: "Protezione e riparazione per l'estate",
    idealFor: "Giornate al sole, mare e montagna",
    intro:
      "Tutto ciò che serve per esporti in sicurezza: protezione viso SPF 50, latte solare corpo SPF 50 e crema doposole lenitiva per reidratare la pelle.",
    productSlugs: [
      "crema-viso-solare-spf-50",
      "latte-solare-idratante-spf-50",
      "crema-doposole-lenitiva",
    ],
    routineMorning: ["crema-viso-solare-spf-50", "latte-solare-idratante-spf-50"],
    routineEvening: ["crema-doposole-lenitiva"],
    usagePeriod: "Una stagione estiva",
    savingPct: 12,
    rating: 4.8,
    reviewCount: 46,
    imgKey: "field1",
  },
  {
    slug: "kit-capelli-secchi",
    name: "Kit Capelli Secchi",
    tagline: "Nutrimento per capelli secchi e sfibrati",
    idealFor: "Capelli secchi, crespi e sfibrati",
    intro:
      "La coppia perfetta per capelli assetati: shampoo delicato e nutriente e olio rigenerante Elis Hair per lunghezze morbide e luminose.",
    productSlugs: ["hemp-oo-shampoo-delicato-e-nutriente", "elis-hair-olio-per-capelli-rigenerante"],
    routineMorning: ["hemp-oo-shampoo-delicato-e-nutriente"],
    routineEvening: ["elis-hair-olio-per-capelli-rigenerante"],
    usagePeriod: "Circa 2 mesi",
    savingPct: 10,
    rating: 4.8,
    reviewCount: 38,
    imgKey: "wellness4",
  },
  {
    slug: "kit-tattoo",
    name: "Kit Tattoo",
    tagline: "Cura completa per la pelle tatuata",
    idealFor: "Chi ha un tatuaggio nuovo o vuole mantenerlo vivo",
    intro:
      "La coppia dedicata al tatuaggio: balsamo lenitivo per i primi giorni e crema nutriente per il mantenimento quotidiano, per colori sempre vividi.",
    productSlugs: ["tattoo-balm-balsamo-lenitivo", "tattoo-cream-crema-nutriente"],
    routineMorning: ["tattoo-cream-crema-nutriente"],
    routineEvening: ["tattoo-balm-balsamo-lenitivo"],
    usagePeriod: "Circa 1-2 mesi",
    savingPct: 10,
    rating: 4.8,
    reviewCount: 34,
    imgKey: "wellness3",
  },
];

export function kitBySlug(slug: string): Kit | undefined {
  return KITS.find((k) => k.slug === slug);
}

export function kitProducts(kit: Kit): CatalogProduct[] {
  return kit.productSlugs.map(bySlug).filter((p): p is CatalogProduct => Boolean(p));
}

/** Valore al dettaglio (somma prezzi) e prezzo kit scontato. */
export function kitPricing(kit: Kit): { retail: number; kit: number; saving: number } {
  const retail = kitProducts(kit).reduce((s, p) => s + p.price, 0);
  const kitPrice = Math.round(retail * (1 - kit.savingPct / 100) * 100) / 100;
  return { retail, kit: kitPrice, saving: Math.round((retail - kitPrice) * 100) / 100 };
}
