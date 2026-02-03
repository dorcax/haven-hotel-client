// import { useUpdateRoomMutation } from '@/api/data/rooms.api';
// import CustomInfoDialog from '@/components/common/CustomInfoDialog';
// import DropZoneImage from "@/components/common/DropZoneImage";
// import Loader from '@/components/common/Loader';
// import { roomSchema } from '@/components/common/validation';
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import TagInput from "@/components/ui/TagsInput";
// import UploaderProvider from "@/context/UploaderContext";
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from "react-hook-form";
// import { toast } from 'react-toastify';
// import z from "zod";

// const EditRoom = ({ room }: any) => {
//   const [updateRoom, { isLoading }] = useUpdateRoomMutation()


//     if (!room) return null;
//   const form = useForm<z.infer<typeof roomSchema>>(
//     {
//       resolver: zodResolver(roomSchema),
//       defaultValues: {
//         // attachments: room?.attachments || [],
//         // roomNumber: room?.roomNumber,
//         // description: room?.description,
//         // category: room?.category,
//         // amenities: room?.amenities,
//         // floor: room?.floor?.toString(),
//         // price: room?.price?.toString(),
//         // capacity: room?.capacity?.toString()
//          attachments: room?.attachments || [],
//       roomNumber: room?.roomNumber || "",
//       description: room?.description || "",
//       category: room?.category || "STANDARD",
//       amenities: room?.amenities || [],
//       floor: room?.floor?.toString() || "",
//       price: room?.price?.toString() || "",
//       capacity: room?.capacity?.toString() || ""
//       }
//     }
//   )



 
//   const onSubmit = async(values:z.infer<typeof roomSchema>) => {
//      console.log("Form submitted with values:", values);

//      try {
//     const payload ={
//       ...values,
//       floor:parseInt(values.floor,10),
//       price:parseInt(values.price,10),
//       capacity:parseInt(values.capacity,10),

//     }
//     const response =await updateRoom({body:payload,roomId:room.id}).unwrap()
//     console.log("response",response)
//     toast.success("Room updated successfully!");

//      } catch (error:unknown) {
//       console.log("error",error)
//       console.error("Update error:", error);
//       const err = error as any;
//       toast.error(err?.data?.message || "Failed to update room");

//      }
//   }
//   return (
//     <UploaderProvider>
//       <CustomInfoDialog
//         title="create room"
//         // description="Add a new r loading={true}oom to the hotel system"
//         className="w-full md:max-w-4xl max-h-[500px] overflow-y-auto overflow [&::-webkit-scrollbar]:hidden  [-ms-overflow-style-none] [scrollbar-width:none]"
//         // loading={true}
//       >
//         <Form {...form}>
//           <form

//             className="grid grid-cols-2 gap-4   text-[#6B7280] "
//             onSubmit={form.handleSubmit(onSubmit)}
//           >
//             <div className=" w-full ">
//               {/* left hand image */}

//               <FormField
//                 name="attachments"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="capitalize text-base text-gray-900 pb-4">
//                       hotel image
//                     </FormLabel>
//                     <FormControl>
//                       <DropZoneImage
//                         name={field.name}
//                         maxCount={4}
//                         maxSize={6}
//                         acceptType="image"
//                         defaultFiles={room?.attachment?.uploads || []}/>
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//             </div>

//             {/* Right Column: Room Details Form */}
//             <div className="w-full flex flex-col   ">
//               <h2 className="text-base font-semibold py-2">Room Details</h2>

//               <FormField
//                 name="roomNumber"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem className="my-2">
//                     <FormLabel className="text-sm capitalize">
//                       Room Number
//                     </FormLabel>
//                     <FormControl>
//                       <Input {...field} placeholder="Enter room name" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 name="description"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem className="my-2">
//                     <FormLabel className="text-sm capitalize">
//                       Description
//                     </FormLabel>
//                     <FormControl>
//                       <Input {...field} placeholder="Enter room description" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 name="category"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem className="my-2">
//                     <FormLabel className="text-sm capitalize">Category</FormLabel>
//                     <Select value={field.value} onValueChange={field.onChange}>
//                       <FormControl>
//                         <SelectTrigger className="w-full">
//                           <SelectValue placeholder="Select category" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent >
//                         <SelectItem value="DELUXE">DELUXE</SelectItem>
//                         <SelectItem value="STANDARD">STANDARD</SelectItem>
//                         <SelectItem value="SUITE">SUITE</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 name="amenities"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem className="my-2">
//                     <FormLabel className="text-sm capitalize">
//                       Amenities
//                     </FormLabel>
//                     <FormControl>
//                       <TagInput onChange={field.onChange} value={field.value} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <div className="flex flex-wrap gap-4 mt-3">
//                 <FormField
//                   name="floor"
//                   control={form.control}
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm capitalize">Floor</FormLabel>
//                       <FormControl>
//                         <Input

