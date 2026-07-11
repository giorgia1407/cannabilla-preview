"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { X, Send } from "lucide-react";
import { GIULIA } from "@/lib/giulia-assets";
import { useGiulia } from "@/lib/giulia-context";
import { GiuliaMessage } from "./GiuliaMessage";

/** Drawer chat a tutta altezza — 420px desktop, schermo intero mobile. */
export function GiuliaDrawer() {
  const { isOpen, closeChat, messages, sendMessage, isStreaming, capReached } = useGiulia();
  const [entered, setEntered] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) requestAnimationFrame(() => setEntered(true));
    else setEntered(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 220);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") closeChat();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeChat]);

  if (!isOpen) return null;

  function submit() {
    if (!input.trim() || isStreaming || capReached) return;
    sendMessage(input);
    setInput("");
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    submit();
  }
  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Chat con Giulia">
      {/* scrim */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-200 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeChat}
      />
      {/* panel */}
      <div
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-cream shadow-lg transition-transform duration-200 ease-out sm:w-[420px] sm:max-w-[100vw] ${
          entered ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header (green, on-dark) */}
        <div className="on-dark flex items-center gap-3 bg-primary px-4 py-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/40">
            <Image src={GIULIA.avatar} alt={GIULIA.alt} fill sizes="40px" className="object-cover" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-base font-semibold leading-tight">{GIULIA.name}</p>
            <p className="truncate text-xs opacity-85">{GIULIA.role}</p>
          </div>
          <button
            type="button"
            onClick={closeChat}
            aria-label="Chiudi la chat"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* messages */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m) => (
            <GiuliaMessage key={m.id} message={m} />
          ))}
        </div>

        {/* input */}
        <form onSubmit={onSubmit} className="border-t border-border/70 bg-cream p-3">
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              disabled={capReached}
              placeholder={capReached ? "Continua su WhatsApp" : "Scrivi a Giulia…"}
              className="min-h-11 flex-1 resize-none rounded-xl border border-border bg-white px-3 py-2.5 text-base text-text outline-none placeholder:text-text-muted focus:border-primary disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!input.trim() || isStreaming || capReached}
              aria-label="Invia"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-white transition-opacity hover:bg-primary-dark disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
