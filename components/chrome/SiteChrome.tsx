import type { ReactNode } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { ExpertWidget } from "./ExpertWidget";
import { GiuliaWidget } from "@/components/chatbot/GiuliaWidget";

/** Chrome condiviso: barra annunci + header sticky, contenuto, footer, widget. */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <ExpertWidget />
      <GiuliaWidget />
    </>
  );
}
