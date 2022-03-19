export default function AlertOutline({ className, children, pills, isLarge }) {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-blue-600 border border-blue-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.green = ({ className, children, pills, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-green-600 border border-green-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.yellow = ({ className, children, pills, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-yellow-600 border border-yellow-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.red = ({ className, children, pills, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-red-600 border border-red-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.orange = ({ className, children, pills, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-orange-600 border border-orange-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.purple = ({ className, children, pills, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-violet-600 border border-violet-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.dark = ({ className, children, pills, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-gray-600 dark:text-gray-300 border border-gray-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}