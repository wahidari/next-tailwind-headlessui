import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import Signin from "@pages/signin";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const { data: session, status } = useSession()
  const router = useRouter()
  const protectedRoute = ["admin", "protected", "secret"]
  const [userID, setUserID] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
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
      localStorage.setItem("user-id", session.id)
      localStorage.setItem("user-name", session.user.name)
      localStorage.setItem("user-email", session.user.email)

      setUserID(localStorage.getItem("user-id"))
      setUserName(localStorage.getItem("user-name"))
      setUserEmail(localStorage.getItem("user-email"))
    } 
  }, [session]);

  /**
   * if current route in protectedRoute and user not authenticated,
   * show SignIn Page
   */

  // Render SignIn Page if user not authenticated
  // if (protectedRoute.includes(path[0]) && status === "unauthenticated") {
  //   return <Signin/>
  // } 

  // Push to SignIn Page if user not authenticated
  if (protectedRoute.includes(path[0]) && status === "unauthenticated") {
    router.push("/signin")
  } 

  return (
    <AuthContext.Provider value={{ userID, setUserID, userName, setUserName, userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};