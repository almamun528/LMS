import { Link } from "react-router-dom";

const CoursesSection = () => {
  return (
    <section>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        mollitia perferendis perspiciatis quaerat voluptas magnam officiis fuga
        labore error. Doloremque?
      </p>
      <Link to={"/course-list"} onClick={() => scrollTo(0, 0)}>
        Show All Course
      </Link>
    </section>
  );
};

export default CoursesSection;
