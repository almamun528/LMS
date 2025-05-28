import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "../../ReduxAPI/Course/courseSlice";
import CourseCard from "./CourseCard";
function CoursesSection() {
  const dispatch = useDispatch();

  // course comes state from redux
  const { courses, loading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    // fetch all courses from redux 
    dispatch(fetchCourses());
  }, [dispatch]);
  

  return (
    <section className="my-10">
      <div className="top-area text-center mb-5">
        <h2 className=" my-5 text-purple-950 text-xl md:text-3xl font-semibold">
          Learn from the best
        </h2>
        <p className="md:w-8/12 mx-auto text-gray-500">
          Discover our top-rated course across various categories.From coding
          and design to business and wellness, our courses are crafted to
          deliver result
        </p>
      </div>
      {/* content area Starts */}

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
        {loading && (
          <h1 className="text-center animate-bounce">Loading.....</h1>
        )}
        {error && <h2 className="text-center text-red-700">{error}</h2>}
        {/* Course Card component */}
        {!loading &&
          !error &&
          courses
            .slice(0, 4)
            .map((course, idx) => (
              <CourseCard course={course} key={course?._id} />
            ))}
      </main>
      {/* content area Ends */}
      <div className="bottom-area text-center my-10">
        <Link
          to={"/course-list"}
          onClick={() => scrollTo(0, 0)}
          className="place-items-center btn text-purple-900 hover:bg-purple-950 hover:text-white border-purple-900 px-10 py-3 rounded"
        >
          See all courses
        </Link>
      </div>
    </section>
  );
}

export default CoursesSection;
