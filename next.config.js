/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: "http://localhost:9898",
  },
};

module.exports = nextConfig;
