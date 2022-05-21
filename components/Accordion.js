import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Accordion({ title, children, className }) {
	return (
		<Disclosure as="div" className={`${className ? className + " " : " "} my-1 text-sm`}>
			{({ open }) => (
				<>
					<Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-blue-500 bg-gray-100 dark:bg-neutral-800 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all">
						<span>{title}</span>
						<ChevronUpIcon
							className={`${open ? 'transform rotate-180 duration-300' : 'transform rotate-0 duration-200'} w-5 h-5 text-blue-500`}
						/>
					</Disclosure.Button>
					<Transition
						enter="transition duration-500 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-300 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Disclosure.Panel className="px-4 pt-4 pb-4">
							{children}
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	)
}