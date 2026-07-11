import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Recycle, Package, Factory, Sprout } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Eyebrow, Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sostenibilità",
  description:
    "L'impegno ambientale di Cannabilla: packaging riciclabile, riciclo, produzione on-demand, filiera corta nei Monti Sibillini e riduzione degli sprechi.",
};

export const dynamic = "force-static";

const CARDS = [
  {
    Icon: Package,
    t: "Packaging riciclabile",
    d: "Flaconi in vetro e plastica riciclabili, con etichette essenziali e confezioni esterne ridotte al minimo.",
  },
  {
    Icon: Recycle,
    t: "Riciclo",
    d: "Materiali selezionati per essere facilmente conferiti nella raccolta differenziata, con indicazioni chiare in etichetta.",
  },
  {
    Icon: Factory,
    t: "Produzione on-demand",
    d: "Produciamo in base alla domanda reale, per evitare eccedenze di magazzino e limitare gli sprechi.",
  },
  {
    Icon: Sprout,
    t: "Filiera corta",
    d: "Formulazione e produzione vicine al territorio dei Sibillini, per accorciare i trasporti e valorizzare il locale.",
  },
];

export default function SostenibilitaPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[46vh] w-full">
          <Photo
            imgKey="forest2"
            alt="Bosco rigoglioso, simbolo dell'impegno ambientale di Cannabilla"
            fill
            priority
            w={1800}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 py-10 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Sostenibilità" }]} />
              </div>
              <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.08] sm:text-5xl">
                Naturale, anche nel gesto
              </h1>
              <p className="mt-4 max-w-xl text-white/90 sm:text-lg">
                La sostenibilità non è un dettaglio: è il modo in cui scegliamo i materiali, produciamo e riduciamo ciò
                che non serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Il nostro impegno"
            title="Scelte concrete, ogni giorno"
            subtitle="Quattro impegni che partono dai materiali e arrivano alla filiera."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <c.Icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-lg text-text">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Packaging & riciclo editorial */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
            <Photo
              imgKey="botanical1"
              alt="Materiali naturali e packaging essenziale Cannabilla"
              fill
              w={1200}
              sizes="(max-width:1024px) 100vw, 600px"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Packaging e riciclo</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">
              Meno superfluo, più materiale utile
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
              <p>
                Scegliamo il vetro e la plastica riciclabili perché durano, proteggono la formula e possono avere una
                seconda vita. Riduciamo gli astucci esterni e preferiamo etichette essenziali, così da limitare la
                quantità di materiale che finisce nei rifiuti.
              </p>
              <p>
                Per rendere il riciclo davvero semplice, indichiamo come separare i componenti e conferirli nella
                raccolta differenziata. Un gesto piccolo, che moltiplicato per ogni flacone fa la differenza.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Produzione on-demand & filiera corta */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <Eyebrow>Produzione on-demand e filiera corta</Eyebrow>
          <h2 className="mt-3 font-display text-2xl leading-tight text-text sm:text-3xl">
            Produrre il giusto, vicino a casa
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
            <p>
              Preferiamo produrre in base alla domanda reale, evitando grandi scorte destinate a invecchiare in
              magazzino. Questo approccio ci permette di offrire prodotti sempre freschi e di contenere gli sprechi lungo
              tutta la catena.
            </p>
            <p>
              La nostra filiera resta corta e legata al territorio dei Monti Sibillini: meno trasporti, relazioni dirette
              con chi lavora insieme a noi e maggiore controllo su ogni fase. È un modo di fare cosmetica più lento, ma
              più consapevole.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Riduzione sprechi */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Reveal>
            <Eyebrow>Riduzione degli sprechi</Eyebrow>
            <h2 className="mt-3 font-display text-2xl leading-tight text-text sm:text-3xl">
              Formule pensate per durare
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
              <p>
                Ridurre gli sprechi significa progettare bene fin dall'inizio: formule concentrate, formati sensati e
                prodotti pensati per essere usati fino in fondo. Cruelty-free e senza parabeni, i nostri cosmetici
                nascono per rispettare la pelle e l'ambiente allo stesso tempo.
              </p>
              <p>
                È un impegno che portiamo avanti passo dopo passo, migliorando dove possiamo e restando fedeli a
                un'idea semplice: prendersi cura della pelle senza dimenticare il pianeta.
              </p>
              <p>
                Sappiamo che la strada verso una cosmetica davvero sostenibile è lunga e fatta di scelte quotidiane. Per
                questo preferiamo obiettivi concreti a promesse rumorose: un materiale in meno, un trasporto più corto,
                un formato pensato meglio. Piccoli passi che, sommati, costruiscono un modo di lavorare più rispettoso e
                duraturo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA back to chi-siamo */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Un progetto con radici precise</h2>
          <p className="mt-4 text-white/85">
            La nostra idea di sostenibilità nasce dalla stessa storia che ha dato vita al brand. Scopri chi siamo e da
            dove veniamo.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/chi-siamo" className="btn btn-light btn-lg">
              La nostra storia <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
