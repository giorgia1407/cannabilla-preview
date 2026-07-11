import type { Metadata } from "next";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { Photo } from "@/components/Photo";
import { Breadcrumb } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SHOP_INFO, getWhatsAppUrl } from "@/lib/constants";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Cannabilla: indirizzo, email, telefono e orari. Scrivici su WhatsApp o compila il modulo per ricevere assistenza.",
};

export default function ContattiPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contatti" }]} />
          <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">Contatti</h1>
          <p className="mt-3 max-w-2xl text-text-muted">
            Siamo qui per aiutarti a scegliere i prodotti giusti e per rispondere a ogni domanda. Trovi tutti i nostri
            recapiti qui sotto.
          </p>
        </div>
      </section>

      {/* Two-column: info + form */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info column */}
          <Reveal>
            <h2 className="font-display text-2xl text-text">Dove trovarci</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-medium text-text">Indirizzo</p>
                  <p className="text-sm text-text-muted">{SHOP_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-medium text-text">Email</p>
                  <a href={SHOP_INFO.emailHref} className="text-sm text-text-muted hover:text-primary">
                    {SHOP_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-medium text-text">Telefono</p>
                  <a href={SHOP_INFO.phoneHref} className="text-sm text-text-muted hover:text-primary">
                    {SHOP_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="font-medium text-text">Orari</p>
                  <p className="text-sm text-text-muted">{SHOP_INFO.hours}</p>
                </div>
              </li>
            </ul>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8 inline-flex"
            >
              <MessageCircle size={18} /> Scrivici su WhatsApp
            </a>

            {/* Map placeholder */}
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <Photo
                imgKey="valley1"
                alt={`Mappa indicativa della zona di ${SHOP_INFO.address}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-text">
                  <MapPin size={16} className="text-primary" /> Amandola (FM) — Monti Sibillini
                </span>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl text-text">Scrivici un messaggio</h2>
              <p className="mt-2 text-sm text-text-muted">
                Compila il modulo e ti risponderemo il prima possibile.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteChrome>
  );
}
