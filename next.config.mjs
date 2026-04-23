/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'harsh17042005.pythonanywhere.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'harsh17042005.pythonanywhere.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
