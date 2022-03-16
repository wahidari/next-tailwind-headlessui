import Link from "next/link";
import { Fragment } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import ActiveLink from '@components/ActiveLink'

export default function Navbar() {
  return (
    <div>
      <Disclosure as="nav" className="shadow">
        {({ open }) => (
          <>
            <div className="container mx-auto px-5">
              <div className="flex items-center justify-between md:justify-start h-16">
                {/* web logo  */}
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                  </Link>
                </div>
                {/* web logo  */}

                {/* Nav Link  */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <ActiveLink activeClassName="bg-blue-500 text-white" href="/">
                      <a className="px-3 py-1 rounded-md text-base font-medium text-gray-600 hover:bg-blue-400 hover:text-white">First</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="bg-blue-500 text-white" href="/second">
                      <a className="px-3 py-1 rounded-md text-base font-medium text-gray-600 hover:bg-blue-400 hover:text-white">Second</a>
                    </ActiveLink>
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button className="flex space-x-2 items-center px-2 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-800 transition-colors duration-200">
                            <span>More</span>
                            <ChevronDownIcon
                              className={`${open ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'} h-4 w-4 text-gray-500 hover:text-gray-800`}
                            />
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Popover.Panel className="absolute bg-white shadow space-y-1 top-12 px-2 py-2 rounded w-40">
                              <ActiveLink activeClassName="bg-blue-500 text-white" href="/third">
                                <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 hover:bg-blue-400 hover:text-white">Third</a>
                              </ActiveLink>
                              <ActiveLink activeClassName="bg-blue-500 text-white" href="/fourth">
                                <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 hover:bg-blue-400 hover:text-white">Fourth</a>
                              </ActiveLink>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </div>
                </div>
                {/* End Nav Link  */}

                {/* Mobile menu button */}
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white">
                    <span className="sr-only">
                      Open main menu
                    </span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* End Mobile menu button */}
              </div>
            </div>

            {/* Mobile menu panel */}
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <ActiveLink activeClassName="bg-blue-500 text-white" href="/">
                  <a className="border-b-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-blue-400 hover:text-white">First</a>
                </ActiveLink>
                <ActiveLink activeClassName="bg-blue-500 text-white" href="/second">
                  <a className="border-b-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-blue-400 hover:text-white">Second</a>
                </ActiveLink>
                <Menu>
                  {({ open }) => (
                    <>
                      <Menu.Button className="border-b-1 w-full px-3 py-2 rounded-md text-base font-medium text-gray-600">
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
                          <ActiveLink activeClassName="bg-blue-500 text-white" href="/third">
                            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-blue-400 hover:text-white">Third</a>
                          </ActiveLink>
                        </Menu.Item>
                        <Menu.Item>
                          <ActiveLink activeClassName="bg-blue-500 text-white" href="/fourth">
                            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-blue-400 hover:text-white">Fourth</a>
                          </ActiveLink>
                        </Menu.Item>
                      </Menu.Items>
                    </>
                  )}
                </Menu>
              </div>
            </Disclosure.Panel>
            {/* End Mobile menu panel */}
          </>
        )}
      </Disclosure>
    </div>
  );
}
