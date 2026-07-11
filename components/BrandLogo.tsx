/**
 * Cannabilla — brand logo lockup.
 *
 * Renders the real Cannabilla artwork via Next.js <Image>:
 *  - `variant="full"`     → green badge + serif wordmark (public/brand/cannabilla-logo.png)
 *  - `variant="icon-only"`→ square badge glyph only     (public/brand/cannabilla-badge.png)
 *
 * The full lockup source is 1080×320 (ratio 3.375); rendered widths below track
 * that ratio so the artwork is never stretched.
 */
import Image from "next/image";

type LogoSize = "sm" | "md" | "lg";
type LogoVariant = "full" | "icon-only";

/** Rendered dimensions per size token (full lockup keeps the 3.375 aspect ratio). */
const SIZE_MAP: Record<LogoSize, { fullW: number; fullH: number; iconSize: number }> = {
  sm: { fullW: 169, fullH: 50, iconSize: 32 },
  md: { fullW: 240, fullH: 71, iconSize: 44 },
  lg: { fullW: 338, fullH: 100, iconSize: 64 },
};

export function BrandLogo({
  size = "md",
  variant = "full",
  className = "",
  priority = false,
}: {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
}) {
  const dims = SIZE_MAP[size];

  if (variant === "icon-only") {
    return (
      <Image
        src="/brand/cannabilla-badge.png"
        alt="Cannabilla"
        width={dims.iconSize}
        height={dims.iconSize}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src="/brand/cannabilla-logo.png"
      alt="Cannabilla — Cosmesi Naturale dai Monti Sibillini"
      width={dims.fullW}
      height={dims.fullH}
      className={className}
      priority={priority}
    />
  );
}
