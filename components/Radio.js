export default function Radio({ label, name, value, onChange, checked, className, ...rest }) {
  return (
    <div className="mb-2 text-sm font-medium">
      <label className="inline-flex items-center cursor-pointer">
        <input
          {...rest}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          type="radio"
          className={`
            ${className ? className + " " : ""}
          focus:ring-blue-500 h-4 w-4 text-blue-600 dark:bg-neutral-900 dark:checked:bg-blue-500
            transition-all cursor-pointer border-gray-300 dark:border-neutral-700
					`}
        />
        <span className="ml-2 text-gray-700 dark:text-neutral-300">{label}</span>
      </label>
    </div>
  )
}