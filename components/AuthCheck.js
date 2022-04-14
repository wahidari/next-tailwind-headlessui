import { useSession } from "next-auth/react"
import { useRouter } from "next/router";

export default function AuthCheck ({children}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  // handle opened multiple tab on same url 
  if (status === "loading") {
    return ""
  }
  if (status === "unauthenticated") {
    router.push("/signin")
  }

  const protectedRoute = ["dashboard", "protected", "secret"]
  // split route by "/". ex : "dashboard/pages" to ["dashboard", "pages"] 
  // and take only first item ["dashboard"] 
  const path = router.pathname.split("/").slice(1, 2)
  // if in index page, set default route to "/"
  if (path[0] == "") {
    path[0] = "/"
  }

  console.log(path[0])
  if (protectedRoute.includes(path[0])) {
    console.log("auth route")
  } else {
    console.log("public route")
  }

  return (
    <>
      {children}
    </>
  )
}