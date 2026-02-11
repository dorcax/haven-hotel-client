import { Calendar, Home, Inbox, Settings, User } from "lucide-react"

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
} from "@/components/ui/sidebar"



export function AppSidebar() {



  const items = [
  {
    title: "Dashboard",
    url: '/dashboard',
    icon: Home,
  },
  {
    title: "rooms",
    url: '/dashboard/room',
    icon: Inbox,
  },
  {
    title: "reservations",
    url:'/dashboard/reservations',
    icon: Calendar,
  },
  {
    title: "guest",
    url: "#",
    icon: User,
  },
  {
    title: "report",
    url: "#",
    icon: User,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
          <div className="flex items-center gap-4 mt-5">
            <span className="w-[30px] h-[30px] flex justify-center items-center text-white rounded-full border bg-[#E3B23C]">HH</span>
            <h2 className="capitalize text-lg text-gray-900">Haven Hotel</h2>
          </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pt-10">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-[#E3B23C]  hover:text-white">
                    <a href={item.url}>
                      <item.icon />
                      <span className="capitalize ">{item.title}</span>
                    </a>
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
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
             <span> logout
</span>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}