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

export const verifySchema = z.object({
  code: z
    .string()
    .min(1, { message: "otp-code is required" })
    .length(6, { message: "otp must be 6 digit " }),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

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
  attachments: z
    .array(z.string())
    .min(1, "Please select at least one image")
    .max(4, "Exactly 4 images are required"), // Changed to require exactly 4
  phoneNumber: z
    .string()
    .min(11, "phone number must be at least 11 digits")
    .max(11, "phone number too long"),
  location: z.string(),

  type: z.string(),
  price: z.number().optional(),
  capacity: z.number().min(1, "capacity must be at least 1").optional(),

  email: z.email(),

  rule: z
    .array(z.string()) // array from DropZone
    .min(1, "Please upload at least one file")
    .max(1, "Cannot upload more than 1 file"),
});

// @IsString()
//   name: string;
//   @IsString()
//   description: string;
//   @Type(() => Number)
//   @IsNumber()
//   price: number;
//   @IsArray()
//   amenities: string[];
//   @Type(() => Number)
//   @IsNumber()
//   floor: number;
//   @Type(() => Number)
//   @IsNumber()
//   capacity: number;
//   @IsString()
//   hotelId: string;
//   @IsEnum(RoomCategory)
//   category: RoomCategory;
//   @IsArray()
//   attachments: string[]

export enum categoryEnum {
  DELUXE = "DELUXE",
  STANDARD = "STANDARD",
  SUITE = "SUITE",
  APARTMENT = "APARTMENT",
  PENTHOUSE = "PENTHOUSE",
}
export const roomSchema = z.object({
  title: z
    .string()
    .min(10, "name must be atleast 3 character")
    .max(30, "name must not be more than 5 character"),
  description: z
    .string()
    .min(50, "description must be atleast 20 characters")
    .max(1000, "description must not be more than 1000 character "),
  price: z.string().min(0),
  propertyId:z.string(),
  amenities: z.array(z.string()).min(1, "please add atleast one amenities"),
  // floor:z.string().min(1).max(9),
  capacity: z
    .string()
    .min(1, "capacity must be atleast 1 character")
    .max(4, "capacity must not be more than 4"),
  category: z.enum(categoryEnum, {
    message: "select one of the room categorye",
  }),
  attachments: z
    .array(z.string())
    .min(1, "Please select at least one image")
    .max(4, "Exactly 4 images are required"),
});
