import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Breadcrumb } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArticleCard } from "@/components/cards";
import { ARTICLES } from "@/data/journal";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Journal",
  description: "Consigli, ingredienti e storie dai Monti Sibillini: il journal di cosmesi naturale Cannabilla.",
};

export default function JournalPage() {
  const [featured, ...rest] = ARTICLES;
  const categories = Array.from(new Set(ARTICLES.map((a) => a.category)));

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Journal" }]} />
          <h1 className="mt-3 font-display text-4xl text-text sm:text-5xl">Journal</h1>
          <p className="mt-3 max-w-xl text-text-muted">
            Consigli, ingredienti e storie dai Monti Sibillini.
          </p>
        </div>
      </section>

      {/* Category filter row (visual only) */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/journal"
              className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white"
            >
              Tutti
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href="/journal"
                className="rounded-full border border-border px-4 py-1.5 text-sm text-text-muted transition hover:border-primary hover:text-primary"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
          <Reveal>
            <Link
              href={`/journal/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-border bg-white transition hover:shadow-card md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface md:aspect-auto md:min-h-[340px]">
                <Photo
                  imgKey={featured.imgKey}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw, 700px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <h2 className="font-display text-2xl leading-tight text-text group-hover:text-primary sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-text-muted">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-text-muted">
                  <span>{featured.dateLabel}</span>
                  <span>·</span>
                  <span>{featured.readTime} di lettura</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Leggi l&apos;articolo
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* Rest of the articles */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.05}>
                <ArticleCard
                  slug={a.slug}
                  title={a.title}
                  category={a.category}
                  excerpt={a.excerpt}
                  imgKey={a.imgKey}
                  readTime={a.readTime}
                  dateLabel={a.dateLabel}
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </SiteChrome>
  );
}
