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


  // export const addHotelSchema =z.object({
  //   attachments:z.array(z.string().min(1, "At least one image is required").max(4,"four images are required")),
  //   email:z.email("enter a vaild email"),
  //   address:z.string(),
  //   name:z.string().min(10,"name must be alteast 10 character").max(30,"name must be less than 30 characters"),
  //   description:z.string().min(50,"description must be atleast 50 characters").max(1000,"description must be less than 1000 character"),
  //   contactPhone:z.string().min(11,"phone number must be 11 character").max(15,"phone number is too long"),
  //   amenities:z.array(z.string().min(1,"please atleast select one amenity")),
  //   features:z.array(z.string().min(1,"please atleast select one feature")),
  //   rule:z.array(z.string().min(1,"please upload atleast hotel rule").max(2, "Cannot upload more than 1 images"))

  // })



//   export const addHotelSchema = z.object({
//   attachments: z
//     .array(z.string().min(1, "Invalid image URL"))
//     .length(4, "four images are required"), // ✅ exactly 4 uploads required

//   email: z.string().email("Enter a valid email"),

//   address: z.string(),

//   name: z
//     .string()
//     .min(10, "Name must be at least 10 characters")
//     .max(30, "Name must be less than 30 characters"),

//   description: z
//     .string()
//     .min(50, "Description must be at least 50 characters")
//     .max(1000, "Description must be less than 1000 characters"),

//   contactPhone: z
//     .string()
//     .min(11, "Phone number must be 11 characters")
//     .max(15, "Phone number is too long"),

//   amenities: z
//     .array(z.string().min(1, "Please select at least one amenity")),

//   features: z
//     .array(z.string().min(1, "Please select at least one feature")),

//   rule: z
//     .array(z.string().min(1, "Please upload at least one hotel rule"))
//     .max(1, "Cannot upload more than 1 image"), // ✅ only one allowed
// });


export const addHostelSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(1000, { message: "Description must be less than 300 characters" }),

  address: z
    .string()
    .trim()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address must be less than 200 characters"),
  amenities: z.array(z.string()).min(1, "Please select at least one amenity"),
  features: z.array(z.string()).min(1, "Please select at least one feature"),
  attachments: z.array(z.string()).min(1, "Please select at least one image").max(4, "Exactly 4 images are required"), // Changed to require exactly 4
  contactPhone: z
    .string()
    .min(11, "phone number must be at least 11 digits")
    .max(15, "phone number too long"),

  email: z.email(),
  rule: z
    .array(z.string())
    .min(1, "Please upload at least one image")
    .max(1, "Cannot upload more than 1 images"),
});

