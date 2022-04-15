import { signOut } from 'next-auth/react'
import { useEffect } from 'react';

export default function Signout() {
  useEffect(() => {
    localStorage.removeItem("user-id")
    localStorage.removeItem("user-name")
    localStorage.removeItem("user-email")
  }, []);

  signOut({ callbackUrl: '/signin' })

  return (
    <>
    </>
  )
}