import { GlobalProvider } from "@utils/GlobalContext";
import { SessionProvider } from "next-auth/react"
import "@styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <GlobalProvider>
      <SessionProvider session={session}>
          <Component {...pageProps} />
      </SessionProvider>
    </GlobalProvider>
  );
}

export default MyApp
