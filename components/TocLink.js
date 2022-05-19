import Link from "next/link";

export default function TocLink({ href, text }) {
  return (
    <span className="block mb-1 font-medium text-blue-500 hover:text-blue-600 transition-all">
      <Link href={href}>{text}</Link>
    </span>
  )
}