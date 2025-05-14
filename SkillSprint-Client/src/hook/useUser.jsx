import { useSelector } from "react-redux";

const useUser = () => {
  return useSelector((state) => state.auth.user);
};
export default useUser;
