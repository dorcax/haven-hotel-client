import ChartBarDefault from "@/components/common/DashboardBarChat";
import RoomProgressBar from "@/components/common/RoomProgressBar";
import { Badge } from "@/components/ui/badge";
import DataTable from "@/components/ui/data-table";
import type { Booking } from "@/data/rooms";
import { bookingData } from "@/data/rooms";
import type { ColumnDef } from "@tanstack/react-table";
import {
  Banknote,
  BookCheck,
  CalendarClock,
  LogIn,
  MessageSquareWarningIcon,
  TrendingUp
} from "lucide-react";
import BookingPieChart from "./PieChart";

const DashboardApp = () => {

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

  const columns: ColumnDef<Booking>[] = [
    {
      accessorKey: "bookingId",
      header: "Booking Id",
      cell: ({ row }) => (
        <span className="font-medium text-primary">{row.original.bookingId}</span>
      ),
    },
    {
      accessorKey: "customerName",
      header: "Customer Name",
    },
    {
      accessorKey: "roomType",
      header: "RoomType",
    },
    {
      accessorKey: "checkInDate",
      header: "CheckInDate",
    },
    {
      accessorKey: "checkOutDate",
      header: "CheckOutDate",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (

        <Badge className={`${getStatusStyles(row.original.status)} border-0 px-3 py-1 font-medium`}>
          {row.original.status}
        </Badge>
      ),
    },
  ]


  return (
    <>
      <div className="flex flex-wrap gap-4 mt-4 mb-8">
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
            {/* {bookingsData.length.toLocaleString()} */}
            23
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
            {/* {bookingsData.filter((b) => b.status === "Checked-in").length} */}
            3
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
            {/* {bookingsData.filter((b) => b.status === "Pending").length} */}
            5          </p>
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
        
            2
          </p>
          <p className="text-[#078838] text-xs font-bold leading-normal flex items-center gap-1">
            <TrendingUp size={12} />
            +8% vs targets
          </p>
        </div>
      </div>

      {/* second part code  */}

      <div className="grid grid-cols-3 gap-4  ">
        <div className="lg:col-span-2 bg-white shadow-md dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden px-4">
          <div className="flex justify-between pt-6 border-b border-slate-100 dark:border-slate-800">
            <h2 className="capitalize font-semibold text-lg">recent bookings </h2>
            <button className="text-blue-400 capitalize text-sm">view all</button>
          </div>

          <div className="">
            <DataTable
              data={bookingData}
              columns={columns}
              loading={false}
              thclassName="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] tracking-widest font-bold"
              tbclassName="p-4 "
            />
          </div></div>
        <div className=" col-span-1">
          <BookingPieChart />
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start py-2">
        <div className="lg:col-span-2">
          <ChartBarDefault />
        </div>
        {/* last part  */}
        <div className="bg-white rounded-xl p-6 text-black flex flex-col justify-between shadow-sm ">
          <div>
            <h3 className="text-lg  font-semibold mb-2 capitalize">popular room type</h3>

            <div className="space-y-4">

              <RoomProgressBar data={[{ name: "deluxe suite", color: "blue", value: 82 }, { name: "Standard", color: "green", value: 52 }, { name: "suite", color: "yellow", value: 72 }]} />
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
