import Breadcrumb from "@components/Breadcrumb";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Breadcrumb />
      <Link href="/dashboard">
        <a className="font-medium transition-all text-sm text-blue-500 p-3">Dashboard</a>
      </Link>
    </>
  )
}