"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteChrome } from "@/components/enoteca/SiteChrome";
import { BottleImage } from "@/components/enoteca/BottleImage";
import { useCart } from "@/components/enoteca/CartContext";
import { formatEuro, SHOP_INFO } from "@/lib/constants";
import { CheckIcon } from "@/components/enoteca/Icons";

/**
 * Checkout DIMOSTRATIVO (mock). Nessun backend, nessun pagamento reale: il
 * modulo raccoglie i dati solo lato client e "conferma" svuotando il carrello.
 */
export default function CheckoutPage() {
  const { lines, subtotal, count, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const threshold = SHOP_INFO.freeShippingThreshold;
  const shipping = subtotal >= threshold || subtotal === 0 ? 0 : 4.9;
  const total = subtotal + shipping;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SiteChrome>
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        {placed ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white p-10 text-center shadow-wine-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3f7d54] text-white">
              <CheckIcon className="h-8 w-8" />
            </div>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[28px] font-bold text-wine">
              Ordine confermato!
            </h1>
            <p className="mt-2 text-[15px] text-charcoal-soft">
              Grazie. Questa è un'anteprima dimostrativa: nessun pagamento è stato
              effettuato e nessun prodotto verrà spedito.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-gold px-8 text-[15px] font-bold uppercase tracking-wide text-charcoal shadow-gold-cta transition-colors hover:bg-gold-deep hover:text-white"
            >
              Torna alla home
            </Link>
          </div>
        ) : count === 0 ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-line bg-white p-10 text-center">
            <h1 className="font-[family-name:var(--font-display)] text-[26px] font-bold text-wine">
              Il carrello è vuoto
            </h1>
            <p className="mt-2 text-[15px] text-charcoal-soft">
              Aggiungi qualche prodotto per procedere alla cassa.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-wine px-8 text-[15px] font-semibold text-white transition-colors hover:bg-wine-deep"
            >
              Esplora il catalogo
            </Link>
          </div>
        ) : (
          <>
            <h1 className="font-[family-name:var(--font-display)] text-[30px] font-bold text-wine md:text-[38px]">
              Cassa
            </h1>
            <p className="mt-1 text-[14px] text-charcoal-soft">
              Anteprima dimostrativa — nessun pagamento reale.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
              {/* Form */}
              <form onSubmit={onSubmit} className="space-y-5">
                <fieldset className="rounded-2xl border border-line bg-white p-5">
                  <legend className="px-1 text-[13px] font-bold uppercase tracking-wide text-charcoal-soft">
                    Dati di contatto
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nome" name="firstName" required />
                    <Field label="Cognome" name="lastName" required />
                    <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
                    <Field label="Telefono" name="phone" type="tel" className="sm:col-span-2" />
                  </div>
                </fieldset>

                <fieldset className="rounded-2xl border border-line bg-white p-5">
                  <legend className="px-1 text-[13px] font-bold uppercase tracking-wide text-charcoal-soft">
                    Indirizzo di spedizione
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Indirizzo" name="address" required className="sm:col-span-2" />
                    <Field label="Città" name="city" required />
                    <Field label="CAP" name="zip" required />
                    <Field label="Provincia" name="province" />
                    <Field label="Paese" name="country" defaultValue="Italia" />
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-gold px-8 text-[16px] font-bold uppercase tracking-wide text-charcoal shadow-gold-cta transition-colors hover:bg-gold-deep hover:text-white"
                >
                  Conferma ordine (demo)
                </button>
              </form>

              {/* Summary */}
              <aside className="h-fit rounded-2xl border border-line bg-white p-5 lg:sticky lg:top-28">
                <h2 className="text-[13px] font-bold uppercase tracking-wide text-charcoal-soft">
                  Riepilogo ordine
                </h2>
                <ul className="mt-4 space-y-3">
                  {lines.map((l) => (
                    <li key={l.item.id} className="flex gap-3">
                      <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-cream-deep">
                        <BottleImage src={l.item.image} alt={l.item.name} sizes="56px" className="object-cover" />
                        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-wine px-1 text-[11px] font-bold text-white">
                          {l.qty}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <span className="text-[13.5px] font-semibold leading-snug text-charcoal">{l.item.name}</span>
                        <span className="text-[12px] text-charcoal-soft">{l.item.producer}</span>
                        <span className="mt-auto text-[13.5px] font-bold text-charcoal">{formatEuro(l.lineTotal)}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <dl className="mt-5 space-y-2 border-t border-line pt-4 text-[14px]">
                  <div className="flex justify-between">
                    <dt className="text-charcoal-soft">Subtotale</dt>
                    <dd className="font-semibold text-charcoal">{formatEuro(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-charcoal-soft">Spedizione</dt>
                    <dd className="font-semibold text-charcoal">
                      {shipping === 0 ? "Gratuita" : formatEuro(shipping)}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-line pt-2 text-[17px] font-bold text-charcoal">
                    <dt>Totale</dt>
                    <dd>{formatEuro(total)}</dd>
                  </div>
                </dl>
                {subtotal < threshold && (
                  <p className="mt-3 text-[12.5px] text-charcoal-soft">
                    Aggiungi {formatEuro(threshold - subtotal)} per la consegna gratuita.
                  </p>
                )}
              </aside>
            </div>
          </>
        )}
      </div>
    </SiteChrome>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-[12.5px] font-medium text-charcoal-soft">
        {label} {required && <span className="text-wine-soft">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="min-h-[46px] w-full rounded-xl border border-line bg-cream px-3.5 text-[14px] text-charcoal outline-none transition-colors focus:border-wine"
      />
    </label>
  );
}
