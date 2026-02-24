import {
  BarChart3,
  Calendar,
  Home,
  LogOut,
  Settings,
  Users
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function AppSidebar() {
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "All properties",
      url: "/dashboard/properties",
      icon: Home,
    },
    // {
    //   title: "Rooms",
    //   url: "/dashboard/room",
    //   icon: Inbox,
    // },
    {
      title: "Bookings",
      url: "/dashboard/bookings",
      icon: Calendar,
    },
    {
      title: "Guests",
      url: "/dashboard/guests",
      icon: Users,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar className="w-64 border-r border-slate-200 bg-white flex flex-col">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="py-6 flex items-center gap-3 mt-4">
              <div className="size-10 rounded-lg flex items-center justify-center text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6_330)">
                    <path
                      clip-rule="evenodd"
                      d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_330">
                      <rect fill="white" height="48" width="48"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div>
                <h1 className="text-lg font-bold leading-none">Haven Hotel</h1>
                <p className="text-xs text-slate-500 mt-1">
                  Property Management
                </p>
              </div>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex-1 px-4 py-4 space-y-2 pt-10">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="flex items-center gap-3 px-3 py-5 rounded-lg text-primary  hover:bg-primary hover:text-white transition-colors"
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span className="capitalize ">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 p-2">
                <div
                  className="size-9 rounded-full bg-slate-200 bg-cover bg-center"
                  data-alt="Admin user profile picture"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKQJnhPHorytmAfHcA-YtG1YeDqqPKtd6ZC80QbkgGUTgD9J6CeCmTUlWkQSv7GIdke6ceXPKCEcQ8dOKnOqv204zhh8HhQGFCyjamikz48nQ4wkhRefng1Mz-HcLn194Y6m6JDq0BwZ-HNzgYU9awgHnWl0tccpw2klIRO9xG8Hojsw9zMQbRL4D8_fNtuupZmOd1NBwjnpU-r7REaDyMV5cxHnVcoB52HuqLnKwhSK0-50fyWwxNY2FWPN2lKkNHXob9EEUClE6a")`,
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Alex Thompson</p>
                  <p className="text-xs text-slate-500 truncate">
                    General Manager
                  </p>
                </div>
                <LogOut size={16} />
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
