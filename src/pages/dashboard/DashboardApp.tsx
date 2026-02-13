import {
  BookCheck,
  CalendarClock,
  LogIn,
  Banknote,
  TrendingUp,
  MessageSquareWarningIcon,
} from "lucide-react";

const DashboardApp = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-end gap-3 mb-6">
        <div>
          <p className="text-primary text-3xl font-black leading-tight tracking-[-0.033em]">
            Booking Management
          </p>
          <p className="text-[#4c739a] text-sm mt-1">
            Manage and track all hotel reservations from one central dashboard.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-[#cfdbe7] dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal">
              Total Bookings
            </p>
            <BookCheck
              className="text-primary bg-primary/10 p-1 rounded-lg"
              size={24}
            />
          </div>
          <p className="text-[#0d141b] dark:text-white tracking-tight text-2xl font-bold leading-tight">
            1,284
          </p>
          <p className="text-[#078838] text-xs font-bold leading-normal flex items-center gap-1">
            <TrendingUp size={12} />
            +12.5% vs last month
          </p>
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-[#cfdbe7] dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal">
              Today's Check-ins
            </p>
            <LogIn
              className="text-orange-500 bg-orange-500/10 p-1 rounded-lg"
              size={24}
            />
          </div>
          <p className="text-[#0d141b] dark:text-white tracking-tight text-2xl font-bold leading-tight">
            24
          </p>
          <p className="text-[#078838] text-xs font-bold leading-normal flex items-center gap-1">
            <TrendingUp size={12} />
            +5.2% vs yesterday
          </p>
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-[#cfdbe7] dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal">
              Pending Approvals
            </p>
            <CalendarClock
              className="text-amber-500 bg-amber-500/10 p-1 rounded-lg"
              size={24}
            />
          </div>
          <p className="text-[#0d141b] dark:text-white tracking-tight text-2xl font-bold leading-tight">
            12
          </p>
          <p className="text-[#e73908] text-xs font-bold leading-normal flex items-center gap-1">
            <MessageSquareWarningIcon size={12} />
            Needs attention
          </p>
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-[#cfdbe7] dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal">
              Revenue (MTD)
            </p>
            <Banknote
              className="text-green-500 bg-green-500/10 p-1 rounded-lg"
              size={24}
            />
          </div>
          <p className="text-[#0d141b] dark:text-white tracking-tight text-2xl font-bold leading-tight">
            $45,200
          </p>
          <p className="text-[#078838] text-xs font-bold leading-normal flex items-center gap-1">
            <TrendingUp size={12} />
            +8% vs targets
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardApp;
