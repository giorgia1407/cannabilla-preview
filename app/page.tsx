import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { Photo } from "@/components/Photo";
import { HeroSection } from "@/components/home/HeroSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Eyebrow, Stars } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { CategoryTile, KitCard, ArticleCard } from "@/components/cards";
import { ConcernCarousel } from "@/components/ConcernCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { NewsletterForm } from "@/components/NewsletterForm";
import { StoreLocatorSearch } from "@/components/StoreLocatorSearch";
import { bySlug, bySlugs } from "@/data/catalog";
import { CATEGORIES, CONCERNS } from "@/data/taxonomy";
import { KITS } from "@/data/kits";
import { HERO_INGREDIENTS } from "@/data/ingredients";
import { ARTICLES } from "@/data/journal";
import { REVIEWS, RATING_DISTRIBUTION, GOOGLE_RATING, GOOGLE_COUNT, HOME_FAQ } from "@/data/reviews";
import { ecwidProductUrl, getWhatsAppUrl, formatEuro, SHOP_INFO } from "@/lib/constants";

const BEST_SELLERS = [
  "mousse-detergente-delicata",
  "golden-hemp-siero-viso-idratante",
  "escar-glow-siero-viso-ultra-idratante",
  "crema-viso-idratante",
  "im-perfect-siero-viso-anti-imperfezioni",
  "scrub-viso-100-naturale",
  "crema-viso-solare-spf-50",
  "crema-corpo-idratazione-intensiva",
];
const HOME_CATEGORIES = ["viso", "corpo", "sole", "capelli-e-barba", "labbra", "trattamenti"];
const HOME_KITS = [
  "starter-discovery-kit",
  "routine-pelle-secca-matura",
  "kit-corpo-idratazione",
  "kit-sole",
  "kit-capelli-secchi",
  "kit-tattoo",
];
const MORNING = ["mousse-detergente-delicata", "golden-hemp-siero-viso-idratante", "crema-viso-solare-spf-50"];
const EVENING = ["make-up-remover-bifasico", "escar-glow-siero-viso-ultra-idratante", "crema-viso-idratante"];

export const dynamic = "force-static";

