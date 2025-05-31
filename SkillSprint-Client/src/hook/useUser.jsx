import { useState } from "react";
import { useSelector } from "react-redux";

const useUser = () => {
  const [isEducator, SetIsEducator] = useState(false);
  const [isAlreadyEnrolled, SetIsAlreadyEnrolled] = useState(false);
  const user = useSelector((state) => state.auth.user);
  
  return { user, isEducator, isAlreadyEnrolled };
};
export default useUser;
