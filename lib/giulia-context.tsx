"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SHOP_INFO } from "@/lib/constants";

/* ------------------------------------------------------------------ *
 * Cannabilla — stato del persona "Giulia" (consulente AI, soft gate).
 *
 * Persistenza: localStorage (persiste tra refresh e navigazione).
 * Flusso conversazione:
 *   Turno 1  — Giulia si presenta e chiede il nome (messaggio scriptato).
 *   Turno 2  — l'utente dà il nome → saluto scriptato personalizzato.
 *   Turno 3+ — domande reali → /api/chat (persona Giulia).
 *   Alla 2ª domanda reale → offerta email SOFT dentro la risposta (una sola volta).
 *   Nessun altro gate dopo. Guardia medica sempre attiva.
 * ------------------------------------------------------------------ */

export interface GiuliaMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  ts: string;
  streaming?: boolean;
  fallback?: boolean;
  /** Mostra la card offerta email in coda a questo messaggio (soft gate). */
  showOffer?: boolean;
  /** Messaggio di reindirizzo medico: mostra bottone WhatsApp inline. */
  medical?: boolean;
}

/** Stato di lavoro in memoria (NON tutto persistito — vedi LocalState). */
interface PersistState {
  name: string | null;
  email: string | null;
  emailConsented: boolean;
  emailConsentAt: string | null;
  dismissedWidgetAt: string | null;
  turnCount: number;
  messages: GiuliaMessage[];
  emailOfferShown: boolean;
  emailOfferAccepted: boolean;
}

/**
 * Sottoinsieme PERSISTITO in localStorage: solo dati utili tra visite.
 *  - name / email / consenso → riconoscere l'utente di ritorno.
 *  - dismissedWidgetAt → "nascondi widget per 7 giorni" (scelta deliberata).
 * NON persistiti (solo in memoria, freschi a ogni reload):
 *  - dismissal del teaser → il popup RIcompare a ogni ricarica.
 *  - messaggi / turnCount / offerta email → conversazione fresca a ogni reload.
 */
interface LocalState {
  name: string | null;
  email: string | null;
  emailConsented: boolean;
  emailConsentAt: string | null;
  dismissedWidgetAt: string | null;
}

const LOCAL_KEY = "cannabilla_giulia_v2";
const MAX_USER_MESSAGES = 20;
const DAY = 864e5;

/** Parole che segnalano una richiesta medica → reindirizzo dermatologo. */
const MEDICAL_RE =
  /\b(acne|dermatit\w*|psorias\w*|eczem\w*|rosace\w*|melanom\w*|tumor\w*|allerg\w*|infezion\w*|micosi|herpes|verruc\w*|neo\b|nei\b|diagnos\w*|malatt\w*|patolog\w*|cortison\w*|antibiotic\w*|cura(re)?\b|guarir\w*|curare|terap\w*)/i;

