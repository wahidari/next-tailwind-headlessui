import SidebarNavAccordion from "@components/dashboard/SidebarNavAccordion"
import SidebarNavLink from "@components/dashboard/SidebarNavLink"
import { ArrowCircleRightIcon, ArrowSmRightIcon, BadgeCheckIcon, BellIcon } from "@heroicons/react/outline"

export default function SidebarMenu() {
  return (
    <aside className="w-60 hidden lg:block pt-[3.5rem] fixed inset-y-0 border-r dark:border-r-neutral-800 ">
      <div className="max-h-full overflow-auto pl-2 pr-4 gap-y-1 flex flex-col scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">

        <SidebarNavLink href="/dashboard" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
          Dashboard
        </SidebarNavLink>

        <SidebarNavAccordion name="First" routeName="/dashboardd/first" icon={<BadgeCheckIcon className="w-4 h-4" />}>
          <SidebarNavLink href="/dashboardd/first" icon={<BadgeCheckIcon className="w-4 h-4" />}>
            First
          </SidebarNavLink>
          <SidebarNavLink href="/dashboardd/first/b" icon={<BadgeCheckIcon className="w-4 h-4" />}>
            First B
          </SidebarNavLink>
        </SidebarNavAccordion>

        <SidebarNavAccordion name="Second" routeName="/dashboardd/second" icon={<BellIcon className="w-4 h-4" />}>
          <SidebarNavLink href="/dashboardd/second" icon={<BellIcon className="w-4 h-4" />}>
            Second
          </SidebarNavLink>
          <SidebarNavLink href="/dashboardd/second/b" icon={<BellIcon className="w-4 h-4" />}>
            Second B
          </SidebarNavLink>
        </SidebarNavAccordion>

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

        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => {
          return (
            <SidebarNavLink key={item + 1} href="#" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
              Link #{item}
            </SidebarNavLink>
          )
        })} */}

      </div>
    </aside>
  )
}