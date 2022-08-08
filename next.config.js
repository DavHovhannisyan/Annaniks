/** @type {import('next').NextConfig} */
const {i18n} = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  compress: false,
  poweredByHeader: false,
  generateEtags: false,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },

}

module.exports = nextConfig
