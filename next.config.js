/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    // This is important for IPFS hosting
    assetPrefix: './',
    trailingSlash: true,
};

module.exports = nextConfig;