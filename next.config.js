/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === 'true'
const nextConfig = {
  reactStrictMode: true,
  ...(isExport && {
    output: 'export',
    basePath: '/Affy',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
