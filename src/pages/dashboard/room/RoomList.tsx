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

import { useAuthState } from "@/api/data/auth"
import { useListRoomsQuery } from "@/api/data/rooms.api"
import Loader from "@/components/common/Loader"
import PageHeader from "@/components/common/PageHeader"
import SummaryCard from "@/components/common/SummaryCard"
import AddRoom from "@/components/Dialog/room/AddRoom"
import DeleteRoom from "@/components/Dialog/room/DeleteRoom"
import EditRoom from "@/components/Dialog/room/EditRoom"
import RoomDetail from "@/components/Drawer/Room/RoomDetail"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import DataTable from "@/components/ui/data-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { usePopUpContext } from "@/context/PopUpContext"


export type RoomType = {
  // id: string
  name: string
  floor: number
  description?: string,
  category: string
  hotelId?: string
  price: number,
  amenities: string[],
  attachments: string[]
  isAvailable: boolean
}


export const columns: ColumnDef<any>[] = [
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
    accessorKey: "attachment",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="capitalize border"
        >
          room image
          room image
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const attachments = row.getValue("attachment") as {
        uploads: { url: string }[]
      }

      return <Carousel className="w-full max-w-[120px]">
        <CarouselContent>
          {attachments?.uploads?.map((attachment: any, index) => (
            <CarouselItem key={index}>
              <div className="p-1 flex justify-center">
                <img src={attachment?.url} className="w-full rounded-md h-20 object-cover" />

                {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0  size-[25px] mx-1" />
        <CarouselNext className="right-0  size-[25px] mx-1" />
      </Carousel>

    }



  },
  {
  {
    accessorKey: "roomNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="capitalize"
        >
          room number
          room number
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("roomNumber")}</div>
    ),
  },
  {
  {
    accessorKey: "price",
    header: ({ column }) => {

      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          price
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          category
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("category")}</div>
    ),
  },
  {
  {
    accessorKey: "floor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          floor
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("floor")}</div>,
  },
  {
  {
    accessorKey: "amenities",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          room facility
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amenities = row.getValue("amenities") as string[]
      // const amenity =amenities.split(" ").join(",")

      return <div className="">
        {amenities?.map((amenity, i) => (
          <span key={i}>{amenity},</span>
        ))}
      </div>

      // <div className="lowercase">{row.getValue("amenities")}</div>
    },
  },

  {
    accessorKey: "isAvailable",
    header: "Status",
    cell: ({ row }) => {
      const available = row.getValue("isAvailable")

      return <div className="capitalize" >{available ? <Badge variant="secondary">available</Badge> : <Badge variant="secondary">booked</Badge>}</div>
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const RoomType = row.original


      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => openDrawer()}
            // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              View room
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>Edit room</DropdownMenuItem>
            <DropdownMenuItem>Delete room</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function RoomList() {
  // const {id} =useParams()
  const { auth } = useAuthState()
  const { openDialog, openDrawer } = usePopUpContext()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [query] = React.useState<string>("")

  const [filters, setFilter] = React.useState({
    page: 0,
    count: 10
  })


  const hotelId = auth?.hotelId ?? "";


  const {
    data: listRoom,
    isLoading,
    refetch,
    isFetching,
  } = useListRoomsQuery({ hotelId, ...filters }, { skip: !hotelId })



  const rooms = listRoom?.list ?? []
  console.log("room list", rooms)
  const pagination = listRoom?.pagination.filterCounts ?? {}
  console.log("33333", pagination)
  // const pagination =listRoom.pagination

  // data table colums 
  const columns: ColumnDef<any>[] = [
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
      accessorKey: "attachment",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="capitalize border"
          >
            room image
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => {
        const attachments = row.getValue("attachment") as {
          uploads: { url: string }[]
        }

        return <Carousel className="w-full max-w-[120px]">
          <CarouselContent>
            {attachments?.uploads?.map((attachment: any, index) => (
              <CarouselItem key={index}>
                <div className="p-1 flex justify-center">
                  <img src={attachment?.url} className="w-full rounded-md h-20 object-cover" />

                  {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0  size-[25px] mx-1" />
          <CarouselNext className="right-0  size-[25px] mx-1" />
        </Carousel>

      }



    },
    {
      accessorKey: "roomNumber",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="capitalize"
          >
            room number
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("roomNumber")}</div>,
    },
    {
      accessorKey: "price",
      header: ({ column }) => {

        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            price
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => {
        const price = parseFloat(row.getValue("price"))

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)

        return <div className=" font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "category",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            category
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("category")}</div>,
    },
    {
      accessorKey: "floor",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            floor
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("floor")}</div>,
    },
    {
      accessorKey: "amenities",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            room facility
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => {
        const amenities = row.getValue("amenities") as string[]
        // const amenity =amenities.split(" ").join(",")

        return <div className="">
          {amenities?.map((amenity, i) => (
            <span key={i}>{amenity},</span>
          ))}
        </div>

        // <div className="lowercase">{row.getValue("amenities")}</div>
      },
    },

    {
      accessorKey: "isAvailable",
      header: "Status",
      cell: ({ row }) => {
        const available = row.getValue("isAvailable")

        return <div className="capitalize" >{available ? <Badge variant="secondary">available</Badge> : <Badge variant="secondary">booked</Badge>}</div>
      },
    },


    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const RoomType = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
              <DropdownMenuItem
                onClick={() => openDrawer(<RoomDetail room={row.original} />)}
              // onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                View room
              </DropdownMenuItem>
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem onClick={() => openDialog(<EditRoom room={row.original} />)}>Edit room</DropdownMenuItem>
              <DropdownMenuItem onClick={() => openDialog(<DeleteRoom room={row.original} />)}>Delete room</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

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
  // ✅ handle loading states cleanly
  if (!hotelId) return <Loader />
  if (isLoading) return <Loader />
  // if (!listRoom?.list?.length) return <div className="text-center py-10">No rooms found</div>

  const handleRoom = () => {

    openDialog(<AddRoom />)

  }



  // handle page change 
  const handlePageChange = (page: number) => {
    setFilter((prev) => ({ ...prev, page }))

  }

  // handle page size

  const handlePageSize = (size: number) => {
    setFilter((prev) => ({ ...prev, count: size, page: 1 }))
  }
  // summary card  

  const summaryCard = [{
    title: "Total",
    value: pagination.TOTAL,
    icon: <CircleEllipsis />
  }, {
    title: "Available",
    value: pagination.ACTIVE,
    icon: <CircleCheck />
  }, {
    title: "Booked",
    value: pagination.INACTIVE,
    icon: <Ban />
  }]

  return (
    <div className="space-y-4">
      <PageHeader
        title="Room"
        description="Here's a list of all rooms in the hotel."
        primary={{
          title: "create room",
          action: () => openDialog(<AddRoom />)

        }}
        refresh={{
          action: rooms.refetch,
          isLoading: rooms.isFetching,
        }}
      />
      />

      {/* * summary card */}
      <SummaryCard
        cards={summaryCard}



      />

      <DataTable
        data={rooms}
        columns={columns}
        loading={listRoom.isFetching}
        //  search={(q) => setFilters((p) => ({ ...p, search: q }))}
        search={(q) => setFilter((prev) => ({ ...prev, search: q }))}
        searchQuery={query}

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
