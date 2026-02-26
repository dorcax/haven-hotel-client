

type popularRoom ={
    value:number
    name:string
    color:string

}
type popularRoomProps ={
    data:popularRoom[]
}
const RoomProgressBar = ({data}:popularRoomProps) => {
  return (
       <div>
              {
                data.map((item)=>{
                    return <div className="py-3">
                          <div className="flex justify-between items-center text-sm">

                <span className="capitalize text-base">{item.name}</span>
                <span className="font-medium text-gray-600">{item.value}%</span>
              </div>
            
              <div className="border rounded-lg h-2 overflow-hidden">
                <div className=" h-full" style={{width:item.value,backgroundColor:item.color}}></div>
              </div>
                    </div>
                })
              }
              </div>
  )
}

export default RoomProgressBar