import Image from "next/image"

export default function Avatar({ className, src, alt, border }) {
  return (
    <div className={`
      ${className ? className + " " : ""}
      relative h-8 w-8 ring-blue-500 ring-2 rounded-full`}
    >
      <Image src={src} alt={alt} layout="fill" className={`${className ? className + " " : ""}rounded-full`} />
    </div>
  )
}

export function Avatars({ item }) {
  return (
    <Avatar></Avatar>
  )
}