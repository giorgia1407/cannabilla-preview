import { ImageResponse } from "next/og";
import { hempLeafSvgMarkup, BRAND_GREEN } from "@/components/leaf";

/**
 * Apple touch icon — 180×180, the green hemp leaf centred on a warm cream
 * rounded-square tile (iOS masks to a rounded rect).
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "#faf7f0",
          borderRadius: 40,
        }}
      >
        <img src={dataUri} alt="" width={104} height={120} />
      </div>
    ),
    { ...size },
  );
}
