/**
 * Shared hemp-leaf glyph for the favicon / apple-touch icon (Satori-rendered).
 * Returns a standalone SVG markup string of a palmate 7-leaflet hemp leaf.
 */

export const BRAND_GREEN = "#2f5d3a";

function leafPath(): string {
  const bx = 28;
  const by = 58;
  const angles = [-80, -54, -28, 0, 28, 54, 80];
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
    const c1x = midX + cos * (halfBase + 1.6);
    const c1y = midY + sin * (halfBase + 1.6);
    const c2x = midX - cos * (halfBase + 1.6);
    const c2y = midY - sin * (halfBase + 1.6);
    const b1x = bx + cos * halfBase;
    const b1y = by + sin * halfBase;
    const b2x = bx - cos * halfBase;
    const b2y = by - sin * halfBase;
    d += `M ${b1x.toFixed(1)} ${b1y.toFixed(1)} Q ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)} Q ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${b2x.toFixed(1)} ${b2y.toFixed(1)} Z `;
  }
  d += `M 26.8 58 L 28 64 L 29.2 58 Z`;
  return d;
}

export function hempLeafSvgMarkup(color: string = BRAND_GREEN): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 64" width="56" height="64"><path d="${leafPath()}" fill="${color}"/></svg>`;
}
