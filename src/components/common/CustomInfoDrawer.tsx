import React, { type ReactNode } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePopUpContext } from '@/context/PopUpContext'
import { cn } from '@/lib/utils'

type customInfoDrawerType = {
    children: ReactNode
    // category: string[]
    // image?: { url: string }[]
    close?: boolean
    className?:string
}

const CustomInfoDrawer = ({ children,  close ,className}: customInfoDrawerType) => {
    const { openDrawer, isDrawerOpen } = usePopUpContext()
    // Convert category & image to arrays safely


 
  
    return (
        <Sheet open={isDrawerOpen} onOpenChange={openDrawer}>
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
