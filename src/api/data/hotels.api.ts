import { api } from "./base";

type hotelInputTypes = {
  
  name: string;
  description: string;
  price?:number;
  address:string;
  location:string;
  phoneNumber:string;
  type:string
  capacity?:number;
  email: string;
  features: string[];
  amenities: string[];
  rule: string;
  attachments: string[];
};

const hotels = api.injectEndpoints({
  endpoints: ({ mutation,query }) => ({
    addHotel: mutation<any,hotelInputTypes>({
        query:(body)=>({
            url:"/property",
            method:"POST",
            body
        }),
        invalidatesTags:["property"]

    }),

    getHostProperty:query<any,void>({
       query:(q)=>({
                  url:"/property/host",
                  params: q ?? undefined
              }),
              providesTags:["property"]
    }),
    
   deleteProperty:mutation<{message:string},string>({
            query:(propertyId:string)=>({
                url:`property/${propertyId}`,
                method:"Delete"

            }),
            invalidatesTags:["property"]

        })
  }),
});

export const {useAddHotelMutation,useGetHostPropertyQuery,useDeletePropertyMutation} =hotels