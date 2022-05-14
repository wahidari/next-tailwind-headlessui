import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BreadcrumbTwo from "@components/dashboardtwo/BreadcrumbTwo";
import DashboardNavTwo from "@components/dashboardtwo/DashboardNavTwo"
import MobileMenuTwo from "@components/dashboardtwo/MobileMenuTwo";
import SidebarMenuTwo from "@components/dashboardtwo/SidebarMenuTwo";

export default function LayoutDashboardTwo({ children }) {

  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="lg:flex h-full">
          <SidebarMenuTwo />
          <MobileMenuTwo />
          <main className={`${showSidebarMenu ? "lg:ml-60" : ""} w-full`}>
            <DashboardNavTwo />
            <div className="pt-1.5 pb-4 px-2 lg:px-4">
              <BreadcrumbTwo />
              {/* Start Content */}
              {children}
              {/* End Content */}
            </div>
          </main>
        </div>
      </div >
    </div>
  );
}
