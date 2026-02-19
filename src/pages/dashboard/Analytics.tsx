import PageHeader from "@/components/common/PageHeader";
import { BarChart3, TrendingUp, Users, Target } from "lucide-react";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics & Reports"
        description="Monitor your hotel's performance, revenue trends, and guest demographics."
        refresh={{ action: () => {}, isLoading: false }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Occupancy Rate",
            value: "82%",
            icon: <Users size={20} />,
            trend: "+5%",
          },
          {
            title: "Avg. Daily Rate",
            value: "$185",
            icon: <Target size={20} />,
            trend: "+2%",
          },
          {
            title: "RevPAR",
            value: "$152",
            icon: <TrendingUp size={20} />,
            trend: "+8%",
          },
          {
            title: "Total Revenue",
            value: "$45.2k",
            icon: <BarChart3 size={20} />,
            trend: "+12%",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-lg font-bold">
                {stat.icon}
              </div>
              <span className="text-green-600 text-xs font-bold leading-normal">
                {stat.trend}
              </span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <Analytics />
    </div>
  );
};

export default Analytics;
