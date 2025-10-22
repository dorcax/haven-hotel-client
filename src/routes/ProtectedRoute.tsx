import { useAuthUserQuery } from "@/api/data/auth.api";
import Loader from "@/components/common/Loader";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoading, isError } = useAuthUserQuery();
  const navigate = useNavigate();

  useEffect(()=>{
  if (isError) {
    navigate("/login", { replace: true });
  }
  },[navigate,isError])
  if (isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Loader />
      </div>
    );

  return <Outlet />;
};

export default ProtectedRoute;
