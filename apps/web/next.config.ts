import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@workspace/ui": path.resolve(__dirname, "../../packages/ui/src/index.ts"),
    }
    return config
  },
}

export default nextConfig