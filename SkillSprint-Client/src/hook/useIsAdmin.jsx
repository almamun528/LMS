import { useEffect, useState } from "react";
import useUser from "./useUser";
import axiosInstance from "../AxiosApi/axiosInstance";

const useIsAdmin = () => {
  const { user } = useUser();
  const userId = user?.uid || user?._id; 
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchAdminFromApi = async () => {
      if (!userId) return;
      try {
        const res = await axiosInstance.get(`/api/users/${userId}`);
        if (res.data?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Failed to check admin status:", error);
        setIsAdmin(false);
      }
    };

    fetchAdminFromApi();
  }, [userId]);

  return isAdmin;
};

export default useIsAdmin;
