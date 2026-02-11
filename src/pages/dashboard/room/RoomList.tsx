import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  Ban,
  CircleCheck,
  CircleEllipsis,
  MoreHorizontal,
} from "lucide-react";
import * as React from "react";



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

export function RoomList() {
  const { auth } = useAuthState();
  const { openDialog, openDrawer } = usePopUpContext();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState<string>("")
    const [query] = React.useState<string>("");

  const [filters, setFilter] = React.useState({
    page: 0,
    count: 10,
    search: "", // Add search to filters
  });

  const propertyId = auth?.hotelId ?? "";

  const {
    data: listRoom,
    isLoading,
    isFetching,
    refetch,
  } = useListRoomsQuery({ propertyId, ...filters }, { 
    skip: !propertyId,
  
  });

  const rooms = listRoom?.list ?? [];
  console.log("rooms",rooms)
  const pagination = listRoom?.pagination.filterCounts ?? {};

  // Memoize columns
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
          className="capitalize"
        >
          room number
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          price
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => {
        const price = parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price);
        return <div className="font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          category
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => <div className="lowercase">{row.getValue("category")}</div>,
    },
    // {
    //   accessorKey: "floor",
    //   header: ({ column }) => (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       floor
    //       <ArrowUpDown />
    //     </Button>
    //   ),
    //   cell: ({ row }) => <div className="lowercase">{row.getValue("floor")}</div>,
    // },
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
        <div className="capitalize">
          {row.getValue("isAvailable") ? (
            <Badge variant="secondary">available</Badge>
          ) : (
            <Badge variant="secondary">booked</Badge>
          )}
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => openDrawer(<RoomDetail room={row.original} />)}
            >
              View room
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => openDialog(<EditRoom room={row.original} />)}
            >
              Edit room
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => openDialog(<DeleteRoom room={row.original} />)}
            >
              Delete room
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ], [openDialog, openDrawer]);

  const table = useReactTable({
    data: rooms,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const summaryCard = [
    { title: "Total", value: pagination.TOTAL || 0, icon: <CircleEllipsis /> },
    { title: "Available", value: pagination.ACTIVE || 0, icon: <CircleCheck /> },
    { title: "Booked", value: pagination.INACTIVE || 0, icon: <Ban /> },
  ];

  const handleCreateRoom = React.useCallback(() => {
    openDialog(<AddRoom />);
  }, [openDialog]);

  // Debounced search handler
  const handleSearch = React.useCallback((query: string) => {
    setSearchQuery(query);
    // Use debounce or timeout to prevent too many re-renders
    const timeoutId = setTimeout(() => {
      setFilter(prev => ({ ...prev, search: query }));
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, []);

  if ( isLoading) return <Loader />;

  return (
    <div className="space-y-4">
      <PageHeader
        title="Room"
        description="Here's a list of all rooms in the hotel."
        primary={{ title: "create room", action: handleCreateRoom }}
        refresh={{ 
          action: refetch, 
          isLoading: isFetching 
        }}
      />
      
      <SummaryCard cards={summaryCard} />
      
      <DataTable
        data={rooms}
        columns={columns}
        loading={isLoading}
        search={(q) => setFilter((p) => ({ ...p, search: q }))}
        searchQuery={query}
        // search={handleSearch} 
        // searchQuery={searchQuery}
      />
      
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RoomList; 
