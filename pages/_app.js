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

// import { GlobalProvider } from "@utils/GlobalContext";
// import { UserProvider } from "@utils/useUser";
// import { SessionProvider } from "next-auth/react"
// import "@styles/globals.css";

// function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
//   return (
//     <GlobalProvider>
//       <UserProvider>
//         <SessionProvider session={session}>
//           <Component {...pageProps} />
//         </SessionProvider>
//       </UserProvider>
//     </GlobalProvider>
//   );
// }

// export default MyApp

// import { GlobalProvider } from "@utils/GlobalContext";
// // import { SessionProvider } from "next-auth/react"
// import "@styles/globals.css";

// function MyApp({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <GlobalProvider>
//         <Component {...pageProps} />
//       </GlobalProvider>
//     </SessionProvider>
//   );
// }

// export default MyApp

// import { Toaster } from "react-hot-toast";
// import { GlobalProvider } from "@utils/GlobalContext";
// import Layout from "@components/layout/Layout";
// import Sidebar from "@components/layout/Sidebar";
// import "../styles/globals.css";
// import { useRouter } from "next/router";

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   return (
//     <GlobalProvider>
//       {router.pathname !== "/login" ? (
//         <Layout>
//           <Toaster />
//           <Sidebar />
//           <Component {...pageProps} />
//         </Layout>
//       ) : (
//         <Component {...pageProps} />
//       )}
//     </GlobalProvider>
//   );
// }

// export default MyApp;