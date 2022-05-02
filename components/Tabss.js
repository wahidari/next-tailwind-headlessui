import { Tab } from '@headlessui/react'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Tabss({ tabs, contents }) {
	return (
		<div className="pt-4 sm:px-0">
			<Tab.Group>
				<Tab.List className="w-full max-w-md flex space-x-1 bg-transparent rounded-t dark:border-gray-500 font-medium z-10">
					{tabs.map(item => (
						<Tab key={item}
							className={({ selected }) =>
								classNames(
									'w-full mr-2 py-2 text-base font-medium text-dark-500 bg-gray-100 dark:bg-neutral-900 rounded-t border dark:border-gray-700 transition-all',
									selected ? 'text-white !bg-blue-500' : 
									'text-dark-500 dark:text-gray-200 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-blue-600 dark:hover:text-blue-600'
								)
							}
						>
							{item}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels>
					{contents.map(item => (
						<Tab.Panel key={item} className='p-4 dark:text-white border dark:border-gray-700 rounded rounded-tl-none rounded-tr-none sm:rounded-tr -mt-[0.06rem]'>
							{item}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}