import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  webpack: (config) => {
    config.resolve.alias["@workspace/ui"] = path.resolve(
      __dirname,
      "../../packages/ui/dist/index.mjs"
    )
    return config
  },
}

export default nextConfig