/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'known-find.pockethost.io',
                port: '',
                pathname: '/**', // Eğer belirli bir yol (path) gerekiyorsa buraya ekleyebilirsin
            },
        ],
    },
};

export default nextConfig;
