/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Affy',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
