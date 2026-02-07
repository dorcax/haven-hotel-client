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

const forgotSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof forgotSchema>) => {
    console.log(values);
    // Call your API to send OTP here
  };

  return (
    <>
      <Header />

      <div className="flex w-full min-h-screen">
        {/* LEFT SIDE */}
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
                Trouble Logging In? <br />
                We’ve Got You
              </h1>
            </div>

            <p className="text-xl opacity-90 max-w-md">
              Enter your email to receive a secure OTP. Quickly regain access to
              your account and continue managing your bookings safely.
            </p>

            <div className="mt-12 flex gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
              </div>
              <p className="text-sm self-center">Trusted by 5,000+ hotel owners</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-background-dark">
          <div className="max-w-[480px] w-full flex flex-col">
            {/* Title */}
            <div className="mb-6 px-4">
              <h2 className="text-[#1A365D] dark:text-white text-[32px] font-bold leading-tight">
                Forgot Password
              </h2>
              <p className="text-[#4c739a] dark:text-slate-400 text-base">
                Enter your email to receive an OTP and reset your password.
              </p>
            </div>

            <Form {...form}>
              <form
                className="flex flex-col gap-2"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* Email */}
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="px-4 py-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="form-input flex w-full resize-none overflow-hidden rounded-lg
                          text-[#0d141b] dark:text-white focus:outline-0
                          focus:ring-2 focus:ring-primary/50
                          border border-[#cfdbe7] dark:border-slate-700
                          bg-white dark:bg-slate-800
                          focus:border-primary h-12 p-[15px] text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="px-4 py-2">
                  <Button
                    type="submit"
                    className="flex w-full items-center justify-center
                    rounded-lg h-12 px-5 bg-[#1A365D] text-white
                    text-base font-bold tracking-[0.015em]
                    hover:bg-[#1A365D]/90 transition-colors"
                  >
                    Send OTP
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

export default ForgotPassword;
