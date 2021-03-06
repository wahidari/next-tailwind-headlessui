import Head from "next/head";
import LayoutDashboard from "@components/dashboard/LayoutDashboard";

export default function Index() {
  return (
    <>
      <Head>
        <title>Second B - Dashboardd</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDashboard>
        <div className="bg-orange-500 h-96 flex items-center justify-center">
          <h1 className="text-white font-medium text-2xl px-8">Second B Dashboardd</h1>
        </div>
        <div className="bg-purple-500 h-96">
        </div>
        <div className="bg-pink-500 h-96">
        </div>
      </LayoutDashboard>
    </>
  )
}