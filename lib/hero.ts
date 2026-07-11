/**
 * Cannabilla — dati dello slideshow hero (4 scene fornite dal cliente).
 *
 * Le immagini sono WebP LOCALI compresse in `public/hero/` (desktop landscape +
 * mobile portrait, 3 misure ciascuna: full / fallback / blur). Il blur è inline
 * base64 (~24px) per un placeholder blur-up a latenza zero. Ogni slide ha testo,
 * posizionamento e scrim propri, calibrati sulla composizione della foto.
 */

export type DesktopTextPos = "left-center" | "right-center";
export type MobileTextPos = "bottom-center";
export interface HeroCta {
  label: string;
  href: string;
}

/**
 * Una slide dell'hero. I campi di testo sono NULLABLE: una slide senza headline
 * (es. la 1, sola immagine) non renderizza né scrim né blocco testo.
 */
export interface HeroSlide {
  id: number;
  eyebrow: string | null;
  headline: string | null;
  subheadline: string | null;
  primaryCta: HeroCta | null;
  secondaryCta: HeroCta | null;
  trustLine: string | null;
  alt: string;
  desktopImage: string;
  desktopFallback: string;
  desktopBlur: string;
  mobileImage: string;
  mobileFallback: string;
  mobileBlur: string;
  /** null se la slide non ha testo. */
  textPosition: { desktop: DesktopTextPos; mobile: MobileTextPos } | null;
  /** null se la slide non ha scrim. */
  scrimGradient: { desktop: string; mobile: string } | null;
  /** object-position per mantenere il soggetto in frame (Option A). */
  objectPosition: { desktop: string; mobile: string };
}

const D1_BLUR =
  "data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAACwBACdASoYAA4APt1apkyopSOiMAgBEBuJYgCdMoR4N1gAJ4h6qcPRe4X1UDgAAP6JyHC/IloeypDTudWsHbFGfJHXAp+wkfv7P8+zPcJqt3j+MVdLtwS2pQ6zfh6rA8eN6ovi/r9m/AGrVRPbFu7Ufa5AVb1dd7n8bys/uPkZU1xsP7R1ij2PIVf9TQk/CvaQNquVEm5vBKAQjWGphp7trQXLGDG6+igJhYh+pakuV1S2CynN8v5vDxunfRAT3RytBAMg9nbMYP95kvk8AAAA";
const D2_BLUR =
  "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAAAwBACdASoYAA4APt1cp0yopSOiMAgBEBuJZACdMoMpAEmQqSR4d6pcbEAA/vN0ZHPeEbQHFTpROHZRV7+gT4TzxSTXilAzx/FJ60srDqTqFa/myVo4Llr2zlxYOX0nle25gu4HkEUEregQErctKVfunczOuA0XswjxM3MLmXyGSB42BAgAAA==";
const D3_BLUR =
  "data:image/webp;base64,UklGRrYAAABXRUJQVlA4IKoAAACwBACdASoYAA4APt1cpkyopSOiMAgBEBuJagCdMoR3AdDRB1Hx4ujv0OSOkjMAAP7vwrTbrDUzZF9r57w9PSJ4/utWOLmaR9UovAeWpqPjrSi3wQsbFeOwseJQ9vFAyIrest/mTEj6LITv4F+73uqLm/s+n+EzvQX8lHT0dJpWdELRGRmXUaqNCEErUpAqUvmSY2hYgkREedPBruw6vMBamA3WN69ZoW1QAA==";
const D4_BLUR =
  "data:image/webp;base64,UklGRrYAAABXRUJQVlA4IKoAAADQAwCdASoYAA4APt1apkyopSOiMAgBEBuJQBOmUAS1QaZH28qU/wAA/tDPbMA6gzdM8hLElphk9XzTBqyYngw8K06VnWiRDhUL5Yr7efASK9yS7htjvvOIfukVV/jkF9FAM/SFhgS151KTu8u8HP6zgmpx6pTnbAT5Pqm9ilXkdNi1p+izd8kqw3UZ6/G6XSLDFF3GZUdymEuZMcVVdQmHgeOYXgE4KQAAAA==";
