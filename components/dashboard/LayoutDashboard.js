import Breadcrumbb from "@components/dashboard/Breadcrumbb";
import DashboardNav from "@components/dashboard/DashboardNav"
import MobileMenu from "@components/dashboard/MobileMenu";
import SidebarMenu from "@components/dashboard/SidebarMenu";

export default function LayoutDashboard({ children }) {
  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      <DashboardNav />
      <MobileMenu />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className="max-w-screen-2xl mx-auto px-2 py-2 h-full">
        <div className="lg:flex h-full">
          <SidebarMenu />
          <main className="lg:pl-4 lg:pr-2 w-full lg:ml-60">
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
