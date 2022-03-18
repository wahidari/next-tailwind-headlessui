export default function Badge({ className, isLarge, children }) {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2 py-1 rounded bg-blue-100 text-blue-600`}
    >
      {children}
    </span>
  )
}

Badge.green = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2 py-1 rounded bg-green-100 text-green-600`}
    >
      {children}
    </span>
  )
}

Badge.red = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2 py-1 rounded bg-red-100 text-red-600`}
    >
      {children}
    </span>
  )
}

Badge.yellow = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2 py-1 rounded bg-yellow-100 text-yellow-600`}
    >
      {children}
    </span>
  )
}

Badge.orange = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2 py-1 rounded bg-orange-100 text-orange-600`}
    >
      {children}
    </span>
  )
}

Badge.purple = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2 py-1 rounded bg-violet-100 text-violet-600`}
    >
      {children}
    </span>
  )
}

Badge.dark = ({ className, isLarge, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      font-medium mr-2 px-2 py-1 rounded bg-gray-100 text-gray-600`}
    >
      {children}
    </span>
  )
}