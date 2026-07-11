import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Eyebrow, Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "La storia di Cannabilla: cosmetica naturale alla canapa nata nei Monti Sibillini. Filosofia, valori e le tappe di un progetto Made in Italy.",
};

export const dynamic = "force-static";

const VALORI = [
  {
    t: "Made in Italy",
    d: "Formuliamo e produciamo in Italia, nel cuore dell'Appennino centrale, seguendo ogni fase con cura artigianale.",
  },
  {
    t: "Cruelty-free",
    d: "Nessun test sugli animali. I nostri cosmetici sono pensati per la pelle delle persone e per il rispetto di ogni essere vivente.",
  },
  {
    t: "Packaging riciclabile",
    d: "Flaconi in vetro e plastica riciclabili, etichette essenziali e confezioni ridotte all'indispensabile.",
  },
  {
    t: "Registrazione CPNP",
    d: "Ogni formula è notificata al Portale Cosmetici Europeo (CPNP), a garanzia di conformità e trasparenza.",
  },
];

const MILESTONES = [
  {
    anno: "2019",
    t: "L'idea nei Sibillini",
    d: "Da una passione per la botanica di montagna e per la canapa nasce l'intuizione di una cosmetica pulita e locale. Contenuto di esempio.",
  },
  {
    anno: "2021",
    t: "Le prime formule",
    d: "Debuttano i primi sieri e le creme viso all'olio di semi di canapa, sviluppati insieme a un laboratorio italiano. Contenuto di esempio.",
  },
  {
    anno: "2023",
    t: "La linea completa",
    d: "La gamma si allarga a viso, corpo, solari e capelli, con una filiera corta e un packaging ripensato. Contenuto di esempio.",
  },
  {
    anno: "2025",
    t: "Oltre i confini",
    d: "Cannabilla arriva nelle profumerie e nelle botteghe di tutta Italia, restando fedele alle proprie origini. Contenuto di esempio.",
  },
];

export default function ChiSiamoPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[52vh] w-full">
          <Photo
            imgKey="wellness1"
            alt="Rituale di benessere con cosmetica naturale alla canapa"
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
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Chi siamo" }]} />
              </div>
              <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.08] sm:text-5xl">
                La cura nasce dalla natura, e dalle nostre montagne.
              </h1>
              <p className="mt-4 max-w-xl text-white/90 sm:text-lg">
                Cannabilla è cosmetica naturale alla canapa, pensata nel cuore dei Monti Sibillini e formulata con
                rispetto per la pelle e per l'ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / nascita del brand */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <Eyebrow>La nascita del brand</Eyebrow>
          <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">
            Da una montagna incontaminata, un'idea semplice
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-text-muted">
            <p>
              Cannabilla nasce da un desiderio preciso: portare nella cura quotidiana della pelle la generosità della
              natura appenninica. Tutto comincia tra i prati fioriti e i boschi dei Monti Sibillini, dove la canapa
              cresce robusta e l'aria è ancora limpida. È lì che abbiamo capito che un cosmetico poteva essere allo
              stesso tempo efficace, delicato e profondamente legato al suo territorio.
            </p>
            <p>
              Abbiamo scelto la canapa perché è una pianta preziosa e sorprendente: il suo olio di semi è ricco di acidi
              grassi essenziali e regala alla pelle una sensazione di comfort immediato. Attorno a questo ingrediente
              abbiamo costruito una gamma completa, mettendo insieme sapienza artigianale, ricerca cosmetica e
              ingredienti botanici raccolti dalla tradizione locale.
            </p>
            <p>
              Non volevamo l'ennesima linea di prodotti anonimi. Volevamo un progetto con un'anima e un luogo di
              provenienza riconoscibile — una cosmetica che racconta le persone che la creano e le montagne che la
              ispirano.
            </p>
            <p>
              Cannabilla è cresciuta così, un passo alla volta: ascoltando chi prova i nostri prodotti, affinando le
              formule e restando fedeli a un'idea di bellezza che non ha bisogno di gridare. Ogni gesto quotidiano — la
              detersione del mattino, l'idratazione della sera — può diventare un piccolo rituale di benessere, semplice
              e sincero. È questo che desideriamo portare nella vita delle persone: la sensazione di prendersi cura di
              sé senza rinunciare al rispetto per ciò che ci circonda.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Filosofia — split image + text */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
            <Photo
              imgKey="botanical2"
              alt="Attivi botanici e olio di canapa nelle formule Cannabilla"
              fill
              w={1200}
              sizes="(max-width:1024px) 100vw, 600px"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>La nostra filosofia</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">
              Natura e canapa, in equilibrio
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
              <p>
                Crediamo in una cosmetica sincera, che parte dalla pianta e arriva alla pelle con il minor numero di
                passaggi possibile. Ogni formula nasce per fare bene una cosa: nutrire, idratare, proteggere. Nulla di
                superfluo, nessuna promessa che non possiamo mantenere.
              </p>
              <p>
                La canapa è il nostro filo conduttore, ma non lavora mai da sola. La affianchiamo ad attivi botanici
                selezionati — iperico, calendula, malva — scelti per la loro delicatezza e per la loro storia nel
                territorio dei Sibillini. Il risultato è una cosmetica naturale che rispetta i tempi della pelle e non
                forza mai la mano.
              </p>
              <p>
                Delicatezza, trasparenza e coerenza sono le tre parole che ci accompagnano ogni giorno. Delicatezza
                nelle texture, pensate per adattarsi anche alla pelle più sensibile. Trasparenza nelle liste
                ingredienti, che vogliamo leggibili e comprensibili. Coerenza tra ciò che diciamo e ciò che facciamo:
                dalla scelta delle materie prime al modo in cui confezioniamo e spediamo i prodotti, nulla è lasciato al
                caso.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* I valori */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Quello in cui crediamo"
            title="I nostri valori"
            subtitle="Quattro impegni concreti che guidano ogni scelta, dalla formula al flacone."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALORI.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-white p-6">
                <h3 className="font-display text-lg text-text">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline / milestones */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Il nostro percorso"
              title="Le tappe di Cannabilla"
              subtitle="Alcune date che raccontano la nostra crescita. Contenuto di esempio."
            />
          </Reveal>
          <div className="mt-10 space-y-6">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.anno} delay={i * 0.05}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary font-display text-sm text-white">
                      {m.anno}
                    </span>
                    {i < MILESTONES.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-lg text-text">{m.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">{m.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Continua a conoscere Cannabilla
          </h2>
          <p className="mt-4 text-white/85">
            Scopri il territorio da cui tutto è nato, oppure lasciati guidare tra i nostri cosmetici viso alla canapa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/monti-sibillini" className="btn btn-light btn-lg">
              I Monti Sibillini
            </Link>
            <Link href="/prodotti" className="btn btn-secondary btn-lg">
              Scopri i prodotti <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
