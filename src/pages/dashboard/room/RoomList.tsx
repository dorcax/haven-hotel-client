




import {
  type ColumnDef
} from "@tanstack/react-table";
import { ArrowUpDown, Ban, CircleCheck, CircleEllipsis, MoreHorizontal } from "lucide-react";
import React from "react";

import { useAuthState } from "@/api/data/auth";
import { useListRoomsQuery } from "@/api/data/rooms.api";
import Loader from "@/components/common/Loader";
import PageHeader from "@/components/common/PageHeader";
import SummaryCard from "@/components/common/SummaryCard";
import AddRoom from "@/components/Dialog/room/AddRoom";
import DeleteRoom from "@/components/Dialog/room/DeleteRoom";
import EditRoom from "@/components/Dialog/room/EditRoom";
import RoomDetail from "@/components/Drawer/Room/RoomDetail";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

export function RoomList() {
  const { auth } = useAuthState();
  const { openDialog, openDrawer } = usePopUpContext();

  const propertyId = auth?.hotelId ?? "";

  // Fetch rooms from API
  const { data: listRoom, isLoading, isFetching, refetch } = useListRoomsQuery(
    { propertyId, page: 0, count: 100 },
    { skip: !propertyId }
  );

  // Rooms from API
  const rooms = listRoom?.list ?? [];
  const pagination = listRoom?.pagination.filterCounts ?? {};

  // Search state
  // const { query, onSearch } = useSearch("", 500);
  const [filteredRooms, setFilteredRooms] = React.useState(rooms);

   const { query } = useSearch("", 500); 






const handleSearch = React.useCallback((value: string) => {
  if (!value) {
    setFilteredRooms(rooms);
  } else {
    setFilteredRooms(
      rooms.filter((r: any) =>
        (r.title ?? "").toLowerCase().includes(value.toLowerCase())
      )
    );
  }
}, [rooms]); 


  // Columns
  const columns = React.useMemo<ColumnDef<any>[]>(() => [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
          className="capitalize border"
        >
          room image
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => {
        const attachments = row.getValue("attachments") as {
          uploads: { url: string }[];
        };
        return (
          <Carousel className="w-full max-w-[120px]">
            <CarouselContent>
              {attachments?.uploads?.map((att, i) => (
                <CarouselItem key={i}>
                  <div className="p-1 flex justify-center">
                    <img
                      src={att.url}
                      className="w-full rounded-md h-20 object-cover"
                      alt="Room"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 size-[25px] mx-1" />
            <CarouselNext className="right-0 size-[25px] mx-1" />
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
          Room Number <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("title")}</div>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        const price = parseFloat(row.getValue("price") ?? 0);
        return <div>{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>;
      },
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <div>{row.getValue("category")}</div>,
    },
    {
      accessorKey: "amenities",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          room facility
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => {
        const amenities = row.getValue("amenities") as string[] || [];
        return (
          <div className="truncate max-w-[200px]">
            {amenities.map((a, i) => (
              <span key={i}>{a}{i < amenities.length - 1 ? ', ' : ''}</span>
            ))}
          </div>
        );
      },
    },
    {
      accessorKey: "isAvailable",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant="secondary">
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
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => openDrawer(() => <RoomDetail room={row.original} />)}>
              View Room
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openDialog(() => <EditRoom room={row.original} />)}>
              Edit Room
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openDialog(() => <DeleteRoom room={row.original} />)}>
              Delete Room
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ], [openDialog, openDrawer]);

  

  const summaryCards = [
    { title: "Total", value: pagination.TOTAL || 0, icon: <CircleEllipsis /> },
    { title: "Available", value: pagination.ACTIVE || 0, icon: <CircleCheck /> },
    { title: "Booked", value: pagination.INACTIVE || 0, icon: <Ban /> },
  ];



  return (
    <div className="space-y-4">
            {isLoading && <Loader />}

      <PageHeader
        title="Room"
        description="Here's a list of all rooms in the hotel."
        primary={{ title: "Create Room", action: () => openDialog(() => <AddRoom />) }}
        refresh={{ action: refetch, isLoading: isFetching }}
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