export default function HomePage() {
  const golden = bySlug("golden-hemp-siero-viso-idratante")!;
  const bestSellers = bySlugs(BEST_SELLERS);
  const homeCats = HOME_CATEGORIES.map((s) => CATEGORIES.find((c) => c.slug === s)!).filter(Boolean);
  const homeKits = HOME_KITS.map((s) => KITS.find((k) => k.slug === s)!).filter(Boolean);

  return (
    <SiteChrome>
      {/* 3 — HERO (slideshow 4 scene, testo + scrim per-slide, rotazione 1.5s) */}
      <HeroSection />

      {/* 4 — TRUST MARQUEE */}
      <TrustMarquee />

      {/* 5 — BEST SELLERS (2 rows × 4) */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="I più amati"
            title="I Nostri Best Seller"
            subtitle="I prodotti più amati dai nostri clienti"
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 min-[500px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {bestSellers.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} emphasis />
          ))}
        </div>
      </section>

      {/* 6 — SHOP BY CATEGORY */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Le nostre linee" title="Le Nostre Linee" />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {homeCats.map((c) => (
              <CategoryTile key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 — SHOP BY CONCERN (Miamo) */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Discovery guidato"
            title="Trova la soluzione per la tua pelle"
            subtitle="Parti dalla tua esigenza: ti guidiamo verso i prodotti giusti."
          />
        </Reveal>
        <div className="mt-10">
          <ConcernCarousel concerns={CONCERNS} />
        </div>
      </section>

      {/* 8 — QUIZ PROMO BAND (Miamo) */}
      <section className="relative overflow-hidden bg-cream botanical-pattern">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal className="order-2 flex justify-center lg:order-1">
            <div className="animate-float w-[240px] rounded-[2rem] border-8 border-text/90 bg-white p-4 shadow-lg">
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" />
              <p className="text-center text-xs font-semibold uppercase tracking-wide text-primary">Domanda 1 di 6</p>
              <p className="mt-3 text-center font-display text-lg leading-tight text-text">
                Come descriveresti la tua pelle?
              </p>
              <div className="mt-5 space-y-2.5">
                <div className="rounded border-2 border-primary bg-primary/5 px-4 py-2.5 text-center text-sm font-medium text-primary">
                  Secca
                </div>
                <div className="rounded border border-border px-4 py-2.5 text-center text-sm text-text-muted">Grassa</div>
                <div className="rounded border border-border px-4 py-2.5 text-center text-sm text-text-muted">Mista</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <Eyebrow>In 90 secondi</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">
              Trova la routine perfetta per la tua pelle
            </h2>
            <p className="mt-4 text-text-muted">
              Rispondi a 6 domande e ricevi consigli personalizzati dai nostri esperti.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-soft">
                ✨ Routine su misura
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-soft">
                🎁 10% sul primo ordine
              </span>
            </div>
            <div className="mt-7">
              <Link href="/routine-quiz" className="btn btn-primary btn-lg">
                Inizia il quiz <ArrowRight size={16} />
              </Link>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              Preferisci parlare con un esperto?{" "}
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">
                Contattaci su WhatsApp
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9 — BUILD YOUR ROUTINE */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Mattina & Sera" title="La Tua Routine Su Misura" />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <RoutineCard title="Routine Mattina" slugs={MORNING} />
          <RoutineCard title="Routine Sera" slugs={EVENING} />
        </div>
      </section>

      {/* 10 — SEASONAL CAMPAIGN */}
      {/* TODO: swap with client's actual seasonal campaign */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative min-h-[300px]">
            <Photo imgKey="field1" alt="Campagna solari estate 2026" fill w={1600} sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 text-white sm:p-12">
                <Eyebrow className="text-white/90">Novità stagionale</Eyebrow>
                <h2 className="mt-3 max-w-md font-display text-3xl leading-tight sm:text-4xl">Sole Estate 2026</h2>
                <p className="mt-3 max-w-md text-white/90">
                  Proteggi la tua pelle con i solari alla canapa: SPF 30 e 50, doposole lenitivi e kit dedicati.
                </p>
                <Link href="/categoria/sole" className="btn btn-light mt-6">
                  Scopri la linea solare
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — FEATURED PRODUCT STORY */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface">
              <Photo src={golden.image} alt={golden.alt} fill sizes="400px" className="object-cover" />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-xl bg-surface">
              <Photo imgKey="oil1" alt="Texture olio di canapa" fill sizes="400px" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>La storia del prodotto</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">{golden.name}</h2>
            <p className="mt-4 text-text-muted">
              Golden Hemp è un olio viso concentrato ad azione antiossidante ed emolliente, con il{" "}
              <strong className="text-text">60% di olio di canapa</strong>, ricco di acidi grassi essenziali. Nutre la
              pelle in profondità e ne migliora la texture, giorno dopo giorno.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-text">
              {golden.keyIngredients.slice(0, 4).map((k) => (
                <li key={k} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {k}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <Stars rating={golden.rating} />
              <span className="text-sm text-text-muted">{golden.reviewCount} recensioni</span>
            </div>
            <div className="mt-7">
              <a href={ecwidProductUrl(golden.slug)} className="btn btn-primary btn-lg">
                Scopri Golden Hemp <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12 — BRAND ORIGIN */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
            <Photo imgKey="mountain1" alt="I Monti Sibillini" fill w={1200} sizes="(max-width:1024px) 100vw, 600px" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Le origini</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">
              Nel cuore dei Monti Sibillini
            </h2>
            <div className="mt-4 space-y-4 text-text-muted">
              <p>
                Cannabilla nasce tra le cime e i prati fioriti dei Monti Sibillini, un massiccio dell'Appennino centrale
                dove la natura è ancora incontaminata e generosa.
              </p>
              <p>
                È qui che raccogliamo l'ispirazione — e molti degli attivi botanici delle nostre formule: iperico,
                calendula, malva e la preziosa Mela Rosa dei Sibillini.
              </p>
              <p>
                Ogni prodotto porta con sé un pezzo di questo territorio: la sua purezza, il suo ritmo lento, il suo
                rispetto per l'ambiente.
              </p>
            </div>
            <Link href="/monti-sibillini" className="btn btn-secondary mt-6">
              La nostra storia
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 13 — INGREDIENT DISCOVERY */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Cosa c'è dentro" title="Gli Ingredienti Protagonisti" subtitle="Attivi naturali selezionati, con una funzione precisa." />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {HERO_INGREDIENTS.map((ing) => (
            <Link key={ing.slug} href={`/ingredienti/${ing.slug}`} className="group flex items-center gap-4 rounded-xl border border-border bg-white p-3 transition hover:shadow-card">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface">
                <Photo imgKey={ing.imgKey} alt={ing.name} fill w={200} sizes="64px" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-base leading-tight text-text group-hover:text-primary">{ing.name}</h3>
                <p className="mt-0.5 line-clamp-2 text-xs text-text-muted">{ing.fn}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 14 — RESULTS AND PROOF */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Recensioni" title="Le voci dei nostri clienti" />
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr]">
            <div className="rounded-xl border border-border bg-white p-6 text-center">
              <p className="font-display text-5xl text-text">{GOOGLE_RATING.toFixed(1)}</p>
              <div className="mt-2 flex justify-center">
                <Stars rating={GOOGLE_RATING} size={18} />
              </div>
              <p className="mt-1 text-sm text-text-muted">{GOOGLE_COUNT} recensioni Google</p>
              <div className="mt-5 space-y-1.5">
                {RATING_DISTRIBUTION.map((d) => (
                  <div key={d.stars} className="flex items-center gap-2 text-xs">
                    <span className="w-6 text-text-muted">{d.stars}★</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                      <span className="block h-full rounded-full bg-primary" style={{ width: `${d.pct}%` }} />
                    </span>
                    <span className="w-8 text-right text-text-muted">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {REVIEWS.map((r) => (
                <div key={r.name} className="flex flex-col rounded-xl border border-border bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {r.initials}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text">{r.name}</p>
                      <p className="text-xs text-text-muted">{r.date}</p>
                    </div>
                    <div className="ml-auto">
                      <Stars rating={r.rating} size={13} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15 — EXPERT GUIDANCE */}
      <section className="on-dark bg-primary text-white">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[220px_1fr]">
          <Reveal className="mx-auto">
            <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white/20">
              <Photo imgKey="wellness5" alt="Esperta della cosmetica Cannabilla" fill w={400} sizes="160px" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Quote size={36} className="text-white/40" />
            <blockquote className="mt-3 font-accent text-2xl italic leading-snug sm:text-3xl">
              &ldquo;Ogni formula nasce da un principio semplice: dare alla pelle ciò di cui ha davvero bisogno, con la
              delicatezza della natura.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-white/80">— La nostra formulatrice · contenuto di esempio</p>
            <div className="mt-6">
              <a href={getWhatsAppUrl("Ciao Cannabilla! Vorrei parlare con un esperto della cosmetica.")} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                Parla con un esperto
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 16 — KITS AND GIFTS (Antos) */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Routine complete" title="I Nostri Kit — Routine Complete" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {homeKits.map((k) => (
            <KitCard key={k.slug} kit={k} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/kits" className="on-dark mx-auto flex max-w-3xl items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold uppercase tracking-wide text-white transition hover:bg-primary-dark">
            Scopri tutti i kit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 17 — SUSTAINABILITY */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Il nostro impegno" title="Naturale, anche nel gesto" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Packaging Riciclabile", d: "Flaconi in vetro e plastica 100% riciclabili, con informazioni in etichetta per ridurre le confezioni esterne." },
              { t: "Produzione Consapevole", d: "Produzione su richiesta e filiera corta nei Monti Sibillini, per limitare gli sprechi." },
              { t: "Riduzione Sprechi", d: "Formule pulite, cruelty-free e senza parabeni, pensate per durare e per rispettare la pelle e l'ambiente." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-white p-6 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-lg text-primary">♻</div>
                <h3 className="mt-4 font-display text-lg text-text">{c.t}</h3>
                <p className="mt-2 text-sm text-text-muted">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/sostenibilita" className="btn btn-secondary">
              Scopri la sostenibilità
            </Link>
          </div>
        </div>
      </section>

      {/* 18 — STORE / RESELLER LOCATOR */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Dove trovarci</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text sm:text-4xl">Trova Cannabilla vicino a te</h2>
            <p className="mt-3 text-text-muted">Cerca il rivenditore più vicino o acquista online con consegna in 24/48h.</p>
            <div className="mt-6">
              <StoreLocatorSearch />
            </div>
            <p className="mt-4 text-sm text-text-muted">
              Sei un rivenditore?{" "}
              <Link href="/rivenditori" className="font-medium text-primary underline">
                Scopri il B2B
              </Link>
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
            <Photo imgKey="valley1" alt="Mappa rivenditori Cannabilla" fill w={1200} sizes="(max-width:1024px) 100vw, 600px" className="object-cover" />
          </Reveal>
        </div>
      </section>

      {/* 19 — JOURNAL */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex items-end justify-between">
              <SectionHeading align="left" eyebrow="Dal Journal" title="Dal Journal" />
              <Link href="/journal" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
                Tutti gli articoli →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ARTICLES.slice(0, 3).map((a) => (
              <ArticleCard
                key={a.slug}
                slug={a.slug}
                title={a.title}
                category={a.category}
                excerpt={a.excerpt}
                imgKey={a.imgKey}
                readTime={a.readTime}
                dateLabel={a.dateLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 20 — NEWSLETTER + LOYALTY */}
      <section className="on-dark bg-primary text-white">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Iscriviti e ricevi il 15% di sconto sul primo ordine
            </h2>
            <p className="mt-3 text-white/85">
              Unisciti al programma Cannabilla: guadagna punti, sblocca vantaggi e ricevi consigli su misura.
            </p>
          </div>
          <div className="max-w-md lg:ml-auto">
            <NewsletterForm variant="dark" cta="Iscriviti" />
          </div>
        </div>
      </section>

      {/* 21 — HOMEPAGE FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Domande frequenti" title="Le domande più comuni" />
        </Reveal>
        <div className="mt-10">
          <FaqAccordion items={HOME_FAQ} />
        </div>
        <p className="mt-6 text-center text-sm text-text-muted">
          Hai altre domande?{" "}
          <Link href="/faq" className="font-medium text-primary underline">
            Vai alle FAQ complete
          </Link>{" "}
          o{" "}
          <a href={`tel:${SHOP_INFO.phone}`} className="font-medium text-primary underline">
            chiamaci
          </a>
          .
        </p>
      </section>
      {/* 22 — FOOTER: provided by SiteChrome */}
    </SiteChrome>
  );
}

function RoutineCard({ title, slugs }: { title: string; slugs: string[] }) {
  const products = bySlugs(slugs);
  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <h3 className="font-display text-xl text-text">{title}</h3>
      <div className="mt-5 space-y-3">
        {products.map((p, i) => (
          <a key={p.slug} href={ecwidProductUrl(p.slug)} className="group flex items-center gap-4 rounded-xl border border-border p-3 transition hover:border-primary">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-surface">
              <Photo src={p.image} alt={p.alt} fill sizes="56px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-text group-hover:text-primary">{p.name}</p>
              <p className="text-xs text-text-muted">{formatEuro(p.price)}</p>
            </div>
            <ArrowRight size={16} className="text-primary opacity-0 transition group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
}
