/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true, // Enable if you're using styled-components
  },
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  images: {
    domains: [
      'assets.aceternity.com', 
      'aceternity.com', 
      'images.unsplash.com' // Add Unsplash domain here
    ],
  },
};

export default nextConfig;
