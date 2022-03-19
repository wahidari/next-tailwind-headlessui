export default function Badge({ className, isLarge, pills, children }) {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-2 py-1 bg-blue-100 text-blue-600`}
    >
      {children}
    </span>
  )
}

Badge.green = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-2 py-1 bg-green-100 text-green-600`}
    >
      {children}
    </span>
  )
}

Badge.red = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-2 py-1 bg-red-100 text-red-600`}
    >
      {children}
    </span>
  )
}

Badge.yellow = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-2 py-1 bg-yellow-100 text-yellow-600`}
    >
      {children}
    </span>
  )
}

Badge.orange = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-2 py-1 bg-orange-100 text-orange-600`}
    >
      {children}
    </span>
  )
}

Badge.purple = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-2 py-1 bg-violet-100 text-violet-600`}
    >
      {children}
    </span>
  )
}

Badge.dark = ({ className, isLarge, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-2 py-1 bg-gray-100 text-gray-600`}
    >
      {children}
    </span>
  )
}