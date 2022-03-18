export default function Alert({ className, children, isLarge }) {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-blue-600 bg-blue-100`}
      role="alert"
    >
      {children}
    </div>
  )
}

Alert.green = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-green-600 bg-green-100`}
      role="alert"
    >
      {children}
    </div>
  )
}

Alert.yellow = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-yellow-600 bg-yellow-100`}
      role="alert"
    >
      {children}
    </div>
  )
}

Alert.red = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-red-600 bg-red-100`}
      role="alert"
    >
      {children}
    </div>
  )
}

Alert.orange = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-orange-600 bg-orange-100`}
      role="alert"
    >
      {children}
    </div>
  )
}

Alert.purple = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-violet-600 bg-violet-100`}
      role="alert"
    >
      {children}
    </div>
  )
}

Alert.dark = ({ className, children, isLarge }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${isLarge ? "text-sm" : "text-xs"} 
      p-3 mb-2 rounded-lg text-gray-600 bg-gray-100`}
      role="alert"
    >
      {children}
    </div>
  )
}