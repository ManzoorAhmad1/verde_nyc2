/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.elfsightcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'verde-nyc-s3.s3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
    ],
    domains: ['images.squarespace-cdn.com', 'files.elfsightcdn.com', 'verde-nyc-s3.s3.eu-north-1.amazonaws.com'],
    // Image Optimization configured to reduce file size and improve scrolling smoothness
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig