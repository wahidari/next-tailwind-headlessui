import ActiveLink from "@components/ActiveLink";

export default function SidebarNavLink({ href = "", children }) {

  return (
    <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href={href}>
      <a className="px-2 block py-1 rounded-md text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
        {children}
      </a>
    </ActiveLink>
  )
}