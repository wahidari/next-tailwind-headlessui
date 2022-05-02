import { Tab } from '@headlessui/react'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Tabs({ tabs, contents }) {
	return (
		<div className="pt-4 sm:px-0">
			<Tab.Group>
				<Tab.List className="w-full max-w-md flex p-1 space-x-1 bg-gray-100 dark:bg-neutral-800 rounded-xl font-medium">
					{tabs.map(item => (
						<Tab key={item}
							className={({ selected }) =>
								classNames(
									'w-full py-2 text-base font-medium text-blue-500 rounded-xl transition-all',
									selected ? 'bg-blue-500	!text-white' : 
									'text-blue-500 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-blue-600 dark:hover:text-blue-600'
								)
							}
						>
							{item}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{contents.map(item => (
						<Tab.Panel key={item} className='rounded-xl p-3 dark:text-white'>
							{item}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}