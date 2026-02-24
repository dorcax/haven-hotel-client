
import { useAddHotelMutation } from "@/api/data/hotels.api";
import CustomInfoDialog from "@/components/common/CustomInfoDialog";
import DropZoneImage from "@/components/common/DropZoneImage";
import Loader from "@/components/common/Loader";
import { addHostelSchema } from "@/components/common/validation";
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
import TagInput from "@/components/ui/TagsInput";
import { usePopUpContext } from "@/context/PopUpContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type z from "zod";

const AddHotel = ({ selectedType }: { selectedType: any }) => {

    const [Hotel, { isLoading }] = useAddHotelMutation()
    const { closeDialog } = usePopUpContext()

    const form = useForm<z.infer<typeof addHostelSchema>>({
        resolver: zodResolver(addHostelSchema),
        defaultValues: {
            name: "",
            description: "",
            email: "",
            address: "",
            phoneNumber: "",
            type: selectedType,
            location: "",
            price: 1,
            capacity: 2,
            features: [],
            amenities: [],
            rule: [],
            attachments: [],
        },
    });


    const onSubmit = async (values: z.infer<typeof addHostelSchema>) => {

        console.log("Submitting...", values);
        console.log("type", typeof (values.price))
        try {
            const res = await Hotel({
                ...values,
                type: selectedType,
                price: values.price ?? 2000,
                capacity: values.capacity ?? 1,



                rule: values.rule[0],

            }).unwrap();
            toast.success("Hotel created successfully")

            closeDialog()
            console.log("Response:", res);
        } catch (err) {
            console.error("Error creating hotel:", err);
        }
    }

    return (
        <CustomInfoDialog
            title="create hotel"
            className="w-full md:max-w-4xl max-h-[500px]  overflow-y-auto overflow [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            loading={isLoading}
        >
            <Form {...form}>
                <form className=" grid grid-cols-3 gap-6 " onSubmit={form.handleSubmit(onSubmit, (errors) => {
                    console.log(" Validation Errors:", errors);
                })}>
                    {/* the hotel image  */}
                    <div className="py-4 col-span-1">
                        <FormField
                            name="attachments"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="capitalize text-base text-gray-900 pb-4">hotel image</FormLabel>
                                    <FormControl className="border border-amber-950">
                                        <DropZoneImage name={field.name} maxCount={4} type="image" />
                                    </FormControl>
                                </FormItem>
                            )}


                        />

                    </div>


                    {/* the hotel details */}
                    <div className="space-y-4 py-4 col-span-2 ">
                        <h2 className="capitalize text-base text-gray-900 pb-4 ">hotel details</h2>
                        <div className="flex flex-col md:flex-row gap-2">

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="capitalize text-sm text-gray-600">name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter hotel name " className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="capitalize text-sm text-gray-600">description</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter hotel description " className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="capitalize text-sm text-gray-600">phone number</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter hotel phone number " className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="capitalize text-sm text-gray-600">address</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter hotel address " className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="capitalize text-sm text-gray-600">location</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Enter hotel address " className="w-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col md:flex-row gap-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="capitalize text-sm text-gray-600">email</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter your email " className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                        </div>


                        {/* amenities  */}
                        <FormField
                            name="amenities"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel className=" capitalize text-sm text-gray-600">
                                        Amenities
                                    </FormLabel>
                                    <FormControl>
                                        <TagInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="features"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel className="text-sm text-gray-600 capitalize">
                                        features
                                    </FormLabel>
                                    <FormControl>
                                        {/* <Input {...field} placeholder="Enter hotel features" /> */}
                                        <TagInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* rule  */}
                        <FormField
                            name="rule"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel className="capitalize text-sm text-gray-600">
                                        rule
                                    </FormLabel>
                                    <FormControl>

                                        <DropZoneImage name={field.name} maxCount={1} type="pdf" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">

                            {isLoading ? <Loader /> : "create hotel"}
                        </Button>


                    </div>

                </form>
            </Form>
        </CustomInfoDialog>
    );
};

export default AddHotel;




