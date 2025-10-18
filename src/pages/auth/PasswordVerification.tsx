import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useForm } from 'react-hook-form'
import AuthLayout from './AuthLayout'
import { useVerifyOtpMutation } from '@/api/data/auth.api'
import type { verifySchema } from '@/components/common/validation' 
import {z} from "zod"
import { useNavigate } from 'react-router-dom'
import Loader from '@/components/common/Loader'
import { toast } from 'react-toastify'
const PasswordVerification = () => {
  const [verifyOtp,{isLoading}] =useVerifyOtpMutation()
  const navigate =useNavigate()
    const form =useForm<z.infer<typeof verifySchema>>()
    const onSubmit =async (value:z.infer<typeof verifySchema>)=>{
     try {
       const res = await verifyOtp(value).unwrap()
       toast.success("user verified successfully")
       navigate("/login")
      
     } catch (error:any) {
      toast.error(error?.data?.message)
      console.log("error",error)
     }
        
    }
  return (
  <AuthLayout
   title="verify-otp"
   description=" Please enter the one-time password sent to your email."
   imgUrl='https://res.cloudinary.com/delvxhmpo/image/upload/v1747073142/check_baixvu.png'

  
  >
<div className='mx-auto' >
    
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className=''>
              {/* <FormLabel className='text-cente'></FormLabel> */}
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              {/* <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className='w-full bg-[#E3B23C] hover:bg-[#d4a62e]'>

          {isLoading ?<Loader/> :"submit"}
        </Button>
      </form>
    </Form>
</div>

  </AuthLayout>
  )
}

export default PasswordVerification