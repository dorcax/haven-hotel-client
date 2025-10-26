import { api } from "./base";

type hotelInputTypes = {
  
  name: string;
  description: string;
  email: string;
  features: string[];
  amenities: string[];
  rule: string;
  attachments: string[];
};

const hotels = api.injectEndpoints({
  endpoints: ({ mutation, query }) => ({
    addHotel: mutation<any,hotelInputTypes>({
        query:(body)=>({
            url:"/hotel",
            method:"POST",
            body
        }),
        invalidatesTags:["hotel"]

    }),

  }),
});

export const {useAddHotelMutation} =hotels