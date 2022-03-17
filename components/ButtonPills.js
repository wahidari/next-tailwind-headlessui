export default function ButtonPills({ className, type, value, onClick, disabled, children, ...rest }) {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded-full font-medium bg-blue-500 
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-blue-600"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonPills.green = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded-full font-medium bg-emerald-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-emerald-600"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonPills.yellow = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded-full font-medium bg-amber-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-amber-600"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonPills.red = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded-full font-medium bg-red-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-red-600"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonPills.dark = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded-full font-medium bg-gray-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-gray-600"} 
				`}
		>
			{children}
		</button>
	);
}