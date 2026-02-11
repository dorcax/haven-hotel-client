import { Role, type AuthState } from '@/api/api.type'
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
        console.log("Logging in:", res);
        console.log("loginging",res)
        auth.set(res)
        if(res.role ===Role.GUEST){
            navigate('/dashboard')
        }else{
            navigate("/",{replace:true})
        }
        return res
     
    }
  ,[auth,search,navigate])
}

export default UseAuthComplete






// import type { AuthState } from '@/api/api.type'
// import { useAuthState } from '@/api/data/auth'
// import { useCallback } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const UseAuthComplete = () => {
//   const auth = useAuthState() // should give you auth state + setter
//   const navigate = useNavigate()
//   const { search } = useLocation()

//   return useCallback(
//     async (result: Promise<AuthState>) => {
//       const res = await result
//       console.log("Logging in:", res)

//       // Update auth state
//       auth.set(res) // make sure useAuthState returns {auth, set}

//       // Redirect based on role / hotel
//       if (res.role === "customer") {
//         navigate("/", { replace: true })
//       } else if (res.role === "hotelOwner") {
//         if (res.hotelId) {
//           navigate(`/dashboard/hotel/${res.hotelId}`, { replace: true })
//         } else {
//           navigate("/addhotel", { replace: true })
//         }
//       } else if (res.role === "admin") {
//         navigate("/dashboard/admin", { replace: true })
//       }

//       return res
//     },
//     [auth, search, navigate]
//   )
// }

// export default UseAuthComplete
