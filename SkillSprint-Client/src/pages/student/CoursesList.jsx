import { Link, useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../component/student/SearchBar";
import CourseCard from "../../component/student/CourseCard";
import useCourses from "../../hook/useCourses";
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

function CoursesList() {
  const navigate = useNavigate();
  //courses data come from custom hook which return redux state
  const { courses, loading, error } = useCourses();
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (courses && courses.length > 0) {
      const allCourses = [...courses];
      // filter courses based on user search
      if (input) {
        const filtered = allCourses.filter((course) =>
          course.courseTitle.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredCourse(filtered);
      } else {
        setFilteredCourse(allCourses);
      }
    }
  }, [courses, input]);

  if (loading) return <h2>Loading....</h2>;
  if (error) return <h2>error{error}</h2>;
  return (
    <section className="my-5">
      <main className="flex items-center justify-between">
        <div className="left-side">
          <h1 className="text-xl md:text-3xl my-2">Course List</h1>
          <span>
            <Link className="text-purple-700" to={"/"}>
              Home
            </Link>{" "}
            / Course List
          </span>
        </div>
        {/* search bar component */}
        <div className="hidden md:block">
          <SearchBar data={input} />
        </div>
      </main>
      {input && (
        <div className="flex gap-3 my-2">
          <p>{input}</p>
          <button onClick={() => navigate("/course-list")}>
            <img
              src={assets.cross_icon}
              alt="cross icon"
              className="cursor-pointer"
            />
          </button>
        </div>
      )}
      {/* all courses  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
        {!loading &&
          !error &&
          courses &&
          courses.length > 0 &&
          filteredCourse?.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        {/* if course are not published */}
        {!loading && !error && filteredCourse?.length === 0 && (
          <h4 className="text-xl md:text-2xl text-center my-3 col-span-full">
            No course is published about{" "}
            <span className="text-purple-600 capitalize font-semibold">
              {input}
            </span>
          </h4>
        )}
      </div>
    </section>
  );
}

export default CoursesList;
