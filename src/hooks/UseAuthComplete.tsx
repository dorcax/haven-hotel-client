// import { Role, type AuthState } from '@/api/api.type'
// import { useAuthState } from '@/api/data/auth'
// import { useCallback } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const UseAuthComplete = () => {
//     const auth =useAuthState()
//     const navigate =useNavigate()
//     const {search} =useLocation()
//   return useCallback(
//     async(result:Promise<AuthState>)=>{
//         const res =await result 
//         console.log("Logging in:", res);
//         console.log("loginging",res)
//         auth.set(res)
//           // CRITICAL FIX: Add a small delay to ensure cookie is stored
//             await new Promise(resolve => setTimeout(resolve, 300));
//         if(res.role ===Role.GUEST){
//             navigate('/dashboard',{replace:true})
//         }else{
//             navigate("/",{replace:true})
//         }
//         return res
     
//     }
//   ,[auth,search,navigate])
// }

// export default UseAuthComplete




import { Role, type AuthState } from "@/api/api.type";
import { useAuthState } from "@/api/data/auth";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { envUrl } from "@/api/data/base";

const UseAuthComplete = () => {
  const auth = useAuthState();
  const navigate = useNavigate();

  return useCallback(
    async (loginPromise: Promise<AuthState>) => {
      const res = await loginPromise; // original login mutation
console.log("Initial login result:", res);
      // ✅ Wait for backend to confirm cookie
        auth.set(res)
      // const meRes = await fetch(`${envUrl}/auth`, {
      //   credentials: "include", // important
      // }).then((r) => r.json());

      // // Set auth state with confirmed data
      // auth.set(meRes);

      // Navigate based on role
      if (res.role === Role.GUEST) {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }

      return meRes;
    },
    [auth, navigate]
  );
};

export default UseAuthComplete;


