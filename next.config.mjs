/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
            {
                protocol: 'https',
                hostname: 'www.inditales.com',
            },
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
            },
        ],
    }
};

export default nextConfig;
