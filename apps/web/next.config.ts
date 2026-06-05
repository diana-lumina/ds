import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  turbopack: {
    resolveAlias: {
      "@workspace/ui": path.resolve(__dirname, "../../packages/ui/dist/index.mjs"),
    },
  },
}

export default nextConfig