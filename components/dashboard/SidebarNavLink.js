export default function SidebarNavLink({ children }) {
  return (
    <a className="px-2 block py-1 rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer">
      {children}
    </a>
  )
}