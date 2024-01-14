/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_LOGIN: process.env.NEXT_PUBLIC_LOGIN,
    NEXT_PUBLIC_SIGNUP: process.env.NEXT_PUBLIC_SIGNUP,
    NEXT_PUBLIC_LOGOUT: process.env.NEXT_PUBLIC_LOGOUT,
    NEXT_PUBLIC_REDIRECT: process.env.NEXT_PUBLIC_REDIRECT,
    NEXT_PUBLIC_RECOVERY: process.env.NEXT_PUBLIC_RECOVERY,
    NEXT_PUBLIC_LIST: process.env.NEXT_PUBLIC_LIST,
    NEXT_PUBLIC_SETTINGS: process.env.NEXT_PUBLIC_SETTINGS,
    NEXT_PUBLIC_MFA: process.env.NEXT_PUBLIC_MFA,
    NEXT_PUBLIC_TOGGLETOTP: process.env.NEXT_PUBLIC_TOGGLETOTP,
    NEXT_PUBLIC_BAN: process.env.NEXT_PUBLIC_BAN,
    NEXT_PUBLIC_DELETE: process.env.NEXT_PUBLIC_DELETE,
    NEXT_PUBLIC_VERIFY: process.env.NEXT_PUBLIC_VERIFY,
    NEXT_PUBLIC_GET_PROFILE: process.env.NEXT_PUBLIC_GET_PROFILE,
    NEXT_PUBLIC_CREATE: process.env.NEXT_PUBLIC_CREATE,
  },
};

module.exports = nextConfig;
