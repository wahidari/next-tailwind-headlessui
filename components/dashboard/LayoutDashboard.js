import Breadcrumb from "@components/Breadcrumb";
import DashboardNav from "@components/dashboard/DashboardNav"
import MobileMenu from "@components/dashboard//MobileMenu";
import SidebarMenu from "@components/dashboard//SidebarMenu";
import ThemeToggle from "@components/dashboard//ThemeToggle";

export default function LayoutDashboard({ children }) {
  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      <ThemeToggle />
      <DashboardNav />
      <MobileMenu />
      <div className="max-w-screen-2xl mx-auto px-2 mt-2 border dark:border-neutral-700 h-full">
        <div className="lg:flex py-2 h-full">
          <SidebarMenu />
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
