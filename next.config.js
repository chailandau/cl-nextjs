/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        additionalData:
            '@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";'
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
