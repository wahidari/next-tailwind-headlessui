export default function BadgeOutline({ className, isLarge, children }) {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2 py-1 rounded text-blue-500 border border-blue-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.green = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2 py-1 rounded text-green-500 border border-green-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.red = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2 py-1 rounded text-red-500 border border-red-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.yellow = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2 py-1 rounded text-yellow-500 border border-yellow-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.orange = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2 py-1 rounded text-orange-500 border border-orange-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.purple = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2 py-1 rounded text-violet-500 border border-violet-500`}
    >
      {children}
    </span>
  )
}

BadgeOutline.dark = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2 py-1 rounded text-gray-500 dark:text-gray-300 border border-gray-500`}
    >
      {children}
    </span>
  )
}