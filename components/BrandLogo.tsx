/**
 * Cannabilla — inline SVG brand logo.
 *
 * Arrangement: a stylised seven-leaflet hemp leaf on the LEFT, the serif
 * "Cannabilla" wordmark on the RIGHT, vertically centred.
 *
 * Colour: everything is drawn in `currentColor`, defaulting to the brand hemp
 * green. Pass `color` to recolour the whole lockup — e.g. `color="#fff"` for
 * dark bands.
 */

type LogoSize = "sm" | "md" | "lg";
type LogoVariant = "full" | "icon-only";

const BRAND_GREEN = "#2f5d3a";

/** Rendered pixel height per size token (width scales with the viewBox ratio). */
const HEIGHTS: Record<LogoSize, number> = { sm: 32, md: 44, lg: 96 };

/** Build a palmate hemp leaf as 7 slim leaflets sharing a base point. */
function hempLeafPath(): string {
  const bx = 28;
  const by = 60;
  const angles = [-80, -54, -28, 0, 28, 54, 80]; // degrees from vertical
  const lengths = [15, 24, 32, 36, 32, 24, 15];
  const halfBase = 3.2;
  let d = "";
  for (let i = 0; i < angles.length; i++) {
    const a = (angles[i] * Math.PI) / 180;
    const sin = Math.sin(a);
    const cos = Math.cos(a);
    const L = lengths[i];
    const tipX = bx + L * sin;
    const tipY = by - L * cos;
    const midX = bx + L * 0.5 * sin;
    const midY = by - L * 0.5 * cos;
    const perpX = cos; // perpendicular to leaflet direction
    const perpY = sin;
    const c1x = midX + perpX * (halfBase + 1.6);
    const c1y = midY + perpY * (halfBase + 1.6);
    const c2x = midX - perpX * (halfBase + 1.6);
    const c2y = midY - perpY * (halfBase + 1.6);
    const b1x = bx + perpX * halfBase;
    const b1y = by + perpY * halfBase;
    const b2x = bx - perpX * halfBase;
    const b2y = by - perpY * halfBase;
    d += `M ${b1x.toFixed(1)} ${b1y.toFixed(1)} Q ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)} Q ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${b2x.toFixed(1)} ${b2y.toFixed(1)} Z `;
  }
  d += `M 26.6 60 L 28 64 L 29.4 60 Z`; // short stem
  return d;
}

const LEAF = hempLeafPath();

function HempLeaf() {
  return <path d={LEAF} fill="currentColor" />;
}

export function BrandLogo({
  size = "md",
  variant = "full",
  className = "",
  title = "Cannabilla",
  color = BRAND_GREEN,
}: {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  title?: string;
  color?: string;
}) {
  const height = HEIGHTS[size];

  if (variant === "icon-only") {
    const width = Math.round((height * 56) / 64);
    return (
      <svg
        viewBox="0 0 56 64"
        width={width}
        height={height}
        role="img"
        aria-label={title}
        className={className}
        style={{ color }}
      >
        <HempLeaf />
      </svg>
    );
  }

  // Full lockup: leaf (left) + single-line wordmark (right). viewBox 0 0 260 60.
  const width = Math.round((height * 260) / 60);
  return (
    <svg
      viewBox="0 0 260 60"
      width={width}
      height={height}
      role="img"
      aria-label={title}
      className={className}
      style={{ color }}
    >
      <g transform="translate(2,-2)">
        <HempLeaf />
      </g>
      <text
        x={72}
        y={39}
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
          fontSize: "30px",
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        Cannabilla
      </text>
    </svg>
  );
}
