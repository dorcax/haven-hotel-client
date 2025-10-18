import React from 'react'
import AuthLayout from './AuthLayout'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage,Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {  useForm } from 'react-hook-form'

const ForgotPassword = () => {
    const form =useForm()
     const onSubmit =()=>{
        console.log("hello")
     }
  return (
    <AuthLayout 
    title='Forgot password'
    description='enter your email to recieve an otp '
    imgUrl='https://res.cloudinary.com/delvxhmpo/image/upload/v1747073142/check_baixvu.png'
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

        

          

              <Button className="w-full bg-[#E3B23C] hover:bg-[#d4a62e]">
                Submit
              </Button>
            </form>
          </Form>

    </AuthLayout>
  )
}

export default ForgotPassword