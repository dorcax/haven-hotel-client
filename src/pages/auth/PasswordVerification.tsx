import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import AuthLayout from "./AuthLayout";
import { useVerifyOtpMutation } from "@/api/data/auth.api";
import type { verifySchema } from "@/components/common/validation";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/common/Loader";
import { toast } from "react-toastify";
const PasswordVerification = () => {
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof verifySchema>>();
  const onSubmit = async (value: z.infer<typeof verifySchema>) => {
    try {
      const res = await verifyOtp(value).unwrap();
      toast.success("user verified successfully");
      navigate("/login");
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.log("error", error);
    }
  };
  return (
    <AuthLayout
      title="Enter verification code"
      description=" We sent a 6-digit code to your email.."
      className="items-center"
      //  imgUrl='https://res.cloudinary.com/delvxhmpo/image/upload/v1747073142/check_baixvu.png'
    >
      <div className="mx-auto ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel htmlFor="otp" className="sr-only">
                    Verification code
                  </FormLabel>
                  {/* <FormLabel className='text-cente'></FormLabel> */}
                  <FormControl >
                    <InputOTP maxLength={6} {...field} >
                      <InputOTPGroup className=" gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription className="text-sm">
                    Enter the 6-digit code sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full bg-[#E3B23C] hover:bg-[#d4a62e]"
            >
              {isLoading ? <Loader /> : "submit"}
            </Button>
            <span className="flex justify-center items-center text-sm text-gray-500">
            
              Didn&apos;t receive the code? <a href="#" className="underline">Resend</a>
            </span>
          </form>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default PasswordVerification;
