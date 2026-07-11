import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { QuizResult } from "@/components/QuizResult";

export const metadata: Metadata = {
  title: "Il risultato del tuo quiz",
  description: "La routine skincare su misura consigliata dal quiz della pelle Cannabilla.",
};

export default function QuizResultPage() {
  return (
    <SiteChrome>
      <section className="bg-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[1400px]">
          <QuizResult />
        </div>
      </section>
    </SiteChrome>
  );
}
