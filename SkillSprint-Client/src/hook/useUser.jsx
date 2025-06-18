import { useState } from "react";
import { useSelector } from "react-redux";

const useUser = () => {
  const [isEducator, SetIsEducator] = useState(true);
  const [isAlreadyEnrolled, SetIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState(true);
  const user = useSelector((state) => state.auth.user);

  return {
    user,
    isEducator,
    isAlreadyEnrolled,
    playerData,
    setPlayerData,
    enrolledCourses,
    setEnrolledCourses,
  };
};
export default useUser;
