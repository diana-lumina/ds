import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    if (isProd) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@workspace/ui": require.resolve("@workspace/ui"),
      }
    }
    return config
  },
}

export default nextConfig