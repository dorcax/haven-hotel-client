import CustomInfoDialog from '@/components/common/CustomInfoDialog'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useForm } from 'react-hook-form'

const OtpDialog = () => {
    const form =useForm()
     const onSubmit=()=>{}
  return (
   <CustomInfoDialog 
   title="verify-otp"
   description=" Please enter the one-time password sent to your email."
   imgUrl='https://res.cloudinary.com/delvxhmpo/image/upload/v1747073142/check_baixvu.png'
  //  okText='submit'
  className="w-[350px] flex flex-col items-center justify-center min-h-[300px] "
   loading={true}>
   
hello

   </CustomInfoDialog>
  )
}

export default OtpDialog