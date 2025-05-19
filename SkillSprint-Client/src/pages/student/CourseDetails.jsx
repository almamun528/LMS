import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCoursesAPI from "../../ReduxAPI/Course/useCoursesAPi";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const allCourseData = useCoursesAPI();

  // Fetch course data when allCourseData is available
  useEffect(() => {
    if (allCourseData?.length) {
      const findCourse = allCourseData.find((course) => course?._id === id);
      setCourseData(findCourse || null);
    }
  }, [allCourseData, id]); // ✅ add dependencies

  useEffect(() => {
    if (courseData) {
      console.log("Loaded course:", courseData);
    }
  }, [courseData]);

  if (!courseData) return <p className="p-4">Loading course...</p>;

  return (
    <section className="p-4">
      <div className="flex justify-between items-start">
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold">{courseData.courseTitle}</h2>
          <p className="mt-2 text-gray-700">{courseData.description}</p>
          {/* Add more details if needed */}
        </div>
        <div className="hidden lg:block w-1/3">
          {/* Sidebar or additional details like pricing/enroll */}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
