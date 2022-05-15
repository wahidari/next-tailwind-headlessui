import Head from "next/head";
import LayoutDashboardThree from "@components/dashboardthree/LayoutDashboardThree";

function SideLink({children}) {
 return (
   <li className="pb-0.5 text-neutral-600 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-white transition-all">
     {children}
   </li>
 )
}

export default function Index() {
  return (
    <>
      <Head>
        <title>Dashboard Three Column</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDashboardThree>
        <div className="flex gap-x-4">

          <div className="w-full">
            <div id="One" className="bg-slate-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Example Dashboard Layout Three Column</h1>
            </div>
            <div id="Two" className="bg-red-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Two</h1>
            </div>
            <div id="Three" className="bg-orange-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Three</h1>
            </div>
            <div id="Four" className="bg-yellow-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Four</h1>
            </div>
            <div id="Five" className="bg-lime-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Five</h1>
            </div>
            <div id="Six" className="bg-emerald-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Six</h1>
            </div>
            <div id="Seven" className="bg-indigo-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Seven</h1>
            </div>
            <div id="Eight" className="bg-violet-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Eight</h1>
            </div>
            <div id="Nine" className="bg-pink-500 h-screen mb-4 flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Nine</h1>
            </div>
            <div id="Ten" className="bg-rose-500 h-screen flex items-center justify-center">
              <h1 className="text-white font-medium text-2xl px-8">Ten</h1>
            </div>
          </div>

          <div className="hidden xl:block w-52 text-sm">
            <div className="sticky top-14">
              <h5 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">On This Page</h5>
              <nav>
                <ul className="flex flex-col gap-y-1">
                  <SideLink>
                    <a href="#One">One</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Two">Two</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Three">Three</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Four">Four</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Five">Five</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Six">Six</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Seven">Seven</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Eight">Eight</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Nine">Nine</a>
                  </SideLink>
                  <SideLink>
                    <a href="#Ten">Ten</a>
                  </SideLink>
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </LayoutDashboardThree>
    </>
  )
}