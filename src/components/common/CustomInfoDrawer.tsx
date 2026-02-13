import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { usePopUpContext } from '@/context/PopUpContext'
import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

type customInfoDrawerType = {
    children: ReactNode
    // category: string[]
    // image?: { url: string }[]
    close?: boolean
    className?:string
}

const CustomInfoDrawer = ({ children ,className}: customInfoDrawerType) => {
    const { closeDrawer, isDrawerOpen } = usePopUpContext()
  
    return (
        <Sheet open={isDrawerOpen}  onOpenChange={(open) => {
    if (!open) closeDrawer()
  }}>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent className={cn("sm:max-w-md",className)}>
               
                <div className="grid flex-1 auto-rows-min gap-6 px-4">

                    {children}
                </div>
                {/* <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        {close && <Button variant="outline">Close</Button>}

                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>

    )
}

export default CustomInfoDrawer 