function nowIso(): string {
  return new Date().toISOString();
}
function uid(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/** Estrae un nome plausibile dalla frase dell'utente (1-2 parole). */
export function extractName(raw: string): string | null {
  let s = raw.trim();
  // rimuove aperture comuni ("mi chiamo", "sono", "ciao", "il mio nome è")
  s = s.replace(
    /^(ciao[,!\s]*)?(mi\s+chiamo|sono|il\s+mio\s+nome\s+è|il\s+mio\s+nome\s+e|piacere,?\s*)\s+/i,
    "",
  );
  s = s.replace(/[.!?,;:]+$/g, "").trim();
  const words = s.split(/\s+/).filter(Boolean);
  if (words.length === 0) return null;
  const looksName = (w: string) => /^[\p{L}'’-]{2,}$/u.test(w);
  const first = words[0];
  if (!looksName(first)) return null;
  // nome composto (es. "Maria Elena") se anche la seconda parola sembra un nome
  const parts = [first];
  if (words[1] && looksName(words[1]) && words.length <= 3) parts.push(words[1]);
  const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  return parts.map(cap).join(" ");
}

// Compatto (una riga) per la scheda teaser ridotta.
const TEASER_GREETING = "Ciao! Sono Giulia 🌿 Come ti chiami?";
// Visitatrice di ritorno (nome già noto da localStorage): salta la domanda del nome.
const TEASER_GREETING_RETURNING = (name: string) =>
  `Bentornata ${name}! Sono di nuovo qui 🌿 Come posso aiutarti oggi?`;

/** Saluto iniziale: personalizzato se il nome è già noto, altrimenti chiede il nome.
 *  Nessun controllo della chiave lato client — Giulia si assume sempre attiva. */
function buildGreeting(name: string | null): string {
  return name ? TEASER_GREETING_RETURNING(name) : TEASER_GREETING;
}
const NAME_RETRY = "Dimmi solo il tuo nome, così posso essere più utile 😊";
// Guardia medica: nessun bottone WhatsApp, ma il numero è citato in modo naturale.
const MEDICAL_REPLY = (name: string) =>
  `Questa è una domanda importante${name ? `, ${name}` : ""}, ma non sono qualificata per dare consigli medici. Ti consiglio di consultare un dermatologo. Se vuoi un consulto personalizzato con il nostro esperto Cannabilla, puoi scrivere su WhatsApp al ${SHOP_INFO.whatsapp.display}.`;

function greetWithName(name: string): string {
  return `Piacere di conoscerti, ${name}! Sono qui per aiutarti a trovare i prodotti Cannabilla giusti per te. Cosa posso fare per te oggi? Cerchi un consiglio per la tua pelle, un prodotto specifico, o vuoi conoscere meglio la nostra filosofia dai Monti Sibillini?`;
}

interface GiuliaContextValue {
  ready: boolean;
  isOpen: boolean;
  isStreaming: boolean;
  capReached: boolean;
  name: string | null;
  email: string | null;
  messages: GiuliaMessage[];
  teaserText: string;
  showTeaser: boolean;
  widgetHidden: boolean;
  openChat: () => void;
  closeChat: () => void;
  dismissTeaser: () => void;
  hideWidget: () => void;
  markTeaserSeen: () => void;
  sendMessage: (text: string) => void;
  submitEmail: (email: string) => Promise<boolean>;
  declineOffer: () => void;
}

const GiuliaContext = createContext<GiuliaContextValue | null>(null);

export function GiuliaProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [messages, setMessages] = useState<GiuliaMessage[]>([]);
  // Dismissal del teaser SOLO in memoria → si azzera a ogni ricarica.
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const [dismissedWidgetAt, setDismissedWidgetAt] = useState<string | null>(null);

  const stateRef = useRef<PersistState>({
    name: null,
    email: null,
    emailConsented: false,
    emailConsentAt: null,
    dismissedWidgetAt: null,
    turnCount: 0,
    messages: [],
    emailOfferShown: false,
    emailOfferAccepted: false,
  });
  const hydrated = useRef(false);
  const askedNameRef = useRef(false);
  const userMsgCountRef = useRef(0);

  /* ---- hydrate ----
     Ripristina SOLO il sottoinsieme locale (nome/email/consenso/widget-hide).
     I messaggi e la dismissal del teaser NON vengono ripristinati: a ogni reload
     la conversazione riparte da zero e il popup ricompare a 5s.
     NB: nessun probe della chiave lato client — la disponibilità dell'AI è decisa
     esclusivamente da /api/chat (server). Giulia si mostra sempre ottimisticamente. */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) {
        const p = JSON.parse(raw) as Partial<LocalState>;
        stateRef.current = {
          ...stateRef.current,
          name: p.name ?? null,
          email: p.email ?? null,
          emailConsented: p.emailConsented ?? false,
          emailConsentAt: p.emailConsentAt ?? null,
          dismissedWidgetAt: p.dismissedWidgetAt ?? null,
        };
        setName(p.name ?? null);
        setEmail(p.email ?? null);
        setDismissedWidgetAt(p.dismissedWidgetAt ?? null);
      }
    } catch {
      /* ignore */
    } finally {
      hydrated.current = true;
      setReady(true);
    }
  }, []);

  /* ---- persist ---- Aggiorna lo stato in memoria e scrive in localStorage
     SOLO il sottoinsieme LocalState (mai messaggi né dismissal del teaser). */
  const persist = useCallback((patch: Partial<PersistState>) => {
    stateRef.current = { ...stateRef.current, ...patch };
    if (!hydrated.current) return;
    try {
      const local: LocalState = {
        name: stateRef.current.name,
        email: stateRef.current.email,
        emailConsented: stateRef.current.emailConsented,
        emailConsentAt: stateRef.current.emailConsentAt,
        dismissedWidgetAt: stateRef.current.dismissedWidgetAt,
      };
      localStorage.setItem(LOCAL_KEY, JSON.stringify(local));
    } catch {
      /* ignore */
    }
  }, []);

  // Tiene sincronizzato stateRef.messages (in memoria) per la history API —
  // senza persistere: i messaggi restano solo nel giro di vita della pagina.
  useEffect(() => {
    stateRef.current.messages = messages;
  }, [messages]);

  /* ---- teaser / widget visibility ----
     showTeaser dipende SOLO dallo stato in memoria → torna true a ogni reload. */
  const showTeaser = !teaserDismissed;
  const widgetHidden = (() => {
    if (!dismissedWidgetAt) return false;
    return Date.now() - new Date(dismissedWidgetAt).getTime() < 7 * DAY;
  })();
  const teaserText = buildGreeting(name);

  const openChat = useCallback(() => {
    setIsOpen(true);
    // seed the greeting so the drawer starts the flow (personalizzato se nome noto)
    setMessages((prev) => {
      if (prev.length > 0) return prev;
      return [
        {
          id: uid(),
          role: "assistant",
          content: buildGreeting(stateRef.current.name),
          ts: nowIso(),
        },
      ];
    });
  }, []);

  const closeChat = useCallback(() => setIsOpen(false), []);

  // Dismissal SOLO in memoria: niente localStorage/sessionStorage → il popup
  // ricompare alla prossima ricarica.
  const dismissTeaser = useCallback(() => setTeaserDismissed(true), []);
  const markTeaserSeen = useCallback(() => setTeaserDismissed(true), []);

  const hideWidget = useCallback(() => {
    const ts = nowIso();
    setDismissedWidgetAt(ts);
    setIsOpen(false);
    persist({ dismissedWidgetAt: ts });
  }, [persist]);

  const capReached = userMsgCountRef.current >= MAX_USER_MESSAGES;

  /* ---- assistant API turn ---- */
  const runApiTurn = useCallback(
    async (history: GiuliaMessage[], userName: string, turnCount: number, offer: boolean) => {
      setIsStreaming(true);
      const assistantId = uid();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "", ts: nowIso(), streaming: true },
      ]);
      const patchAssistant = (u: (m: GiuliaMessage) => GiuliaMessage) =>
        setMessages((prev) => prev.map((m) => (m.id === assistantId ? u(m) : m)));

      // Messaggio di degrado, differenziato in base al tipo d'errore riportato
      // dalla route. In tutti i casi resta caloroso e indirizza a WhatsApp.
      const fallback = (errorType?: string) => {
        const wa = SHOP_INFO.whatsapp.display;
        let content = `Un momento, sto tornando… In questo momento non riesco a rispondere 🌿 Riprova tra poco, oppure scrivimi su WhatsApp al ${wa}.`;
        if (errorType === "rate_limit_error") {
          content = `Un attimo, sto rispondendo a tante persone insieme 🌿 Riprova tra qualche secondo, oppure scrivimi su WhatsApp al ${wa}.`;
        } else if (errorType === "credit_balance_too_low" || errorType === "api_unavailable") {
          content = `Sto tornando presto 🌿 Nel frattempo, per un consiglio immediato scrivimi su WhatsApp al ${wa}.`;
        }
        patchAssistant((m) => ({ ...m, content, streaming: false, fallback: true }));
      };

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: userName,
            turnCount,
            messages: history
              .filter((m) => !m.fallback)
              .map((m) => ({ role: m.role, content: m.content })),
          }),
        });
        const ct = res.headers.get("content-type") ?? "";
        if (!res.ok || ct.includes("application/json") || !res.body) {
          // Prova a leggere il tipo d'errore per un messaggio più pertinente.
          let errorType: string | undefined;
          if (ct.includes("application/json")) {
            try {
              const data = (await res.json()) as { errorType?: string; error?: string };
              errorType = data.errorType ?? data.error;
            } catch {
              /* corpo non leggibile — messaggio generico */
            }
          }
          fallback(errorType);
          return;
        }
        const reader = res.body.getReader();
        const dec = new TextDecoder();
        let acc = "";
        let received = false;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = dec.decode(value, { stream: true });
          if (chunk) {
            received = true;
            acc += chunk;
            patchAssistant((m) => ({ ...m, content: acc, streaming: true }));
          }
        }
        if (!received) {
          fallback();
          return;
        }
        patchAssistant((m) => ({ ...m, streaming: false, showOffer: offer }));
        if (offer) persist({ emailOfferShown: true });
      } catch {
        fallback();
      } finally {
        setIsStreaming(false);
      }
    },
    [persist],
  );

  /* ---- send a user message (drives the whole flow) ---- */
  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming) return;

      const userMsg: GiuliaMessage = { id: uid(), role: "user", content: trimmed, ts: nowIso() };
      const baseHistory = [...stateRef.current.messages, userMsg];
      setMessages((prev) => [...prev, userMsg]);
      userMsgCountRef.current += 1;

      // Phase 1 — capture the name.
      if (!stateRef.current.name) {
        const parsed = extractName(trimmed);
        if (!parsed) {
          if (!askedNameRef.current) {
            askedNameRef.current = true;
            setMessages((prev) => [
              ...prev,
              { id: uid(), role: "assistant", content: NAME_RETRY, ts: nowIso() },
            ]);
            return;
          }
          // second failed attempt: accept the raw first token
          const fallbackName =
            trimmed.split(/\s+/)[0].replace(/[^\p{L}'’-]/gu, "").slice(0, 24) || "amica";
          setName(fallbackName);
          persist({ name: fallbackName });
          setMessages((prev) => [
            ...prev,
            { id: uid(), role: "assistant", content: greetWithName(fallbackName), ts: nowIso() },
          ]);
          return;
        }
        setName(parsed);
        persist({ name: parsed });
        setMessages((prev) => [
          ...prev,
          { id: uid(), role: "assistant", content: greetWithName(parsed), ts: nowIso() },
        ]);
        return;
      }

      // Phase 2 — real questions.
      const currentName = stateRef.current.name;

      // Medical guard — deterministic redirect, no API call.
      if (MEDICAL_RE.test(trimmed)) {
        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: "assistant",
            content: MEDICAL_REPLY(currentName),
            ts: nowIso(),
            medical: true,
          },
        ]);
        return;
      }

      if (userMsgCountRef.current > MAX_USER_MESSAGES) {
        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: "assistant",
            content: `Abbiamo chiacchierato parecchio! Per continuare, scrivimi su WhatsApp al ${SHOP_INFO.whatsapp.display} — il team Cannabilla è felice di aiutarti 🌿`,
            ts: nowIso(),
            fallback: true,
          },
        ]);
        return;
      }

      const turnCount = stateRef.current.turnCount + 1;
      persist({ turnCount });

      // Soft offer appears on the 2nd real question, once.
      const offer = turnCount === 2 && !stateRef.current.emailOfferShown;

      void runApiTurn(baseHistory, currentName, turnCount, offer);
    },
    [isStreaming, persist, runApiTurn],
  );

  /* ---- soft email offer ---- */
  const submitEmail = useCallback(
    async (value: string): Promise<boolean> => {
      const consentAt = nowIso();
      try {
        await fetch("/api/newsletter", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name: stateRef.current.name, email: value, consentTimestamp: consentAt }),
        });
      } catch {
        /* even on failure we optimistically confirm — preview only */
      }
      setEmail(value);
      persist({
        email: value,
        emailConsented: true,
        emailConsentAt: consentAt,
        emailOfferAccepted: true,
      });
      const who = stateRef.current.name ?? "";
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: `Perfetto${who ? `, ${who}` : ""}! Ti ho appena mandato il codice sconto. Continuiamo il consiglio 🌿`,
          ts: nowIso(),
        },
      ]);
      return true;
    },
    [persist],
  );

  const declineOffer = useCallback(() => {
    // just mark shown so it never reappears; no penalty
    persist({ emailOfferShown: true, emailOfferAccepted: false });
    setMessages((prev) => prev.map((m) => (m.showOffer ? { ...m, showOffer: false } : m)));
  }, [persist]);

  const value: GiuliaContextValue = {
    ready,
    isOpen,
    isStreaming,
    capReached,
    name,
    email,
    messages,
    teaserText,
    showTeaser,
    widgetHidden,
    openChat,
    closeChat,
    dismissTeaser,
    hideWidget,
    markTeaserSeen,
    sendMessage,
    submitEmail,
    declineOffer,
  };

  return <GiuliaContext.Provider value={value}>{children}</GiuliaContext.Provider>;
}

export function useGiulia(): GiuliaContextValue {
  const ctx = useContext(GiuliaContext);
  if (!ctx) throw new Error("useGiulia deve essere usato dentro <GiuliaProvider>");
  return ctx;
}
