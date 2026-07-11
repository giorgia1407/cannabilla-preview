import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://cannabilla-preview.local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cannabilla — Cosmetica Naturale alla Canapa dei Monti Sibillini",
    template: "%s — Cannabilla",
  },
  description:
    "Cosmetica naturale italiana all'olio di semi di canapa e attivi botanici, nel cuore dei Monti Sibillini. Viso, corpo, solari, capelli e trattamenti. Made in Italy, cruelty-free.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Cannabilla — Cosmetica Naturale alla Canapa",
    description:
      "Cosmetici naturali all'olio di semi di canapa dai Monti Sibillini. Made in Italy, cruelty-free, senza parabeni.",
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#2D5F2B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body className="bg-bg font-body antialiased">{children}</body>
    </html>
  );
}
