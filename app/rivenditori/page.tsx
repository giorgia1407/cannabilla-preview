import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Breadcrumb, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getWhatsAppUrl } from "@/lib/constants";
import { TrendingUp, LayoutGrid, GraduationCap, Truck, MessageCircle } from "lucide-react";
import { ResellerForm } from "./ResellerForm";

// TODO Sarang: contenuti B2B (margini, kit, condizioni) sono di esempio — sostituire con i dati commerciali reali.

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Diventa rivenditore",
  description:
    "Il programma rivenditori Cannabilla per farmacie, erboristerie, profumerie ed estetica: margini dedicati, kit espositori, formazione e spedizioni riservate.",
};

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Margini dedicati",
    text: "Condizioni commerciali riservate ai partner, con listino b2b e sconti progressivi in base ai volumi di riordino.",
  },
  {
    icon: LayoutGrid,
    title: "Kit espositori",
    text: "Materiali per il punto vendita: espositori da banco, tester e supporti informativi per raccontare la linea.",
  },
  {
    icon: GraduationCap,
    title: "Formazione",
    text: "Sessioni di formazione sul brand, sugli ingredienti alla canapa e sui consigli d'uso per il tuo team di vendita.",
  },
  {
    icon: Truck,
    title: "Spedizioni dedicate",
    text: "Logistica riservata ai rivenditori con tempi di consegna concordati e riassortimenti semplici e veloci.",
  },
];

export default function RivenditoriPage() {
  const whatsappUrl = getWhatsAppUrl(
    "Ciao Cannabilla! Sono un'attività interessata a diventare rivenditore. Vorrei maggiori informazioni."
  );

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Diventa rivenditore" }]} />
          <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">Diventa rivenditore Cannabilla</h1>
          <p className="mt-3 max-w-2xl text-text-muted">
            Porta la cosmetica naturale alla canapa dei Monti Sibillini nella tua attività. Un programma pensato per
            farmacie, erboristerie, profumerie e centri estetici che cercano prodotti autentici e di qualità.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 inline-flex">
            <MessageCircle size={18} /> Parla con il team commerciale
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Il programma"
          title="Perché scegliere Cannabilla"
          subtitle="Un partner che ti accompagna, dal primo ordine all'assistenza continua."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <b.icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg text-text">{b.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Application form */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Candidatura"
            title="Richiedi di diventare rivenditore"
            subtitle="Compila il modulo con i dati della tua attività: valuteremo la richiesta e ti ricontatteremo."
          />
          <Reveal className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <ResellerForm />
          </Reveal>
          <p className="mt-6 text-center text-xs text-text-muted">
            Condizioni e materiali indicati sono a scopo illustrativo per questa anteprima.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
