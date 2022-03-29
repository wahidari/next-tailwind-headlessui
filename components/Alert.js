export default function Alert({ className, children, pills, large }) {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-blue-600 bg-blue-100`}
    >
      {children}
    </div>
  )
}

Alert.green = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-green-600 bg-green-100`}
    >
      {children}
    </div>
  )
}

Alert.yellow = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-yellow-600 bg-yellow-100`}
    >
      {children}
    </div>
  )
}

Alert.red = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-red-600 bg-red-100`}
    >
      {children}
    </div>
  )
}

Alert.orange = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-orange-600 bg-orange-100`}
    >
      {children}
    </div>
  )
}

Alert.purple = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-violet-600 bg-violet-100`}
    >
      {children}
    </div>
  )
}

Alert.dark = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-gray-600 bg-gray-100`}
    >
      {children}
    </div>
  )
}