import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BreadcrumbThree from "@components/dashboardthree/BreadcrumbThree";
import DashboardNavThree from "@components/dashboardthree/DashboardNavThree"
import MobileMenuThree from "@components/dashboardthree/MobileMenuThree";
import SidebarMenuThree from "@components/dashboardthree/SidebarMenuThree";

export default function LayoutDashboardThree({ children }) {

  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="lg:flex h-full">
          <SidebarMenuThree />
          <MobileMenuThree />
          <main className={`${showSidebarMenu ? "lg:ml-52" : ""} w-full`}>
            <DashboardNavThree />
            <div className="py-4 px-2 lg:px-4 ">
              {/* <BreadcrumbThree /> */}
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
