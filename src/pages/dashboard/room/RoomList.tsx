import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
 
import {
  Table,    
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { usePopUpContext } from '@/context/PopUpContext'
import AddRoom from '@/components/Dialog/room/AddRoom'
const roomFilter =[{
    id:1,
    name:"category"
},
{
    id:2,
    name:"floor"
},
{
    id:3,
    name:"price"
},{
    id:4,
    name:"description"
}]

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
const RoomList = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
     const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const {openDialog} =usePopUpContext()
  const handleNewRoom =()=>{
    openDialog(<AddRoom />)
  }
 
  return (
   <section className='w-full'>
    <div className=' flex items-center justify-between 
    '>
        <h2 className='text-gray-900 text-lg'>Rooms</h2>
        <Button className='bg-[#E3B23C] rounded-full capitalize text-sm' onClick={handleNewRoom}>new room</Button>
    </div>
    {/* search bar and filter button  */}
    <article className='mt-4 flex justify-between items-center '>
       <div className='relative w-[350px]'>
         <Input className='border rounded-full' />
            <Search className='absolute top-2 left-2 '/>
       </div>
        <div className=''>
            {roomFilter.map((el)=>(
                <Button key={el.id} className='cursor-pointer  px-6 mx-1 bg-0 border text-black  rounded-full ' >{el.name}</Button>

            ))}
        </div>
    </article>
    {/* table list  */}
     <div className="overflow-hidden rounded-md border mt-10">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup:any) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header:any) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row:any) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell:any) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>

   </section>
  )
}

export default RoomList
