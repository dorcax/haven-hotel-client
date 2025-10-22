import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import TagInput from "@/components/ui/TagsInput"
import { useForm } from "react-hook-form"
// import { Form } from "react-router-dom"

const AddHotel = () => {
    const form = useForm()
    return (
        <section className='bg-[#F5F6FA] flex justify-center items-center min-h-screen w-full '>
            <div className="grid grid-cols-2 gap-6 w-full max-w-4xl  bg-white shadow-5xl rounded-xl px-4 py-6 overflow-y-auto overflow [&::-webkit-scrollbar]:hidden  [-ms-overflow-style-none] [scrollbar-width:none] h-[500px]">
                {/* the right hand  */}
                <article>
                    <h2 className="capitalize text-base text-gray-900 pb-4">hotel image</h2>
                    <div className="border  border-dashed border-[#E3B23C] h-[300px] flex flex-col justify-center items-center rounded-2xl">
                        <img src="./hotel1.jpg" alt="default-image" className="object-cover w-[180px] h-[180px] rounded-xl" />
                        <p className="text-[#E3B23C] text-sm py-2">Click or drag to upload new image</p>
                        <Button className="bg-[#E3B23C] capitalize text-sm hover:bg-[#E3B23C]">upload image</Button>
                    </div>
                </article>
                {/* the second hand */}
                <article>
                    <h2 className="capitalize text-base text-gray-900 pb-4">hotel details</h2>
                    <Form {...form}>
                        <form className="space-y-4">
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
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="capitalize text-sm text-gray-600">phone number</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Enter hotel name " className="w-full" />
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
                                            <TagInput />
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
                                            <Input {...field} placeholder="Enter hotel features" />
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
                                            <Input {...field} placeholder="Enter hotel address" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="w-full bg-[#E3B23C] hover:bg-[#d4a62e] capitalize">
                                create hotel
                            </Button>


                        </form>
                    </Form>
                </article>
            </div>
        </section>
    )
}

export default AddHotel