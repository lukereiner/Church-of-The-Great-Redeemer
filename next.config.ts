import type { NextConfig } from "next";

const nextConfig = {
  // output: 'standalone', -- for docker use, uncomment
  distDir: 'azure_build',
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
	{
        protocol: "https",
        hostname: "content.greatredeerchurch.org",
      },

    ],
  },
};
export default nextConfig;

// https://github.com/vercel/next.js/discussions/56390