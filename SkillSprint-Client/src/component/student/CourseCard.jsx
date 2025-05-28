import { assets } from "../../assets/assets";

function CourseCard({ course }) {
  return (
    <section>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={course.courseThumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.courseTitle}</h2>
          <p>{course.educator.name}</p>
          {/* Ratings */}
          <div className="rating-area">
            <p>4.5</p>
            <div>
              {[
                ...Array(5).map((_, idx) => (
                  <img key={idx} src={assets.star} alt="star" />
                )),
              ]}
            </div>
            <p>22</p>
          </div>
          <p>
            Price:$ {(course.coursePrice - course.discount * course.coursePrice/100).toFixed(2)}
          </p>
          {/* bottom area */}
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseCard;
