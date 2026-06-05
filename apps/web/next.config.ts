import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@workspace/ui": require.resolve("@workspace/ui"),
    }
    return config
  },
}

export default nextConfig