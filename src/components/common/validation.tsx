import { Role } from "@/api/api.type";
import { genderRole } from "@/api/data/auth.api";
import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(13),
    email: z.email("invalid email"),
    phoneNumber: z
      .string()
      .min(11, { message: "phone number must be 11 characters" }),

    password: z
      .string()
      .min(5, { message: "password must be atleast 5 characters" }),
    confirmPassword: z.string(),
    gender: z.enum(genderRole, {
      message: "Gender is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password do not match",
    path: ["confirmPassword"],
  });


  export const verifySchema =z.object({
    code:z.string().min(1,{message:"otp-code is required"}).length(6,{message:"otp must be 6 digit "})
  })

  export const loginSchema =z.object({
   email: z.email() ,
   password:z.string()
  })