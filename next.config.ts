import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/blog", destination: "/writing", permanent: true },
      { source: "/career", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
