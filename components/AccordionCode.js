import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function AccordionCode({ title, children }) {
	return (
		<Disclosure as="div" className={`my-1 text-sm`}>
			{({ open }) => (
				<>
					<Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-red-500 bg-gray-100 dark:bg-neutral-800 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all">
						<span>{title}</span>
						<ChevronUpIcon
							className={`${open ? 'transform rotate-180 duration-300' : 'transform rotate-90 duration-200'} w-5 h-5 text-red-500`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel>
						{children}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}