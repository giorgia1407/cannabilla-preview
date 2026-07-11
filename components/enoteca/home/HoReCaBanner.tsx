import { getWhatsAppUrl } from "@/lib/constants";
import { ATMOSPHERE } from "@/data/productData";
import { BottleImage } from "../BottleImage";

/** Section 4 — full-width yellow HoReCa banner. */
export function HoReCaBanner() {
  return (
    <section aria-label="Rivenditori & professionisti" className="bg-yellow-banner">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2 md:py-0">
        <div className="py-2 md:py-14">
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight text-text md:text-[32px]">
            Sei un rivenditore o un professionista della bellezza?
          </h2>
          <p className="mt-3 max-w-md text-[16px] text-text/80">
            Registrati per scoprire le condizioni riservate e portare i cosmetici alla canapa Cannabilla nel tuo negozio o centro estetico.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl("Ciao Cannabilla! Sono un rivenditore e vorrei accedere alle condizioni riservate.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-text px-8 text-[14px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              Accedi
            </a>
            <a
              href={getWhatsAppUrl("Ciao Cannabilla! Vorrei registrarmi come rivenditore o professionista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-white px-8 text-[14px] font-bold uppercase tracking-wide text-text transition-opacity hover:opacity-90"
            >
              Registrati
            </a>
          </div>
        </div>
        <div className="relative h-[220px] overflow-hidden rounded-lg md:h-[300px] md:rounded-none">
          <BottleImage
            src={ATMOSPHERE.tasting}
            alt="Cosmetici naturali alla canapa per professionisti"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
