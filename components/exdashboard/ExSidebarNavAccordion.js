import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ExSidebarNavAccordion({ name, routeName, children }) {

  const [isOpen, setIsOpen] = useState(false)
  const [cek, setCek] = useState(false)
  const router = useRouter();

  // set sidebar nav accordion open or close based on route 
  useEffect(() => {
    if (router.pathname.includes(routeName)) {
      // console.log("------------------")
      // console.log("ROUTE MATCH")
      // console.log("params : ", routeName)
      // console.log("actual : ", router.pathname)
      setIsOpen(true)
    } else {
      // console.log("------------------")
      // console.log("ROUTE NOT MATCH")
      // console.log("params : ", routeName)
      // console.log("actual : ", router.pathname)
      setIsOpen(false)
    }
    setCek(true)
  }, [router.pathname])

  return (
    cek ?
      <>
        <Disclosure defaultOpen={isOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between px-2 py-1 items-center text-sm font-medium dark:text-white hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded transition-all">
                <span>{name}</span>
                <ChevronRightIcon
                  className={`w-4 h-4 ${open ? 'transform rotate-90 transition-transform' : 'transition-transform'}`}
                />
              </Disclosure.Button>
              {/* <Transition
                enter="transition duration-300 ease-in"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition-all ease-out"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              > */}
                <Disclosure.Panel className="px-4 text-sm space-y-1">
                  {children}
                </Disclosure.Panel>
              {/* </Transition> */}
            </>
          )}
        </Disclosure>
        <hr className="border-neutral-200 dark:border-neutral-800" />
      </>
      : ""
  )
}