const M1_BLUR =
  "data:image/webp;base64,UklGRvgAAABXRUJQVlA4IOwAAAAQBQCdASoQABwAPt1cpkyopSOiMAgBEBuJZACdMoMh3omqvIdtoBgAnDQc4sGatG6IAP6HcPOXvZiGXw6pp+LKt6BLBkWn66MMh78xqHUsXNkrAsT8m5J8+JK6z53JbGOqNDwPzSxoI+Lar2VUnoZrDtUGPnae7IZLGtmt7rtwYTKo3zP7yQDYBm7pxTThO8SxUB6DEuW397G+zf4hrbTLoQTyh3hZevFj7RfGucH1dtOrwxCQh6oX/RY1M7w7hvJ0RFOHvvVyD69z22Wfj7qm/Ikw27vQOFCg0/BwAR7YFKhrSwyjHShL115wAA==";
const M2_BLUR =
  "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAADwAwCdASoQABwAPt1cpkyopSOiMAgBEBuJQBOgDSv1soKo5kqomh2EAP79QISSmJR4mf+DotW4vlitQN4withUqnudqfjrKRua7z4U46JRXoy+8q/bsCqoQIl3SXT41C3gEPNsy20zyUqZYVv/go4noj7x3qYx+Fw406q/1nqp8iYbq96oAAA==";
const M3_BLUR =
  "data:image/webp;base64,UklGRrAAAABXRUJQVlA4IKQAAABwBACdASoQABwAPt1apkyopSOiMAgBEBuJQBOmUAFI08oGC6ul4xzTH1DhUAD++Zed6uGW/yileKcWf8EYlGq8XCy+IqYfNpCH5nglKeqzSaOfAjdKw/1EWbar2aDg94WGTdnUBwBHW1GrYtcAdpRr4vGeqjEAN7Wq+BV64hje7OcdI+IQ+G18Rijw7C6VpN8AChzCo2IRiZGX07aCbqgVHyAAAA==";
const M4_BLUR =
  "data:image/webp;base64,UklGRtoAAABXRUJQVlA4IM4AAADQBACdASoQABwAPt1cpkyopSOiMAgBEBuJYgCw7f+8vgRNZI3bmwtcAKa36GAMAAD+5OqxdbE97SNNM2axmJb+qz5kiW8xtqvy09VCdd0JgFYNHKVRjwFblFHE/7Cf+pZd2/5FOzl5HeArnv+iE92Cm/brXim6IcsUe8VkpGbmFL6AbPaS4f+iLkurbP+T9180DMnt7TK1is6JZwQ24Sj5H5GGG6WiMLR+zXyCyFae+pMrYCyfVrDU204wwZrK1nVq6g345Otd905ABB+AAA=";

