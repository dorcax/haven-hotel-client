import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSideBar";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 px-4 flex flex-col h-screen overflow-y-auto bg-[#F5F6FA] w-full gap-2">
        <AppHeader />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
