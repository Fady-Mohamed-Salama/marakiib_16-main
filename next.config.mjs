/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.marakiib.com",
        port: "", // خليه فاضي دايمًا
        pathname: "/**", // معناها: اسمح بكل المسارات داخل الموقع ده
      },
    ],
  },
};

export default nextConfig;
