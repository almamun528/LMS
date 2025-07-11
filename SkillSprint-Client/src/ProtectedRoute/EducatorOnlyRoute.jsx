import useIsEducator from "../hook/useIsEducator";
import { Navigate } from "react-router-dom";
import useUser from "../hook/useUser";

const EducatorOnlyRoute = ({ children, educatorOnly = false }) => {
  const { user } = useUser();
  const { isEducator, loading } = useIsEducator();
  if (loading) return <p>Loading....</p>;
  if (!user) return <Navigate to="/login" replace />; //send user to login if hey did not login

  if (educatorOnly && !isEducator) return <Navigate to="/" replace />;
  return children;
};

export default EducatorOnlyRoute;
