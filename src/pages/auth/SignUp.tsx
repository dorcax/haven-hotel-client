import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { genderRole, useSignUpMutation } from "@/api/data/auth.api";
import Loader from "@/components/common/Loader";
import { formSchema } from "@/components/common/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { icons } from "@/constant/icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  // const { openDialog } = usePopUpContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      gender: genderRole.FEMALE,
      password: "",
      confirmPassword: "",
    },
  });
  // call the api function
  const [signUp, { isLoading }] = useSignUpMutation();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // const payload={
    //   ...values,
    //   role:"CUSTOMER"
    // }
    try {
      const { confirmPassword, ...payload } = values;
      const res = await signUp(payload).unwrap();
      toast.success(res.message);
      // directly open otpDialog
      // openDialog(<OtpDialog/>)
      navigate("/verify-otp");
    } catch (error: any) {
      toast.error(error?.data.message);
      console.log(error);
    }
  };
  // const handleGoogleLogin = () => {
  //   window.location.href = "http://localhost:3000/auth/google/login";
  // };
  return (
    <div className="flex w-full min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
          data-alt="Luxurious modern hotel lobby with high ceilings and warm lighting"
          style={{
            backgroundImage: 'url("/hotel2.webp")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
        <div className="relative z-20 px-12 text-white">
          <div className="mb-8">
            <h1 className="text-5xl font-black tracking-tight leading-tight">
              Elevate Your <br />
              Hospitality
            </h1>
          </div>
          <p className="text-xl font-normal opacity-90 max-w-md">
            Join thousands of property managers worldwide. Streamline your
            bookings, guest relations, and operations in one unified platform.
          </p>
          <div className="mt-12 flex gap-4">
            <div className="flex -space-x-3">
              <div
                className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"
                data-alt="User avatar placeholder"
              ></div>
              <div
                className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"
                data-alt="User avatar placeholder"
              ></div>
              <div
                className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"
                data-alt="User avatar placeholder"
              ></div>
            </div>
            <p className="text-sm self-center">
              Trusted by 5,000+ hotel owners
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-background-dark">
        <div className="max-w-[480px] w-full flex flex-col">
          <div className="lg:hidden flex items-center gap-2 mb-4 md:mb-8">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              HavenHotel
            </span>
          </div>
          <div className="mb-4 md:mb-8 px-4">
            <h2 className="text-[#1A365D] dark:text-white text-[32px] font-bold leading-tight">
              Create your account
            </h2>
            <p className="text-[#4c739a] dark:text-slate-400 text-base font-normal">
              Start managing your bookings with ease.
            </p>
          </div>
          <Form {...form}>
            <form
              className="flex flex-col gap-1"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-wrap flex-col px-4 py-1 md:py-2">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                        placeholder="John Doe"
                        required
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-wrap flex-col px-4 py-1 md:py-2">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                        placeholder="john@example.com"
                        required
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <FormField
                  name="phoneNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-wrap flex-col px-4 py-1 md:py-2 w-full sm:w-1/2">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                          placeholder="+2349031059173"
                          required
                          type="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="gender"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-wrap flex-col px-4 py-1 md:py-2 w-full sm:w-1/2">
                      <FormLabel>Gender</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        required
                      >
                        <FormControl>
                          <SelectTrigger className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal">
                            <SelectValue placeholder="gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="FEMALE">Female</SelectItem>
                          <SelectItem value="MALE">Male</SelectItem>
                          <SelectItem value="OTHER">Others</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-wrap flex-col px-4 py-1 md:py-2 w-full sm:w-1/2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                          placeholder="••••••••"
                          type="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="confirmPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-wrap flex-col px-4 py-1 md:py-2 w-full sm:w-1/2">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                          placeholder="••••••••"
                          type="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="px-4 md:py-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="h-5 w-5 rounded border-slate-300 text-[#1A365D] focus:ring-primary cursor-pointer"
                    type="checkbox"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-400 leading-tight">
                    I agree to the
                    <Link
                      className="text-[#1A365D] mx-1 font-semibold hover:underline"
                      to="#"
                    >
                      Terms and Conditions
                    </Link>
                    and
                    <Link
                      className="text-[#1A365D] mx-1 font-semibold hover:underline"
                      to="#"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
              <div className="px-4 py-1 md:py-2">
                <Button
                  disabled={isLoading}
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#1A365D] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1A365D]/90 transition-colors"
                  type="submit"
                >
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <span className="truncate">Create Account</span>
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <div className="relative my-2 md:my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs font-medium uppercase">
              <span className="bg-white dark:bg-background-dark px-3 text-slate-400">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {icons.map((icon) => (
              <button className="flex items-center justify-center gap-2 h-11 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer w-full">
                <img
                  alt={icon.alt}
                  className="size-5 shrink-0"
                  data-alt={icon.alt}
                  src={icon.icon}
                />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate">
                  {icon.name}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account?
            <Link
              className="ml-2 text-[#1A365D] font-bold hover:underline"
              to="/login"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
