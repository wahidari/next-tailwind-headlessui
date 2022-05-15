import ActiveLink from "@components/ActiveLink"
import { Disclosure, Menu } from "@headlessui/react"
import { ArrowCircleRightIcon, ArrowSmRightIcon, ChevronDoubleRightIcon, ChevronRightIcon, LibraryIcon, TemplateIcon, UserGroupIcon } from "@heroicons/react/outline"
import ExSidebarNavAccordion from "@components/exdashboard/ExSidebarNavAccordion"
import ExSidebarNavLink from "@components/exdashboard/ExSidebarNavLink"

export default function ExSidebarMenu() {
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
                  <ExSidebarNavLink href="/">
                    2
                  </ExSidebarNavLink>
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
                <ExSidebarNavLink href="/">
                  B
                </ExSidebarNavLink>
                <ExSidebarNavLink href="/">
                  C
                </ExSidebarNavLink>
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
              <ExSidebarNavLink href="/dashboard/b">
                Dashboard B
              </ExSidebarNavLink>
              <ExSidebarNavLink href="/dashboard/c">
                Dashboard C
              </ExSidebarNavLink>
            </SidebarNavAccordion> */}

        <ExSidebarNavAccordion name="First" routeName="/dashboard/first">
          <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard/first">
            <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
              First A
            </a>
          </ActiveLink>
          <ExSidebarNavLink href="/dashboard/first/b" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
            First B
          </ExSidebarNavLink>
          <ExSidebarNavLink href="/dashboard/first/c">
            First C
          </ExSidebarNavLink>
        </ExSidebarNavAccordion>

        <ExSidebarNavAccordion name="Second" routeName="/dashboard/second">
          <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard/second">
            <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
              Second A
            </a>
          </ActiveLink>
          <ExSidebarNavLink href="/dashboard/second/b" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
            Second B
          </ExSidebarNavLink>
          <ExSidebarNavLink href="/dashboard/second/c">
            Second C
          </ExSidebarNavLink>
        </ExSidebarNavAccordion>

        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard">
          <a className="px-2 flex justify-start items-center gap-2 py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
            <ArrowSmRightIcon className="w-4 h-4" />
            Dashboard
          </a>
        </ActiveLink>
        <ExSidebarNavLink href="/dashboard/first" icon={<LibraryIcon className="w-4 h-4" />}>
          First
        </ExSidebarNavLink>
        <ExSidebarNavLink href="/dashboard/second" icon={<UserGroupIcon className="w-4 h-4" />}>
          Second
        </ExSidebarNavLink>
        <ExSidebarNavLink href="/dashboard/third" icon={<TemplateIcon className="w-4 h-4" />}>
          Third (Layout Dashboard)
        </ExSidebarNavLink>
        <ExSidebarNavLink href="/breadcrumb/first/second/detail/1" icon={<ChevronDoubleRightIcon className="w-4 h-4" />}>
          Breadcrumb
        </ExSidebarNavLink>
        <ExSidebarNavLink href="/dashboardd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboardd
        </ExSidebarNavLink>

        <ExSidebarNavLink href="/dashboarddd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboarddd
        </ExSidebarNavLink>

        <ExSidebarNavLink href="/dashboardtwo" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboard Two
        </ExSidebarNavLink>

        <ExSidebarNavLink href="/dashboardthree" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboard Three
        </ExSidebarNavLink>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
          return (
            <ExSidebarNavLink key={item + 1} href="#" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
              Link #{item}
            </ExSidebarNavLink>
          )
        })}

      </div>
    </aside>
  )
}