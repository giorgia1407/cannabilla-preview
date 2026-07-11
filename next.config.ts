import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product & atmospheric photos are hot-linked directly from the Ecwid
    // store's Cloudfront CDN (same URLs/order as cannabilla.it) for preview
    // parity. Editorial/hero/concern/ingredient imagery uses verified
    // Unsplash IDs (hot-linked via <Photo> with unoptimized).
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "d2j6dbq0eux0bg.cloudfront.net", pathname: "/**" },
    ],
  },
};

export default nextConfig;
