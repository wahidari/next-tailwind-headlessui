export default function Input({ id, className, label, type, name, placeholder, value, onChange, ...rest }) {
  return (
    <div className="mb-4">
      {label &&
        <label htmlFor={name} className="block font-medium text-sm text-gray-800 dark:text-white">
          {label}
        </label>
      }
      <input
        {...rest}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          ${className ? className + " " : ""} 
          text-sm transition-all duration-300 w-full px-3 py-[0.6rem] rounded-md mt-2
          dark:text-white bg-white dark:bg-neutral-900  
          border border-gray-300 dark:border-neutral-700 
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
        `}
      />
    </div>
  );
}

Input.disabled = ({ id, className, label, type, name, placeholder, value, onChange, ...rest }) => {
  return (
    <div className="mb-4">
      {label &&
        <label htmlFor={name} className="text-sm font-medium block text-gray-500 dark:text-neutral-300">
          {label}
        </label>
      }
      <input
        {...rest}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled
        className={`
          ${className ? className + " " : ""}
          text-sm w-full px-3 py-[0.6rem] rounded-md mt-2 cursor-not-allowed
          text-neutral-500 bg-gray-100 dark:bg-neutral-800
          border border-gray-300 dark:border-neutral-700
        `}
      />
    </div>
  );
};