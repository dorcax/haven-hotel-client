import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 
import type {RootState} from "./index"
const tagTypes =[
    "user",
    "hotel",
    "room"
] as const
const envUrl =import.meta.env.VITE_API_URL
const defaultUrl ="http://localhost:3000" 
// backend development url

export const baseUrl =(envUrl || defaultUrl).replace(/\blocalhost\b/,window.location.hostname)
export const api =createApi({
    reducerPath:"api",
    tagTypes,
    endpoints:()=>({}),
    baseQuery:fetchBaseQuery({
        baseUrl,
        prepareHeaders(headers,{getState}){
            const state =getState() as RootState
            const token =state.auth.token 
            if(token){
            
            headers.set("Authorization",`Bearer ${token}`)
            }
            // console.log("authorization",token)

            return headers

        }
    })

})