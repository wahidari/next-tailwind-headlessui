export default function Badge({ className, large, pills, children }) {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] bg-blue-100 text-blue-600`}
    >
      {children}
    </span>
  )
}

Badge.green = ({ className, large, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] bg-green-100 text-green-600`}
    >
      {children}
    </span>
  )
}

Badge.red = ({ className, large, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] bg-red-100 text-red-600`}
    >
      {children}
    </span>
  )
}

Badge.yellow = ({ className, large, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] bg-yellow-100 text-yellow-600`}
    >
      {children}
    </span>
  )
}

Badge.orange = ({ className, large, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] bg-orange-100 text-orange-600`}
    >
      {children}
    </span>
  )
}

Badge.purple = ({ className, large, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] bg-violet-100 text-violet-600`}
    >
      {children}
    </span>
  )
}

Badge.dark = ({ className, large, pills, children }) => {
  return (
    <span className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm !pt-[0.1rem] !pb-[0.1rem]" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded"}
      font-medium px-[0.4rem] pt-[0.2rem] pb-[0.25rem] bg-gray-100 text-gray-600`}
    >
      {children}
    </span>
  )
}