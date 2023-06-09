/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  env: {
    LOCALHOST: 'http://localhost:3000',
    DEPLOY: 'https://bhagavad-gita-zeta.vercel.app/',
    MUSIC: 'music',
    VIDEO: 'video'
  },
}

module.exports = nextConfig
