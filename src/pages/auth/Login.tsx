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
import { icons } from "@/constant/icon";
import UseAuthComplete from "@/hooks/UseAuthComplete";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AuthLayout from "./AuthLayout";

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
      localStorage.setItem("token", res.token);
      toast.success("user login successfully");

      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google/login";
  };
  return (
    <AuthLayout
      title="login to your account"
      description=" Enter your email and password to continue"
    >
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-[#6B7280] capitalize"
        >
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
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

                <FormMessage />
              </FormItem>
            )}
          />

          {/* forgot password */}
          <article className="flex justify-between items-center">
            <label className="inline-flex items-center gap-2">
              <Input type="checkbox" className="size-3 cursor-pointer" />
              <span className="text-sm">remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm">
              Forgot password
            </Link>
          </article>

          <Button
            disabled={isLoading}
            className="w-full bg-[#E3B23C] capitalize hover:bg-[#d4a62e]"
          >
            {isLoading ? <Loader /> : "log in"}
          </Button>
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
              onClick={handleGoogleLogin}
              className="p-2 border w-full flex justify-center items-center rounded-md  hover:bg-gray-100 transition"
            >
              <img
                src={icon.icon}
                alt={icon.name}
                className="w-[30px] object-cover"
              />
            </button>
          ))}
        </div>
        <p className="text-sm pt-3 text-center text-[#6B7280]">
          Dont have an account?{" "}
          <Link to="/" className="text-[#E3B23C] text-sm underline">
            SignUp
          </Link>
        </p>
      </article>
    </AuthLayout>
  );
};

export default Login;
