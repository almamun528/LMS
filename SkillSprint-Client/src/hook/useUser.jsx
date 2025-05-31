import { useState } from "react";
import { useSelector } from "react-redux";

const useUser = () => {
  const [isEducator, SetIsEducator] = useState(false);
  const [isAlreadyEnrolled, SetIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const user = useSelector((state) => state.auth.user);

  return { user, isEducator, isAlreadyEnrolled, playerData, setPlayerData };
};
export default useUser;
