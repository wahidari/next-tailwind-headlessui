export default function BadgeOutlinePills({ className, isLarge, children }) {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2.5 py-1 rounded-full text-blue-500 border border-blue-500`}
    >
      {children}
    </span>
  )
}

BadgeOutlinePills.green = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2.5 py-1 rounded-full text-green-500 border border-green-500`}
    >
      {children}
    </span>
  )
}

BadgeOutlinePills.red = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2.5 py-1 rounded-full text-red-500 border border-red-500`}
    >
      {children}
    </span>
  )
}

BadgeOutlinePills.yellow = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2.5 py-1 rounded-full text-yellow-500 border border-yellow-500`}
    >
      {children}
    </span>
  )
}

BadgeOutlinePills.orange = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2.5 py-1 rounded-full text-orange-500 border border-orange-500`}
    >
      {children}
    </span>
  )
}

BadgeOutlinePills.purple = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2.5 py-1 rounded-full text-violet-500 border border-violet-500`}
    >
      {children}
    </span>
  )
}

BadgeOutlinePills.dark = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2.5 py-1 rounded-full text-gray-500 dark:text-gray-300 border border-gray-500`}
    >
      {children}
    </span>
  )
}