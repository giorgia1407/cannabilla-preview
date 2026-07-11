import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Eyebrow, Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "I Monti Sibillini",
  description:
    "Il territorio che ispira Cannabilla: i Monti Sibillini, la loro biodiversità botanica e il legame con la canapa che dà vita alle nostre formule.",
};

export const dynamic = "force-static";

const BOTANICHE = [
  {
    n: "Iperico",
    d: "Fiore giallo dei pendii assolati, apprezzato da secoli per la sua natura lenitiva e per l'olio dorato che se ne ricava.",
  },
  {
    n: "Calendula",
    d: "Petali arancioni tra i più delicati per la pelle, simbolo di una cosmetica gentile e rispettosa.",
  },
  {
    n: "Malva",
    d: "Pianta umile e generosa, ricca di mucillagini che donano una sensazione di comfort e morbidezza.",
  },
  {
    n: "Mela Rosa dei Sibillini",
    d: "Antica varietà di melo che cresce solo qui, dal frutto profumato e ricco di sostanze antiossidanti.",
  },
];

export default function MontiSibilliniPage() {
  return (
    <SiteChrome>
      {/* Landscape hero */}
      <section className="relative">
        <div className="relative min-h-[64vh] w-full">
          <Photo
            imgKey="mountain1"
            alt="Vetta e prati dei Monti Sibillini all'alba"
            fill
            priority
            w={1800}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/30" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 py-12 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "I Monti Sibillini" }]} />
              </div>
              <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.08] sm:text-5xl">
                I Monti Sibillini, dove tutto ha inizio
              </h1>
              <p className="mt-4 max-w-xl text-white/90 sm:text-lg">
                Un massiccio dell'Appennino centrale fatto di creste, laghi e prati fioriti: è questo il paesaggio che
                ispira ogni formula Cannabilla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Il territorio */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <Eyebrow>Il territorio</Eyebrow>
          <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">
            Un paesaggio che detta il ritmo
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-text-muted">
            <p>
              I Monti Sibillini si innalzano tra Marche e Umbria come una lunga cresta azzurra, custodendo un parco
              nazionale tra i più suggestivi dell'Appennino. Qui il tempo scorre secondo i ritmi della natura: le
              stagioni disegnano il paesaggio, le fioriture accendono i prati in primavera e i faggeti si tingono d'oro
              in autunno.
            </p>
            <p>
              È un ambiente ancora integro, dove l'aria è pulita e l'acqua nasce limpida dalle sorgenti di alta quota.
              Questa purezza è il nostro punto di partenza: crediamo che una cosmetica naturale debba nascere da un
              luogo che rispetta e custodisce il proprio equilibrio.
            </p>
            <p>
              Camminare tra questi monti insegna la pazienza. Le cose belle qui non si affrettano: i fiori sbocciano
              quando è il momento, i frutti maturano con calma, la neve si ritira lentamente. Abbiamo scelto di portare
              questo stesso ritmo nel nostro lavoro, convinti che la cura autentica richieda tempo, attenzione e un
              profondo rispetto per la natura che ci ospita.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Gallery row */}
      <section className="mx-auto max-w-[1400px] px-4 pb-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
            <Photo
              imgKey="mountain3"
              alt="Creste e valli dei Monti Sibillini"
              fill
              w={900}
              sizes="(max-width:640px) 100vw, 33vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.05} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
            <Photo
              imgKey="valley1"
              alt="Valle fiorita ai piedi dei Sibillini"
              fill
              w={900}
              sizes="(max-width:640px) 100vw, 33vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
            <Photo
              imgKey="forest1"
              alt="Bosco e vegetazione dei Monti Sibillini"
              fill
              w={900}
              sizes="(max-width:640px) 100vw, 33vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* La biodiversità botanica */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="La biodiversità botanica"
              title="La ricchezza dei prati fioriti"
              subtitle="I Sibillini custodiscono centinaia di specie vegetali. Alcune hanno una storia speciale con la pelle."
            />
          </Reveal>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal className="mt-4 space-y-4 leading-relaxed text-text-muted">
              <p>
                La varietà botanica di questo territorio è straordinaria: praterie d'altitudine, radure e boschi
                ospitano una moltitudine di fiori ed erbe spontanee. Molte di queste piante fanno parte della
                tradizione locale e da generazioni accompagnano i gesti di cura più semplici.
              </p>
              <p>
                Da questa eredità nasce la nostra selezione di attivi botanici. Li scegliamo per la loro delicatezza e
                per il modo in cui dialogano con la pelle, mantenendo sempre un'attenzione particolare all'origine e
                alla stagionalità.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {BOTANICHE.map((b) => (
                  <li key={b.n} className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-display text-base text-text">{b.n}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{b.d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Il legame con la canapa */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
            <Photo
              imgKey="field1"
              alt="Coltivazione di canapa nel territorio dei Sibillini"
              fill
              w={1200}
              sizes="(max-width:1024px) 100vw, 600px"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Il legame con la canapa</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">
              Una pianta di casa
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
              <p>
                La canapa affonda le sue radici nella storia agricola dell'Appennino: è una pianta rustica, capace di
                crescere con pochissime cure e di restituire un olio di semi prezioso. Per noi rappresenta il ponte
                naturale tra il territorio e la cosmetica.
              </p>
              <p>
                L'olio di semi di canapa è ricco di acidi grassi essenziali e regala alla pelle un comfort immediato.
                Metterlo al centro delle nostre formule significa valorizzare una risorsa locale e trasformarla in un
                gesto di cura quotidiano.
              </p>
              <p>
                Coltivare e lavorare la canapa vicino a dove nasce ci permette di ridurre i trasporti e di seguire da
                vicino ogni fase. È il nostro modo di chiudere il cerchio: dalla terra dei Sibillini al flacone, con la
                minor distanza possibile e la massima trasparenza.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* La promessa */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <Eyebrow>La nostra promessa</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">
              Portare la montagna nella tua routine
            </h2>
            <p className="mt-6 leading-relaxed text-text-muted">
              Ogni prodotto Cannabilla custodisce un frammento di questo territorio: la sua purezza, il suo ritmo lento,
              il suo rispetto per l'ambiente. È la promessa che facciamo alla nostra terra e alla tua pelle — una
              cosmetica naturale, sincera e riconoscibile, dai Sibillini fino a casa tua.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/ingredienti" className="btn btn-primary btn-lg">
                Scopri gli ingredienti <ArrowRight size={16} />
              </Link>
              <Link href="/chi-siamo" className="btn btn-secondary btn-lg">
                La nostra storia
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteChrome>
  );
}
