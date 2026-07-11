import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Breadcrumb, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getWhatsAppUrl } from "@/lib/constants";
import { MessageCircle } from "lucide-react";
import type { FaqItem } from "@/data/reviews";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Domande frequenti",
  description:
    "Risposte alle domande più comuni su prodotti, ingredienti, ordini, spedizioni, resi, pagamenti e account Cannabilla.",
};

type FaqGroup = { id: string; title: string; items: FaqItem[] };

const GROUPS: FaqGroup[] = [
  {
    id: "prodotti",
    title: "Prodotti",
    items: [
      {
        q: "Che tipo di cosmetici realizza Cannabilla?",
        a: "Cannabilla propone una linea di cosmetici naturali alla canapa dei Monti Sibillini per viso, corpo, capelli e cura quotidiana. Sono prodotti pensati per il benessere e la bellezza della pelle, formulati con ingredienti di origine vegetale.",
      },
      {
        q: "I prodotti sono adatti alla pelle sensibile?",
        a: "Molte formule sono studiate con texture delicate e profumazioni leggere, apprezzate anche da chi ha una pelle facilmente reattiva. Ti consigliamo comunque di leggere la lista ingredienti sulla scheda prodotto e, in caso di dubbi, di richiedere una consulenza gratuita.",
      },
      {
        q: "I prodotti sono testati sugli animali?",
        a: "No. Le nostre formulazioni seguono un approccio cruelty-free: non prevediamo test sugli animali, in linea con la normativa europea sui cosmetici.",
      },
      {
        q: "Come conservo al meglio i prodotti?",
        a: "Conserva i cosmetici in un luogo fresco e asciutto, lontano da fonti di calore e dalla luce solare diretta. Richiudi bene le confezioni dopo l'uso per preservare la freschezza delle formule.",
      },
      {
        q: "Dove trovo il periodo di utilizzo dopo l'apertura?",
        a: "Sulla confezione trovi il simbolo del vasetto aperto (PAO) con l'indicazione dei mesi entro cui utilizzare il prodotto una volta aperto, ad esempio 12M.",
      },
    ],
  },
  {
    id: "ingredienti",
    title: "Ingredienti",
    items: [
      {
        q: "Perché usate la canapa nei cosmetici?",
        a: "L'olio di semi di canapa è ricco di acidi grassi e dona alla pelle una sensazione di comfort e nutrimento. È l'ingrediente identitario della nostra linea, coltivato nel territorio dei Monti Sibillini.",
      },
      {
        q: "I prodotti contengono THC?",
        a: "No. I nostri cosmetici utilizzano derivati della canapa a uso cosmetico e non hanno finalità psicotrope. Sono pensati esclusivamente per la cura e la bellezza della pelle.",
      },
      {
        q: "Dove trovo la lista completa degli ingredienti (INCI)?",
        a: "L'elenco completo INCI è riportato su ogni confezione e nella scheda di ciascun prodotto online, così puoi verificare la composizione prima dell'acquisto.",
      },
      {
        q: "Le formule sono di origine naturale?",
        a: "Diamo priorità a ingredienti di origine naturale e vegetale, selezionati per qualità e delicatezza. Ogni scheda prodotto evidenzia gli ingredienti chiave della formula.",
      },
    ],
  },
  {
    id: "ordini",
    title: "Ordini",
    items: [
      {
        q: "Come effettuo un ordine?",
        a: "Puoi acquistare direttamente dal nostro negozio online: scegli i prodotti, aggiungili al carrello e completa l'acquisto seguendo la procedura guidata di checkout.",
      },
      {
        q: "Posso modificare o annullare un ordine già inviato?",
        a: "Se l'ordine non è ancora stato spedito possiamo aiutarti a modificarlo o annullarlo. Contattaci il prima possibile via email o WhatsApp indicando il numero d'ordine.",
      },
      {
        q: "Riceverò una conferma dell'ordine?",
        a: "Sì. Dopo l'acquisto riceverai un'email di conferma con il riepilogo dei prodotti, l'importo e i dati di spedizione.",
      },
      {
        q: "Posso ordinare come regalo?",
        a: "Certo. Puoi indicare un indirizzo di spedizione diverso da quello di fatturazione e scegliere i nostri kit, pensati anche come idea regalo.",
      },
    ],
  },
  {
    id: "spedizioni",
    title: "Spedizioni",
    items: [
      {
        q: "Quali sono i tempi di consegna?",
        a: "Gli ordini vengono generalmente evasi in 1-2 giorni lavorativi; la consegna avviene indicativamente entro 2-4 giorni lavorativi in Italia, salvo eventuali ritardi del corriere.",
      },
      {
        q: "La spedizione è gratuita?",
        a: "La spedizione è gratuita al superamento della soglia indicata in fase di checkout. Al di sotto di tale importo viene applicato un contributo spese chiaramente visibile prima della conferma.",
      },
      {
        q: "Come posso tracciare il mio pacco?",
        a: "Quando l'ordine viene affidato al corriere ti inviamo un'email con il codice di tracciamento, così puoi seguire la spedizione fino alla consegna.",
      },
      {
        q: "Spedite anche all'estero?",
        a: "Al momento diamo priorità alle spedizioni in Italia. Per richieste verso l'estero contattaci: valuteremo insieme la soluzione migliore.",
      },
    ],
  },
  {
    id: "resi",
    title: "Resi",
    items: [
      {
        q: "Posso restituire un prodotto?",
        a: "Sì. Come consumatore hai diritto di recesso entro 14 giorni dal ricevimento dell'ordine, restituendo il prodotto integro e nella sua confezione.",
      },
      {
        q: "Come avvio una richiesta di reso?",
        a: "Scrivici via email indicando il numero d'ordine e i prodotti che desideri restituire: ti forniremo le istruzioni per la spedizione di rientro.",
      },
      {
        q: "Quando ricevo il rimborso?",
        a: "Una volta ricevuto e verificato il reso, procediamo con il rimborso sullo stesso metodo di pagamento utilizzato per l'acquisto, di norma entro pochi giorni lavorativi.",
      },
      {
        q: "Cosa succede se ricevo un prodotto danneggiato?",
        a: "Ci dispiace molto. Contattaci subito con una foto del prodotto e della confezione: organizzeremo la sostituzione o il rimborso senza costi aggiuntivi per te.",
      },
    ],
  },
  {
    id: "pagamenti",
    title: "Pagamenti",
    items: [
      {
        q: "Quali metodi di pagamento accettate?",
        a: "Accettiamo le principali carte di credito e debito e i metodi di pagamento digitali disponibili al checkout. Le opzioni attive vengono mostrate prima della conferma dell'ordine.",
      },
      {
        q: "I pagamenti sono sicuri?",
        a: "Sì. Le transazioni avvengono tramite canali cifrati e provider di pagamento certificati: non conserviamo i dati completi della tua carta.",
      },
      {
        q: "Riceverò una fattura o ricevuta?",
        a: "Ricevi sempre un documento di riepilogo dell'acquisto. Se ti serve la fattura intestata, indica i dati richiesti in fase d'ordine o scrivici dopo l'acquisto.",
      },
    ],
  },
  {
    id: "account",
    title: "Account",
    items: [
      {
        q: "Devo registrarmi per acquistare?",
        a: "La registrazione non è obbligatoria: puoi acquistare anche come ospite. Creare un account ti permette però di seguire i tuoi ordini e velocizzare i prossimi acquisti.",
      },
      {
        q: "Ho dimenticato la password, cosa faccio?",
        a: "Dalla pagina di accesso puoi richiedere il ripristino della password: riceverai via email le istruzioni per impostarne una nuova.",
      },
      {
        q: "Come gestisco i miei dati personali?",
        a: "Puoi consultare e aggiornare i tuoi dati dall'area account. Per richieste sulla privacy o sulla cancellazione dei dati puoi scriverci in qualsiasi momento.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Domande frequenti" }]} />
          <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">Domande frequenti</h1>
          <p className="mt-3 max-w-2xl text-text-muted">
            Tutto quello che c'è da sapere su prodotti, ingredienti, ordini e spedizioni. Non trovi la risposta che
            cerchi? Scrivici, siamo felici di aiutarti.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-14">
          {GROUPS.map((group) => (
            <Reveal key={group.id}>
              <SectionHeading title={group.title} align="left" className="mb-5" />
              <FaqAccordion items={group.items} />
            </Reveal>
          ))}
        </div>

        {/* Contact CTA */}
        <Reveal className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center">
          <h2 className="font-display text-2xl text-text">Hai ancora dubbi?</h2>
          <p className="mx-auto mt-2 max-w-lg text-text-muted">
            Il nostro team è a disposizione per consigliarti i prodotti più adatti a te.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-6 inline-flex"
          >
            <MessageCircle size={18} /> Scrivici su WhatsApp
          </a>
        </Reveal>
      </section>
    </SiteChrome>
  );
}
