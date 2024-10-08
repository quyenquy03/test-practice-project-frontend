import getAccessToken from "@/utils/Functions/getAccessToken";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import ROUTE_PATH from "./routePath";
import { toast } from "react-toastify";
import React from "react";

const AdminProtectRoute = (): JSX.Element => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parseJwt = (token: any) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch {
      return null;
    }
  };
  const accessToken = getAccessToken();
  if (!accessToken) return <Navigate to={ROUTE_PATH.LOGIN} />;

  const decodedToken = parseJwt(accessToken);
  console.log(decodedToken);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    if (decodedToken.roleName !== "admin") {
      toast.info("Bạn không có quyền truy cập vào trang này!");
      navigate(ROUTE_PATH.HOME);
    }
  }, [decodedToken]);
  return <Outlet />;
};
export default AdminProtectRoute;
