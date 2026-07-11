/**
 * Cannabilla — Routine (Phase 1a). Sequenze di prodotti pensate come rituali
 * quotidiani (mattina / sera / completa), concettualmente distinte dai Kit
 * (bundle fisici in data/kits.ts). Ogni routine è un percorso passo dopo
 * passo tra prodotti già esistenti nel catalogo: nessun nuovo SKU, nessuno
 * sconto — solo un ordine di gesti consigliato.
 */

import { bySlug, type CatalogProduct } from "./catalog";
import { type ImgKey } from "@/lib/images";

export interface RoutineStep {
  slug: string;
  gesture: string;
}

export interface Routine {
  slug: string;
  name: string;
  /** Etichetta umana dell'esigenza principale a cui risponde la routine. */
  targetConcern: string;
  timeOfDay: "mattina" | "sera" | "completa";
  intro: string;
  steps: RoutineStep[];
  imgKey: ImgKey;
  rating: number;
  reviewCount: number;
}

export const ROUTINES: Routine[] = [
  {
    slug: "routine-mattina-idratante",
    name: "Routine Mattina Idratante",
    targetConcern: "Idratazione quotidiana",
    timeOfDay: "mattina",
    intro:
      "Il rituale giusto per iniziare la giornata: detersione, siero nutriente, crema idratante e protezione solare, in quattro gesti semplici prima di uscire di casa.",
    steps: [
      { slug: "mousse-detergente-delicata", gesture: "Deterge la pelle con delicatezza, senza seccarla." },
      { slug: "golden-hemp-siero-viso-idratante", gesture: "Applica qualche goccia di siero per nutrire in profondità." },
      { slug: "crema-viso-idratante", gesture: "Stendi la crema per un'idratazione leggera e duratura." },
      { slug: "crema-viso-solare-spf-50", gesture: "Completa con la protezione solare, ultimo gesto prima di uscire." },
    ],
    imgKey: "skincare1",
    rating: 4.8,
    reviewCount: 76,
  },
  {
    slug: "routine-sera-nutriente",
    name: "Routine Sera Nutriente",
    targetConcern: "Nutrimento notturno",
    timeOfDay: "sera",
    intro:
      "La sera è il momento del recupero: struccante bifasico, siero ultra-idratante, olio viso concentrato e crema, per una pelle nutrita al risveglio.",
    steps: [
      { slug: "make-up-remover-bifasico", gesture: "Rimuovi il trucco e le impurità della giornata." },
      { slug: "escar-glow-siero-viso-ultra-idratante", gesture: "Applica il siero ultra-idratante per rimpolpare la pelle." },
      { slug: "golden-hemp-siero-viso-idratante", gesture: "Nutri in profondità con l'olio viso concentrato alla canapa." },
      { slug: "crema-viso-idratante", gesture: "Chiudi la routine con la crema idratante, per risvegliarti con la pelle morbida." },
    ],
    imgKey: "skincare6",
    rating: 4.9,
    reviewCount: 94,
  },
  {
    slug: "routine-antieta-completa",
    name: "Routine Antietà Completa",
    targetConcern: "Pelle matura",
    timeOfDay: "completa",
    intro:
      "Un percorso in cinque passi pensato per la pelle matura: detersione delicata, sieri mirati, crema alla Mela Rosa dei Sibillini e protezione solare quotidiana.",
    steps: [
      { slug: "mousse-detergente-delicata", gesture: "Deterge delicatamente mattina e sera." },
      { slug: "escar-glow-siero-viso-ultra-idratante", gesture: "Rimpolpa la pelle con l'acido ialuronico." },
      { slug: "golden-hemp-siero-viso-idratante", gesture: "Nutri in profondità con l'olio viso concentrato alla canapa." },
      { slug: "melabilla-crema-viso-idratante-alla-mela-rosa", gesture: "Applica la crema antiossidante alla Mela Rosa dei Sibillini." },
      { slug: "crema-viso-solare-spf-50", gesture: "Proteggi la pelle con SPF 50 ogni mattina." },
    ],
    imgKey: "skincare2",
    rating: 4.9,
    reviewCount: 112,
  },
  {
    slug: "routine-pelle-sensibile",
    name: "Routine Pelle Sensibile",
    targetConcern: "Sensibilità e rossore",
    timeOfDay: "completa",
    intro:
      "Gesti delicati pensati per calmare la pelle sensibile: detersione dolce, idratazione quotidiana, olio di iperico lenitivo e protezione solare non aggressiva.",
    steps: [
      { slug: "mousse-detergente-delicata", gesture: "Deterge senza irritare la pelle sensibile." },
      { slug: "crema-viso-idratante", gesture: "Idrata quotidianamente con una texture leggera." },
      { slug: "olio-di-iperico-lenitivo-760499148", gesture: "Lenisci i rossori con l'olio di iperico dei Sibillini." },
      { slug: "crema-viso-solare-spf-50", gesture: "Proteggi la pelle sensibile con SPF 50." },
    ],
    imgKey: "wellness2",
    rating: 4.8,
    reviewCount: 58,
  },
  {
    slug: "routine-uomo-essenziale",
    name: "Routine Uomo Essenziale",
    targetConcern: "Cura maschile essenziale",
    timeOfDay: "completa",
    intro:
      "L'essenziale per la cura quotidiana: capelli, barba e viso in quattro gesti rapidi, con la delicatezza della canapa dei Monti Sibillini.",
    steps: [
      { slug: "hemp-oo-shampoo-delicato-e-nutriente", gesture: "Lava i capelli con lo shampoo delicato alla canapa." },
      { slug: "olio-barba-ammorbidente", gesture: "Ammorbidisci e disciplina la barba." },
      { slug: "mousse-detergente-delicata", gesture: "Deterge il viso in profondità." },
      { slug: "crema-viso-idratante", gesture: "Idrata per una pelle confortevole tutto il giorno." },
    ],
    imgKey: "mountain1",
    rating: 4.7,
    reviewCount: 43,
  },
];

export function routineBySlug(slug: string): Routine | undefined {
  return ROUTINES.find((r) => r.slug === slug);
}

export function routineProducts(routine: Routine): CatalogProduct[] {
  return routine.steps.map((s) => bySlug(s.slug)).filter((p): p is CatalogProduct => Boolean(p));
}
