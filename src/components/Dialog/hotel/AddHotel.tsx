import { useAddHotelMutation } from "@/api/data/hotels.api"
import DropZoneImage from "@/components/common/DropZoneImage"
import Header from "@/components/common/Header"
import Loader from "@/components/common/Loader"
import { addHostelSchema } from "@/components/common/validation"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TagInput from "@/components/ui/TagsInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import type z from "zod"
// import { Form } from "react-router-dom"

const AddHotel = () => {
    const [Hotel, { isLoading }] = useAddHotelMutation()


const form = useForm<z.infer<typeof addHostelSchema>>({
  resolver: zodResolver(addHostelSchema),
  defaultValues: {
    name: "",
    description: "",
    email: "",
    address: "",
    phoneNumber:"",
    type: "",
    location:"",
    price: 1,
    capacity: 2,
    features: [],
    amenities: [],
    rule:[],
    attachments: [],
  },
});

    const navigate = useNavigate()
    const { watch } = form
    const selectedType = watch("type")
    const onSubmit = async (values: z.infer<typeof addHostelSchema>) => {
     
        console.log("Submitting...", values);
        console.log("type",typeof(values.price))
        try {
            const res = await Hotel({
                ...values,
                // price:Number(values.price),
                // capacity:Number(values.capacity),
               
                // rule: values.rule?.[0],
                 rule: values.rule[0],

            }).unwrap();
            toast.success("Hotel created successfully")
            // /dashboard/hotel/${auth?.hotelId}
            
            navigate(`/dashboard/hotel/${res.id}`)

            console.log("Response:", res);
        } catch (err) {
            console.error("Error creating hotel:", err);
        }
    }


    return (
        <>
            <Header />
            <section className='bg-[#F5F6FA] flex justify-center items-center min-h-screen w-full  '>
                <Form {...form}>
                    <form className=" grid grid-cols-3 gap-6 w-full max-w-5xl max-h-[90vh]  bg-white shadow-5xl rounded-xl px-4 overflow-y-auto overflow [&::-webkit-scrollbar]:hidden  [-ms-overflow-style-none] [scrollbar-width:none]" onSubmit={form.handleSubmit(onSubmit, (errors) => {
                        console.log(" Validation Errors:", errors);
                    })}>
                        {/* the hotel image  */}
                        <div className="py-10 col-span-1">
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
                        <div className="space-y-4 py-10 col-span-2 ">
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
                                {/* type select */}

                                <FormField
                                    name="type"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm capitalize">type</FormLabel>
                                            <Select value={field.value} onValueChange={field.onChange}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select property type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="APARTMENT">APARTMENT</SelectItem>
                                                    <SelectItem value="HOTEL">HOTEL</SelectItem>

                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {selectedType === "APARTMENT" && (
                                <div className="flex flex-col md:flex-row gap-2">
                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="capitalize text-sm text-gray-600">Apartment Price</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type="number"   onChange={(e) => field.onChange(Number(e.target.value))}  className="w-full" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="capacity"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="capitalize text-sm text-gray-600">Apartment Capacity</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type="number"   onChange={(e) => field.onChange(Number(e.target.value))}  className="w-full" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}
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

                            <Button type="submit" className="w-full bg-[#E3B23C] hover:bg-[#d4a62e] capitalize">

                                {isLoading ? <Loader /> : "create hotel"}
                            </Button>


                        </div>

                    </form>
                </Form>
            </section></>
    )
}

export default AddHotel