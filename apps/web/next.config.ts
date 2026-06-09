import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.conditionNames = ["require", "import", "default"]
    return config
  },
}

export default nextConfig