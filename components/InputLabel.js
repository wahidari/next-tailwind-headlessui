export default function InputLabel({ id, className, label, type, name, placeholder, value, onChange, labelLeft, labelRight, ...rest }) {
  return (
    <div className="mb-4">
      {label &&
        <label htmlFor={name} className="block font-medium text-sm text-neutral-800 dark:text-gray-200">
          {label}
        </label>
      }
      <div className="flex rounded-md items-center mt-2">
        {labelLeft &&
          <span className="inline-flex items-center px-3 h-[2.58rem] rounded-l-md border border-r-0 border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 text-sm">
            {labelLeft}
          </span>
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
            ${labelLeft ? "rounded-r-md" : "rounded-l-md"}
            text-sm transition-all w-full px-3 py-[0.6rem]
            dark:text-white bg-white dark:bg-neutral-900  
            border border-gray-300 dark:border-neutral-700 
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
          `}
        />
        {labelRight &&
          <span className="inline-flex items-center px-3 h-[2.58rem] rounded-r-md border border-l-0 border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 text-sm">
            {labelRight}
          </span>
        }
      </div>
    </div>
  );
}

InputLabel.disabled = ({ id, className, label, type, name, placeholder, value, onChange, labelLeft, labelRight, ...rest }) => {
  return (
    <div className="mb-4">
      {label &&
        <label htmlFor={name} className="text-sm font-medium block text-neutral-800 dark:text-gray-200">
          {label}
        </label>
      }
      <div className="flex rounded-md items-center mt-2">
        {labelLeft &&
          <span className="inline-flex items-center px-3 h-[2.58rem] rounded-l-md border border-r-0 border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 text-sm">
            {labelLeft}
          </span>
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
            ${labelLeft ? "rounded-r-md" : "rounded-l-md"}
            text-sm transition-all w-full px-3 py-[0.6rem]
            dark:text-white bg-white dark:bg-neutral-800  
            border border-gray-300 dark:border-neutral-700 
            cursor-not-allowed
          `}
        />
        {labelRight &&
          <span className="inline-flex items-center px-3 h-[2.58rem] rounded-r-md border border-l-0 border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 text-sm">
            {labelRight}
          </span>
        }
      </div>
    </div>
  );
};
