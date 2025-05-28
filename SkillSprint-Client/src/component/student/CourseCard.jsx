import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function CourseCard({ course }) {
  return (
    <section>
      <Link
        to={"/course/" + course._id}
        className="card bg-base-100  shadow-sm border-y-purple-900 border-[1px] p-2 hover:drop-shadow-2xl"
        onClick={() => scrollTo(0, 0)}
      >
        <figure>
          <img className="rounded" src={course.courseThumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-semibold">{course.courseTitle}</h2>
          <p>{course.educator.name}</p>
          {/* Ratings */}
          <div className="rating-area">
            <p>4.5</p>
            <div className="flex bg-amber-200">
              {[
                ...Array(5).map((_, idx) => (
                  <img
                    key={idx}
                    src={assets.star}
                    alt="star"
                    className="w-3.5 h-3.5"
                  />
                )),
              ]}
            </div>
            <p className="text-gray-500">22</p>
          </div>
          <p className="text-gray-800">
            Price:${" "} 
            {(
              course.coursePrice -
              (course.discount * course.coursePrice) / 100
            ).toFixed(2)}
          </p>
          {/* bottom area */}
          <div className="card-actions justify-start">
            <button className="btn bg-purple-950 text-white hover:bg-purple-900">Enroll Now</button>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default CourseCard;
