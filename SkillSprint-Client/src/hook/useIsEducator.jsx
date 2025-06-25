import { useEffect, useState } from "react";
import axiosInstance from "../AxiosApi/axiosInstance";
import useUser from "./useUser";

const useIsEducator = () => {
  const { user } = useUser();
  const userId = user?.uid || user?._id;
  const [isEducator, setIsEducator] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducatorFromApi = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        const res = await axiosInstance.get(`/api/users/${userId}`);
        if (res.data?.role === "teacher") {
          setIsEducator(true);
          setLoading(false);
        } else {
          setIsEducator(false);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to check teacher status:", error);
        setIsEducator(false);
        setLoading(false);
      }
    };
    fetchEducatorFromApi();
  }, [userId, user]);

  return { isEducator, loading };
};

export default useIsEducator;
