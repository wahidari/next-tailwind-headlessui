import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SidebarNavAccordion({ name, routeName, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == routeName) {
      console.log("match")
      console.log(routeName)
      console.log(router)
      setIsOpen(true)
    } else {
      console.log("not match")
      setIsOpen(false)
    }
  }, [router.pathname])

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-2 py-1 items-center text-sm font-medium text-left hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded transition-all">
            <span>{name}</span>
            <ChevronRightIcon
              className={`w-4 h-4
                  ${open ? 'transform rotate-90 transition-transform' : 'transition-transform'} 
                `}
            />
          </Disclosure.Button>
          <Disclosure.Panel static={isOpen} className="px-4 text-sm dark:text-gray-300 space-y-1">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}