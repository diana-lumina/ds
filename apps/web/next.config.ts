import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  webpack: (config) => {
    config.resolve.alias["@workspace/ui"] = "/vercel/path0/packages/ui/dist/index.mjs"
    return config
  },
}

export default nextConfig