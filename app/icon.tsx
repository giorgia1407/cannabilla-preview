import { ImageResponse } from "next/og";
import { hempLeafSvgMarkup, BRAND_GREEN } from "@/components/leaf";

/**
 * Browser-tab favicon — the hemp-leaf glyph alone, brand green on a transparent
 * background, rendered at 32×32 (embedded as an <img> data URI, which Satori
 * renders more reliably than inline vector paths).
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const svg = hempLeafSvgMarkup(BRAND_GREEN);
  const dataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <img src={dataUri} alt="" width={28} height={32} />
      </div>
    ),
    { ...size },
  );
}
