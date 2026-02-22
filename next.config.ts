import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // GitHub PagesではNext.jsの画像最適化が使えないため必須
  },
  basePath: '/my-portfolio',
};

export default nextConfig;