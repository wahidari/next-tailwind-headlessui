import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function SidebarNavAccordion({ name, children }) {

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-2 py-1 items-center text-sm font-medium text-left hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded transition-all duration-200">
            <span>{name}</span>
            <ChevronRightIcon
              className={`w-4 h-4
                ${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'} 
              `}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 text-sm dark:text-gray-300 space-y-1">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}