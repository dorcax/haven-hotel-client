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

import { useLoginMutation } from "@/api/data/auth.api";
import Loader from "@/components/common/Loader";
import { loginSchema } from "@/components/common/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UseAuthComplete from "@/hooks/UseAuthComplete";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "@/components/common/Header";
import { envUrl } from "@/api/data/base";

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // call the api function
  const [login, { isLoading }] = useLoginMutation();
  const authComplete = UseAuthComplete();
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const res = await authComplete(login(values).unwrap());
      console.log("res", res);
      // localStorage.setItem("token", res.);
      toast.success("user login successfully");

      return res;
    } catch (error) {
      console.log(error);
    }
  };

   const handleGoogleLogin = () => {
      window.location.href = `${envUrl}/auth/google/login`;
    };

  return (
    <>
      <Header />
      <main className="flex-1 flex overflow-hidden font-inter">
        <div className="flex w-full">
          <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              data-alt="Modern luxury hotel suite with mountain view"
              style={{
                backgroundImage: 'url("/hotel1.jpg")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col justify-end p-16 h-full">
              <h1 className="text-white text-5xl font-black leading-tight mb-4 max-w-md">
                Elevate Your Guest Experience.
              </h1>
              <p className="text-slate-200 text-lg font-normal max-w-sm">
                Join a community of foward-thinking hoteliers who are redefining
                hospitality with our intuitive and powerful management platform.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 bg-white dark:bg-background-dark">
            <div className="w-full max-w-[480px] flex flex-col">
              <div className="mb-10">
                <h2 className="text-[#1A365D] dark:text-white text-3xl font-bold mb-2">
                  Sign in to your account
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Welcome back! Please enter your details below.
                </p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <FormLabel className="text-slate-900 dark:text-slate-200 text-sm font-semibold">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base font-normal placeholder:text-slate-400"
                            type="email"
                            placeholder="name@company.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <FormLabel>Password</FormLabel>
                          <Link
                            className="text-primary text-xs font-bold hover:underline"
                            to="/forgot-password"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                        <FormControl>
                          <Input
                            className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base font-normal placeholder:text-slate-400 pr-12"
                            placeholder="••••••••"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center gap-3 py-1">
                    <input
                      className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary dark:bg-slate-900"
                      id="remember"
                      type="checkbox"
                    />
                    <label
                      className="text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>
                  <Button
                    disabled={isLoading}
                    className="flex w-full items-center justify-center rounded-lg h-12 px-5 bg-[#1A365D] text-white text-base font-bold tracking-tight hover:bg-[#1A365D]/90 cursor-pointer transition-all shadow-lg shadow-primary/20"
                    type="submit"
                  >
                    {isLoading ? <Loader /> : "Sign In"}
                  </Button>
                </form>
              </Form>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-xs font-medium uppercase">
                  <span className="bg-white dark:bg-background-dark px-3 text-slate-400">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="">
                <button className="flex items-center justify-center gap-2 h-11 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer w-full px-2" onClick={handleGoogleLogin}>
                  <img
                    alt="Google Logo"
                    className="size-5 shrink-0"
                    data-alt="Google Logo"
                    src="./google-icon.svg"
                  />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate">
                    Google
                  </span>
                </button>
              </div>
              <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                Don't have an account?
                <Link
                  className="ml-2 text-[#1A365D] font-bold hover:underline"
                  to="/register"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
