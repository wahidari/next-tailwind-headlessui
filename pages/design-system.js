import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import { DownloadIcon, InformationCircleIcon, MoonIcon, PlusCircleIcon, SunIcon } from "@heroicons/react/outline";
import Button from "@components/Button";
import ButtonOutline from "@components/ButtonOutline";
import Heading from "@components/Heading";
import Footer from "@components/Footer"
import Navbar from "@components/Navbar";
import Text from "@components/Text";
import Code from "@components/Code";
import Alert from "@components/Alert";
import AlertOutline from "@components/AlertOutline";
import Badge from "@components/Badge";
import BadgeOutline from "@components/BadgeOutline";
import Skeletons from "@components/Skeletons";
import Section from "@components/Section";
import Container from "@components/Container";
import BackToTop from "@components/BackToTop";
import LinkButton from "@components/LinkButton";
import LinkButtonOutline from "@components/LinkButtonOutline";
import Accordion from "@components/Accordion";
import Tabs from "@components/Tabs";
import { Tab } from '@headlessui/react'
import Tabss from "@components/Tabss";
import TabsVertical from "@components/TabsVertical";
import TabsVerticall from "@components/TabsVerticall";
import Layout from "@components/Layout";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Third() {
	const { darkMode, setDarkMode } = useContext(GlobalContext);

	return (
		<div>
			<Head>
				<title>Components</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Layout>
				<main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

					<Section id="dark-mode" name="Dark Mode">
						<div className="flex gap-3 flex-wrap">
							<div
								onClick={() => setDarkMode(!darkMode)}
								className="transition-all cursor-pointer w-12 h-7 dark:bg-blue-500 bg-neutral-200 rounded-full relative"
							>
								<div className="h-5 w-5 bg-white rounded-full absolute top-1 transition-all duration-300 dark:left-6 left-1"></div>
							</div>
							<button onClick={() => setDarkMode(!darkMode)} className="relative flex items-center py-0.5 px-1 bg-blue-500 rounded-full h-7">
								<span className="absolute w-5 h-5 rounded-full bg-white dark:left-[1.7rem] left-1 transition-all duration-300"></span>
								<span aria-hidden={true}>☀️</span>
								<span aria-hidden={true}>🌙</span>
							</button>
							<button onClick={() => setDarkMode(!darkMode)} className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} relative flex gap-1 items-center px-1 py-0.5 rounded-full h-7`}>
								<span className="absolute w-5 h-5 rounded-full bg-blue-500 dark:left-[1.6rem] left-1.5 transition-all duration-300"></span>
								<span aria-hidden={true}><SunIcon className={`${darkMode ? "text-white bg-white" : ""}h-5 w-5`} /></span>
								<span aria-hidden={true}><MoonIcon className="h-5 w-5" /></span>
							</button>
							{darkMode ?
								<button onClick={() => setDarkMode(!darkMode)} className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
									<SunIcon />
								</button>
								:
								<button onClick={() => setDarkMode(!darkMode)} className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
									<MoonIcon className="transform rotate-45" />
								</button>
							}
						</div>
					</Section>

					<div className="!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-20 md:bottom-2/4 right-3 md:right-10 z-40">
						{darkMode ?
							<button onClick={() => setDarkMode(!darkMode)} className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
								<SunIcon />
							</button>
							:
							<button onClick={() => setDarkMode(!darkMode)} className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
								<MoonIcon />
							</button>
						}
					</div>

					<BackToTop />

					<Section id="simple-tab" name="Simple Tab">
						<Tabs
							tabs={["Tab A", "Tab B"]}
							contents={["Content A", "Content B"]}
						>
						</Tabs>
						<TabsVerticall
							tabs={["Tab A Vertical", "Tab B Vertical"]}
							contents={["Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos. Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.", "Content B Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos. direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos."]}
						>
						</TabsVerticall>
						<Tabss
							tabs={["Tab A", "Tab B"]}
							contents={["Content A", "Content B"]}
						>
						</Tabss>
						<TabsVertical
							tabs={["Tab A Vertical", "Tab B Vertical"]}
							contents={["Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos. Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.", "Content B Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos. direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos."]}
						>
						</TabsVertical>
					</Section>

					<Section id="tab" name="Tab">
						<Tab.Group>
							<Tab.List className="w-full max-w-sm flex p-1 space-x-1 bg-gray-100 dark:bg-neutral-800 rounded-xl font-medium">
								<Tab className={({ selected }) =>
									classNames(
										'w-full py-2 text-base font-medium text-blue-500 rounded-xl transition-all duration-300',
										selected ? 'bg-blue-500	!text-white' :
											'text-blue-500 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-blue-600 dark:hover:text-blue-600'
									)
								}
								> Tab A </Tab>
								<Tab className={({ selected }) =>
									classNames(
										'w-full py-2 text-base font-medium text-blue-500 rounded-xl transition-all duration-300',
										selected ? 'bg-blue-500	!text-white' :
											'text-blue-500 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-blue-600 dark:hover:text-blue-600'
									)
								}
								> Tab B </Tab>
							</Tab.List>
							<Tab.Panels className="mt-2 max-w-lg">
								<Tab.Panel className='rounded-xl p-3 dark:text-white'>
									<p className="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
									<div className="flex md:mt-4 mt-6">
										<button className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">Button</button>
									</div>
								</Tab.Panel>
								<Tab.Panel className='rounded-xl p-3 dark:text-white'>
									<div className="flex flex-wrap text-center">
										<div className="p-4 w-1/2">
											<h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">2.7K</h2>
											<p className="leading-relaxed">Users</p>
										</div>
										<div className="p-4 w-1/2">
											<h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">1.8K</h2>
											<p className="leading-relaxed">Subscribes</p>
										</div>
									</div>
								</Tab.Panel>
							</Tab.Panels>
						</Tab.Group>
					</Section>

					<Section id="tab-style-a" name="Tab Style A">
						<Tab.Group>
							<Tab.List className="flex font-medium whitespace-nowrap border-b border-gray-200 dark:border-neutral-700">
								<div>
									<Tab className={({ selected }) =>
										classNames(
											'w-full mr-4 py-2 text-base font-medium -mb-[0.06rem] transition-all duration-300',
											'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
											'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
											selected ? '!text-blue-500 border-b-2 !border-blue-500' : ''
										)
									}
									>
										Tab A
									</Tab>
									<Tab className={({ selected }) =>
										classNames(
											'w-full mr-4 py-2 text-base font-medium -mb-[0.06rem] transition-all duration-300',
											'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
											'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
											selected ? '!text-blue-500 border-b-2 !border-blue-500' : ''
										)
									}
									>
										Tab B
									</Tab>
								</div>
							</Tab.List>
							<Tab.Panels className="mt-2">
								<Tab.Panel className='rounded-xl p-3 dark:text-white'>
									<Skeletons className="max-w-[12rem]" />
								</Tab.Panel>
								<Tab.Panel className='rounded-xl p-3 dark:text-white'>
									<Skeletons className="max-w-[24rem] !rounded-full" />
								</Tab.Panel>
							</Tab.Panels>
						</Tab.Group>
					</Section>

					<Section id="tab-style-b" name="Tab Style B">
						<Tab.Group>
							<Tab.List className="flex font-medium whitespace-nowrap border-b border-gray-200 dark:border-neutral-700">
								<div className="flex gap-x-6">
									<Tab className={({ selected }) =>
										classNames(
											'w-full py-2 text-sm font-medium -mb-[0.06rem] transition-all duration-300',
											'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
											'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
											selected ? '!text-blue-500 border-b-2 !border-blue-500' : ''
										)
									}
									>
										Tab A
									</Tab>
									<Tab className={({ selected }) =>
										classNames(
											'w-full py-2 text-sm font-medium -mb-[0.06rem] transition-all duration-300',
											'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
											'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
											selected ? '!text-blue-500 border-b-2 !border-blue-500' : ''
										)
									}
									>
										Tab Title B
									</Tab>
									<Tab className={({ selected }) =>
										classNames(
											'w-full py-2 text-sm font-medium -mb-[0.06rem] transition-all duration-300',
											'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
											'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
											selected ? '!text-blue-500 border-b-2 !border-blue-500' : ''
										)
									}
									>
										Tab Title C
									</Tab>
								</div>
							</Tab.List>
							<Tab.Panels className="mt-2">
								<Tab.Panel className='rounded-xl py-3 dark:text-white'>
									<Skeletons className="max-w-[16rem] !rounded-full" />
								</Tab.Panel>
								<Tab.Panel className='rounded-xl py-3 dark:text-white'>
									<Skeletons className="max-w-2xl !rounded-full" />
								</Tab.Panel>
								<Tab.Panel className='rounded-xl py-3 dark:text-white'>
									<Skeletons className="!rounded-full" />
								</Tab.Panel>
							</Tab.Panels>
						</Tab.Group>
					</Section>

					<Section id="accordion" name="Accordion">
						<Accordion title="Accordion Title" className="max-w-xl my-2 !text-base">
							<Text>Accordion Body</Text>
						</Accordion>
						<Accordion title="Accordion Title" className="max-w-xl my-2">
							<Text className="text-sm">Accordion Body</Text>
						</Accordion>
						<Code code={
							`import Accordion from "@components/Accordion";

	<Accordion title="Accordion Title" className="max-w-xl my-2 !text-base">
		<Text>Accordion Body</Text>
	</Accordion>
	<Accordion title="Accordion Title" className="max-w-xl my-2">
		<Text className="text-sm">Accordion Body</Text>
	</Accordion>`
						}>
						</Code>
					</Section>

					<Section id="section" name="Section">
						<Section className="!py-0">
							<Text>Section Content no Title</Text>
						</Section>
						<Section id="sectiontitle" name="Section With Title" className="!py-0">
							<Text>Section Content</Text>
						</Section>
						<Code code={
							`import Section from "@components/Section";

	<Section className="!py-0">
		<Text>Section Content no Title</Text>
	</Section>
	<Section id="sectiontitle" name="Section With Title" className="!py-0">
		<Text>Section Content</Text>
	</Section>`
						}>
						</Code>
					</Section>

					<Section id="container" name="Container">
						<Container>
							<Text>Container Default</Text>
						</Container>
						<Container large>
							<Text>Container large</Text>
						</Container>
						<Container medium>
							<Text>Container Medium</Text>
						</Container>
						<Container small>
							<Text>Container Small</Text>
						</Container>
						<Code code={
							`import Container from "@components/Container";

	<Container>
		<Text>Container Default</Text>
	</Container>
	<Container large>
		<Text>Container large</Text>
	</Container>
	<Container medium>
		<Text>Container Medium</Text>
	</Container>
	<Container small>
		<Text>Container Small</Text>
	</Container>`
						}>
						</Code>
					</Section>

					<Section id="heading" name="Heading">
						<Heading>Heading Default</Heading>
						<Heading.h2>Heading 2</Heading.h2>
						<Heading.h3>Heading 3</Heading.h3>
						<Heading.h4>Heading 4</Heading.h4>
						<Heading.h5>Heading 5</Heading.h5>
						<Heading.h6>Heading 6</Heading.h6>
						<Code code={
							`import Heading from "@components/Heading";

	<Heading>Heading Default</Heading>
	<Heading.h2>Heading 2</Heading.h2>
	<Heading.h3>Heading 3</Heading.h3>
	<Heading.h4>Heading 4</Heading.h4>
	<Heading.h5>Heading 5</Heading.h5>
	<Heading.h6>Heading 6</Heading.h6>`
						}>
						</Code>
					</Section>

					<Section id="text" name="Text">
						<Text.light className="mb-2">Text Light</Text.light>
						<Text className="mb-2">Text Normal</Text>
						<Text.medium>Text Medium</Text.medium>
						<Text.bold>Text Bold</Text.bold>
						<Text.extrabold>Text Extra Bold</Text.extrabold>
						<Code code={
							`import Text from "@components/Text";

	<Text.light className="mb-2">Text Light</Text.light>
	<Text className="mb-2">Text Normal</Text>
	<Text.medium>Text Medium</Text.medium>
	<Text.bold>Text Bold</Text.bold>
	<Text.extrabold>Text Extra Bold</Text.extrabold>`
						}>
						</Code>
					</Section>

					<Section id="button" name="Button">
						<div className="flex items-center flex-wrap gap-2">
							<Button className="flex gap-1 items-center"><PlusCircleIcon className="h-5 w-5" />Default</Button>
							<Button.secondary>Secondary</Button.secondary>
							<Button.green>Green</Button.green>
							<Button.yellow>Yellow</Button.yellow>
							<Button.orange>Orange</Button.orange>
							<Button.red pills>Red</Button.red>
							<Button.purple pills>Purple</Button.purple>
							<Button.dark pills>Dark</Button.dark>
						</div>
						<Code code={
							`import Button from "@components/Button";

	<Button className="flex gap-1 items-center"><PlusCircleIcon className="h-5 w-5" />Default</Button>
	<Button.secondary>Secondary</Button.secondary>
	<Button.green>Green</Button.green>
	<Button.yellow>Yellow</Button.yellow>
	<Button.orange>Orange</Button.orange>
	<Button.red pills>Red</Button.red>
	<Button.purple pills>Purple</Button.purple>
	<Button.dark pills>Dark</Button.dark>`
						}>
						</Code>
					</Section>

					<Section id="button-outline" name="Button Outline">
						<div className="flex items-center flex-wrap gap-2">
							<ButtonOutline className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5" />Default</ButtonOutline>
							<ButtonOutline.green>Green</ButtonOutline.green>
							<ButtonOutline.yellow>Yellow</ButtonOutline.yellow>
							<ButtonOutline.orange>Orange</ButtonOutline.orange>
							<ButtonOutline.red pills>Red</ButtonOutline.red>
							<ButtonOutline.purple pills>Purple</ButtonOutline.purple>
							<ButtonOutline.dark pills>Dark</ButtonOutline.dark>
						</div>
						<Code code={
							`import ButtonOutline from "@components/ButtonOutline";

	<ButtonOutline className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5"/>Default</ButtonOutline>
	<ButtonOutline.green>Green</ButtonOutline.green>
	<ButtonOutline.yellow>Yellow</ButtonOutline.yellow>
	<ButtonOutline.orange>Orange</ButtonOutline.orange>
	<ButtonOutline.red pills>Red</ButtonOutline.red>
	<ButtonOutline.purple pills>Purple</ButtonOutline.purple>
	<ButtonOutline.dark pills>Dark</ButtonOutline.dark>`
						}>
						</Code>
					</Section>

					<Section id="link-button" name="Link Button">
						<div className="flex items-center flex-wrap gap-2">
							<LinkButton href="#" className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5" />Default</LinkButton>
							<LinkButton.secondary href="#">Secondary</LinkButton.secondary>
							<LinkButton.green href="#">Green</LinkButton.green>
							<LinkButton.yellow href="#">Yellow</LinkButton.yellow>
							<LinkButton.orange href="#">Orange</LinkButton.orange>
							<LinkButton.red href="#" pills>Red</LinkButton.red>
							<LinkButton.purple href="#" pills>Purple</LinkButton.purple>
							<LinkButton.dark href="#" pills>Dark</LinkButton.dark>
						</div>
						<Code code={
							`import LinkButton from "@components/LinkButton";

	<LinkButton href="#" className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5" />Default</LinkButton>
	<LinkButton.secondary href="#">Secondary</LinkButton.secondary>
	<LinkButton.green href="#">Green</LinkButton.green>
	<LinkButton.yellow href="#">Yellow</LinkButton.yellow>
	<LinkButton.orange href="#">Orange</LinkButton.orange>
	<LinkButton.red href="#" pills>Red</LinkButton.red>
	<LinkButton.purple href="#" pills>Purple</LinkButton.purple>
	<LinkButton.dark href="#" pills>Dark</LinkButton.dark>`
						}>
						</Code>
					</Section>

					<Section id="link-button-outline" name="Link Button Outline">
						<div className="flex items-center flex-wrap gap-2">
							<LinkButtonOutline href="#" className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5" />Default</LinkButtonOutline>
							<LinkButtonOutline.green href="#">Green</LinkButtonOutline.green>
							<LinkButtonOutline.yellow href="#">Yellow</LinkButtonOutline.yellow>
							<LinkButtonOutline.orange href="#">Orange</LinkButtonOutline.orange>
							<LinkButtonOutline.red href="#" pills>Red</LinkButtonOutline.red>
							<LinkButtonOutline.purple href="#" pills>Purple</LinkButtonOutline.purple>
							<LinkButtonOutline.dark href="#" pills>Dark</LinkButtonOutline.dark>
						</div>
						<Code code={
							`import LinkButtonOutline from "@components/LinkButtonOutline";

	<LinkButtonOutline href="#" className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5" />Default</LinkButtonOutline>
	<LinkButtonOutline.green href="#">Green</LinkButtonOutline.green>
	<LinkButtonOutline.yellow href="#">Yellow</LinkButtonOutline.yellow>
	<LinkButtonOutline.orange href="#">Orange</LinkButtonOutline.orange>
	<LinkButtonOutline.red href="#" pills>Red</LinkButtonOutline.red>
	<LinkButtonOutline.purple href="#" pills>Purple</LinkButtonOutline.purple>
	<LinkButtonOutline.dark href="#" pills>Dark</LinkButtonOutline.dark>`
						}>
						</Code>
					</Section>

					<Section id="badge" name="Badge">
						<div className="flex items-center flex-wrap gap-2">
							<Badge className="flex gap-1 items-center"><DownloadIcon className="h-4 w-4" />Default</Badge>
							<Badge.green>Green</Badge.green>
							<Badge.red isLarge>Red</Badge.red>
							<Badge.yellow isLarge>Yellow</Badge.yellow>
							<Badge.orange pills>Orange</Badge.orange>
							<Badge.purple pills>Purple</Badge.purple>
							<Badge.dark pills>Dark</Badge.dark>
						</div>
						<Code code={
							`import Badge from "@components/Badge";

	<Badge className="flex gap-1 items-center"><DownloadIcon className="h-4 w-4" />Default</Badge>
	<Badge.green>Green</Badge.green>
	<Badge.red isLarge>Red</Badge.red>
	<Badge.yellow isLarge>Yellow</Badge.yellow>
	<Badge.orange pills>Orange</Badge.orange>
	<Badge.purple pills>Purple</Badge.purple>
	<Badge.dark pills>Dark</Badge.dark>`
						}>
						</Code>
					</Section>

					<Section id="badge-outline" name="Badge Outline">
						<div className="flex items-center flex-wrap gap-2">
							<BadgeOutline className="flex gap-1 items-center"><DownloadIcon className="h-4 w-4" />Default</BadgeOutline>
							<BadgeOutline.green>Green</BadgeOutline.green>
							<BadgeOutline.red isLarge>Red</BadgeOutline.red>
							<BadgeOutline.yellow isLarge>Yellow</BadgeOutline.yellow>
							<BadgeOutline.orange pills>Orange</BadgeOutline.orange>
							<BadgeOutline.purple pills>Purple</BadgeOutline.purple>
							<BadgeOutline.dark pills>Dark</BadgeOutline.dark>
						</div>
						<Code code={
							`import BadgeOutline from "@components/BadgeOutline";

	<BadgeOutline className="flex gap-1 items-center"><DownloadIcon className="h-4 w-4" />Default</BadgeOutline>
	<BadgeOutline.green>Green</BadgeOutline.green>
	<BadgeOutline.red isLarge>Red</BadgeOutline.red>
	<BadgeOutline.yellow isLarge>Yellow</BadgeOutline.yellow>
	<BadgeOutline.orange pills>Orange</BadgeOutline.orange>
	<BadgeOutline.purple pills>Purple</BadgeOutline.purple>
	<BadgeOutline.dark pills>Dark</BadgeOutline.dark>`
						}>
						</Code>
					</Section>

					<Section id="alert" name="Alert">
						<Alert className="flex gap-1 items-center font-medium" isLarge><InformationCircleIcon className="h-5 w-5" />Default</Alert>
						<Alert.green>Green</Alert.green>
						<Alert.red className="flex gap-1 items-center font-medium" isLarge><InformationCircleIcon className="h-5 w-5" />Red <span className="font-normal">Danger</span></Alert.red>
						<Alert.yellow isLarge>Yellow</Alert.yellow>
						<Alert.orange pills>Orange</Alert.orange>
						<Alert.purple pills>Purple</Alert.purple>
						<Alert.dark pills>Dark</Alert.dark>
						<Code code={
							`import Alert from "@components/Alert";

	<Alert className="flex gap-1 items-center font-medium" isLarge><InformationCircleIcon className="h-5 w-5"/>Default</Alert>
	<Alert.green>Green</Alert.green>
	<Alert.red className="flex gap-1 items-center font-medium" isLarge><InformationCircleIcon className="h-5 w-5" />Red <span className="font-normal">Danger</span></Alert.red>
	<Alert.yellow isLarge>Yellow</Alert.yellow>
	<Alert.orange pills>Orange</Alert.orange>
	<Alert.purple pills>Purple</Alert.purple>
	<Alert.dark pills>Dark</Alert.dark>`
						}>
						</Code>
					</Section>

					<Section id="alert-outline" name="Alert Outline">
						<AlertOutline className="flex gap-1 items-center font-medium" isLarge><InformationCircleIcon className="h-5 w-5" />Default</AlertOutline>
						<AlertOutline.green>Green</AlertOutline.green>
						<AlertOutline.red className="flex gap-1 items-center font-medium" isLarge><InformationCircleIcon className="h-5 w-5" />Red <span className="font-normal">Danger</span></AlertOutline.red>
						<AlertOutline.yellow isLarge>Yellow</AlertOutline.yellow>
						<AlertOutline.orange pills>Orange</AlertOutline.orange>
						<AlertOutline.purple pills>Purple</AlertOutline.purple>
						<AlertOutline.dark pills>Dark</AlertOutline.dark>
						<Code code={
							`import AlertOutline from "@components/AlertOutline";

	<AlertOutline className="flex gap-1 items-center font-medium" isLarge><InformationCircleIcon className="h-5 w-5" />Default</AlertOutline>
	<AlertOutline.green>Green</AlertOutline.green>
	<AlertOutline.red className="flex gap-1 items-center font-medium" isLarge><InformationCircleIcon className="h-5 w-5" />Red <span className="font-normal">Danger</span></AlertOutline.red>
	<AlertOutline.yellow isLarge>Yellow</AlertOutline.yellow>
	<AlertOutline.orange pills>Orange</AlertOutline.orange>
	<AlertOutline.purple pills>Purple</AlertOutline.purple>
	<AlertOutline.dark pills>Dark</AlertOutline.dark>`
						}>
						</Code>
					</Section>

					<Section id="skeletons" name="Skeletons">
						<Skeletons className="!h-32 w-full" />
						<Skeletons className="max-w-[12rem]" />
						<Skeletons className="max-w-[24rem] !rounded-full" />
						<Skeletons className="!w-24 !h-24 !rounded-full" />
						<Code code={
							`import Skeletons from "@components/Skeletons";

	<Skeletons className="!h-32 w-full" />
	<Skeletons className="max-w-[12rem]" />
	<Skeletons className="max-w-[24rem] !rounded-full" />
	<Skeletons className="!w-24 !h-24 !rounded-full" />`
						}>
						</Code>
					</Section>

				</main>
			</Layout>

			<Footer />

		</div>
	);
}