import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lenis', 'react-calendly']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  }
};

export default nextConfig;
