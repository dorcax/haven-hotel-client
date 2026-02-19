import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  AlertCircle,
  ArrowUp,
  DollarSign,
  DoorOpen,
  EyeIcon,
  FunnelIcon,
  LogIn,
  PencilIcon,
  Search,
  TrashIcon,
  TrendingUp,
} from "lucide-react";
import { bookingsData } from "@/data/bookings";
import type { Booking } from "@/data/bookings";

const Bookings = () => {
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

  // Dynamic counts for filter buttons
  const counts = {
    All: bookingsData.length,
    Pending: bookingsData.filter((b) => b.status === "Pending").length,
    Confirmed: bookingsData.filter((b) => b.status === "Confirmed").length,
    "Checked-in": bookingsData.filter((b) => b.status === "Checked-in").length,
    Cancelled: bookingsData.filter((b) => b.status === "Cancelled").length,
  };

  const getStatusStyles = (status: Booking["status"]) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Pending":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "Checked-in":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300";
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Booking Management
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Manage and monitor all hotel reservations
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm"
              placeholder="Search bookings..."
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl overflow-x-auto no-scrollbar">
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
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-white dark:bg-slate-700 shadow-sm text-primary"
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                {filter} ({counts[filter]})
              </button>
            ))}
          </div>

          <button className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors w-full md:w-auto">
            <FunnelIcon className="w-4 h-4" />
            <span className="md:hidden lg:inline">Filters</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-bottom border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Booking ID
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Customer
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Property Details
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Stay Dates
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">
                  Price
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {paginatedBookings.length > 0 ? (
                paginatedBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group"
                  >
                    <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full ${booking.avatarColor} flex items-center justify-center font-semibold text-xs`}
                          data-alt={`Avatar of ${booking.customerName}`}
                        >
                          {booking.customerInitials}
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {booking.customerName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {booking.roomName}
                      </p>
                      <p className="text-xs text-slate-500">
                        {booking.roomDetails}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {booking.checkIn} - {booking.checkOut}
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase font-medium">
                          {booking.nights} Nights
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white text-right">
                      ${booking.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(booking.status)}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1">
                        <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-colors">
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-colors">
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-full text-slate-400">
                        <Search className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white font-bold">
                          No bookings found
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          We couldn't find any bookings matching your current
                          criteria.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing
            <span className="font-semibold text-slate-900 dark:text-white mx-1">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>
            to
            <span className="font-semibold text-slate-900 dark:text-white mx-1">
              {Math.min(currentPage * itemsPerPage, totalItems)}
            </span>
            of
            <span className="font-semibold text-slate-900 dark:text-white mx-1">
              {totalItems}
            </span>
            results
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

              {[1, 2, 3].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {totalPages > 4 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {totalPages > 3 && (
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setCurrentPage(totalPages)}
                    className="cursor-pointer"
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Today's Check-ins
            </span>
            <div className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-lg">
              <LogIn className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            14
          </p>
          <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
            <ArrowUp className="w-3 h-3" />
            +2 from yesterday
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Available Rooms
            </span>
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">
              <DoorOpen className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            28
          </p>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Total: 120 rooms
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Monthly Revenue
            </span>
            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-lg">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            $42,850
          </p>
          <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
            <TrendingUp size={14} />
            8% growth
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Pending Tasks
            </span>
            <div className="p-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-lg">
              <AlertCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            05
          </p>
          <p className="text-xs text-amber-600 font-medium mt-1">
            Needs attention
          </p>
        </div>
      </div>
    </>
  );
};

export default Bookings;
