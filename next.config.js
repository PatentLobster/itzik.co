const withPlugins = require('next-compose-plugins')
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
    openAnalyzer: true,

})


const nextConfig = {
  // Your existing module.exports
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
  },
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins

const nextPlugins = [
  withBundleAnalyzer,
  [withSentryConfig, { silent: true }]
];

// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
module.exports = withPlugins(nextPlugins, nextConfig)