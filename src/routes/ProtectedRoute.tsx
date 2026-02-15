// import { useAuthUserQuery } from "@/api/data/auth.api";
// import Loader from "@/components/common/Loader";
// import { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";

// const ProtectedRoute = () => {
//   const { isLoading, isError } = useAuthUserQuery();
//    const [hasCookie, setHasCookie] = useState(false);
//   const navigate = useNavigate();

//     // Wait a bit before checking auth to allow cookie to be set
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShouldFetch(true);
//     }, 300); // 300ms delay

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(()=>{
//   if (isError) {
//     navigate("/login", { replace: true });
//   }
//   },[navigate,isError])
//   if (isLoading)
//     return (
//       <div className="flex justify-center items-center ">
//         <Loader />
//       </div>
//     );

//   return <Outlet />;
// };

// export default ProtectedRoute;

import { useAuthUserQuery } from "@/api/data/auth.api";
import Loader from "@/components/common/Loader";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { isLoading, isError } = useAuthUserQuery(undefined, {
    skip: !shouldFetch, // Don't fetch until we're ready
    refetchOnMountOrArgChange: true,
  });
  const navigate = useNavigate();

  // Wait a bit before checking auth to allow cookie to be set
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldFetch(true);
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isError) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isError]);

  // Show loader while waiting to check auth
  if (!shouldFetch || isLoading) {
    return <Loader fullPage />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
