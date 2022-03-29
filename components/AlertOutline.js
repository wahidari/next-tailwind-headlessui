export default function AlertOutline({ className, children, pills, large }) {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-blue-600 border border-blue-500`}
    >
      {children}
    </div>
  )
}

AlertOutline.green = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-green-600 border border-green-500`}
    >
      {children}
    </div>
  )
}

AlertOutline.yellow = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-yellow-600 border border-yellow-500`}
    >
      {children}
    </div>
  )
}

AlertOutline.red = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-red-600 border border-red-500`}
    >
      {children}
    </div>
  )
}

AlertOutline.orange = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-orange-600 border border-orange-500`}
    >
      {children}
    </div>
  )
}

AlertOutline.purple = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-violet-600 border border-violet-500`}
    >
      {children}
    </div>
  )
}

AlertOutline.dark = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-gray-600 dark:text-gray-300 border border-gray-500`}
    >
      {children}
    </div>
  )
}