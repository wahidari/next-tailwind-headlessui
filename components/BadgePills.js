export default function BadgePills({ className, isLarge, children }) {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-600`}
    >
      {children}
    </span>
  )
}

BadgePills.green = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-600`}
    >
      {children}
    </span>
  )
}

BadgePills.red = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2.5 py-1 rounded-full bg-red-100 text-red-600`}
    >
      {children}
    </span>
  )
}

BadgePills.yellow = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-600`}
    >
      {children}
    </span>
  )
}

BadgePills.orange = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2.5 py-1 rounded-full bg-orange-100 text-orange-600`}
    >
      {children}
    </span>
  )
}

BadgePills.purple = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2.5 py-1 rounded-full bg-violet-100 text-violet-600`}
    >
      {children}
    </span>
  )
}

BadgePills.dark = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600`}
    >
      {children}
    </span>
  )
}