import { api } from "./base"


type roomInputType ={
    name:string,
    description:string,
    floor:number,
    capacity:number,
    amenities:string[]
    attachments:string[]

}
type roomInputResponse ={
    message:string
}
const hotels =api.injectEndpoints({
    endpoints:({mutation,query})=>({
        addRoom:mutation<roomInputResponse,roomInputType>({
         query:(body)=>({
            url:"room",
            method:"POST",
            body
         }),
         invalidatesTags:["room"]
        })
        
    })
})

export const {useAddRoomMutation} =hotels