import type { AuthState } from '@/api/api.type'
import { useAuthState } from '@/api/data/auth'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UseAuthComplete = () => {
    const auth =useAuthState()
    const navigate =useNavigate()
    const {search} =useLocation()
  return useCallback(
    async(result:Promise<AuthState>)=>{
        const res =await result 
        console.log("loginging",res)
        auth.set(res)
        if(res.hotelId){
            navigate(`/dashboard/hotel/${res.hotelId}`)
        }else{
            navigate("/addhotel",{replace:true})
        }
        return res
     
    }
  ,[auth,search,navigate])
}

export default UseAuthComplete