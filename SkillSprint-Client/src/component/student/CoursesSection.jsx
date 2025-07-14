import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { assets } from "../../assets/assets";
import useCourses from "../../hook/useCourses";

function CoursesSection() {
  //!courses data come from custom hook which return redux state
  const { course, loading, error } = useCourses();

  return (
    <section className="my-20">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        {/* content 1st children */}
        <div className="col-span-1">
          <span className="flex items-center gap-3">
            <h6 className=" text-purple-800">Course We are Provide</h6>
            <img className="h-10 w-10" src={assets.hat} />
          </span>
          <h2 className=" my-5 text-purple-950 text-xl md:text-3xl font-semibold">
            Leading Course <span className="text-purple-700">Category</span>
          </h2>
          <p className=" text-gray-500 mt-10">
            Discover our top-rated course across various categories.From coding
            and design to business and wellness, our courses are crafted to
            deliver result
          </p>
          <Link
            to={"/course-list"}
            onClick={() => scrollTo(0, 0)}
            className=" animate-pulse bg-purple-800 text-white mt-20 place-items-center btn  hover:bg-purple-950 hover:text-white border-purple-900 px-10 py-3 rounded"
          >
            Explore All Course
          </Link>
        </div>
        {/* 1st children ends */}
        {loading && (
          <h1 className="text-center animate-bounce">Loading.....</h1>
        )}
        {error && <h2 className="text-center text-red-700">{error}</h2>}
        {/* Course Card component */}
        {!loading &&
          !error &&
          course?.map((course, idx) => (
            <CourseCard course={course} key={course?._id} />
          ))}
        <div>
          {course?.length === 0 ? (
            <p className="text-green-500 text-center text-2xl">
              Course Not Publish Yet
            </p>
          ) : (
            ""
          )}
        </div>
      </main>
    </section>
  );
}

export default CoursesSection;
