import { api } from "./base";

type hotelInputTypes = {
  
  name: string;
  description: string;
  price:number;
  address:string;
  location:string;
  phoneNumber:string;
  type:string
  capacity:number;
  email: string;
  features: string[];
  amenities: string[];
  rule: string;
  attachments: string[];
};

const hotels = api.injectEndpoints({
  endpoints: ({ mutation }) => ({
    addHotel: mutation<any,hotelInputTypes>({
        query:(body)=>({
            url:"/property",
            method:"POST",
            body
        }),
        invalidatesTags:["property"]

    }),

  }),
});

export const {useAddHotelMutation} =hotels