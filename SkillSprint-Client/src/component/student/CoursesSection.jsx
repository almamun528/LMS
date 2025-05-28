import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
function CoursesSection() {
  return (
    <section className="my-10">
      <div className="top-area text-center mb-5">
        <h2 className=" my-5 text-xl md:text-3xl font-semibold">Learn from the best</h2>
        <p className="md:w-8/12 mx-auto text-gray-500">
          Discover our top-rated course across various categories.From coding
          and design to business and wellness, our courses are crafted to
          deliver result
        </p>
      </div>
      {/* content area Starts */}
          {/* <CourseCard/> */}
          <main>
            
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
