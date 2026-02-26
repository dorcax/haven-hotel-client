import type { AuthState } from "../api.type";
import { api } from "./base";

export enum genderRole {
  FEMALE = "FEMALE",
  MALE = "MALE",
  OTHER = "OTHER",
}

export enum Role {
  GUEST = "GUEST",
  HOST = "HOST",
  ADMIN= "ADMIN",
}

type SignInput = {
  name: string;
  phoneNumber: string;
  // isVerified:boolean,
  gender: genderRole;
  password: string;
};
type LoginInput = {
  password: string;
  email: String;
};
type verifyOtpInput = {
  code: string;
};

type Response = {
  message: string;
};
export const authApi = api.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    signUp: mutation<Response, SignInput>({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    verifyOtp: mutation<void, verifyOtpInput>({
      query: (body) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    login: mutation<AuthState, LoginInput>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    
    authUser: query<AuthState, void>({
      query: () => "auth",
      providesTags: ["user"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useVerifyOtpMutation,
  useLoginMutation,
  useAuthUserQuery,
} = authApi;
