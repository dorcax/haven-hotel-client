import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { icons } from "@/constant/icon";

const formSchema = z
  .object({
    name: z.string().max(13),
    email: z.email("invalid email"),
    phoneNumber: z
      .string()
      .min(11, { message: "phone number must be 11 characters" }),

    password: z
      .string()
      .min(5, { message: "password must be atleast 5 characters" }),
    confirmPassword: z.string(),
    gender: z.enum(["FEMALE", "MALE", "OTHER"], {
      message: "Gender is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password do not match",
    path: ["confirmPassword"],
  });
const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      gender: "FEMALE",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = () => {
    console.log("form submitted ");
  };
  return (
    <main className="bg-[#F3F4F6] min-h-svh flex  justify-center items-center px-4">
      <section className="grid grid-cols-2 w-full h-screen bg-white shadow-5xl overflow-hidden max-w-4xl items-start mt-3 ">
        {/* left form side */}
        <article className="flex flex-col justify-center px-6 py-10 ">
          <header className="text-center mb-8">
            <h2 className="text-gray-900 text-2xl font-semibold capitalize">
              create your account
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Set up your new hotel management system
            </p>
          </header>
          {/* <form action=""></form> */}
          <Form {...form}>
            <form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* <FormField
                    name="confirmPassword"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>confirmPassword</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  /> */}
              <Button className="w-full">Sign up</Button>
            </form>
          </Form>

          {/* social login */}
          <article className="pt-6">
            <div className="flex justify-center items-center mb-4 gap-2 ">
              <hr className="flex-grow border-gray-500" />
              <p className="text-sm text-[#6B7280] ">Or continue with</p>
              <hr className="flex-grow border-gray-500" />
            </div>
            {/* image icon */}
            <div className="flex justify-between items-center gap-4">
              {icons.map((icon) => (
                <button
                  key={icon.name}
                  //   onClick={() => handleSocialLogin(icon.name)}
                  className="p-2 border w-full flex justify-center items-center rounded-md hover:bg-gray-100 transition"
                >
                  <img
                    src={icon.icon}
                    alt={icon.name}
                    className="w-[30px] object-cover"
                  />
                </button>
              ))}
            </div>
            <p className="text-sm pt-3 text-center text-gray-500">Already have an account? <span>SignIn</span></p> 
          </article>
        </article>
        <section className="relative  ">
          <img
            src="./hotel2.jpg"
            alt="image"
            className="object-cover w-full h-full max-h-[550px] rounded-r-md "
          />
          <div className="absolute bottom-5 left-4 right-4 text-white ">
            <h2 className="text-2xl font-semibold capitalize p-1">
              Elevate your guest experience
            </h2>
            <p className="text-base">
              join a community of foward-thinking hoteliers who are redefining
              hospitality with our intuitive and powerful management platform{" "}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SignUp;
