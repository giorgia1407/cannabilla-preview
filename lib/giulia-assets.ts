/**
 * Cannabilla — asset del persona "Giulia" (consulente AI).
 *
 * Il ritratto è stato selezionato con ispezione visiva (non solo HTTP 200) su
 * Unsplash e scaricato localmente in /public/brand. La sorgente Unsplash resta
 * annotata per attribuzione/sostituzione futura con una foto reale del cliente.
 */

export const GIULIA = {
  name: "Giulia",
  role: "Consulente Cannabilla",
  /** Ritratto locale 800×800 (header/teaser grandi). */
  portrait: "/brand/giulia-portrait.jpg",
  /** Avatar locale 200×200 (bolla persistente, header drawer). */
  avatar: "/brand/giulia-avatar.jpg",
  alt: "Giulia, consulente skincare Cannabilla, con un caloroso sorriso naturale",
  /** Sorgente originale (per attribuzione / sostituzione). */
  source: {
    provider: "Unsplash",
    photoId: "1662850886700-4ec19bd30d11",
    url: "https://images.unsplash.com/photo-1662850886700-4ec19bd30d11?auto=format&fit=crop&w=800&q=80",
  },
} as const;
