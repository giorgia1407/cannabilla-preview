import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/enoteca/SiteChrome";
import { ChevronRight } from "@/components/enoteca/Icons";
import { SHOP_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chi Siamo — Cannabilla",
  description:
    "Cannabilla: cosmetici naturali all'olio di semi di canapa, formulati e prodotti nel cuore dei Monti Sibillini ad Amandola. Made in Italy, cruelty-free, senza parabeni.",
  alternates: { canonical: "/chi-siamo" },
};

export const dynamic = "force-static";

export default function ChiSiamoPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <nav
          className="flex items-center gap-1.5 text-[12.5px] text-text-muted"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary-hover">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-text">Chi Siamo</span>
        </nav>

        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[34px] font-bold text-text md:text-[44px]">
          Chi Siamo
        </h1>
        <p className="mt-2 text-[15px] font-medium text-primary-hover">
          {SHOP_INFO.tagline}
        </p>

        <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-text md:text-[17px]">
          <p>
            Cannabilla nasce nel cuore dei Monti Sibillini, ad Amandola, dalla passione per
            la cosmesi naturale e dalla ricchezza dell&rsquo;olio di semi di canapa. Ogni nostra
            formula è studiata e prodotta in Italia, unendo attivi vegetali e la naturale
            concentrazione di omega 3 e 6 della canapa: dalla cura del viso ai trattamenti
            per corpo e mani, dai solari alla linea capelli e barba, fino agli estratti
            Hempilla e al benessere quotidiano.
          </p>
          <p>
            Crediamo che dietro ogni prodotto ci sia un territorio, una materia prima
            preziosa e un lavoro attento — ed è per questo che tutti i nostri cosmetici sono
            Made in Italy, cruelty-free, senza parabeni e regolarmente registrati CPNP. Che
            tu stia cercando un rituale per la pelle sensibile, un&rsquo;idea regalo o un gesto di
            cura quotidiana, i nostri consulenti sono qui per guidarti senza fretta.
          </p>
          <p>
            Scrivici su WhatsApp o ordina online: ti aiutiamo a scegliere, prepariamo il tuo
            ordine e lo spediamo in tutta Italia, con consegna gratuita sopra i 25 euro.
            Perché la bellezza, prima ancora di un prodotto, è cura naturale da condividere.
          </p>
        </div>

        {/* Quick facts pulled from the single source of truth in lib/constants. */}
        <dl className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-2">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-wide text-text-muted">
              Dove siamo
            </dt>
            <dd className="mt-1 text-[15px] text-text">{SHOP_INFO.address}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-wide text-text-muted">
              Orari
            </dt>
            <dd className="mt-1 text-[15px] text-text">{SHOP_INFO.hours}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-wide text-text-muted">
              Telefono
            </dt>
            <dd className="mt-1 text-[15px] text-text">
              <a href={SHOP_INFO.phoneHref} className="hover:text-primary-hover">
                {SHOP_INFO.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-wide text-text-muted">
              Consegna
            </dt>
            <dd className="mt-1 text-[15px] text-text">{SHOP_INFO.deliveryZone}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/categoria/viso"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold text-text transition-colors hover:bg-primary-hover"
          >
            Esplora il catalogo
          </Link>
          <Link
            href="/contatti"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-border px-7 text-[15px] font-semibold text-text transition-colors hover:border-primary hover:text-primary-hover"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </SiteChrome>
  );
}
