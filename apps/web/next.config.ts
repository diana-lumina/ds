import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  turbopack: {
    resolveAlias: {
      "@workspace/ui": path.resolve(__dirname, "../../packages/ui/src/index.ts"),
    },
  },
}

export default nextConfig