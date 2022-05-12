import Breadcrumb from "@components/Breadcrumb";
import ThemeToggle from "@components/exdashboard/ThemeToggle";
import Layout from "@components/Layout";
import Link from "next/link";

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