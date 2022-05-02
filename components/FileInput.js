import { useRef } from "react";

export default function FileInput({ id, accept, icon, className, label, name, value, onChange, inputLabel, ...rest }) {
  const ref = useRef();
  function handleClick() {
    ref.current.click();
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-800 dark:text-neutral-300 mt-2 mb-4" htmlFor={name}>
        {label}
      </label>
      <label
        className={`
        ${className ? className + " " : ""}
        mt-2 flex flex-col w-full transition-all rounded-xl cursor-pointer
        border-2 border-dashed border-gray-300 dark:border-neutral-800 hover:border-blue-500 
        hover:bg-gray-100 dark:hover:bg-neutral-800 `}>

        <div className="flex flex-wrap justify-center items-center py-2">
          {icon ? icon : ""}
          <p className="text-xs tracking-wider text-gray-400 mr-3 mb-0">{inputLabel}</p>
          {value ?
            <div className="text-blue-500 text-sm font-medium">{value}</div>
            :
            ""
          }
        </div>

        <input className="opacity-0 h-0 w-0"
          {...rest}
          accept={accept}
          id={id}
          type="file"
          name={name}
          ref={ref}
          onChange={onChange}
          onClick={handleClick}
        />
      </label>
    </div>
  );
}
