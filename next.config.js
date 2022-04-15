module.exports = {
    env: {
        // API_ROUTE: "http://127.0.0.1:8000",
        //go to https://generate-secret.now.sh/32
        JWT_SECRET: "c1563883a2dd7172282488e1bf66a3d5",
        NEXTAUTH_SECRET: "5fd52e2ed57fbca7c7b3b954a33fe410", 
        NEXTAUTH_URL: "https://next-tailwind-headlessui.vercel.app",
        // NEXT_PUBLIC_SECRET: "secret"
    },
    reactStrictMode: true,
    images: {
        domains: ["dummyimage.com", "images.unsplash.com"],
    },
};
