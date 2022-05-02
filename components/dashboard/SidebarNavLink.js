import ActiveLink from "@components/ActiveLink";

export default function SidebarNavLink({ href = "", children }) {

  return (
    <ActiveLink activeClassName="bg-gray-100" href={href}>
      <a className="px-2 block py-1 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer">
        {children}
      </a>
    </ActiveLink>
  )
}