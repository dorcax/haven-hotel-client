import React from 'react'
import { Button } from '../ui/button'
import Loader from './Loader'
import { Loader2, RefreshCcw } from 'lucide-react'


type pageHeaderProps = {
    title: string,
    description: string,
    primary?: {
        title: string,
        action: () => void
    },
    refresh?: {
        action: () => void
        isLoading: boolean

    }
}
const PageHeader = ({ title, description, primary, refresh }: pageHeaderProps) => {

    return (
        <section className='w-full'>
            <div className="mt-10 mb-5 flex justify-between items-center">
                <div>
                    <h1 className="capitalize text-2xl font-semibold text-gray-700">{title}</h1>
                    {description && <p>{description}</p>}
                </div>
                <div className='flex flex-wrap gap-2'>
                    <Button
                    disabled={refresh?.isLoading}
                    onClick={()=>refresh?.action()}
                    variant="outline"
                    className=''
                    
                    
                    >Refresh {refresh?.isLoading ? <Loader2/>:<RefreshCcw/>} </Button>
                    <Button className="bg-[#E3B23C] hover:bg-[#d4a62e] capitalize text-sm" onClick={primary?.action}>create room</Button>
                </div>


            </div>

        </section>
    )
}

export default PageHeader