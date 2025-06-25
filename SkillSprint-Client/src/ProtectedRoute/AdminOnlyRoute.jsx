import useIsAdmin from "../hook/useIsAdmin";
import { Navigate } from "react-router-dom";
import useUser from "../hook/useUser";

const AdminOnlyRoute = ({ children, adminOnly = false }) => {
  const isAdmin = useIsAdmin();
  const { user } = useUser();
  if (!user) {
    // user is not login -> send him to login page
    return <Navigate to="/login" replace />;
  }
  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AdminOnlyRoute;
