import { AppLayout } from '@/components/layout/AppLayout'
import ForgotPassword from '@/pages/auth/ForgotPassword'
import Login from '@/pages/auth/Login'
import PasswordVerification from '@/pages/auth/PasswordVerification'
import ResetPassword from '@/pages/auth/ResetPassword'
import SignUp from '@/pages/auth/SignUp'
import DashboardApp from '@/pages/dashboard/DashboardApp'
// import Dashboard from '@/pages/dashboard/Dashboard'
// import Dashboard from '@/pages/dashboard/'
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
  },
  {
    path:"/dashboard",
    element:<AppLayout/>,
    children:[{
      index:true,
      element:<DashboardApp/>

    }]
  }


])
const AppRoute = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default AppRoute