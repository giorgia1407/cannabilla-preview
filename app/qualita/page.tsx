import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Leaf, BadgeCheck } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Eyebrow, Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Qualità e sicurezza",
  description:
    "Come nascono i cosmetici Cannabilla: formulazione, controllo qualità, registrazione CPNP e formule cruelty-free senza parabeni.",
};

export const dynamic = "force-static";

const CARDS = [
  {
    Icon: FlaskConical,
    t: "Formulazione",
    d: "Ingredienti selezionati e dosati con criterio, per formule pulite ed efficaci senza superfluo.",
  },
  {
    Icon: ShieldCheck,
    t: "Controllo qualità",
    d: "Ogni lotto è verificato lungo tutta la lavorazione, dalla materia prima al prodotto finito.",
  },
  {
    Icon: BadgeCheck,
    t: "Registrazione CPNP",
    d: "Tutte le formule sono notificate al Portale Cosmetici Europeo, come previsto dalla normativa.",
  },
  {
    Icon: Leaf,
    t: "Cruelty-free",
    d: "Nessun test sugli animali e formule senza parabeni, per una cosmetica gentile e trasparente.",
  },
];

export default function QualitaPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[46vh] w-full">
          <Photo
            imgKey="botanical4"
            alt="Ingredienti botanici e texture delle formule Cannabilla"
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
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Qualità e sicurezza" }]} />
              </div>
              <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.08] sm:text-5xl">
                Qualità e sicurezza, in ogni flacone
              </h1>
              <p className="mt-4 max-w-xl text-white/90 sm:text-lg">
                Dietro ogni cosmetico Cannabilla ci sono scelte precise: formule pulite, controlli attenti e piena
                conformità alle regole europee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Il nostro metodo"
            title="Quattro garanzie, un solo standard"
            subtitle="I punti fermi che rendono ogni prodotto affidabile, dalla materia prima all'etichetta."
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

      {/* Formulazione + Controllo qualità */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Reveal>
            <Eyebrow>Formulazione</Eyebrow>
            <h2 className="mt-3 font-display text-2xl leading-tight text-text sm:text-3xl">
              Formule pulite, pensate per la pelle
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
              <p>
                Ogni cosmetico Cannabilla nasce attorno a un'idea semplice: dare alla pelle ciò di cui ha davvero
                bisogno, senza ingredienti superflui. Partiamo dall'olio di semi di canapa, ricco di acidi grassi
                essenziali, e lo affianchiamo ad attivi botanici selezionati per la loro delicatezza. Le liste
                ingredienti restano essenziali e leggibili, così da rendere ogni formula trasparente.
              </p>
              <p>
                Lavoriamo con laboratori italiani specializzati, definendo insieme dosaggi e texture. L'obiettivo non è
                inseguire mode passeggere, ma costruire prodotti equilibrati, piacevoli da usare e coerenti con la
                nostra filosofia naturale.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <Eyebrow className="mt-12">Controllo qualità</Eyebrow>
            <h2 className="mt-3 font-display text-2xl leading-tight text-text sm:text-3xl">
              Verifiche a ogni passaggio
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
              <p>
                La qualità non è un momento, ma un percorso. Le materie prime vengono controllate in ingresso, la
                produzione è seguita lotto per lotto e ogni prodotto finito viene verificato prima di raggiungere gli
                scaffali. Le confezioni riportano scadenza e periodo di utilizzo dopo l'apertura, per un uso sempre
                consapevole.
              </p>
              <p>
                Ogni lotto è tracciabile: sappiamo da dove arrivano gli ingredienti e come è stato prodotto ciascun
                cosmetico. Questa attenzione ai dettagli non riguarda solo la conformità, ma la fiducia. Vogliamo che
                chi sceglie Cannabilla sappia esattamente cosa applica sulla propria pelle, senza zone d'ombra.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CPNP + cruelty-free */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <Eyebrow>Registrazione CPNP e conformità</Eyebrow>
          <h2 className="mt-3 font-display text-2xl leading-tight text-text sm:text-3xl">
            In regola con le norme europee
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
            <p>
              Tutti i cosmetici Cannabilla sono notificati al CPNP, il Portale Cosmetici Europeo, come richiesto dal
              Regolamento (CE) 1223/2009. Ogni formula è accompagnata dalla documentazione tecnica e dalla valutazione
              di sicurezza previste dalla normativa, a garanzia di trasparenza e tracciabilità per chi acquista.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Eyebrow className="mt-12">Cruelty-free e senza parabeni</Eyebrow>
          <h2 className="mt-3 font-display text-2xl leading-tight text-text sm:text-3xl">
            Una cosmetica gentile
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
            <p>
              Non testiamo i nostri prodotti sugli animali e formuliamo senza parabeni, in linea con una cosmetica
              rispettosa delle persone e dell'ambiente. È il nostro modo di intendere la cura: efficace, pulita e
              coerente con i valori che ci guidano fin dall'inizio.
            </p>
            <p>
              Selezioniamo con cura anche gli ingredienti di origine vegetale e privilegiamo formule essenziali, così da
              offrire prodotti piacevoli e adatti anche alla pelle più sensibile. Qualità, per noi, significa proprio
              questo: sicurezza, trasparenza e delicatezza, senza compromessi.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteChrome>
  );
}
