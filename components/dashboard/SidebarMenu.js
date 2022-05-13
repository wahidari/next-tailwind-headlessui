import { Disclosure, Menu } from "@headlessui/react"
import ActiveLink from "@components/ActiveLink"
import SidebarNavAccordion from "@components/dashboard/SidebarNavAccordion"
import SidebarNavLink from "@components/dashboard/SidebarNavLink"
import { ArrowCircleRightIcon, ArrowSmRightIcon, ChevronDoubleRightIcon, ChevronRightIcon, LibraryIcon, TemplateIcon, UserGroupIcon } from "@heroicons/react/outline"

export default function SidebarMenu() {
  return (
    <aside className="w-60 hidden lg:block pt-[3.8rem] fixed inset-y-0">
      {/* <aside className="w-60 flex flex-nowrap flex-col fixed top-[3.8rem]"> */}
      <div className="max-h-full overflow-auto border dark:border-neutral-700 px-2 gap-y-1 flex flex-col">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="px-2 w-full py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                <div className="flex justify-between items-center">
                  <span>Accordion Menu</span>
                  <ChevronRightIcon
                    className={`${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'
                      } w-4 h-4`}
                  />
                </div>
              </Menu.Button>
              <Menu.Items className="px-4 gap-y-1 flex flex-col">
                <Menu.Item>
                  <ActiveLink activeClassName="bg-gray-100" href="/">
                    <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                      1
                    </a>
                  </ActiveLink>
                </Menu.Item>
                <Menu.Item>
                  <SidebarNavLink href="/">
                    2
                  </SidebarNavLink>
                </Menu.Item>
              </Menu.Items>
            </>
          )}
        </Menu>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between px-2 py-1 text-sm items-center font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 rounded transition-all">
                <span>Accordion Disclosure</span>
                <ChevronRightIcon
                  className={`
                        ${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'} 
                        w-4 h-4 
                        `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 text-sm space-y-1">
                <ActiveLink activeClassName="bg-gray-100" href="/">
                  <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                    A
                  </a>
                </ActiveLink>
                <SidebarNavLink href="/">
                  B
                </SidebarNavLink>
                <SidebarNavLink href="/">
                  C
                </SidebarNavLink>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <SidebarNavAccordion name="Dashboard" routeName="/dashboard">
              <ActiveLink activeClassName="bg-gray-100" href="/dashboard">
                <a className="px-2 block py-1 rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
                  Dashboard A
                </a>
              </ActiveLink>
              <SidebarNavLink href="/dashboard/b">
                Dashboard B
              </SidebarNavLink>
              <SidebarNavLink href="/dashboard/c">
                Dashboard C
              </SidebarNavLink>
            </SidebarNavAccordion> */}

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

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
          return (
            <SidebarNavLink key={item + 1} href="#" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
              Link #{item}
            </SidebarNavLink>
          )
        })}

      </div>
    </aside>
  )
}