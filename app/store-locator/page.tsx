import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Breadcrumb } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { StoreLocatorSearch } from "@/components/StoreLocatorSearch";
import { MapPin, Store } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Trova un rivenditore",
  description:
    "Cerca i punti vendita che propongono i cosmetici Cannabilla alla canapa. Elenco dimostrativo dei rivenditori sul territorio.",
};

export default function StoreLocatorPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trova un rivenditore" }]} />
          <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">Trova un rivenditore</h1>
          <p className="mt-3 max-w-2xl text-text-muted">
            Cerca i punti vendita che propongono i cosmetici Cannabilla vicino a te. Inserisci la tua città o il CAP per
            iniziare.
          </p>
        </div>
      </section>

      {/* Search + list */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Map placeholder */}
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Photo
                imgKey="valley1"
                alt="Mappa indicativa dei rivenditori Cannabilla"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-text">
                  <MapPin size={16} className="text-primary" /> Mappa dimostrativa
                </span>
              </div>
            </div>
          </Reveal>

          {/* Search + reseller list */}
          <Reveal delay={0.1}>
            <h2 className="flex items-center gap-2 font-display text-2xl text-text">
              <Store size={22} className="text-primary" /> Rivenditori
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Questo è un elenco dimostrativo: i punti vendita mostrati sono di esempio e la ricerca reale sarà attivata a
              breve.
            </p>
            <div className="mt-6">
              <StoreLocatorSearch showList={true} />
            </div>
          </Reveal>
        </div>

        {/* CTA to rivenditori */}
        <Reveal className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
          <h2 className="font-display text-2xl text-text">Hai un'attività commerciale?</h2>
          <p className="mx-auto mt-2 max-w-lg text-text-muted">
            Entra a far parte della rete di rivenditori Cannabilla e porta la cosmetica naturale alla canapa nel tuo
            punto vendita.
          </p>
          <Link href="/rivenditori" className="btn btn-primary mt-6 inline-flex">
            Diventa rivenditore
          </Link>
        </Reveal>
      </section>
    </SiteChrome>
  );
}
