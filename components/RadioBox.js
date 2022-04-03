import { RadioGroup } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RadioBox({ label, value, onChange, options }) {
  return (
    <RadioGroup value={value} onChange={onChange} className="mt-4">
      <RadioGroup.Label className="font-medium text-sm dark:text-gray-200">{label}</RadioGroup.Label>
      <div className="flex items-center space-x-3 pt-3">
        {options.map((option) => (
          <RadioGroup.Option
            key={option.name}
            value={option}
            disabled={!option.disabled}
            className={({ active }) =>
              classNames(
                option.disabled ? 'bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-200 cursor-pointer' : 'bg-gray-50 dark:bg-neutral-900 text-gray-300 dark:text-gray-600 cursor-not-allowed focus:ring-0',
                active ? 'ring-2 ring-blue-500' : '',
                'group relative border dark:border-neutral-700 rounded-md py-1.5 px-3 flex justify-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 focus:ring-1'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
                {option.disabled ? (
                  <div
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-blue-500' : 'border-transparent',
                      'absolute -inset-px rounded-md pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute -inset-px rounded-md border border-gray-200 dark:border-neutral-700 pointer-events-none"
                  > <svg
                    className="absolute inset-0 w-full h-full text-gray-200 dark:text-gray-600 stroke-1"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                  >
                      {/* <line x1={100} y1={100} x2={0} y2={0} vectorEffect="non-scaling-stroke" /> */}
                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                )}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}