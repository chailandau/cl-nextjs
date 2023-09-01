/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        additionalData:
            '@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_BASE_PAYLOAD_URL,
                port: '',
                pathname: '**/*'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true
            }
        ];
    }
};

module.exports = nextConfig;
