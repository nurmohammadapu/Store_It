import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/5.x/initials/svg/**",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
    dangerouslyAllowSVG: true, // Enable SVG support
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Ensure security when enabling SVGs
  },
};

export default nextConfig;