//                           {...field}
//                           placeholder="e.g. 5"
//                           className="w-[100px] rounded-full"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   name="price"
//                   control={form.control}
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm capitalize">
//                         Price per night ($)
//                       </FormLabel>
//                       <FormControl>
//                         <Input

//                           {...field}
//                           placeholder="e.g. 240"
//                           className="w-[100px] rounded-full"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   name="capacity"
//                   control={form.control}
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm capitalize">
//                         Max Capacity
//                       </FormLabel>
//                       <FormControl>
//                         <Input

//                           {...field}
//                           placeholder="e.g. 2"
//                           className="w-[100px] rounded-full"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="flex justify-end mt-5">
//                 <Button type="submit" disabled={isLoading} className="w-[140px] bg-[#E3B23C] hover:bg-[#d4a62e]">
//                   {isLoading ? <Loader /> : "update room"}
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </Form>
//       </CustomInfoDialog>
//     </UploaderProvider>

//   )
// }

// export default EditRoom


import { useUpdateRoomMutation } from '@/api/data/rooms.api';
import CustomInfoDialog from '@/components/common/CustomInfoDialog';
import DropZoneImage from "@/components/common/DropZoneImage";
import Loader from '@/components/common/Loader';
import { roomSchema } from '@/components/common/validation';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TagInput from "@/components/ui/TagsInput";
import UploaderProvider from "../../../context/UploaderContext";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import z from "zod";


const EditRoom = ({ room }: any) => {
  const [updateRoom, { isLoading }] = useUpdateRoomMutation();

  if (!room) return null;

  const form = useForm<z.infer<typeof roomSchema>>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      attachments: room?.attachment?.uploads || [],  // ✅ MUST include this!
      roomNumber: room?.roomNumber || "",
      description: room?.description || "",
      category: room?.category || "STANDARD",
      amenities: room?.amenities || [],
      floor: room?.floor?.toString() || "",
      price: room?.price?.toString() || "",
      capacity: room?.capacity?.toString() || ""
    }
  });

  const onSubmit = async (values: z.infer<typeof roomSchema>) => {
    console.log("Form submitted with values:", values); // ✅ Debug log
    console.log("edit image",room?.attachment.uploads)
    
    try {
      const payload = {
        ...values,
        floor: parseInt(values.floor, 10),
        price: parseInt(values.price, 10),
        capacity: parseInt(values.capacity, 10),
      };

      console.log("Sending payload:", payload); // ✅ Debug log

      const response = await updateRoom({
        body: payload,
        roomId: room.id
      }).unwrap();

      console.log("Response:", response);
      toast.success("Room updated successfully!");

    } catch (error: unknown) {
      console.error("Update error:", error);
      const err = error as any;
      toast.error(err?.data?.message || "Failed to update room");
    }
  };

  const defaultFiles = room.attachment.uploads.map((img:any) => ({
  id: img.id,
  url: img.url, 
  type:img.type
}));
console.log("default files",defaultFiles)
  return (
    <UploaderProvider>
      <CustomInfoDialog
        title="Edit Room"
        className="w-full md:max-w-4xl max-h-[500px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        loading={isLoading}
      >
        <Form {...form}>
          <form
            className="grid grid-cols-2 gap-4 text-[#6B7280]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <FormField
                name="attachments"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-base text-gray-900 pb-4">
                      Hotel Image
                    </FormLabel>
                    <FormControl>
                      <DropZoneImage
                        name={field.name}
                        maxCount={4}
                        maxSize={6}
                        type="image"
                        // onChange={field.onChange}
                        defaultFiles={defaultFiles}
                   
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full flex flex-col">
              <h2 className="text-base font-semibold py-2">Room Details</h2>

              <FormField
                name="roomNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel className="text-sm capitalize">
                      Room Number
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter room number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel className="text-sm capitalize">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter room description" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="category"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel className="text-sm capitalize">Category</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DELUXE">DELUXE</SelectItem>
                        <SelectItem value="STANDARD">STANDARD</SelectItem>
                        <SelectItem value="SUITE">SUITE</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="amenities"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel className="text-sm capitalize">
                      Amenities
                    </FormLabel>
                    <FormControl>
                      <TagInput onChange={field.onChange} value={field.value} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-wrap gap-4 mt-3">
                <FormField
                  name="floor"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">Floor</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="e.g. 5"
                          className="w-[100px] rounded-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="price"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">
                        Price per night ($)
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="e.g. 240"
                          className="w-[100px] rounded-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="capacity"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">
                        Max Capacity
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="e.g. 2"
                          className="w-[100px] rounded-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex justify-end mt-5">
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-[140px] bg-[#E3B23C] hover:bg-[#d4a62e]"
                >
                  {isLoading ? <Loader /> : "Update Room"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CustomInfoDialog>
    </UploaderProvider>
  );
};

export default EditRoom;