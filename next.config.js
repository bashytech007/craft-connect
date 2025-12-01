// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     skipTrailingSlashRedirect: true,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
      },
      // Add any other image domains you might use
      {
        protocol: 'https',
        hostname: 'craftconnect-a6v8.onrender.com',
      },
    ],
  },
};

module.exports = nextConfig;