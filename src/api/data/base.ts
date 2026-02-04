import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const tagTypes = ["user", "hotel", "room"] as const;
const envUrl = import.meta.env.VITE_API_URL;
const defaultUrl = import.meta.env.BASE_URL;


export const baseUrl =(envUrl || defaultUrl).replace(/\blocalhost\b/,window.location.hostname)
export const api =createApi({
    reducerPath:"api",
    tagTypes,
    endpoints:()=>({}),
    baseQuery:fetchBaseQuery({
        // baseUrl,
        baseUrl:process.env.BASE_URL,
        credentials:"include"
     
    })

})