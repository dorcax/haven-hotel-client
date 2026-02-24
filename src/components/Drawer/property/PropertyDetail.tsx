import CustomInfoDrawer from '@/components/common/CustomInfoDrawer'
import type { Property } from '@/pages/property/Property'
import { CircleCheck } from 'lucide-react'




type props = {
    property: Property

}


const PropertyDetail = ({ property }: props) => {
    console.log("atachment", property)
    // const categoryText = Array.isArray(room.category)
    //     ? room.category.join(", ")
    //     : room.category;
    // const attachments =
        // room?.attachments || [];
    const attachments =property?.attachments?.uploads?.map((u:any)=>u) ||[]
    console.log("room detail", attachments)
    const images = Array.isArray(attachments) ? attachments : attachments ? [attachments] : [];
    const attachment = images.map((u) => u)
    const firstImage = attachment.length > 0 ? attachment[0].url : "";
    console.log("firstImages",firstImage)
    const otherImages = attachment.slice(1);
    
    return (
        <CustomInfoDrawer

            //    image={attachments}
            close={true}
            className='overflow-auto'
        >
            {/* room header */}
            <div className='text-base capitalize text-gray-900 font-semibold pt-6'>
                <h2>
                    property
                    {/* {categoryText.toLowerCase()} room
                    {room.isAvailable && <Badge className='bg-[#E3B23C] mx-2 text-xs'>Available</Badge>} */}
                    </h2>
            </div>
            {/* room images */}
            {attachment.length === 1 ? <img src={firstImage} className=' h-60 w-full object-cover rounded-md' /> : (
                <div className='grid grid-cols-4 gap-2'>
                    {firstImage &&
                        <div className='col-span-3'>
                            <img src={firstImage} className=' h-60 w-full object-cover rounded-md' />
                            
          
                        </div>}
                    {/* second images */}
                    {otherImages.length > 0 &&
                        <div className='col-span-1 space-y-4'>
                            {otherImages.map((u) => (<img src={u.url} className='w-full h-16 object-cover rounded-md' />))}
                        </div>}

                </div>


            )}


            <div>
                <p className='text-sm text-gray-600 '> {property.description}</p>
            </div>
            {/* feature */}
            <div>
                <h3 className='text-base capitalize font-medium text-gray-900 mb-2'>feature:</h3>
                <div className='grid grid-cols-2 gap-3 w-full text-gray-600'>

                    {property.features?.map((f) => (
                        <span className='flex gap-2 text-sm py-1 '><CircleCheck className='text-[#E3B23C]' />{f}</span>
                    ))}
                </div>
            </div>
         
            <div>
                <h3 className='text-base capitalize font-medium text-gray-900 mb-2'>Amenities:</h3>
                <div className='grid grid-cols-2 gap-3 w-full text-gray-600'>

                    {property.amenities?.map((f) => (
                        <span className='flex gap-2 text-sm pt-1 mb-6 capitalize'>{f}</span>
                    ))}
                </div>
            </div>
        </CustomInfoDrawer>
    )
}

export default PropertyDetail