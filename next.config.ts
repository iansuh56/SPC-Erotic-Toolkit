import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is hosted on Cloudflare Pages with no server runtime.
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
