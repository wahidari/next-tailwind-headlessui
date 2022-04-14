import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import Signin from "@pages/signin";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const protectedRoute = ["dashboard", "protected", "secret"]
  const [userName, setUserName] = useState();
  /**
   * split route by "/". ex : "dashboard/pages" to ["dashboard", "pages"] 
   * then take only first item ["dashboard"] 
   * if in index page, set to "/"
   */
  const path = router.pathname.split("/").slice(1, 2)
  if (path[0] == "") {
    path[0] = "/"
  }

  useEffect(() => {
    if(session != null) {
      setUserName(session.user.name)
    } 
  }, [session]);

  /**
   * if current route in protectedRoute and user not authenticated,
   * show SignIn Page
   */
  if (protectedRoute.includes(path[0]) && status === "unauthenticated") {
    return <Signin></Signin>
  } 

  return (
    <AuthContext.Provider value={{ userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};