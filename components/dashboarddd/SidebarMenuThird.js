import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import SidebarNavLink from "@components/dashboard/SidebarNavLink"
import { ArrowCircleRightIcon, ArrowSmRightIcon } from "@heroicons/react/outline"

export default function SidebarMenuThird() {

  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <aside className={`w-60 hidden ${showSidebarMenu ? "lg:block" : ""} pt-[3.5rem] fixed inset-y-0 border-r dark:border-r-neutral-800`}>
      <div className="max-h-full overflow-auto pl-2 pr-4 gap-y-1 flex flex-col scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">

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

      </div>
    </aside>
  )
}