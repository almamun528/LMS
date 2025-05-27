import { useState } from "react";
import { useSelector } from "react-redux";

const useUser = () => {

const [isAdmin,SetIsAdmin]=useState(false)
const user = useSelector((state) => state.auth.user);


  return {user,isAdmin}
};
export default useUser;
