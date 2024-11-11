/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

// Configure PWA settings
const withPWAConfig = {
  dest: 'public',
  // Place additional PWA-related options here if needed
};

const nextConfig = {
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
        ],
      },
      experimental: {
        turbo: {
          rules: {
            '*.svg': {
              loaders: ['@svgr/webpack'],
              as: '*.js',
            },
          },
          resolveAlias: {
            underscore: 'lodash',
            mocha: { browser: 'mocha/browser-entry.js' },
          },
          resolveExtensions: [
            '.mdx',
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
            '.mjs',
            '.json',
          ],
          moduleIdStrategy: 'deterministic',
        },
      },
}

export default withPWA(withPWAConfig)(nextConfig);
