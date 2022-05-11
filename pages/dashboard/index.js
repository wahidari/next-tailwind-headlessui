import Head from "next/head";
import Layout from "@components/Layout";
import SidebarMenu from "@components/dashboard/SidebarMenu";
import MobileMenu from "@components/dashboard/MobileMenu";
import DashboardNav from "@components/dashboard/DashboardNav";
import ThemeToggle from '@components/dashboard/ThemeToggle';
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Breadcrumb from "@components/Breadcrumb";

export default function Index() {

  return (
    <>
      <Head>
        <title>Dashboardd</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>

        <ThemeToggle />

        <DashboardNav />

        <MobileMenu />

        <div className="max-w-screen-2xl mx-auto px-2 mt-2 border dark:border-neutral-700 h-full">
          <div className="lg:flex py-2 h-full">

            <SidebarMenu />

            <main className="px-2 w-full border dark:border-neutral-700 lg:ml-60">
              
              <Breadcrumb/>
              
              <div className="bg-blue-500 h-96">
              </div>
              <div className="bg-red-500 h-96">
              </div>
              <div className="bg-teal-500 h-96">
              </div>
            </main>
          </div>
        </div >

      </Layout>
    </>
  )
}