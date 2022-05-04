import LayoutDashboard from "@components/dashboard/LayoutDashboard";
import { Fragment, useState } from 'react'
import { Dialog, Transition, Menu, Popover, Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Head from "next/head";
import ActiveLink from "@components/ActiveLink";
import SidebarNavLink from "@components/dashboard/SidebarNavLink";
import SidebarNavAccordion from "@components/dashboard/SidebarNavAccordion";

export default function Index() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <LayoutDashboard>

      </LayoutDashboard> */}
      <nav className="bg-white border flex max-w-screen-2xl mx-auto px-2 sticky top-0 z-10">
        <div className="border px-2 w-full my-2 flex gap-2">
          <button onClick={() => setOpenMobileMenu(true)} className="block lg:hidden">
            <span className="sr-only">Open panel</span>
            <MenuIcon className="block h-5 w-5" aria-hidden="true" />
          </button>
          navbar
        </div>
      </nav>
      <div className="max-w-screen-2xl mx-auto px-2 mt-2 border h-full mb-2">
        <div className="lg:flex py-2 h-full">
          <Transition.Root show={openMobileMenu} as={Fragment}>
            <Dialog as="aside" className="fixed inset-0 overflow-hidden lg:hidden z-20" onClose={setOpenMobileMenu}>
              <div className="absolute inset-0 overflow-hidden">
                {/* Backdrop */}
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                {/* End Backdrop */}

                {/* Mobile Menu Panel  */}
                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div className="pointer-events-auto relative w-screen max-w-md">
                      {/* Close Panel Button  */}
                      <div className="absolute top-0 right-0 flex pt-6 mr-6">
                        <button
                          type="button"
                          className="rounded p-1 text-gray-500 hover:text-gray-800 ring-2 ring-gray-500 hover:ring-gray-800"
                          onClick={() => setOpenMobileMenu(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                      {/* End Close Panel Button  */}
                      <div className="flex h-full flex-col overflow-y-hide bg-white py-6 shadow-xl">
                        <div className="px-6">
                          <Dialog.Title className="text-lg font-medium text-gray-900"> Menu </Dialog.Title>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {/* Navbar Link */}
                          <div className="absolute inset-0 px-4">
                            <div className="h-full" aria-hidden="true">
                              <ActiveLink activeClassName="bg-gray-100" href="/dashboard">
                                <a className="border-b-1 px-2 block py-2 rounded text-base font-medium text-gray-600 hover:bg-gray-100">Dashboard</a>
                              </ActiveLink>
                              <hr className="my-1 mx-2" />
                              <ActiveLink activeClassName="bg-gray-100" href="/second">
                                <a className="border-b-1 px-2 block py-2 rounded text-base font-medium text-gray-600 hover:bg-gray-100">Second</a>
                              </ActiveLink>
                              <hr className="my-1 mx-2" />
                              <Menu>
                                {({ open }) => (
                                  <>
                                    <Menu.Button className="border-b-1 px-2 w-full py-2 rounded text-base font-medium text-gray-600 hover:bg-gray-100">
                                      <div className="flex justify-between items-center">
                                        <span>More</span>
                                        <ChevronRightIcon
                                          className={`${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'
                                            } w-5 h-5`}
                                        />
                                      </div>
                                    </Menu.Button>
                                    <Menu.Items className="space-y-1 px-3">
                                      <Menu.Item>
                                        <ActiveLink activeClassName="bg-gray-100" href="/third">
                                          <a className="block px-3 py-2 rounded text-base font-medium text-gray-600 hover:bg-gray-100">Third</a>
                                        </ActiveLink>
                                      </Menu.Item>
                                      <hr className="my-1 mx-3" />
                                      <Menu.Item>
                                        <ActiveLink activeClassName="bg-gray-100" href="/fourth">
                                          <a className="block px-3 py-2 rounded text-base font-medium text-gray-600 hover:bg-gray-100">Fourth</a>
                                        </ActiveLink>
                                      </Menu.Item>
                                    </Menu.Items>
                                  </>
                                )}
                              </Menu>
                              <hr className="my-1 mx-2" />
                              <ActiveLink activeClassName="bg-gray-100" href="/nav-bar">
                                <a className="border-b-1 px-2 block py-2 rounded text-base font-medium text-gray-600 hover:bg-gray-100">Navbar</a>
                              </ActiveLink>
                            </div>
                          </div>
                          {/* End Navbar Link */}
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
                {/* End Mobile Menu Panel  */}
              </div>
            </Dialog>
          </Transition.Root>

          <aside className="w-60 hidden lg:block pt-[3.8rem] fixed inset-y-0">
            {/* <aside className="w-60 flex flex-nowrap flex-col fixed top-[3.8rem]"> */}
            <div className="max-h-full overflow-auto border px-2 gap-y-1 flex flex-col">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="border-b-1 px-2 w-full py-1 rounded text-sm font-medium hover:bg-gray-100">
                      <div className="flex justify-between items-center">
                        <span>Accordion Menu</span>
                        <ChevronRightIcon
                          className={`${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'
                            } w-4 h-4`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className="px-3 gap-y-1 flex flex-col">
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100" href="/dashboard">
                          <a className="px-2 block py-1 rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
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
                    <Disclosure.Button className="flex justify-between w-full px-2 py-1 text-sm items-center font-medium text-left hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded transition-all">
                      <span>Accordion Disclosure</span>
                      <ChevronRightIcon
                        className={`
                        ${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'} 
                        w-4 h-4 
                        `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <ActiveLink activeClassName="bg-gray-100" href="/dashboard">
                        <a className="px-2 block py-1 rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
                          A
                        </a>
                      </ActiveLink>
                      <SidebarNavLink href="/">
                        B
                      </SidebarNavLink>
                      <SidebarNavLink href="/dashboard">
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
                <ActiveLink activeClassName="bg-gray-100" href="/dashboard/first">
                  <a className="px-2 block py-1 rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
                    First A
                  </a>
                </ActiveLink>
                <SidebarNavLink href="/dashboard/first/b">
                  First B
                </SidebarNavLink>
                <SidebarNavLink href="/dashboard/first/c">
                  First C
                </SidebarNavLink>
              </SidebarNavAccordion>

              <SidebarNavAccordion name="Second" routeName="/dashboard/second">
                <ActiveLink activeClassName="bg-gray-100" href="/dashboard/second">
                  <a className="px-2 block py-1 rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
                    Second A
                  </a>
                </ActiveLink>
                <SidebarNavLink href="/dashboard/second/b">
                  Second B
                </SidebarNavLink>
                <SidebarNavLink href="/dashboard/second/c">
                  Second C
                </SidebarNavLink>
              </SidebarNavAccordion>

              <ActiveLink activeClassName="bg-gray-100" href="/dashboard">
                <a className="px-2 block py-1 rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
                  Dashboard
                </a>
              </ActiveLink>
              <SidebarNavLink href="/dashboard/first">
                First
              </SidebarNavLink>
              <SidebarNavLink href="/dashboard/second">
                Second
              </SidebarNavLink>

              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
                return (
                  <SidebarNavLink key={item + 1} href="#">
                    Link #{item}
                  </SidebarNavLink>
                )
              })}

            </div>
          </aside>

          <main className="px-2 w-full border lg:ml-60">
            <div className="bg-blue-500 h-96">
            </div>
            <div className="bg-red-500 h-96">
            </div>
            <div className="bg-teal-500 h-96">
            </div>
          </main>
        </div>
      </div >
    </>
  )
}