import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import Breadcrumbb from "@components/dashboard/Breadcrumbb";
import DashboardNavThird from "@components/dashboarddd/DashboardNavThird"
import MobileMenuThird from "@components/dashboarddd/MobileMenuThird";
import SidebarMenuThird from "@components/dashboarddd/SidebarMenuThird";

export default function LayoutDashboardThird({ children }) {

  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      <DashboardNavThird />
      <MobileMenuThird />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className="max-w-screen-2xl mx-auto px-2 py-2 h-full">
        <div className="lg:flex h-full">
          <SidebarMenuThird />
          <main className={`${showSidebarMenu ? "lg:pl-4 lg:pr-2 lg:ml-60" : "px-2"} w-full`}>
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
