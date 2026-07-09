/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.parallelism = 1;
    return config;
  },
};

module.exports = nextConfig;
