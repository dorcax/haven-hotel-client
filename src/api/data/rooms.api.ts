import { api } from "./base"


export type roomInputType ={
    name:string
    description:string
    floor:number
    capacity:number
    price:number
    category:string[]
    amenities:string[]
    attachments:string[]
    isAvailable?:boolean
    attachment?:{
        uploads:{url:string}[]
    }

}
type roomInputResponse ={
    message:string
}
const rooms =api.injectEndpoints({
    endpoints:({mutation,query})=>({
        addRoom:mutation<roomInputResponse,roomInputType>({
         query:(body)=>({
            url:"room",
            method:"POST",
            body
         }),
         invalidatesTags:["room"]
        }),
        listRooms:query<any,any>({
        query:(q)=>({
            url:"room",
            params: q ?? undefined
        }),
        providesTags:["room"]

        }),
        deleteRoom:mutation<{message:string},string>({
            query:(roomId:string)=>({
                url:`room/${roomId}`,
                method:"Delete"

            }),
            invalidatesTags:["room"]

        })
        
        
    })
})

export const {useAddRoomMutation ,useListRoomsQuery,useDeleteRoomMutation} =rooms