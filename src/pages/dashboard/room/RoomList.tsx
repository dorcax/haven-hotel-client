import { type ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Ban,
  CircleCheck,
  CircleEllipsis,
  MoreHorizontal,
} from "lucide-react";
import React from "react";

import PageHeader from "@/components/common/PageHeader";
import SummaryCard from "@/components/common/SummaryCard";
import AddRoom from "@/components/Dialog/room/AddRoom";
import DeleteRoom from "@/components/Dialog/room/DeleteRoom";
import EditRoom from "@/components/Dialog/room/EditRoom";
import RoomDetail from "@/components/Drawer/Room/RoomDetail";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import DataTable from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePopUpContext } from "@/context/PopUpContext";
import useSearch from "@/hooks/useSearch";
import { useListRoomsQuery } from "@/api/data/rooms.api";
import { useAuthState } from "@/api/data/auth";
import type { Room } from "@/data/rooms";
// import { roomsData, type Room } from "@/data/rooms";
import {useParams} from "react-router-dom"

export function RoomList() {
   const { auth } = useAuthState();
   console.log("auth",auth)
  const { openDialog, openDrawer } = usePopUpContext();

  // const propertyId = auth?.hotelId ?? "";
  const {id} =useParams()
const propertyId =id
  console.log("room property id",id)
  const { data: listRoom, isLoading} =
    useListRoomsQuery(
      { propertyId, page: 0, count: 100 },
      { skip: !propertyId }
    );

  const roomsData = listRoom?.list ?? [];

  console.log("roomdata",roomsData)
  

  // Search state
  const { query } = useSearch("", 500);
  const [filteredRooms, setFilteredRooms] = React.useState<Room[]>(roomsData);

  const handleSearch = React.useCallback((value: string) => {
    if (!value) {
      setFilteredRooms(roomsData);
    } else {
      setFilteredRooms(
        roomsData.filter(
          (r:any) =>
            (r.title ?? "").toLowerCase().includes(value.toLowerCase()) ||
            (r.category ?? "").toLowerCase().includes(value.toLowerCase()) ||
            (r.id ?? "").toLowerCase().includes(value.toLowerCase()),
        ),
      );
    }
  }, [roomsData]);

  // Sync rooms data with filteredRooms when roomsData might change or on initial load
  React.useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);



  // Columns
  const columns = React.useMemo<ColumnDef<Room>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "attachments",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="capitalize "
          >
            Property Image
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => {
          const attachments = row.original.attachments;
          return (
            <Carousel className="w-full max-w-[120px]">
              <CarouselContent>
                {attachments?.map((att, i) => (
                  <CarouselItem key={i}>
                    <div className="p-1 flex justify-center">
                      <img
                        src={att}
                        className="w-full   rounded-md h-20 object-cover"
                        alt="Property"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 size-[25px] mx-1 bg-white/80 dark:bg-slate-800/80" />
              <CarouselNext className="right-0 size-[25px] mx-1 bg-white/80 dark:bg-slate-800/80" />
            </Carousel>
          );
        },
      },
      {
        accessorKey: "title",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title / Number <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => (
          <div className="font-medium">{row.getValue("title")}</div>
        ),
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
          const price = parseFloat(row.getValue("price") ?? 0);
          return (
            <div className="font-bold">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          );
        },
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => (
          <Badge variant="outline" className="font-semibold capitalize">
            {row.getValue("category")}
          </Badge>
        ),
      },
      {
        accessorKey: "amenities",
        header: "Amenities",
        cell: ({ row }) => {
          const amenities = (row.getValue("amenities") as string[]) || [];
          return (
            <div className="truncate max-w-[200px] text-xs text-slate-500">
              {amenities.join(", ")}
            </div>
          );
        },
      },
      {
        accessorKey: "isAvailable",
        header: "Status",
        cell: ({ row }) => (
          <Badge
            className={
              row.original.isAvailable
                ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                : "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400"
            }
          >
            {row.getValue("isAvailable") ? "Available" : "Booked"}
          </Badge>
        ),
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() =>
                  openDrawer(() => <RoomDetail room={row.original} />)
                }
              >
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  openDialog(() => <EditRoom room={row.original} />)
                }
              >
                Edit Property
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() =>
                  openDialog(() => <DeleteRoom room={row.original} />)
                }
              >
                Delete Property
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    [openDialog, openDrawer],
  );

  const summaryCards = [
    {
      title: "Total Properties",
      value: roomsData.length,
      icon: <CircleEllipsis className="text-primary" />,
    },
    {
      title: "Available",
      value: roomsData.filter((r:any) => r.isAvailable).length,
      icon: <CircleCheck className="text-green-500" />,
    },
    {
      title: "Booked",
      value: roomsData.filter((r:any) => !r.isAvailable).length,
      icon: <Ban className="text-red-500" />,
    },
  ];

  return (
    <div className="space-y-4">
      <PageHeader
        title="Properties & Accommodations"
        description="Manage your collection of hotel rooms and luxury apartments."
        primary={{
          title: "create room",
          action: () => openDialog(() => <AddRoom />),
        }}
        refresh={{ action: () => {}, isLoading: false }}
      />

      <SummaryCard cards={summaryCards} />

      <DataTable
        data={filteredRooms}
        columns={columns}
        loading={isLoading}
        search={handleSearch}
        searchQuery={query}
      />
    </div>
  );
}

export default RoomList;
