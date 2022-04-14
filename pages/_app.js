import { GlobalProvider } from "@utils/GlobalContext";
import { SessionProvider } from "next-auth/react"
import { AuthProvider } from "@utils/useAuth";
import "@styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {

  return (
    <GlobalProvider>
      <SessionProvider session={session}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SessionProvider>
    </GlobalProvider>
  );
}

export default MyApp