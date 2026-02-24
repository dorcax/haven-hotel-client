import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePopUpContext } from "@/context/PopUpContext";
import { Bell, ChevronRight, Plus, Search } from "lucide-react";
import PropertyModal from "../Dialog/hotel/PropertyModal";

const AppHeader = () => {
  const {openDialog} =usePopUpContext()
  return (
    <header className="h-12 border-b border-slate-200backdrop-blur-md flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-primary cursor-pointer" />
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Admin</span>
          <ChevronRight size={16} />
          <span className="text-slate-900 font-medium">Dashboard</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            className="w-full pl-10 pr-4 py-1.5 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
            placeholder="Search bookings..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-500 hover:bg-slate-100  rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 size-2 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"   onClick={() =>
                  openDialog(() => <PropertyModal />)
                }>
            <Plus size={16} />
            Create New Property
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
