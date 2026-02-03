import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSideBar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full px-6 bg-[#F5F6FA] ">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
