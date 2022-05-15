import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import ActiveLink from "@components/ActiveLink";
import { useContext, useEffect } from "react";
import { Fragment } from 'react'
import { GlobalContext } from "@utils/GlobalContext";
import { LibraryIcon, ChevronRightIcon, MoonIcon, SunIcon, UserGroupIcon, ArrowSmRightIcon, ChevronDoubleRightIcon, TemplateIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";
import ExMobileNavLink from "@components/exdashboard/ExMobileNavLink";
import ExMobileNavAccordion from "@components/exdashboard/ExMobileNavAccordion";
import { useRouter } from "next/router";

export default function ExMobileMenu() {

  const { showMobileMenu, setShowMobileMenu } = useContext(GlobalContext);
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  const router = useRouter()

  // handle auto close mobile menu panel based on route changes or page being refreshed
  useEffect(() => {
    setShowMobileMenu(false)
  },[router.pathname])

  return (
    <Transition.Root show={showMobileMenu} as={Fragment}>
      <Dialog as="aside" className="fixed inset-0 overflow-hidden lg:hidden z-20" onClose={setShowMobileMenu}>
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

          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="pointer-events-auto relative w-screen max-w-sm">
                {/* Close Panel Button  */}
                <div className="absolute top-0 right-0 pt-6 mr-6">
                  <button
                    type="button"
                    className="rounded p-1 transition-all text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 ring-2 ring-gray-500 hover:ring-gray-800 dark:ring-gray-300 dark:hover:ring-gray-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                {/* End Close Panel Button  */}

                {/* Mobile Menu Panel  */}
                <div className="flex h-full flex-col overflow-y-hide bg-white dark:bg-neutral-900 py-6 shadow-xl">

                  {/* Theme Toggle  */}
                  <div className="!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 backdrop-filter backdrop-blur fixed bottom-20 left-56 md:left-80 z-10">
                    {darkMode ?
                      <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
                        <SunIcon />
                      </button>
                      :
                      <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
                        <MoonIcon />
                      </button>
                    }
                  </div>
                  {/* End Theme Toggle  */}

                  <div className="px-6">
                    <Dialog.Title className="text-lg font-medium dark:text-white"> Menu </Dialog.Title>
                  </div>
                  <div className="relative mt-6 flex-1">
                    {/* Mobile Menu Link */}
                    <div className="absolute inset-0 px-4">
                      {/* <div className="h-full flex flex-col gap-y-1 pr-2 overflow-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded" aria-hidden="true"> */}
                      <div className="h-full flex flex-col gap-y-1 overflow-auto pr-3" aria-hidden="true">
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
                                  <ExMobileNavLink href="/">
                                    2
                                  </ExMobileNavLink>
                                </Menu.Item>
                              </Menu.Items>
                            </>
                          )}
                        </Menu>

                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex justify-between px-2 py-1 items-center text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 rounded transition-all">
                                <span>Accordion Disclosure</span>
                                <ChevronRightIcon
                                  className={`
                        ${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'} 
                        w-4 h-4 
                        `}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 space-y-1">
                                <ActiveLink activeClassName="bg-gray-100" href="/">
                                  <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                                    A
                                  </a>
                                </ActiveLink>
                                <ExMobileNavLink href="/">
                                  B
                                </ExMobileNavLink>
                                <ExMobileNavLink href="/">
                                  C
                                </ExMobileNavLink>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                        <ExMobileNavAccordion name="First" routeName="/dashboard/first">
                          <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard/first">
                            <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                              First A
                            </a>
                          </ActiveLink>
                          <ExMobileNavLink href="/dashboard/first/b" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
                            First B
                          </ExMobileNavLink>
                          <ExMobileNavLink href="/dashboard/first/c">
                            First C
                          </ExMobileNavLink>
                        </ExMobileNavAccordion>

                        <ExMobileNavAccordion name="Second" routeName="/dashboard/second">
                          <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard/second">
                            <a className="px-2 block py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                              Second A
                            </a>
                          </ActiveLink>
                          <ExMobileNavLink href="/dashboard/second/b" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
                            Second B
                          </ExMobileNavLink>
                          <ExMobileNavLink href="/dashboard/second/c">
                            Second C
                          </ExMobileNavLink>
                        </ExMobileNavAccordion>

                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard">
                          <a className="px-2 flex justify-start gap-2 items-center py-1 rounded text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                            <ArrowSmRightIcon className="w-4 h-4" />
                            Dashboard
                          </a>
                        </ActiveLink>
                        <ExMobileNavLink href="/dashboard/first" icon={<LibraryIcon className="w-4 h-4" />}>
                          First
                        </ExMobileNavLink>
                        <ExMobileNavLink href="/dashboard/second" icon={<UserGroupIcon className="w-4 h-4" />}>
                          Second
                        </ExMobileNavLink>
                        <ExMobileNavLink href="/dashboard/third" icon={<TemplateIcon className="w-4 h-4" />}>
                          Third (Layout Dashboard)
                        </ExMobileNavLink>
                        <ExMobileNavLink href="/breadcrumb/first/second/detail/1" icon={<ChevronDoubleRightIcon className="w-4 h-4" />}>
                          Breadcrumb
                        </ExMobileNavLink>
                        <ExMobileNavLink href="/dashboardd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboardd
                        </ExMobileNavLink>

                        <ExMobileNavLink href="/dashboarddd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboarddd
                        </ExMobileNavLink>

                        <ExMobileNavLink href="/dashboardtwo" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboard Two
                        </ExMobileNavLink>

                        <ExMobileNavLink href="/dashboardthree" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboard Three
                        </ExMobileNavLink>

                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
                          return (
                            <ExMobileNavLink key={item + 1} href="#" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
                              Link #{item}
                            </ExMobileNavLink>
                          )
                        })}
                        
                      </div>
                    </div>
                    {/* End Mobile Menu Link */}
                  </div>
                </div>
                {/* End Mobile Menu Panel  */}

              </div>
            </Transition.Child>
          </div>

        </div>
      </Dialog>
    </Transition.Root>
  )
}