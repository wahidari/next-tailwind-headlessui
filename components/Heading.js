export default function Heading({ className, children, ...rest }) {
  return (
    <h1
      className={`${className ? className + " " : ""}dark:text-white text-4xl mb-4 font-semibold`}
      {...rest}
    >
      {children}
    </h1>
  );
}

Heading.h2 = ({ className, children, ...rest }) => {
  return (
    <h2
      className={`${className ? className + " " : ""}dark:text-white text-3xl mb-4 font-semibold`}
      {...rest}
    >
      {children}
    </h2>
  )
}

Heading.h3 = ({ className, children, ...rest }) => {
  return (
    <h3
      className={`${className ? className + " " : ""}dark:text-white text-2xl mb-4 font-semibold`}
      {...rest}
    >
      {children}
    </h3>
  )
}

Heading.h4 = ({ className, children, ...rest }) => {
  return (
    <h4
      className={`${className ? className + " " : ""}dark:text-white text-xl mb-4 font-semibold`}
      {...rest}
    >
      {children}
    </h4>
  )
}

Heading.h5 = ({ className, children, ...rest }) => {
  return (
    <h5
      className={`${className ? className + " " : ""}dark:text-white text-lg mb-4 font-semibold`}
      {...rest}
    >
      {children}
    </h5>
  )
}

Heading.h6 = ({ className, children, ...rest }) => {
  return (
    <h6
      className={`${className ? className + " " : ""}dark:text-white text-base mb-4 font-semibold`}
      {...rest}
    >
      {children}
    </h6>
  )
}