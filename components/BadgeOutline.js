export default function BadgeOutline({ className, isLarge, pills, children }) {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"}
      ${pills ? "rounded-full" : "rounded"} 
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] text-blue-500 border border-blue-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.green = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"}
      ${pills ? "rounded-full" : "rounded"} 
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] text-green-500 border border-green-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.red = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"}
      ${pills ? "rounded-full" : "rounded"} 
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] text-red-500 border border-red-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.yellow = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"}
      ${pills ? "rounded-full" : "rounded"} 
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] text-yellow-500 border border-yellow-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.orange = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"}
      ${pills ? "rounded-full" : "rounded"} 
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] text-orange-500 border border-orange-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.purple = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"}
      ${pills ? "rounded-full" : "rounded"} 
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] text-violet-500 border border-violet-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.dark = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"}
      ${pills ? "rounded-full" : "rounded"} 
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] text-gray-500 dark:text-gray-300 border border-gray-500`}
    >
      {children}
    </span>
  )
}