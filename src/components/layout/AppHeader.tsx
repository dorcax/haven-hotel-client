import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronRight, Search, Plus, Bell } from "lucide-react";

import { useLocation } from "react-router-dom";

const AppHeader = () => {
  const { pathname } = useLocation();
  console.log("Pathname", pathname);

  const getBreadcrumb = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    return pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return (
        <div className="flex items-center gap-2">
          <span
            key={url}
            className="text-xs text-slate-900 font-medium capitalize"
          >
            {segment}
          </span>
          {index < pathSegments.length - 1 && <ChevronRight size={16} />}
        </div>
      );
    });
  };

  return (
    <header className="h-10 py-2 border-b border-slate-200 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-4">
        <SidebarTrigger className="text-primary cursor-pointer" />
        <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
          {getBreadcrumb()}
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="relative w-32 md:w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            className="w-full pl-10 pr-4 py-1.5 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 size-2 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
          <button className="bg-primary text-white p-2 sm:px-4 sm:py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <Plus size={16} />
            <span className="hidden sm:inline">Create New Property</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
