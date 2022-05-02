import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function SelectBoxCustom({ label, value, onChange, options }) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className="relative mt-4">
          <Listbox.Label className="font-medium text-sm dark:text-gray-200">{label}</Listbox.Label>
          <Listbox.Button className="relative mt-2 w-full py-2 px-3 text-left bg-white dark:bg-neutral-900 dark:text-gray-200 border border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all rounded cursor-pointer text-sm">
            <span className="block truncate">{value ? value.name : "Choose"}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDownIcon className={
                `w-4 h-4 text-gray-500 dark:text-gray-200 
                ${open ? 'transform rotate-180 duration-300' : 'transform rotate-0 duration-200'}`} strokeWidth={3} aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="z-10 absolute w-full py-1 mt-1 overflow-auto bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded shadow-lg max-h-48 text-sm scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `cursor-pointer py-2 px-3 text-neutral-700 hover:text-blue-500 dark:hover:text-blue-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 
                  ${active ? 'text-blue-600 dark:text-blue-500 bg-gray-100 dark:bg-neutral-800' : ' '}
                  `
                }
                value={option}
              >
                {({ selected }) => (
                  <span className={`block truncate ${selected ? 'font-semibold text-blue-500' : ' '}`}>
                    {option.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      )}
    </Listbox>
  )
}