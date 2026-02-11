import { useAddRoomMutation } from "@/api/data/rooms.api";
import CustomInfoDialog from "@/components/common/CustomInfoDialog";
import DropZoneImage from "@/components/common/DropZoneImage";
import Loader from "@/components/common/Loader";
import { categoryEnum, roomSchema } from "@/components/common/validation";
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
import { usePopUpContext } from "@/context/PopUpContext";
import UploaderProvider from "@/context/UploaderContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type z from "zod";

const AddRoom = () => {
  const [addRoom, { isLoading }] = useAddRoomMutation();
  const { closeDialog } = usePopUpContext();
  
  const form = useForm<z.infer<typeof roomSchema>>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      // floor: "",
      capacity: "",
      amenities: [],
      attachments: [],
      category: categoryEnum.STANDARD
    }
  });

  const onSubmit = async (values: z.infer<typeof roomSchema>) => {
    try {
      const payload = {
        ...values,
        // floor: parseInt(values.floor),
        price: parseInt(values.price),
        capacity: parseInt(values.capacity),
         attachments: {
         uploads: values.attachments.map((url) => ({ url }))
  }
      };

      const res = await addRoom(payload).unwrap();
      console.log("creating room", res);
      toast.success(res.message);
      
      // Use setTimeout to prevent render cycle issues
      setTimeout(() => {
        closeDialog();
      }, 0);
      
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message || "Failed to create room");
    }
  };
  
  return (
    <UploaderProvider>
      <CustomInfoDialog
        title="create room"
        className="w-full md:max-w-4xl max-h-[500px] overflow-y-auto overflow [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        loading={isLoading} // Use actual loading state
      >
        <Form {...form}>
          <form
            className="grid grid-cols-2 gap-4 text-[#6B7280]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Left column - Image upload */}
            <div className="w-full">
              <FormField
                name="attachments"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-base text-gray-900 pb-4">
                      hotel image
                    </FormLabel>
                    <FormControl>
                      <DropZoneImage 
                        name={field.name}
                        maxCount={4}
                        type="image"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Right column - Form fields */}
            <div className="w-full flex flex-col">
              <h2 className="text-base font-semibold py-2">Room Details</h2>

              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel className="text-sm capitalize">
                      Room Title
                    </FormLabel>
                    <FormControl>
                      <Input {...field}  placeholder="Enter room name" />
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
                    <Select 
                      value={field.value} 
                      onValueChange={field.onChange}
                      defaultValue={categoryEnum.STANDARD}
                    >
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
                      <TagInput 
                        onChange={field.onChange} 
                        value={field.value} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-wrap gap-4 mt-3">
                {/* <FormField
                  name="floor"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">Floor</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g. 5"
                          className="w-[100px] rounded-full"
                          type="number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
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
                          placeholder="e.g. 240"
                          className="w-[100px] rounded-full"
                          type="number"
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
                          placeholder="e.g. 2"
                          className="w-[100px] rounded-full"
                          type="number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex justify-end mt-5">
                <Button 
                  disabled={isLoading} 
                  className="w-[140px] bg-[#E3B23C] hover:bg-[#d4a62e]"
                  type="submit"
                >
                  {isLoading ? <Loader /> : "create room"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CustomInfoDialog>
    </UploaderProvider>
  );
};

export default AddRoom;