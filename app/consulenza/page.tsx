import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Breadcrumb, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, Sparkles, Leaf, HeartHandshake, ShieldCheck } from "lucide-react";
import { ConsultForm } from "./ConsultForm";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Consulenza gratuita",
  description:
    "Prenota una consulenza cosmetica gratuita con il team Cannabilla. Consigli personalizzati sui prodotti alla canapa più adatti alla tua routine.",
};

const STEPS = [
  {
    icon: Leaf,
    title: "Ci racconti la tua routine",
    text: "Ci parli delle tue abitudini e delle sensazioni della tua pelle: da qui partiamo per capire cosa cerchi.",
  },
  {
    icon: Sparkles,
    title: "Ti proponiamo i prodotti",
    text: "Selezioniamo insieme i cosmetici alla canapa più adatti al tuo tipo di pelle e ai tuoi obiettivi di bellezza.",
  },
  {
    icon: HeartHandshake,
    title: "Costruiamo la routine",
    text: "Ti aiutiamo a comporre una routine semplice e piacevole da seguire ogni giorno, senza fretta.",
  },
];

export default function ConsulenzaPage() {
  const whatsappUrl = getWhatsAppUrl(
    "Ciao Cannabilla! Vorrei prenotare una consulenza gratuita sui vostri prodotti."
  );

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Consulenza gratuita" }]} />
          <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">Consulenza cosmetica gratuita</h1>
          <p className="mt-3 max-w-2xl text-text-muted">
            Un consiglio esperto, senza impegno. Ti aiutiamo a scegliere i cosmetici alla canapa più adatti a te e a
            costruire una routine di bellezza su misura.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mt-6 inline-flex">
            <MessageCircle size={20} /> Parla ora con un esperto su WhatsApp
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Come funziona"
          title="Tre semplici passi"
          subtitle="Una chiacchierata dedicata a te, per trovare i prodotti giusti senza tentativi a caso."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg text-text">{s.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking form */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Prenota una call"
            title="Preferisci essere ricontattato?"
            subtitle="Lasciaci i tuoi dati e la fascia oraria che preferisci: ti richiamiamo noi."
          />
          <Reveal className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <ConsultForm />
          </Reveal>

          {/* Cosmetic-only reassurance */}
          <p className="mt-6 flex items-start gap-2 rounded-xl bg-cream p-4 text-xs leading-relaxed text-text-muted">
            <ShieldCheck size={18} className="mt-0.5 shrink-0 text-primary" />
            <span>
              La consulenza ha finalità esclusivamente cosmetica e di bellezza: ti aiutiamo nella scelta dei prodotti e
              nella cura quotidiana della pelle. Non fornisce indicazioni mediche né sostituisce il parere di un
              professionista della salute.
            </span>
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
