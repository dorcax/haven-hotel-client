import PageHeader from "@/components/common/PageHeader";
import { User, Bell, Shield, Palette, Globe, Database } from "lucide-react";

const Settings = () => {
  const settingsSections = [
    {
      title: "Profile Info",
      desc: "Update your personal and professional details",
      icon: <User size={20} />,
    },
    {
      title: "Notifications",
      desc: "Configure how you receive alerts and updates",
      icon: <Bell size={20} />,
    },
    {
      title: "Security",
      desc: "Manage passwords and account protection",
      icon: <Shield size={20} />,
    },
    {
      title: "Appearance",
      desc: "Customize the dashboard theme and colors",
      icon: <Palette size={20} />,
    },
    {
      title: "Language",
      desc: "Set your preferred language and region",
      icon: <Globe size={20} />,
    },
    {
      title: "Data Management",
      desc: "Export reports and manage hotel data",
      icon: <Database size={20} />,
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="System Settings"
        description="Customize your dashboard experience and manage system-wide configurations."
        refresh={{ action: () => {}, isLoading: false }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section, i) => (
          <button
            key={i}
            className="flex items-start gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:border-primary/50 hover:shadow-md text-left"
          >
            <div className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg">
              {section.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                {section.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{section.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Settings;