export const HERO_SLIDES: HeroSlide[] = [
  {
    // Slide 1 — collage crema viso: SOLA IMMAGINE, nessun testo/scrim.
    id: 1,
    eyebrow: null,
    headline: null,
    subheadline: null,
    primaryCta: null,
    secondaryCta: null,
    trustLine: null,
    alt: "Donne che applicano cosmetici naturali alla canapa Cannabilla",
    desktopImage: "/hero/hero-desktop-1-2400.webp",
    desktopFallback: "/hero/hero-desktop-1-1600.webp",
    desktopBlur: D1_BLUR,
    mobileImage: "/hero/hero-mobile-1-1080.webp",
    mobileFallback: "/hero/hero-mobile-1-720.webp",
    mobileBlur: M1_BLUR,
    textPosition: null,
    scrimGradient: null,
    objectPosition: { desktop: "center center", mobile: "center center" },
  },
  {
    // Slide 2 — prato Sibillini (3 donne a destra): STATEMENT PRINCIPALE, testo a sinistra.
    id: 2,
    eyebrow: "Cosmesi Naturale Italiana",
    headline: "La natura che si prende cura della tua pelle.",
    subheadline:
      "Cosmetici formulati con olio di semi di canapa e attivi botanici, nel cuore dei Monti Sibillini.",
    primaryCta: { label: "Scopri i prodotti", href: "/prodotti" },
    secondaryCta: { label: "Fai il quiz skincare", href: "/routine-quiz" },
    trustLine: "Made in Italy · Cruelty-Free · Packaging Riciclabile",
    alt: "Tre donne tra i prati fioriti dei Monti Sibillini all'ora dorata",
    desktopImage: "/hero/hero-desktop-2-2400.webp",
    desktopFallback: "/hero/hero-desktop-2-1600.webp",
    desktopBlur: D2_BLUR,
    mobileImage: "/hero/hero-mobile-2-1080.webp",
    mobileFallback: "/hero/hero-mobile-2-720.webp",
    mobileBlur: M2_BLUR,
    textPosition: { desktop: "left-center", mobile: "bottom-center" },
    scrimGradient: {
      desktop: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
      mobile: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 55%, transparent 90%)",
    },
    objectPosition: { desktop: "60% center", mobile: "center center" },
  },
  {
    // Slide 3 — siero golden hour (soggetto a destra): testo a sinistra.
    id: 3,
    eyebrow: "Rituale di Bellezza",
    headline: "Rituali quotidiani, risultati autentici.",
    subheadline: "Sieri, creme e trattamenti naturali per una routine su misura.",
    primaryCta: { label: "Scopri i sieri", href: "/categoria/viso" },
    secondaryCta: { label: "Fai il quiz skincare", href: "/routine-quiz" },
    trustLine: "Formule 100% naturali · Made in Italy",
    alt: "Donna che applica un siero viso naturale nella luce dorata del tramonto",
    desktopImage: "/hero/hero-desktop-3-2400.webp",
    desktopFallback: "/hero/hero-desktop-3-1600.webp",
    desktopBlur: D3_BLUR,
    mobileImage: "/hero/hero-mobile-3-1080.webp",
    mobileFallback: "/hero/hero-mobile-3-720.webp",
    mobileBlur: M3_BLUR,
    textPosition: { desktop: "left-center", mobile: "bottom-center" },
    scrimGradient: {
      desktop: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 35%, transparent 60%)",
      mobile: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 50%, transparent 85%)",
    },
    objectPosition: { desktop: "70% center", mobile: "center center" },
  },
  {
    // Slide 4 — collage serale a lume di candela: testo a DESTRA, scrim dark a destra.
    id: 4,
    eyebrow: "Coccole Serali",
    headline: "Il tempo per te, ogni sera.",
    subheadline: "Detersione, sieri, rituali del sonno. Prenditi cura di te con calma.",
    primaryCta: { label: "Scopri le routine", href: "/routines" },
    secondaryCta: { label: "Scopri i prodotti", href: "/prodotti" },
    trustLine: "Rituale naturale · Piacere autentico",
    alt: "Rituale serale di bellezza a lume di candela con cosmetici naturali Cannabilla",
    desktopImage: "/hero/hero-desktop-4-2400.webp",
    desktopFallback: "/hero/hero-desktop-4-1600.webp",
    desktopBlur: D4_BLUR,
    mobileImage: "/hero/hero-mobile-4-1080.webp",
    mobileFallback: "/hero/hero-mobile-4-720.webp",
    mobileBlur: M4_BLUR,
    textPosition: { desktop: "right-center", mobile: "bottom-center" },
    scrimGradient: {
      desktop: "linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)",
      mobile: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 55%, transparent 90%)",
    },
    objectPosition: { desktop: "center center", mobile: "center center" },
  },
];
