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
import AuthLayout from "./AuthLayout";

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
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google/login";
  };
  return (
    <AuthLayout
      title="create your account"
      description=" Manage your hotel with ease and elegance"
    >
      <div>
        <Form {...form}>
          <form
            action=""
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 text-[#6B7280] capitalize"
          >
            <div className="flex justify-between gap-1 items-center">
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-1 items-center">
              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>phoneNumber</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="gender"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FEMALE">FEMALE</SelectItem>
                        <SelectItem value="MALE">MALE</SelectItem>
                        <SelectItem value="OTHER">OTHER</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between items-center">
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

              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>confirmPassword</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={isLoading}
              className="w-full bg-[#E3B23C] hover:bg-[#d4a62e]"
            >
              {isLoading ? <Loader /> : "Sign up"}
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
            Already have an account?{" "}
            <Link to="/login" className="text-[#E3B23C] text-sm underline">
              SignIn
            </Link>
          </p>
        </article>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
