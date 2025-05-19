import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import useCoursesAPI from "../../ReduxAPI/Course/useCoursesAPi";

const CoursesSection = () => {
  const allCourses = useCoursesAPI([]);
  console.log(allCourses);
  return (
    <section>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        mollitia perferendis perspiciatis quaerat voluptas magnam officiis fuga
        labore error. Doloremque?
      </p>
      <br />
      <div className="flex gap-3 items-center justify-center">
        {allCourses?.slice(0, 2).map((course, index) => (
          <CourseCard course={course} key={course?._id} />
        ))}
      </div>
      <br />
      <Link to={"/course-list"} onClick={() => scrollTo(0, 0)}>
        Show All Course
      </Link>
    </section>
  );
};

export default CoursesSection;
