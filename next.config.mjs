/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sandkasse.benjaminknudsen.dk",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
