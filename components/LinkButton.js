import Link from "next/link";

export default function LinkButton({ className, href, pills, children, ...rest }) {
	return (
		<Link href={href}>
			<a
				{...rest}
				className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium bg-blue-500 hover:bg-blue-600 text-white`}
			>
				{children}
			</a>
		</Link>
	);
}

LinkButton.secondary = ({ className, href, pills, children, ...rest }) => {
	return (
		<Link href={href}>
			<a
				{...rest}
				className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium bg-gray-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-900`}
			>
				{children}
			</a>
		</Link>
	);
}

LinkButton.green = ({ className, href, pills, children, ...rest }) => {
	return (
		<Link href={href}>
			<a
				{...rest}
				className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium bg-emerald-500 hover:bg-emerald-600 text-white`}
			>
				{children}
			</a>
		</Link>
	);
}

LinkButton.yellow = ({ className, href, pills, children, ...rest }) => {
	return (
		<Link href={href}>
			<a
				{...rest} 
				className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium bg-amber-500 hover:bg-amber-600 text-white`}
			>
				{children}
			</a>
		</Link>
	);
}

LinkButton.orange = ({ className, href, pills, children, ...rest }) => {
	return (
		<Link href={href}>
			<a
				{...rest}
				className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium bg-orange-500 hover:bg-orange-600 text-white`}
			>
				{children}
			</a>
		</Link>
	);
}

LinkButton.red = ({ className, href, pills, children, ...rest }) => {
	return (
		<Link href={href}>
			<a
				{...rest}
				className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium bg-red-500 hover:bg-red-600 text-white`}
			>
				{children}
			</a>
		</Link>
	);
}

LinkButton.purple = ({ className, href, pills, children, ...rest }) => {
	return (
		<Link href={href}>
			<a
				{...rest}
				className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium bg-violet-500 hover:bg-violet-600 text-white`}
			>
				{children}
			</a>
		</Link>
	);
}

LinkButton.dark = ({ className, href, pills, children, ...rest }) => {
	return (
		<Link href={href}>
			<a
				{...rest}
				className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium bg-gray-500 hover:bg-gray-600 text-white`}
			>
				{children}
			</a>
		</Link>
	);
}