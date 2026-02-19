import { Calendar, TrendingUp, Users, Verified } from "lucide-react";

const Metrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <Users
            className="text-primary bg-primary/10 p-2 rounded-lg"
            size={40}
          />

          <span className="text-emerald-500 text-sm font-bold flex items-center bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">
            <TrendingUp className="text-xs mr-1" size={16} />
            12%
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Total Guests
        </p>
        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
          1,284
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <Verified
            className="bg-amber-500/10 rounded-lg text-amber-500 p-2"
            size={40}
          />

          <span className="text-emerald-500 text-sm font-bold flex items-center bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">
            <TrendingUp className="text-xs mr-1" size={16} />
            5%
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          New This Month
        </p>
        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
          +45
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <Verified
            className="bg-indigo-500/10 rounded-lg text-indigo-500 p-2"
            size={40}
          />
          <span className="text-emerald-500 text-sm font-bold flex items-center bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">
            <TrendingUp className="text-xs mr-1" size={16} />
            8%
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Loyalty Members
        </p>
        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
          892
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <Calendar
            className="bg-emerald-500/10 rounded-lg text-emerald-500 p-2"
            size={40}
          />
          <span className="text-slate-400 text-sm font-bold flex items-center bg-slate-50 dark:bg-slate-500/10 px-2 py-1 rounded">
            Active
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Active Bookings
        </p>
        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
          12
        </p>
      </div>
    </div>
  );
};

export default Metrics;
