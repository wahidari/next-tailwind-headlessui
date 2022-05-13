import ActiveLink from "@components/ActiveLink"
import SidebarNavAccordion from "@components/dashboard/SidebarNavAccordion"
import SidebarNavLink from "@components/dashboard/SidebarNavLink"
import { ArrowCircleRightIcon, ArrowSmRightIcon, ChevronDoubleRightIcon, LibraryIcon, TemplateIcon, UserGroupIcon } from "@heroicons/react/outline"

export default function SidebarMenu() {
  return (
    <aside className="w-60 hidden lg:block pt-[3.8rem] fixed inset-y-0 border-r dark:border-r-neutral-800 ">
      <div className="max-h-full overflow-auto pl-2 pr-4 gap-y-1 flex flex-col scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">

        <SidebarNavAccordion name="First" routeName="/dashboard/first">
          <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard/first">
            <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
              First A
            </a>
          </ActiveLink>
          <SidebarNavLink href="/dashboard/first/b" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
            First B
          </SidebarNavLink>
          <SidebarNavLink href="/dashboard/first/c">
            First C
          </SidebarNavLink>
        </SidebarNavAccordion>

        <SidebarNavAccordion name="Second" routeName="/dashboard/second">
          <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard/second">
            <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
              Second A
            </a>
          </ActiveLink>
          <SidebarNavLink href="/dashboard/second/b" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
            Second B
          </SidebarNavLink>
          <SidebarNavLink href="/dashboard/second/c">
            Second C
          </SidebarNavLink>
        </SidebarNavAccordion>

        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard">
          <a className="px-2 flex justify-start items-center gap-2 py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
            <ArrowSmRightIcon className="w-4 h-4" />
            Dashboard
          </a>
        </ActiveLink>
        <SidebarNavLink href="/dashboard/first" icon={<LibraryIcon className="w-4 h-4" />}>
          First
        </SidebarNavLink>
        <SidebarNavLink href="/dashboard/second" icon={<UserGroupIcon className="w-4 h-4" />}>
          Second
        </SidebarNavLink>
        <SidebarNavLink href="/dashboard/third" icon={<TemplateIcon className="w-4 h-4" />}>
          Third (Layout Dashboard)
        </SidebarNavLink>
        <SidebarNavLink href="/breadcrumb/first/second/detail/1" icon={<ChevronDoubleRightIcon className="w-4 h-4" />}>
          Breadcrumb
        </SidebarNavLink>
        <SidebarNavLink href="/dashboardd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboardd
        </SidebarNavLink>

        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
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