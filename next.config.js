/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === 'true'
const basePath = process.env.BASE_PATH || ''
const nextConfig = {
  reactStrictMode: true,
  ...(isExport && {
    output: 'export',
    ...(basePath && { basePath, trailingSlash: true }),
  }),
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
