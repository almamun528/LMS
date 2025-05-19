import React, { useEffect, useState } from "react";
import useCoursesAPI from "../../ReduxAPI/Course/useCoursesAPi";
import { Link, useParams } from "react-router-dom";
import SearchBar from "../../component/student/SearchBar";
import CourseCard from "../../component/student/CourseCard";

const CoursesList = () => {
  const allData = useCoursesAPI();
  console.log(allData);
  const { input } = useParams();
  // filter course
  const [filteredCourse, setFilteredCourse] = useState([]);
  useEffect(() => {
    if (allData && allData.length > 0) {
      const tempCourses = allData.slice();

      input
        ? setFilteredCourse(
            tempCourses.filter((item) =>
              item?.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses);
    }
  }, [allData, input]);
  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl">Course List</h2>
          <p>
            {" "}
            <Link to={"/"}>Home</Link> / Course List
          </p>
        </div>
        <SearchBar data={input} />
      </div>

      {/* remove search input */}
      {input && (
        <div>
          <p>{input}</p>
          <Link to="/course-list">
            <p className="text-2xl cursor-pointer text-red-400">x</p>
          </Link>
        </div>
      )}
      {/* bottom course card area */}
      <div className="flex items-center justify-center gap-3 flex-wrap mt-10">
        {filteredCourse?.map((course, index) => (
          <CourseCard key={course?._id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesList;
