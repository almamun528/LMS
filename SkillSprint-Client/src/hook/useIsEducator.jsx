import { useEffect, useState } from "react";
import axiosInstance from "../AxiosApi/axiosInstance";
import useUser from "./useUser";

const useIsEducator = () => {
  const { user } = useUser();
  const userId = user?.uid || user?._id;
  const [isEducator, setIsEducator] = useState(false);

  useEffect(() => {
    const fetchEducatorFromApi = async () => {
      if (!userId) return;
      try {
        const res = await axiosInstance.get(`/api/users/${userId}`);
        if (res.data?.role === "teacher") {
          setIsEducator(true);
        } else {
          setIsEducator(false);
        }
      } catch (error) {
        console.error("Failed to check teacher status:", error);
        setIsEducator(false);
      }
    };
    fetchEducatorFromApi();
  }, [userId]);

  return isEducator;
};

export default useIsEducator;
