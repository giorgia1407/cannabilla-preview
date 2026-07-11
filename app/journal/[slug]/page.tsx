import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Breadcrumb } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArticleCard } from "@/components/cards";
import { ProductCard } from "@/components/ProductCard";
import { ARTICLES, articleBySlug } from "@/data/journal";
import { bySlugs } from "@/data/catalog";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) return { title: "Articolo" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const relatedProducts = bySlugs(article.relatedProducts);
  const moreArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <SiteChrome>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Journal", href: "/journal" },
            { label: article.title },
          ]}
        />

        <span className="mt-6 inline-block rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
          {article.category}
        </span>

        <h1 className="mt-4 font-display text-3xl leading-tight text-text sm:text-4xl">
          {article.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-text-muted">
          <span>{article.author}</span>
          <span>·</span>
          <span>{article.dateLabel}</span>
          <span>·</span>
          <span>{article.readTime} di lettura</span>
        </div>

        {/* Hero image */}
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-surface">
          <Photo
            imgKey={article.imgKey}
            alt={article.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Body */}
        {/* TODO: replace with client's real content */}
        <div className="mt-10 space-y-6">
          {article.body.map((block, i) => (
            <div key={i} className="space-y-3">
              {block.heading && (
                <h2 className="font-display text-2xl text-text">{block.heading}</h2>
              )}
              <p className="leading-relaxed text-text-muted">{block.text}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Prodotti correlati */}
      {relatedProducts.length > 0 && (
        <section className="bg-surface">
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
            <h2 className="font-display text-2xl text-text sm:text-3xl">Prodotti correlati</h2>
            <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} variant="grid" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Commenti (placeholder) */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-text">Commenti</h2>
        <div className="mt-4 rounded-2xl border border-border bg-white p-8 text-center text-text-muted">
          I commenti saranno presto disponibili.
        </div>
      </section>

      {/* Continua a leggere */}
      {moreArticles.length > 0 && (
        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
            <h2 className="font-display text-2xl text-text sm:text-3xl">Continua a leggere</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {moreArticles.map((a, i) => (
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
          </div>
        </section>
      )}
    </SiteChrome>
  );
}
