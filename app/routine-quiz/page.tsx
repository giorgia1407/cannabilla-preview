import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { QuizFlow } from "@/components/QuizFlow";

export const metadata: Metadata = {
  title: "Quiz della pelle — Trova la tua routine",
  description:
    "Rispondi a 6 domande e ricevi una routine skincare su misura con i cosmetici naturali alla canapa Cannabilla.",
};

export default function RoutineQuizPage() {
  return (
    <SiteChrome>
      <section className="bg-cream px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <QuizFlow />
        </div>
      </section>
    </SiteChrome>
  );
}
