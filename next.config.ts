import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All product & atmospheric imagery is self-hosted under /public/products.
    // No remote image hosts (fully standalone preview — no external calls).
    remotePatterns: [],
  },
};

export default nextConfig;
