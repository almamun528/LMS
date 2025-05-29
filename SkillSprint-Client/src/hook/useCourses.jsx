import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../ReduxAPI/Course/courseSlice";

const useCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    if (!courses || courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [dispatch, courses]);
  return { courses, loading, error };
};

export default useCourses;
