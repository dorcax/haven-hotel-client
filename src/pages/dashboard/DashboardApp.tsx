import { useState } from "react";
import {
  BookCheck,
  CalendarClock,
  LogIn,
  Banknote,
  TrendingUp,
  MessageSquareWarningIcon,
  SearchIcon,
  EditIcon,
  EllipsisVertical,
  CheckCircle2,
  UserPlus,
  X,
  History,
} from "lucide-react";
import { bookingsData } from "@/data/bookings";
import type { Booking } from "@/data/bookings";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const DashboardApp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState<Booking["status"] | "All">(
    "All",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  // Filter and Search logic
  const filteredBookings = bookingsData.filter((booking) => {
    const matchesStatus =
      activeFilter === "All" || booking.status === activeFilter;
    const matchesSearch =
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.roomName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalItems = filteredBookings.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const getStatusStyles = (status: Booking["status"]) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Pending":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "Checked-in":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300";
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-between items-end gap-3 my-5">
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
            {bookingsData.length.toLocaleString()}
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
            {bookingsData.filter((b) => b.status === "Checked-in").length}
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
            {bookingsData.filter((b) => b.status === "Pending").length}
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
            $
            {bookingsData.reduce((acc, b) => acc + b.price, 0).toLocaleString()}
          </p>
          <p className="text-[#078838] text-xs font-bold leading-normal flex items-center gap-1">
            <TrendingUp size={12} />
            +8% vs targets
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#cfdbe7] dark:border-slate-800 shadow-sm overflow-hidden mb-6">
        <div className="p-4 border-b border-[#e7edf3] dark:border-slate-800 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <label className="flex flex-col min-w-40 h-10 w-full relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#4c739a]">
                <SearchIcon size={20} />
              </div>
              <input
                className="w-full h-full pl-10 pr-4 bg-background-light dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 text-[#0d141b] dark:text-white placeholder:text-[#4c739a]"
                placeholder="Search by Booking ID, Customer Name, or Room..."
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </label>
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {(
              [
                "All",
                "Pending",
                "Confirmed",
                "Checked-in",
                "Cancelled",
              ] as const
            ).map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1);
                }}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 text-xs transition-all ${
                  activeFilter ===
                    (filter === "Checked-in" ? "Checked-in" : filter) ||
                  (activeFilter === "All" && filter === "All")
                    ? "bg-primary text-white font-bold"
                    : "bg-[#e7edf3] dark:bg-slate-800 text-[#0d141b] dark:text-slate-300 font-medium hover:bg-primary/10"
                }`}
              >
                {filter === "All" ? "All Bookings" : filter}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background-light/50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wider">
                  Room Details
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wider">
                  Stay Dates
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wider text-right">
                  Total
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wider text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e7edf3] dark:divide-slate-800">
              {paginatedBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-background-light/30 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-sm font-bold text-primary">
                    {booking.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-full ${booking.avatarColor} flex items-center justify-center font-bold text-[10px]`}
                      >
                        {booking.customerInitials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0d141b] dark:text-white">
                          {booking.customerName}
                        </p>
                        <p className="text-xs text-[#4c739a] dark:text-slate-400">
                          {booking.customerName.toLowerCase().replace(" ", ".")}
                          @email.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-[#0d141b] dark:text-white">
                      {booking.roomName}
                    </p>
                    <p className="text-xs text-[#4c739a] dark:text-slate-400">
                      {booking.roomDetails}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#0d141b] dark:text-slate-300 whitespace-nowrap">
                    {booking.checkIn} - {booking.checkOut}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-right text-[#0d141b] dark:text-white">
                    ${booking.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getStatusStyles(booking.status)}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 rounded-lg bg-background-light dark:bg-slate-800 text-[#4c739a] hover:text-primary border border-transparent hover:border-primary/20 transition-all">
                        <EditIcon size={20} />
                      </button>
                      <button className="p-1.5 rounded-lg bg-background-light dark:bg-slate-800 text-[#4c739a] hover:text-primary border border-transparent hover:border-primary/20 transition-all">
                        <EllipsisVertical size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-[#e7edf3] dark:border-slate-800 bg-background-light/20 dark:bg-slate-900/50 flex flex-wrap justify-between items-center gap-4">
          <p className="text-sm text-[#4c739a] dark:text-slate-400">
            Showing
            <span className="font-bold text-[#0d141b] dark:text-white mx-1">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>
            to
            <span className="font-bold text-[#0d141b] dark:text-white mx-1">
              {Math.min(currentPage * itemsPerPage, totalItems)}
            </span>
            of
            <span className="font-bold text-[#0d141b] dark:text-white mx-1">
              {totalItems}
            </span>
            bookings
          </p>
          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-[#cfdbe7] dark:border-slate-800 p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <History className="text-primary" size={20} />
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-[#e7edf3] dark:border-slate-800">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                <CheckCircle2 className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">
                  <span className="font-bold">Admin Sarah</span> confirmed
                  booking #BK-9421
                </p>
                <p className="text-xs text-[#4c739a] mt-0.5">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-[#e7edf3] dark:border-slate-800">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                <UserPlus className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">
                  <span className="font-bold">System</span> created new booking
                  for Emma Watson
                </p>
                <p className="text-xs text-[#4c739a] mt-0.5">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                <X className="text-red-600" size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">
                  <span className="font-bold">James Wilson</span> cancelled
                  booking #BK-9210
                </p>
                <p className="text-xs text-[#4c739a] mt-0.5">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-xl p-6 text-white flex flex-col justify-between shadow-lg shadow-primary/20">
          <div>
            <h3 className="text-lg font-bold mb-2">Weekly Summary</h3>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Your hotel performance is up by 15% this week.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span>Occupancy Rate</span>
                <span className="font-bold">82%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1.5">
                <div
                  className="bg-white h-full rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-sm pt-2">
                <span>Revenue Target</span>
                <span className="font-bold">$45.2k / $50k</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1.5">
                <div
                  className="bg-white h-full rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-2.5 bg-white text-primary rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
            View Detailed Report
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardApp;
