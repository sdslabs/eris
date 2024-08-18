/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_NYMERIA: process.env.NEXT_PUBLIC_NYMERIA,
  },
};

module.exports = nextConfig;
