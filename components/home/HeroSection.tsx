"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HERO_SLIDES, type DesktopTextPos } from "@/lib/hero";

const ROTATE_MS = 1500;
const FADE_MS = 400;
const DOT_PAUSE_MS = 3000;

// Posizione blocco testo (letterale, così Tailwind genera le classi):
// mobile = bottom-center; desktop (md) = sinistra o destra, centrato in verticale.
const TEXTPOS: Record<DesktopTextPos, string> = {
  "left-center":
    "bottom-6 left-1/2 -translate-x-1/2 text-center md:bottom-auto md:left-20 md:right-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:text-left",
  "right-center":
    "bottom-6 left-1/2 -translate-x-1/2 text-center md:bottom-auto md:left-auto md:right-20 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:text-right",
};

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const pausedRef = useRef(false); // hover
  const dotPausedRef = useRef(false); // pausa temporanea dopo click su un dot
  const dotTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Autoplay 1.5s — salta se in hover, tab nascosta, o pausa post-click dot.
  // prefers-reduced-motion → nessun autoplay (resta la slide 1, statica).
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq?.matches) return;
    const id = window.setInterval(() => {
      if (pausedRef.current || dotPausedRef.current || document.hidden) return;
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, ROTATE_MS);
    return () => {
      window.clearInterval(id);
      if (dotTimer.current) clearTimeout(dotTimer.current);
    };
  }, []);

  // Traccia il breakpoint per l'object-position corretto (desktop vs mobile).
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Preload delle slide 2-4 (variante corretta per viewport) dopo il mount.
  useEffect(() => {
    const mobile = window.matchMedia?.("(max-width: 768px)").matches;
    HERO_SLIDES.slice(1).forEach((s) => {
      const img = new window.Image();
      img.src = mobile ? s.mobileImage : s.desktopImage;
    });
  }, []);

  function goTo(i: number) {
    setActive(i);
    dotPausedRef.current = true;
    if (dotTimer.current) clearTimeout(dotTimer.current);
    dotTimer.current = setTimeout(() => {
      dotPausedRef.current = false;
    }, DOT_PAUSE_MS);
  }

  const first = HERO_SLIDES[0];

  return (
    <section
      className="relative min-h-[calc(100dvh-172px)] w-full overflow-hidden lg:min-h-[calc(100dvh-180px)]"
      aria-roledescription="carousel"
      aria-label="Presentazione Cannabilla"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* Preload LCP (slide 1), variante per viewport — hoisted da React 19. */}
      <link rel="preload" as="image" href={first.desktopImage} media="(min-width: 769px)" />
      <link rel="preload" as="image" href={first.mobileImage} media="(max-width: 768px)" />

      {HERO_SLIDES.map((s, i) => {
        const isActive = i === active;
        return (
          <div
            key={s.id}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
              pointerEvents: isActive ? "auto" : "none",
            }}
            aria-hidden={isActive ? undefined : true}
          >
            {/* Immagine art-directed: portrait mobile / landscape desktop */}
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={`${s.mobileFallback} 720w, ${s.mobileImage} 1080w`}
                sizes="100vw"
              />
              <source
                media="(min-width: 769px)"
                srcSet={`${s.desktopFallback} 1600w, ${s.desktopImage} 2400w`}
                sizes="100vw"
              />
              <img
                src={s.desktopImage}
                alt={isActive ? s.alt : ""}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  objectPosition: isMobile ? s.objectPosition.mobile : s.objectPosition.desktop,
                  backgroundImage: `url(${s.desktopBlur})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </picture>

            {/* Scrim (solo se la slide ha testo) */}
            {s.scrimGradient && (
              <>
                <div className="absolute inset-0 md:hidden" style={{ background: s.scrimGradient.mobile }} />
                <div className="absolute inset-0 hidden md:block" style={{ background: s.scrimGradient.desktop }} />
              </>
            )}

            {/* Blocco testo per-slide (assente sulle slide senza headline) */}
            {s.textPosition && s.headline && (
              <div
                className={`absolute z-[1] w-[90vw] max-w-[560px] md:w-auto md:max-w-[640px] ${TEXTPOS[s.textPosition.desktop]} on-dark`}
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
              >
                {s.eyebrow && (
                  <p
                    className="text-[13px] font-semibold uppercase sm:text-[14px]"
                    style={{ color: "#F8F6F0", letterSpacing: "0.15em" }}
                  >
                    {s.eyebrow}
                  </p>
                )}
                <h1
                  className="mt-3 break-words font-display font-bold leading-[1.05] text-[32px] sm:text-[48px] lg:text-[62px]"
                  style={{ color: "#FFFFFF", textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
                >
                  {s.headline}
                </h1>
                {s.subheadline && (
                  <p
                    className="mx-auto mt-4 max-w-[540px] text-[17px] sm:text-[20px] md:mx-0"
                    style={{ color: "rgba(248,246,240,0.9)" }}
                  >
                    {s.subheadline}
                  </p>
                )}
                {(s.primaryCta || s.secondaryCta) && (
                  <div
                    className={`mt-7 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center ${
                      s.textPosition.desktop === "right-center" ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {s.primaryCta && (
                      <Link href={s.primaryCta.href} className="btn btn-primary btn-lg" tabIndex={isActive ? 0 : -1}>
                        {s.primaryCta.label}
                      </Link>
                    )}
                    {s.secondaryCta && (
                      <Link href={s.secondaryCta.href} className="btn btn-secondary btn-lg" tabIndex={isActive ? 0 : -1}>
                        {s.secondaryCta.label}
                      </Link>
                    )}
                  </div>
                )}
                {s.trustLine && (
                  <p className="mt-6 text-[13px]" style={{ color: "#F8F6F0" }}>
                    {s.trustLine}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Progress dots */}
      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-3">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Vai alla slide ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            className={`h-2 w-2 rounded-full border border-[#F8F6F0] transition-colors ${
              i === active ? "bg-[#F8F6F0]" : "bg-transparent hover:bg-[#F8F6F0]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
