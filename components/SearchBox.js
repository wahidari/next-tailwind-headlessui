import { Combobox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

export default function SearchBox({ label, value, placeholder, onChange, onChangeInput, options }) {
  return (
    <Combobox value={value} onChange={onChange}>
      <Combobox.Label className="font-medium text-sm dark:text-gray-200">{label}</Combobox.Label>
      <div className="relative mt-2">
        <div className="relative w-full text-left rounded cursor-default text-sm overflow-hidden border border-gray-200 dark:border-neutral-700 ">
          <Combobox.Input
            className="w-full border-none py-2 text-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:bg-gray-100 dark:focus:bg-neutral-800 transition-all duration-200"
            // displayValue={(option) => option.id ? `${option.id} - ${option.value}` : `${option.value}` || ""}
            displayValue={(option) => option.value || ""}
            placeholder={placeholder}
            type="number"
            onChange={onChangeInput}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon
              className="w-5 h-5 text-gray-500 dark:text-gray-200"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options className="z-10 absolute w-full py-1 mt-1 overflow-auto text-sm bg-white dark:bg-neutral-900 rounded shadow-lg max-h-48 border border-gray-200 dark:border-neutral-700">
            {options.length === 0 ?
              <div className="cursor-default select-none relative py-2 px-4 text-neutral-700 dark:text-gray-300">
                Nothing found.
              </div>
              :
              options.map((option) => (
                <Combobox.Option
                  key={option.id}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 px-4 text-neutral-700 dark:text-gray-200 hover:text-blue-500
										${active ? 'text-blue-500 bg-gray-100 dark:bg-neutral-800' : 'text-gray-800 dark:text-gray-200'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium text-blue-500' : 'font-normal'}`}>
                      {option.id ? `${option.id} - ${option.value}`
                        :
                        `${option.value}`
                      }
                    </span>
                  )}
                </Combobox.Option>
              )
              )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}