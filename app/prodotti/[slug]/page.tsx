import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Breadcrumb } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, novita, onOffer, bestSellers, type CatalogProduct } from "@/data/catalog";
import { CATEGORIES } from "@/data/taxonomy";

/** Quick-filter "chip" landing pages (level 2 of the /prodotti flow). */
type Chip = { title: string; subtitle: string; resolve: () => CatalogProduct[] };

const byReviews = (a: CatalogProduct, b: CatalogProduct) => b.reviewCount - a.reviewCount;

const CHIPS: Record<string, Chip> = {
  novita: {
    title: "Novità",
    subtitle: "Gli ultimi arrivi nella cosmesi naturale Cannabilla.",
    resolve: () => {
      const n = novita();
      return n.length ? n : [...PRODUCTS].filter((p) => p.featured).slice(0, 12);
    },
  },
  bestseller: {
    title: "Best Seller",
    subtitle: "I prodotti più amati dai nostri clienti.",
    resolve: () => {
      const b = bestSellers();
      return b.length ? b : [...PRODUCTS].filter((p) => !p.isMerch).sort(byReviews).slice(0, 12);
    },
  },
  offerta: {
    title: "In Offerta",
    subtitle: "Le promozioni del momento sui cosmetici alla canapa.",
    resolve: () => onOffer(),
  },
};

export function generateStaticParams() {
  return Object.keys(CHIPS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const chip = CHIPS[slug];
  if (!chip) return { title: "Prodotti" };
  return { title: chip.title, description: chip.subtitle };
}

export default async function ProdottiChipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // A category slug hitting this route → send to the canonical category page.
  if (CATEGORIES.some((c) => c.slug === slug)) redirect(`/categoria/${slug}`);

  const chip = CHIPS[slug];
  if (!chip) notFound();

  const products = chip.resolve();

  return (
    <SiteChrome>
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Prodotti", href: "/prodotti" }, { label: chip.title }]} />
          <h1 className="mt-3 font-display text-text">{chip.title}</h1>
          <p className="mt-2 max-w-xl text-lg text-text-muted">{chip.subtitle}</p>
          <p className="mt-1 text-sm text-text-muted">{products.length} prodotti</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 4} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-surface p-12 text-center">
            <p className="text-text">Al momento non ci sono prodotti in questa selezione.</p>
            <Link href="/prodotti" className="mt-3 inline-block font-medium text-primary underline">
              Torna a tutti i prodotti
            </Link>
          </div>
        )}
      </section>
    </SiteChrome>
  );
}
