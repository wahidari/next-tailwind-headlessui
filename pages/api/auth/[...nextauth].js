import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      authorize: (credentials) => {
        // database look up
        if (credentials.username === "admin" && credentials.password === "admin") {
          return {
            id: 1,
            name: "admin",
            email: "admin@test.com",
            token: "12345abcde"
          };
        }
        // login failed
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
        token.token= user.token;
        token.role = "admin";
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.token = token.token;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/signin'
  },
});