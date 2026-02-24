


import { type ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  CircleCheck,
  CircleEllipsis,
  MoreHorizontal,
} from "lucide-react";
import React, { useState } from "react";

import PageHeader from "@/components/common/PageHeader";
import SummaryCard from "@/components/common/SummaryCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DataTable from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useGetHostPropertyQuery } from "@/api/data/hotels.api";
import DeleteProperty from "@/components/Dialog/hotel/DeleteProperty";
import AddRoom from "@/components/Dialog/room/AddRoom";
import EditRoom from "@/components/Dialog/room/EditRoom";
import PropertyDetail from "@/components/Drawer/property/PropertyDetail";
import { usePopUpContext } from "@/context/PopUpContext";
import useSearch from "@/hooks/useSearch";
import { useNavigate } from "react-router-dom";


export type Property = {
  id: string;
  name: string;
  description: string;
  type: "HOTEL" | "APARTMENT";
  price: number;
  address: string;
  features?:string[]
  amenities?:string[]
  isVerified: boolean;
  attachments?: {
    uploads?: { url: string }[];
  };
};

type RoomFilter = {
  page: number;
  count: number;
};
export function AllProperties() {
  const { openDialog,openDrawer } = usePopUpContext();

  // Always default to empty array
  const { data: listProperty , isLoading } = useGetHostPropertyQuery();
    const [filters, setFilters] = useState<RoomFilter>({
    page: 1,
    count: 10,
  });

console.log(filters)

  const [filteredProperties, setFilteredProperties] =
    React.useState<Property[]>([]);

  const { query } = useSearch("", 500);

   const propertyData = listProperty?.list ?? [];
  React.useEffect(() => {
    setFilteredProperties(propertyData);
  }, [propertyData]);

  //Proper search with dependency
  const handleSearch = React.useCallback(
    (value: string) => {
      if (!value) {
        setFilteredProperties(propertyData);
      } else {
        setFilteredProperties(
          propertyData.filter(
            (p: Property) =>
              p.name?.toLowerCase().includes(value.toLowerCase()) ||
              p.type?.toLowerCase().includes(value.toLowerCase()) ||
              p.address?.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    },
    [propertyData]
  );

  React.useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);
  const navigate =useNavigate()

  // ✅ Property Columns
  const columns = React.useMemo<ColumnDef<Property>[]>(
    () => [
      {
        accessorKey: "attachments",
        header: "Image",
        cell: ({ row }) => {
          const attachments = row.original.attachments;
          return (
            <Carousel className="w-full max-w-[120px]">
              <CarouselContent>
                {attachments?.uploads?.map((att, i) => (
                  <CarouselItem key={i}>
                    <div className="p-1 flex justify-center">
                      <img
                        src={att.url}
                        className="w-full rounded-md h-20 object-cover"
                        alt="Property"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 size-[25px]" />
              <CarouselNext className="right-0 size-[25px]" />
            </Carousel>
          );
        },
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
      },
      {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => (
          <Badge variant="secondary">{row.getValue("type")}</Badge>
        ),
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => (
          <div className="font-semibold">₦{row.getValue("price")}</div>
        ),
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "isVerified",
        header: "Status",
        cell: ({ row }) => (
          <Badge
            className={
              row.original.isVerified
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }
          >
            {row.original.isVerified ? "Verified" : "Pending"}
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
                     openDrawer(() => <PropertyDetail property={row.original} />)
                   }
                 >
                   View Details
                 </DropdownMenuItem>
                 {row.original.type ==="HOTEL" && <DropdownMenuItem
                   onClick={() =>
                    navigate(`/dashboard/${row.original.id}/room`)
                   }
                 >
                    RoomList
                 </DropdownMenuItem>}
                   {row.original.type ==="HOTEL" && <DropdownMenuItem
                   onClick={() =>
                     openDialog(() => <AddRoom />)
                   }
                 >
                    AddRoom
                 </DropdownMenuItem>}
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
                     openDialog(() => <DeleteProperty property={row.original} />)
                   }
                 >
                   Delete Property
                 </DropdownMenuItem>
               </DropdownMenuContent>
             </DropdownMenu>
           ),
         },
    ],
    [openDialog,openDrawer]
  );



  const summaryCards = [
    {
      title: "Total Properties",
      value: listProperty?.pagination?.filterCounts?.TOTAL,
      icon: <CircleEllipsis className="text-primary" />,
    },
    {
      title: "Hotels",
      value: listProperty?.pagination?.filterCounts?.HOTEL,
      icon: <CircleCheck className="text-green-500" />,
    },
    {
      title: "Apartments",
      value:  listProperty?.pagination?.filterCounts?.APARTMENT,
      icon: <CircleCheck className="text-blue-500" />,
    },
  ];

  return (
    <div className="space-y-4">
      <PageHeader
        title="All Properties"
        description="Manage your hotels and apartments."
      />

      <SummaryCard cards={summaryCards} />

      <DataTable
        data={filteredProperties}
        columns={columns}
        loading={isLoading}
         search={(q) => setFilters((p) => ({ ...p, search: q }))}
        searchQuery={query}
     
      />
    </div>
  );
}

export default AllProperties;
