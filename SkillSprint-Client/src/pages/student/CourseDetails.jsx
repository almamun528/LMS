import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourses from "../../hook/useCourses";
import { calculateRating } from "../../ReduxAPI/Course/courseSlice";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState();
  const { courses, loading, error } = useCourses();

  const fetchCourseData = () => {
    const findCourse = courses.find((course) => course?._id === id);
    setCourseData(findCourse);
  };
  useEffect(() => {
    if (courses && courses.length > 0) {
      fetchCourseData();
    }
  }, [courses, id]);
  if (loading)
    return <span className="loading loading-spinner loading-xl"></span>;
  if (error) return <h2>Error {error}</h2>;
  console.log(courseData);
  return (
    <section className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md;pt-30 pt-20 text-left">
      {/* top area */}
      <div className="absolute top-0 left-0 w-full -z-1 bg-gradient-to-b from-purple-100/70 h-[500px]"></div>
      {/* left area Starts*/}
      <div className="max-w-xl z-10 text-gray-500">
        <h1 className="text-purple-900 font-semibold text-xl md:text-3xl my-2">
          { courseData?.courseTitle}
        </h1>

        <p
          className="pt-4 md:text-base text-sm"
          dangerouslySetInnerHTML={{
            __html: courseData?.courseDescription.slice(0, 200),
          }}
        ></p>
        {/* course rating and reviews */}
        <p>Need to add course rating here</p>
        <p className="text-purple-800 my-2">
          {" "}
          Enrolled : {courseData?.enrolledStudents.length}
          {courseData?.enrolledStudents.length > 1 ? " students" : " student"}
        </p>
        {/*  */}
        <p>Course by Instructor Name : Mamun need to added dynamically </p>
      </div>

      {/* Right Area Start */}
      <div></div>
    </section>
  );
};

export default CourseDetails;
