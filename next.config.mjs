/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'i.ytimg.com',
            // },
        ],
    },
    experimental: {
        outputFileTracingIncludes: {
            'app/[lang]': ['./content/**/*'],
            'app/[lang]/blogs/[slug]': ['./content/**/*'],
        },
    },
};

export default nextConfig;
