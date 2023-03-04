/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_LOGIN: process.env.NEXT_PUBLIC_LOGIN,
    NEXT_PUBLIC_SIGNUP: process.env.NEXT_PUBLIC_SIGNUP,
  }
}

module.exports = nextConfig
