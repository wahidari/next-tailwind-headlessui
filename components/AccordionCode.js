import { Disclosure } from '@headlessui/react'
import { CodeIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function AccordionCode({ title, children }) {
	return (
		<Disclosure as="div" className={`my-4 text-sm`}>
			{({ open }) => (
				<>
					<Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-emerald-500 bg-white dark:bg-neutral-900 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 border border-emerald-500 transition-all">
						<div className="flex gap-x-3">
							<CodeIcon className="w-5 h-5 text-emerald-500"></CodeIcon>
							<span>{title}</span>
						</div>
						<ChevronRightIcon
							className={`${open ? 'transform rotate-90 duration-300' : 'transform rotate-0 duration-200'} w-5 h-5 text-emerald-500`}
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