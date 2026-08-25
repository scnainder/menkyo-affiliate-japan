/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  images: {
    domains: ['menkyo.me'],
  },
}

module.exports = nextConfig
