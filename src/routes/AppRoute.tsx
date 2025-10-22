import Upload from '@/components/fileupload/Upload'
import { AppLayout } from '@/components/layout/AppLayout'
import { colums, data } from '@/constant/roomdata'
import ForgotPassword from '@/pages/auth/ForgotPassword'
import Login from '@/pages/auth/Login'
import PasswordVerification from '@/pages/auth/PasswordVerification'
import ResetPassword from '@/pages/auth/ResetPassword'
import SignUp from '@/pages/auth/SignUp'
import DashboardApp from '@/pages/dashboard/DashboardApp'
import RoomList from '@/pages/dashboard/room/RoomList'
// import Dashboard from '@/pages/dashboard/Dashboard'
// import Dashboard from '@/pages/dashboard/'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProtectedRoute from './ProtectedRoute'
import AddHotel from '@/components/Dialog/hotel/AddHotel'



const router = createBrowserRouter([
  {
    index: true,
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/verify-otp",
    element: <PasswordVerification />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/file",
    element: <Upload />
  },
  {
    path:"/addhotel",
    element:<AddHotel/>
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [{
      element: <AppLayout />,
      children: [{
        index: true,
        element: <DashboardApp />
      }, {
        path: "room",
        element: <RoomList columns={colums} data={data} />
      }]

    },

    ],
  },
])
const AppRoute = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoute