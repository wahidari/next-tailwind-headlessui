import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import { MenuIcon } from "@heroicons/react/outline";

export default function DashboardNav() {

  const { setShowMobileMenu } = useContext(GlobalContext);

  return (
    <nav className="bg-white dark:bg-neutral-900 shadow flex max-w-screen-2xl mx-auto px-2 sticky top-0 z-10">
      <div className="px-2 w-full my-2 flex gap-2 dark:text-white font-medium">
        <button onClick={() => setShowMobileMenu(true)} className="block lg:hidden">
          <span className="sr-only">Open panel</span>
          <MenuIcon className="block h-5 w-5" aria-hidden="true" />
        </button>
        Navbar
      </div>
    </nav>
  )
}