module.exports = {
    env: {
        API_ROUTE: "http://127.0.0.1:8000",
        JWT_SECRET: "jwtsecret",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "secret" //go to https://generate-secret.now.sh/32
    },
    reactStrictMode: true,
    images: {
        domains: ["dummyimage.com", "images.unsplash.com"],
    },
};
