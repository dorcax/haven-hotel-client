// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from '@/components/ui/input';
// import { useForm } from 'react-hook-form';
// import AuthLayout from './AuthLayout';

// const ResetPassword = () => {
//     const form =useForm()
//     const onSubmit =()=>{
//         console.log("hello")
//     }
//   return (
//     <AuthLayout

//     title="reset password"
//     description="enter your new password "
//      imgUrl='https://res.cloudinary.com/delvxhmpo/image/upload/v1747073142/check_baixvu.png'
//     >
//  <Form {...form}>
//             <form
//               action=""
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="space-y-4 text-[#6B7280] capitalize"
//             >

//                 <FormField
//                   name="password"
//                   control={form.control}
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>password</FormLabel>
//                       <FormControl>
//                         <Input  type='password' {...field} />
//                       </FormControl>
//                       <FormMessage />

//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   name="confirmPassword"
//                   control={form.control}
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>confirm password </FormLabel>
//                       <FormControl>
//                         <Input type="password" {...field} />
//                       </FormControl>
//                        <FormMessage/>
//                     </FormItem>
//                   )}
//                 />

//               <Button className="w-full bg-[#E3B23C] hover:bg-[#d4a62e]">
//                 Sign up
//               </Button>
//             </form>
//           </Form>

//     </AuthLayout>
//   )
// }

// export default ResetPassword

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/common/Header";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useState } from "react";

const resetSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ResetPassword = () => {
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (values: z.infer<typeof resetSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Header />

      <div className="flex w-full min-h-screen">
        {/* LEFT SIDE (Same as Signup) */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: 'url("/hotel2.webp")',
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>

          <div className="relative z-20 px-12 text-white">
            <div className="mb-8">
              <h1 className="text-5xl font-black leading-tight">
                Reset With <br />
                Confidence
              </h1>
            </div>

            <p className="text-xl opacity-90 max-w-md">
              Update your password securely and regain full access to your
              dashboard. Your account security is our top priority.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-background-dark">
          <div className="max-w-[480px] w-full flex flex-col">
            {/* Title */}
            <div className="mb-6 px-4">
              <h2 className="text-[#1A365D] dark:text-white text-[32px] font-bold leading-tight">
                Reset Password
              </h2>
              <p className="text-[#4c739a] dark:text-slate-400 text-base">
                Enter your new password below.
              </p>
            </div>

            <Form {...form}>
              <form
                className="flex flex-col gap-2"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* Password */}
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="px-4 py-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="form-input flex w-full resize-none overflow-hidden rounded-lg
                            text-[#0d141b] dark:text-white focus:outline-0
                            focus:ring-2 focus:ring-primary/50
                            border border-[#cfdbe7] dark:border-slate-700
                            bg-white dark:bg-slate-800
                            focus:border-primary h-12 p-[15px] text-base pr-12"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={handleShowPassword}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                          >
                            {showPassword ? (
                              <EyeClosedIcon size={20} />
                            ) : (
                              <EyeIcon size={20} />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  name="confirmPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="px-4 py-2">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="form-input flex w-full resize-none overflow-hidden rounded-lg
                            text-[#0d141b] dark:text-white focus:outline-0
                            focus:ring-2 focus:ring-primary/50
                            border border-[#cfdbe7] dark:border-slate-700
                            bg-white dark:bg-slate-800
                            focus:border-primary h-12 p-[15px] text-base pr-12"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={handleShowConfirmPassword}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                          >
                            {showConfirmPassword ? (
                              <EyeClosedIcon size={20} />
                            ) : (
                              <EyeIcon size={20} />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Button */}
                <div className="px-4 py-2">
                  <Button
                    type="submit"
                    className="flex w-full items-center justify-center
                    rounded-lg h-12 px-5 bg-[#1A365D] text-white
                    text-base font-bold tracking-[0.015em]
                    hover:bg-[#1A365D]/90 transition-colors"
                  >
                    Reset Password
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
