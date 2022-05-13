import Breadcrumbb from "@components/dashboard/Breadcrumbb";
import DashboardNav from "@components/dashboard/DashboardNav"
import MobileMenu from "@components/dashboard/MobileMenu";
import SidebarMenu from "@components/dashboard/SidebarMenu";
import ThemeToggle from "@components/exdashboard/ThemeToggle";

export default function LayoutDashboard({ children }) {
  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      <ThemeToggle />
      <DashboardNav />
      <MobileMenu />
      <div className="max-w-screen-2xl mx-auto px-2 mt-2 h-full">
        <div className="lg:flex py-2 h-full">
          <SidebarMenu />
          <main className="pl-2 w-full lg:ml-60">
            <Breadcrumbb />
            {/* Start Content */}
            {children}
            {/* End Content */}
          </main>
        </div>
      </div >
    </div>
  );
}
