import type { NextConfig } from "next"
import path from "path"

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    if (isProd) {
      config.resolve.alias["@workspace/ui"] = require.resolve("@workspace/ui")
      config.resolve.alias["@workspace/ui/globals.css"] = path.resolve(
        __dirname,
        "../../packages/ui/src/styles/globals.css"
      )
    }
    return config
  },
}

export default nextConfig