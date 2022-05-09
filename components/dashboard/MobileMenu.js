import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronRightIcon, XIcon } from "@heroicons/react/solid";
import ActiveLink from "@components/ActiveLink";
import { useContext } from "react";
import { Fragment } from 'react'
import { GlobalContext } from "@utils/GlobalContext";

export default function MobileMenu() {

  const { showMobileMenu, setShowMobileMenu } = useContext(GlobalContext);

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
                    onClick={() => setShowMobileMenu(false)}
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
                    {/* Mobile Menu Link */}
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
                    {/* End Mobile Menu Link */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
          {/* End Mobile Menu Panel  */}
        </div>
      </Dialog>
    </Transition.Root>
  )
}