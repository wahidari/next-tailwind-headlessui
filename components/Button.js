export default function Button({ className, type, value, onClick, disabled, children, ...rest }) {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded font-medium bg-blue-500 
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-blue-600"} 
				`}
		>
			{children}
		</button>
	);
}

Button.green = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded font-medium bg-emerald-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-emerald-600"} 
				`}
		>
			{children}
		</button>
	);
}

Button.yellow = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded font-medium bg-amber-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-amber-600"} 
				`}
		>
			{children}
		</button>
	);
}

Button.red = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded font-medium bg-red-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-red-600"} 
				`}
		>
			{children}
		</button>
	);
}

Button.dark = ({ className, type, value, onClick, disabled, children, ...rest }) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-4 py-2 rounded font-medium bg-gray-500
				${className ? className + " " : ""}
				${disabled ? "cursor-not-allowed" : "hover:bg-gray-600"} 
				`}
		>
			{children}
		</button>
	);
}