import Breadcrumb from "@components/Breadcrumb";
import ExDashboardNav from "@components/exdashboard/ExDashboardNav"
import ExMobileMenu from "@components/exdashboard/ExMobileMenu";
import ExSidebarMenu from "@components/exdashboard/ExSidebarMenu";
import ThemeToggle from "@components/exdashboard/ThemeToggle";

export default function ExLayoutDashboard({ children }) {
  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      <ThemeToggle />
      <ExDashboardNav />
      <ExMobileMenu />
      <div className="max-w-screen-2xl mx-auto px-2 mt-2 border dark:border-neutral-700 h-full">
        <div className="lg:flex py-2 h-full">
          <ExSidebarMenu />
          <main className="px-2 w-full border dark:border-neutral-700 lg:ml-60">
            <Breadcrumb />
            {/* Start Content */}
            {children}
            {/* End Content */}
          </main>
        </div>
      </div >
    </div>
  );
}
