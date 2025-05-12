import type { NextConfig } from "next";

const nextConfig = {
  // output: 'standalone', -- for docker use, uncomment
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;

// https://github.com/vercel/next.js/discussions/56390