import { useState } from "react";
import { useSelector } from "react-redux";

const useUser = () => {
  const [isEducator, SetisEducator] = useState(false);
  const user = useSelector((state) => state.auth.user);

  return { user, isEducator };
};
export default useUser;
