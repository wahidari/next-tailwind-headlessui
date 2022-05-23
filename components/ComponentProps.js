export default function ComponentProps({ name, className, children }) {
  return (
    <div className={`${className} pt-2 rounded-lg flex flex-wrap gap-2 items-center`}>
      <div className="text-sm font-medium dark:text-white italic">
        {name} Props :
      </div>
      {children}
    </div>
  )
}