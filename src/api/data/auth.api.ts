import { api } from "./base";

export  enum genderRole{
    FEMALE ="FEMALE",
    MALE="MALE",
    OTHER="OTHER"
 }
type SignInput ={
    name:string ,
    phoneNumber:string,
    // isVerified:boolean,
    gender:genderRole,
    password:string

}
type verifyOtpInput ={
    code:string
}

type Response ={
    message:string
}
export const authApi  =api.injectEndpoints({
    endpoints:({query,mutation})=>({
     signUp:mutation<Response,SignInput>({
        query:(body)=>({
            url:"/auth/signup",
            method:"POST",
            body
        }),
        invalidatesTags:["user"]

     }),
     verifyOtp:mutation<void,verifyOtpInput>({
        query:(body)=>({
            url:"/auth/verify-otp",
            method:"POST",
            body
        }),
        invalidatesTags:["user"]
     })
     
    })
    
})


export const {useSignUpMutation,useVerifyOtpMutation} =authApi