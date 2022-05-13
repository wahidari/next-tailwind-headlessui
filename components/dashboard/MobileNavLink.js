import ActiveLink from "@components/ActiveLink";

export default function MobileNavLink({ href = "", icon, children }) {

  return (
    <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href={href}>
      <a className="px-2 py-1.5 flex justify-start items-center gap-2 rounded-md text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
        {icon}
        <span>{children}</span>
      </a>
    </ActiveLink>
  )
}