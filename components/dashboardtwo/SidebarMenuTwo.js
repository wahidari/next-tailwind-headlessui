import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import SidebarNavLink from "@components/dashboard/SidebarNavLink"
import { ArrowCircleRightIcon, ArrowSmRightIcon } from "@heroicons/react/outline"

export default function SidebarMenuTwo() {

  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <aside className={`w-60 hidden ${showSidebarMenu ? "lg:block" : ""} fixed inset-y-0 border-r dark:border-r-neutral-800`}>

      <div className="px-6 py-1 flex gap-x-2 items-center border-b dark:border-b-neutral-800">
        <p className="font-medium dark:text-white py-1.5">Dashboard Two</p>
      </div>

      <div className="max-h-[90%] mt-3 pb-4 overflow-auto px-4 gap-y-1 flex flex-col scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
        <SidebarNavLink href="/dashboard" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
          Dashboard
        </SidebarNavLink>

        <SidebarNavLink href="/dashboardd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboardd
        </SidebarNavLink>

        <SidebarNavLink href="/dashboarddd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboarddd
        </SidebarNavLink>

        <SidebarNavLink href="/dashboardtwo" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboard Two
        </SidebarNavLink>

        <SidebarNavLink href="/dashboardthree" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboard Three
        </SidebarNavLink>

        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => {
            return (
              <SidebarNavLink key={index} href="#" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                Link {item}
              </SidebarNavLink>
            )
          })} */}
      </div>

    </aside>
  )
}