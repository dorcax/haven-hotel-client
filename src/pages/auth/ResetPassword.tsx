import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import AuthLayout from './AuthLayout';

const ResetPassword = () => {
    const form =useForm()
    const onSubmit =()=>{
        console.log("hello")
    }
  return (
    <AuthLayout
    
    title="reset password"
    description="enter your new password "
     imgUrl='https://res.cloudinary.com/delvxhmpo/image/upload/v1747073142/check_baixvu.png'
    >
 <Form {...form}>
            <form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 text-[#6B7280] capitalize"
            >
             
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input  type='password' {...field} />
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
                      <FormLabel>confirm password </FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                       <FormMessage/>
                    </FormItem>
                  )}
                />
         
          
              <Button className="w-full bg-[#E3B23C] hover:bg-[#d4a62e]">
                Sign up
              </Button>
            </form>
          </Form>


    </AuthLayout>
  )
}

export default ResetPassword