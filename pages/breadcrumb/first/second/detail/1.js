import Breadcrumb from "@components/Breadcrumb";
import Link from "next/link";
import ThemeToggle from "@components/exdashboard/ThemeToggle";
import Layout from "@components/Layout";

export default function Index() {
  return (
    <>
      <Layout>
        <Breadcrumb />
        <Link href="/dashboard">
          <a className="font-medium transition-all text-sm text-blue-500 p-3">Dashboard</a>
        </Link>
        <ThemeToggle />
      </Layout>
    </>
  )
}