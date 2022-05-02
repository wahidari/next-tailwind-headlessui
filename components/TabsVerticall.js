import { Tab } from '@headlessui/react'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function TabsVerticall({ tabs, contents }) {
	return (
		<div className="pt-4 sm:px-0 sm:flex">
			<Tab.Group vertical>
				<Tab.List className="bg-gray-100 dark:bg-neutral-800 p-2 rounded font-medium">
					{tabs.map(item => (
						<Tab key={item}
							className={({ selected }) =>
								classNames(
									'w-full mb-2 py-2 text-base font-medium text-dark-500 bg-gray-100 dark:bg-neutral-900 rounded transition-all',
									selected ? 'text-white !bg-blue-500' :
										'text-dark-500 dark:text-gray-200 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-blue-600 dark:hover:text-blue-600'
								)
							}
						>
							{item}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="w-full">
					{contents.map(item => (
						<Tab.Panel key={item} className='p-4 dark:text-white'>
							{item}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}