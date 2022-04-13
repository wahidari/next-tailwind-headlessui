import Router from "next/router";

export default function Logout() {
  localStorage.removeItem("token")
  Router.push("/login")
  return (
    <div>
      Logout
    </div>
  )
}