import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"
const isVercel = !!process.env.VERCEL

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    if (isProd) {
      config.resolve.alias["@workspace/ui"] = require.resolve("@workspace/ui")
    }
    if (isVercel) {
      config.resolve.alias["@workspace/ui/globals.css"] =
        "/vercel/path0/packages/ui/src/styles/globals.css"
    }
    return config
  },
}

export default nextConfig