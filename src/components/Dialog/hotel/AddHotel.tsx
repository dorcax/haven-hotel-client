import { useAddHotelMutation } from "@/api/data/hotels.api"
import DropZoneImage from "@/components/common/DropZoneImage"
import {addHostelSchema } from "@/components/common/validation"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import TagInput from "@/components/ui/TagsInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type z from "zod"
// import { Form } from "react-router-dom"

const AddHotel = () => {
    const [Hotel, { isLoading }] = useAddHotelMutation()
    
    const form = useForm<z.infer<typeof addHostelSchema>>({
        resolver: zodResolver(addHostelSchema),
        defaultValues: ({
            name: "",
            description: "",
            email: "",
            address: "",
            features: [],
            amenities: [],
            rule: [],
            attachments: [],
        })


    })
    const onSubmit = async (values: z.infer<typeof addHostelSchema>) => {
        //     const res =await Hotel({
        //         ...values,
        //         rule:values.rule[0]
        //     }).unwrap()
        //   console.log(res)
        console.log("Submitting...", values);
          try {
            const res = await Hotel({
              ...values,
              rule: values.rule?.[0],
              
            }).unwrap();
            console.log("Response:", res);
          } catch (err) {
            console.error("Error creating hotel:", err);
          }
    }
    return (
        <section className='bg-[#F5F6FA] flex justify-center items-center min-h-screen w-full  '>
            <Form {...form}>
                <form className=" grid grid-cols-2 gap-6 w-full max-w-5xl max-h-[90vh]  bg-white shadow-5xl rounded-xl px-4 py-6 overflow-y-auto overflow [&::-webkit-scrollbar]:hidden  [-ms-overflow-style-none] [scrollbar-width:none]" onSubmit={form.handleSubmit(onSubmit, (errors) => {
                    console.log("❌ Validation Errors:", errors);
                })}>
                    {/* the hotel image  */}
                    <FormField
                        name="attachments"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize text-base text-gray-900">hotel image</FormLabel>
                                <FormControl>
                                    <DropZoneImage name={field.name} maxCount={4} maxSize={6} acceptType="image" />
                                </FormControl>
                            </FormItem>
                        )}


                    />



                    {/* the hotel details */}
                    <div className="space-y-4">
                        <h2 className="capitalize text-base text-gray-900 ">hotel details</h2>
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
                                name="contactPhone"
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
                                        <FormLabel className="capitalize text-sm text-gray-600">location</FormLabel>
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
                                        {/* <Input {...field} placeholder="Enter hotel address" /> */}
                                        <DropZoneImage  name={field.name} maxCount={1} acceptType="pdf" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full bg-[#E3B23C] hover:bg-[#d4a62e] capitalize">
                            create hotel
                        </Button>


                    </div>

                </form>
            </Form>
        </section>
    )
}

export default AddHotel