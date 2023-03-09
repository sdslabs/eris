/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_LOGIN: process.env.NEXT_PUBLIC_LOGIN,
    NEXT_PUBLIC_SIGNUP: process.env.NEXT_PUBLIC_SIGNUP,
    NEXT_PUBLIC_LOGOUT: process.env.NEXT_PUBLIC_LOGOUT,
    NEXT_PUBLIC_REDIRECT: process.env.NEXT_PUBLIC_REDIRECT,
  }
}

module.exports = nextConfig
