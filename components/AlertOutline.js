export default function AlertOutline({ className, children, isLarge }) {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-blue-600 border border-blue-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.green = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-green-600 border border-green-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.yellow = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-yellow-600 border border-yellow-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.red = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-red-600 border border-red-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.orange = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-orange-600 border border-orange-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.purple = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-violet-600 border border-violet-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}

AlertOutline.dark = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-gray-600 dark:text-gray-300 border border-gray-500`}
      role="alertOutline"
    >
      {children}
    </div>
  )
}