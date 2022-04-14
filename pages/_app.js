import { GlobalProvider } from "@utils/GlobalContext";
import { SessionProvider } from "next-auth/react"
import "@styles/globals.css";
import { AuthProvider } from "@utils/useAuth";

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