import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { calculateRating } from "../../ReduxAPI/Course/courseSlice";

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
          <p>{course.educator.name} Educator Name - Mamun</p>
          {/* Ratings */}
          <div className="rating-area flex gap-2 items-center justify-between">
            <span>Average Rating : {calculateRating(course)}</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, idx) => (
                <img
                  key={idx}
                  className="h-3.5 w-3.5"
                  src={
                    idx < Math.floor(calculateRating(course))
                      ? assets.star
                      : assets.star_blank
                  }
                />
              ))}
            </div>
            <p className="text-gray-500">{course.courseRatings.length}</p>
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
            <button className="btn bg-purple-950 text-white hover:bg-purple-900">
            Course  Details
            </button>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default CourseCard;
