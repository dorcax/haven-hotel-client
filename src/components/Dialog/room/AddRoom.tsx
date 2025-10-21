import CustomInfoDialog from "@/components/common/CustomInfoDialog";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TagInput from "@/components/ui/TagsInput";
// import { Select, SelectTrigger } from "@radix-ui/react-select"
import { useForm } from "react-hook-form";

const AddRoom = () => {
  const form = useForm();
  return (
    <CustomInfoDialog
      title="create room"
      description="Add a new room to the hotel system"
      className="w-full md:max-w-4xl max-h-[500px] overflow-y-auto overflow [&::-webkit-scrollbar]:hidden  [-ms-overflow-style-none] [scrollbar-width:none]"
      loading={true}
    >
      <Form {...form}>
        <form
          action=""
          method="post"
          className="grid grid-cols-2 gap-4   text-[#6B7280] "
        >
          <div className=" w-full">
            {/* left hand image */}
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize text-base">
                    uplaod image
                  </FormLabel>
                  <FormControl>
                    <div className=" border border-dashed border-[#E3B23C] w-full  max-w-[300px] h-[200px] rounded-xl mt-2">
                      <div className="flex flex-col justify-center items-center h-full">
                        <Label className="capitalize text-sm">
                          upload photo
                        </Label>
                        <p className="text-xs text-[#E3B23C] mb-1">
                          click & drag an image here or click to select a file
                        </p>
                        <Input
                          type="file"
                          placeholder="upload images"
                          {...field}
                          className=" hidden"
                        />
                        <Button className="bg-[#e3a03c]/80 mt-4 cursor-pointer rounded-full hover:bg-0 text-white">
                          Upload
                        </Button>
                      </div>
                    </div>
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Right Column: Room Details Form */}
          <div className="w-full flex flex-col ">
            <h2 className="text-base font-semibold py-2">Room Details</h2>

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="text-sm capitalize">
                    Room Name
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter room name" />
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
                    <TagInput />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-wrap gap-4 my-2">
              <FormField
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
              <Button className="w-[140px]   bg-[#E3B23C] hover:bg-[#d4a62e]">
                create room
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </CustomInfoDialog>
  );
};

export default AddRoom;
