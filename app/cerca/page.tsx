import { Suspense } from "react";
import type { Metadata } from "next";
import { SiteChrome } from "@/components/enoteca/SiteChrome";
import { SearchView } from "@/components/enoteca/SearchView";

export const metadata: Metadata = {
  title: "Catalogo — Cannabilla",
  description: "Cerca tra i cosmetici naturali alla canapa Cannabilla: viso, corpo, solari, capelli e barba, benessere ed estratti Hempilla.",
  alternates: { canonical: "/cerca" },
};

export default function SearchPage() {
  return (
    <SiteChrome>
      <Suspense fallback={<div className="mx-auto max-w-7xl px-5 py-16 md:px-8" />}>
        <SearchView />
      </Suspense>
    </SiteChrome>
  );
}
