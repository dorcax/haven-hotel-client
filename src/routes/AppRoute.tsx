import ForgotPassword from '@/pages/auth/ForgotPassword'
import Login from '@/pages/auth/Login'
import PasswordVerification from '@/pages/auth/PasswordVerification'
import ResetPassword from '@/pages/auth/ResetPassword'
import SignUp from '@/pages/auth/SignUp'
import { createBrowserRouter, RouterProvider } from "react-router-dom"



const router =createBrowserRouter([
  {
  index:true,
  element:<SignUp/>
  },
  {
    path:"/login",
    element:<Login/>
  },
   {
    path:"/verify-otp",
    element:<PasswordVerification/>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
    {
    path:"/reset-password",
    element:<ResetPassword/>
  }


])
const AppRoute = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default AppRoute