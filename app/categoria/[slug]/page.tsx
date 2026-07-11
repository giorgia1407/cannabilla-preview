import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Breadcrumb } from "@/components/ui";
import { CategoryBrowser } from "@/components/CategoryBrowser";
import { ConcernCard } from "@/components/cards";
import { CATEGORIES, categoryMeta, concernMeta } from "@/data/taxonomy";
import { byCategory, type CategorySlug } from "@/data/catalog";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryMeta(slug as CategorySlug);
  if (!cat) return { title: "Categoria" };
  return { title: cat.label, description: cat.description };
}

type Sort = "novita" | "bestseller" | "price-asc" | "price-desc" | "name";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sub?: string; sort?: string }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const cat = categoryMeta(slug as CategorySlug);
  if (!cat) notFound();

  const products = byCategory(cat.slug);
  const sortMap: Record<string, Sort> = { novita: "novita", bestseller: "bestseller" };
  const initialSort = sp.sort ? sortMap[sp.sort] : undefined;
  const relatedConcerns = cat.relatedConcerns.map((c) => concernMeta(c)!).filter(Boolean);

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[240px]">
          <Photo imgKey={cat.hero} alt={cat.label} fill w={1600} priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-black/20" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 py-8 text-white sm:px-6">
              <div className="[&_*]:text-white/90">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: cat.label }]} />
              </div>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl">{cat.label}</h1>
              <p className="mt-2 max-w-xl text-white/90">{cat.tagline}</p>
              <p className="mt-1 text-sm text-white/75">{products.length} prodotti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commerce-first: grid immediately */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
        <CategoryBrowser products={products} initialSub={sp.sub} initialSort={initialSort} />
      </section>

      {/* Editorial BELOW grid */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-text sm:text-3xl">La filosofia della linea {cat.label}</h2>
          <p className="mt-4 leading-relaxed text-text-muted">{cat.editorial}</p>

          <h3 className="mt-10 font-display text-xl text-text">Come scegliere</h3>
          <ul className="mt-4 space-y-2">
            {cat.guide.map((g) => (
              <li key={g} className="flex items-start gap-2 text-text">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related concerns */}
      {relatedConcerns.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <h2 className="text-center font-display text-2xl text-text sm:text-3xl">Esigenze correlate</h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-3">
            {relatedConcerns.map((c) => (
              <ConcernCard key={c.slug} concern={c} />
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-[1400px] px-4 pb-16 text-center sm:px-6">
        <Link href="/routine-quiz" className="btn btn-secondary">
          Non sai da dove iniziare? Fai il quiz
        </Link>
      </div>
    </SiteChrome>
  );
}
