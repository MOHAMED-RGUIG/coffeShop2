/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Specify remote patterns to allow images from specified domains
        domains: ['iili.io', 'cdn.dummyjson.com', 'mohamed-rguig.github.io', 'fakestoreapi.com','drive.google.com','images.unsplash.com'],
    }
};

export default nextConfig;
