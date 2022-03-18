export default function ButtonOutlinePills({ className, type, value, onClick, disabled, children, ...rest }) {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-blue-500 transition-all outline-none px-3 py-1.5 rounded-full font-medium border border-blue-500 
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-blue-500"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonOutlinePills.green = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-emerald-500 transition-all outline-none px-3 py-1.5 rounded-full font-medium border border-emerald-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-emerald-500"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonOutlinePills.yellow = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-amber-500 transition-all outline-none px-3 py-1.5 rounded-full font-medium border border-amber-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-amber-500"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonOutlinePills.orange = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-orange-500 transition-all outline-none px-3 py-1.5 rounded-full font-medium border border-orange-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-orange-500"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonOutlinePills.red = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-red-500 transition-all outline-none px-3 py-1.5 rounded-full font-medium border border-red-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-red-500"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonOutlinePills.purple = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-violet-500 transition-all outline-none px-3 py-1.5 rounded-full font-medium border border-violet-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-violet-500"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonOutlinePills.dark = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-gray-500 dark:text-gray-300 transition-all outline-none px-3 py-1.5 rounded-full font-medium border border-gray-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-gray-500"} 
				`}
		>
			{children}
		</button>
	);
}