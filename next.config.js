/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["maath"],
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  }
}

module.exports = nextConfig
