export default function Container({ className, small, medium, large, children, ...rest }) {
  return (
    <div
      {...rest}
      className={`
        ${className ? className + " " : ""} 
        ${small ? "p-2" : medium ? "p-4" : large ? "p-6" : "p-8"} 
        relative mb-2 rounded-md border border-slate-200 dark:border-neutral-900 bg-white dark:bg-neutral-800`}
    >
      {children}
    </div>
  );
}
