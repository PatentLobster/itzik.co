/** @type {import('next').NextConfig} */

const { withSentryConfig } = require("@sentry/nextjs")

const nextConfig = {
  async redirects() {
    return [
      // {
      //   // source: "/contact",
      //   // destination: "/#contact",
      //   // permanent: true,
      // },
    ]
  },
  experimental: {
    optimizeCss: true,
    globalNotFound: true,
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
  sentry: {
    hideSourceMaps: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },

  // Bundle analyzer
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "all",
          },
          threeJs: {
            test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
            name: "three-js",
            chunks: "all",
          },
        },
      }
    }

    return config
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
