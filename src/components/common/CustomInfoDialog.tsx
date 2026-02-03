import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { usePopUpContext } from "@/context/PopUpContext"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type CustomInfoDialogType={
    imgUrl?:string
    title?:string,
    children:ReactNode,
    description?:string
    okText?:string
    loading?:boolean
    className?:string
    close?:boolean
    // onClick:()=>void
}
const CustomInfoDialog = ({title,children,description,okText,imgUrl,loading,className,close}:CustomInfoDialogType) => {
const{isDialogOpen,openDialog,closeDialog} =usePopUpContext()


  return (
    <Dialog open={isDialogOpen} onOpenChange={openDialog}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Share</Button> */}
      </DialogTrigger>
      <DialogContent className={cn("sm:max-w-md",className)}>
        <DialogHeader>
           {imgUrl &&  <div className="flex justify-center">
                <img src={imgUrl} alt="hotel-image" width={70}/>
            </div>}
          <DialogTitle className=" capitalize text-lg font-semibold text-gray-900">{title}</DialogTitle>
          <DialogDescription className="text-sm ">
           {description}
          </DialogDescription>
        </DialogHeader>
       
         {children}
      
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          {close &&   <Button type="button" variant="secondary" onClick={closeDialog}>
              {okText}
            </Button>}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CustomInfoDialog