export default function Container({ className, small, children, ...rest }) {
  return (
    <div
      {...rest}
      className={`
        ${className ? className + " " : ""} 
        ${small ? "p-2" : "p-8"} 
        relative mb-2 rounded-md border dark:border-neutral-700 bg-white dark:bg-neutral-800`}
    >
      {children}
    </div>
  );
}
