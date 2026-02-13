import { lazy, Suspense } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "@/components/common/Loader";

// Lazy load components
const HomePage = lazy(() => import("@/pages/main-pages/HomePage"));
const Login = lazy(() => import("@/pages/auth/Login"));
const SignUp = lazy(() => import("@/pages/auth/SignUp"));
const PasswordVerification = lazy(
  () => import("@/pages/auth/PasswordVerification"),
);
const Discover = lazy(() => import("@/pages/discover/Discover"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("@/pages/auth/ResetPassword"));
const Upload = lazy(() => import("@/components/fileupload/Upload"));
const AddHotel = lazy(() => import("@/components/Dialog/hotel/AddHotel"));
const DetailsPage = lazy(() => import("@/pages/main-pages/DetailsPage"));
const DashboardApp = lazy(() => import("@/pages/dashboard/DashboardApp"));
const RoomList = lazy(() => import("@/pages/dashboard/room/RoomList"));

const router = createBrowserRouter([
  {
    index: true,
    element: (
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/discover",
    element: (
      <Suspense fallback={<Loader />}>
        <Discover />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/verify-otp",
    element: (
      <Suspense fallback={<Loader />}>
        <PasswordVerification />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<Loader />}>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<Loader />}>
        <ResetPassword />
      </Suspense>
    ),
  },
  {
    path: "/file",
    element: (
      <Suspense fallback={<Loader />}>
        <Upload />
      </Suspense>
    ),
  },
  {
    path: "/addhotel",
    element: (
      <Suspense fallback={<Loader />}>
        <AddHotel />
      </Suspense>
    ),
  },
  {
    path: "/apartment/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <DetailsPage />
      </Suspense>
    ),
  },
  {
    path: "/hotel/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <DetailsPage />
      </Suspense>
    ),
  },

  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <DashboardApp />
              </Suspense>
            ),
          },
          {
            path: "room",
            element: (
              <Suspense fallback={<Loader />}>
                <RoomList />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
