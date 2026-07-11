/**
 * Cannabilla — logica del quiz della pelle (6 domande → routine consigliata).
 * Linguaggio cosmetico conforme (nessun termine medicale).
 */

import { bySlug, type CatalogProduct } from "./catalog";

export interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "skin",
    question: "Come si comporta la tua pelle nella maggior parte dei giorni?",
    options: [
      { value: "secca", label: "Secca, cerca nutrimento" },
      { value: "grassa", label: "Grassa, tende a lucidarsi" },
      { value: "mista", label: "Mista, cambia a seconda della zona" },
      { value: "sensibile", label: "Sensibile, si arrossa con facilità" },
      { value: "matura", label: "Matura, desidera più sostegno" },
    ],
  },
  {
    id: "concern",
    question: "Quale gesto vorresti aggiungere alla tua routine?",
    options: [
      { value: "idratazione", label: "Un po' più di idratazione" },
      { value: "imperfezioni", label: "Meno imperfezioni" },
      { value: "luminosita", label: "Più luminosità" },
      { value: "rossore", label: "Calmare i rossori" },
      { value: "segni", label: "Contrastare i segni del tempo" },
      { value: "protezione", label: "Proteggermi dal sole" },
    ],
  },
  {
    id: "time",
    question: "Quanto tempo vuoi dedicare al tuo rituale di bellezza?",
    options: [
      { value: "2", label: "2 minuti, il minimo indispensabile" },
      { value: "5", label: "5 minuti, il tempo giusto" },
      { value: "10", label: "10 minuti o più, mi piace prendermi cura di me" },
    ],
  },
  {
    id: "texture",
    question: "Che coccola preferisce la tua pelle?",
    options: [
      { value: "leggere", label: "Texture leggere e fluide" },
      { value: "ricche", label: "Texture ricche e avvolgenti" },
      { value: "nopref", label: "Mi lascio guidare" },
    ],
  },
  {
    id: "spf",
    question: "La protezione solare fa già parte dei tuoi gesti quotidiani?",
    options: [
      { value: "si", label: "Sì, sempre" },
      { value: "no", label: "No, non ancora" },
      { value: "avolte", label: "Qualche volta" },
    ],
  },
  {
    id: "budget",
    question: "Quanto vorresti dedicare, ogni mese, al tuo rituale naturale?",
    options: [
      { value: "low", label: "Sotto €30" },
      { value: "mid", label: "€30 - 60" },
      { value: "high", label: "€60 - 100" },
      { value: "top", label: "Oltre €100" },
    ],
  },
];

export type QuizAnswers = Record<string, string>;

export interface RoutineResult {
  morning: { slug: string; why: string }[];
  evening: { slug: string; why: string }[];
  booster?: { slug: string; why: string };
  spf: { slug: string; why: string };
  intro: string;
}

function moisturizerFor(skin: string): string {
  if (skin === "secca" || skin === "matura") return "melabilla-crema-viso-idratante-alla-mela-rosa";
  return "crema-viso-idratante";
}

function serumFor(skin: string, concern: string): { slug: string; why: string } {
  if (concern === "imperfezioni")
    return { slug: "im-perfect-siero-viso-anti-imperfezioni", why: "Riequilibra la pelle mista e affina la texture con la niacinamide." };
  if (concern === "rossore")
    return { slug: "escar-glow-siero-viso-ultra-idratante", why: "Idrata in profondità e dona comfort alle pelli che tendono al rossore." };
  if (concern === "luminosita")
    return { slug: "escar-glow-siero-viso-ultra-idratante", why: "Rimpolpa e illumina il colorito con acido ialuronico." };
  if (concern === "segni" || skin === "matura")
    return { slug: "golden-hemp-siero-viso-idratante", why: "Olio viso concentrato che nutre e migliora l'elasticità della pelle." };
  if (skin === "secca")
    return { slug: "golden-hemp-siero-viso-idratante", why: "Nutrimento intenso con il 60% di olio di canapa per pelli secche." };
  return { slug: "escar-glow-siero-viso-ultra-idratante", why: "Idratazione rimpolpante adatta alla tua pelle." };
}

export function computeRoutine(a: QuizAnswers): RoutineResult {
  const skin = a.skin ?? "mista";
  const concern = a.concern ?? "idratazione";
  const serum = serumFor(skin, concern);
  const moist = moisturizerFor(skin);

  const morning: { slug: string; why: string }[] = [
    { slug: "mousse-detergente-delicata", why: "Deterge delicatamente per iniziare la giornata con la pelle fresca." },
    serum,
    { slug: moist, why: "Idrata e mantiene la pelle morbida sotto il trucco." },
  ];
  const evening: { slug: string; why: string }[] = [
    { slug: "mousse-detergente-delicata", why: "Rimuove impurità e residui accumulati durante la giornata." },
    serum,
    { slug: moist, why: "Nutre e ripristina il comfort della pelle durante la notte." },
  ];

  // Struccante prima se dedica più tempo
  if (a.time === "10") {
    evening.unshift({ slug: "make-up-remover-bifasico", why: "Scioglie il make-up più resistente prima della detersione." });
  }

  // Booster settimanale
  let booster: { slug: string; why: string } | undefined;
  if (concern === "luminosita" || concern === "imperfezioni") {
    booster = { slug: "scrub-viso-100-naturale", why: "1-2 volte a settimana rivela una pelle più luminosa e levigata." };
  } else if (skin === "secca" || skin === "matura") {
    booster = { slug: "golden-hemp-siero-viso-idratante", why: "Qualche goccia la sera per un nutrimento extra nelle giornate più fredde." };
  }

  const spf = {
    slug: "crema-viso-solare-spf-50",
    why:
      a.spf === "si"
        ? "Continua a proteggere la pelle ogni giorno: è il gesto anti-età più importante."
        : "Aggiungila alla tua routine del mattino: protegge la pelle dai raggi UV.",
  };

  return {
    morning,
    evening,
    booster,
    spf,
    intro: `Ecco un piccolo rituale pensato su misura per la tua pelle ${skin}, con un'attenzione speciale a ${concern === "protezione" ? "protezione solare" : concern}.`,
  };
}

export function resolve(slug: string): CatalogProduct | undefined {
  return bySlug(slug);
}
