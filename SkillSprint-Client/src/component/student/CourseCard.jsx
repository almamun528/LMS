import React from "react";
import { Link } from "react-router-dom";
// import { assets } from "../../assets/assets";

const CourseCard = ({ course }) => {
  return (
    <Link to={"/course/" + course._id} onClick={() => scrollTo(0, 0)}>
      <section>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={course?.courseThumbnail} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{course?.courseTitle}</h2>
            <h2 className="card-title">{course?.educator?.name}</h2>
            <div>
              <p>4.4</p>
            </div>
            {/* <div>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.Logo} alt="image" />
            ))}
          </div> */}
            <p>22</p>
            <p>
              price :
              {(
                course.coursePrice -
                (course.discount * course.coursePrice) / 100
              ).toFixed(2)}
            </p>
            <p>price : {course.discount} </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default CourseCard;
