import { Link, useParams } from "react-router-dom";
import SearchBar from "../../component/student/SearchBar";
import CourseCard from "../../component/student/CourseCard";
import useCourses from "../../hook/useCourses";

function CoursesList() {
  //courses data come from custom hook which return redux state
  const { courses, loading, error } = useCourses();
  const { input } = useParams();

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
        <SearchBar data={input} />
      </main>
      {/* all courses  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
        {!loading &&
          !error &&
          courses &&
          courses.length > 0 &&
          courses?.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        {/* if course are not published */}
        {!loading && !error && courses?.length === 0 && (
          <h4 className="text-xl md:text-2xl text-center my-3 col-span-full">
            No course is published
          </h4>
        )}
      </div>
    </section>
  );
}

export default CoursesList;
