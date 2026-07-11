import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Breadcrumb } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import {
  HERO_INGREDIENTS,
  ingredientBySlug,
  productsForIngredient,
} from "@/data/ingredients";

export function generateStaticParams() {
  return HERO_INGREDIENTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ing = ingredientBySlug(slug);
  if (!ing) return { title: "Ingrediente" };
  return { title: ing.name, description: ing.fn };
}

export default async function IngredientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ing = ingredientBySlug(slug);
  if (!ing || !ing.hero) notFound();

  const products = productsForIngredient(ing);

  return (
    <SiteChrome>
      {/* Split hero */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
            {ing.imgKey && (
              <Photo
                imgKey={ing.imgKey}
                alt={ing.name}
                fill
                priority
                sizes="(max-width:768px) 100vw, 640px"
                className="object-cover"
              />
            )}
          </div>
          <div>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Ingredienti", href: "/ingredienti" },
                { label: ing.name },
              ]}
            />
            <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">{ing.name}</h1>
            {ing.inci && <p className="mt-2 text-base italic text-text-muted">{ing.inci}</p>}
            <p className="mt-4 text-lg leading-relaxed text-text">{ing.fn}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      {ing.long && (
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <p className="text-lg leading-relaxed text-text-muted">{ing.long}</p>
        </section>
      )}

      {/* Prodotti che contengono X */}
      {products.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
            <h2 className="font-display text-2xl text-text sm:text-3xl">
              Prodotti che contengono {ing.name}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} variant="grid" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
        <Link
          href="/ingredienti"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          <ArrowLeft size={16} />
          Torna a tutti gli ingredienti
        </Link>
      </section>
    </SiteChrome>
  );
}
