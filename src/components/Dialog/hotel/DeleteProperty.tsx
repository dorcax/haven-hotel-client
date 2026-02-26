import { useDeletePropertyMutation } from '@/api/data/hotels.api'
import CustomInfoDialog from '@/components/common/CustomInfoDialog'
import Loader from '@/components/common/Loader'
import { Button } from '@/components/ui/button'
import { usePopUpContext } from '@/context/PopUpContext'
import { toast } from 'react-toastify'

const DeleteProperty = ({ property}:any) => {
  const [deleteProperty, { isLoading }] = useDeletePropertyMutation()
  const { closeDialog } = usePopUpContext()

  const onDelete = async () => {
    try {
      const res = await deleteProperty(property?.id).unwrap()
      console.log("res",res)
      toast.success("property deleted successfully")
      closeDialog()
    } catch (error) {
      console.log("delete property", error)
    }

  }
  return (
    <CustomInfoDialog
      loading={true}
      className='capitalize  sm:max-w-sm'>

      <div className='flex flex-col justify-between h-full space-y-6'>
        <div className='space-y-2'>
          <h3 className='text-base font-semibold text-gray-900'>are you sure you want to delete this property</h3>
          <p className='text-xs text-gray-600'>this action will permanently remove the room from the property list .</p>
        </div>
        <div className='flex justify-end items-end gap-4 '>
          <Button variant="outline" className='bg-gray-100 w-24 text-black ' onClick={closeDialog}>cancel</Button>
          <Button className='bg-red-700  text-white w-24 hover:bg-red-800' onClick={onDelete} disabled={isLoading}>{isLoading ? <Loader /> : "Delete"}</Button>
        </div>
      </div>
    </CustomInfoDialog>
  )
}

export default DeleteProperty