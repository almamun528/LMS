import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserEnrollment } from "../../ReduxAPI/EnrolledCourses/enrolledCourse";
import { calculateCourseDuration } from "../../utility/Course.Function";
import Loading from "../../component/student/Loading";
import { useNavigate } from "react-router-dom";

const MyEnrollments = () => {
  const { enrolledCourses, loading, error } = useSelector(
    (state) => state.enrolledCourses
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserEnrollment());
  }, [dispatch]);
  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLecture: 4 },
    { lectureCompleted: 1, totalLecture: 4 },
    { lectureCompleted: 3, totalLecture: 5 },
    { lectureCompleted: 4, totalLecture: 6 },
    { lectureCompleted: 4, totalLecture: 4 },
    { lectureCompleted: 5, totalLecture: 3 },
    { lectureCompleted: 6, totalLecture: 7 },
    { lectureCompleted: 2, totalLecture: 8 },
    { lectureCompleted: 4, totalLecture: 6 },
    { lectureCompleted: 3, totalLecture: 10 },
    { lectureCompleted: 7, totalLecture: 7 },
    { lectureCompleted: 1, totalLecture: 4 },
    { lectureCompleted: 0, totalLecture: 2 },
    { lectureCompleted: 5, totalLecture: 5 },
  ]);
  if (loading) return <Loading />;
  if (error) return <h1>Error {error} </h1>;
  return (
    <section>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-xl md:text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10 border-purple-700">
          <thead className="text-gray-900 border-b border-purple-700 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold">Course</th>
              <th className="px-4 py-3 font-semibold">Duration</th>
              <th className="px-4 py-3 font-semibold">Completed</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {!loading &&
              enrolledCourses.map((course, index) => (
                <tr
                  className="border-b border-purple-800/20 even:bg-gray-100"
                  key={index}
                >
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                    <img
                      className="w-14 sm:w-24 md:w-28"
                      src={course?.courseThumbnail}
                      alt=""
                    />
                    <div className="flex-1 ">
                      <p className="mb-1 max-sm:text-sm">
                        {course?.courseTitle}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 max-sm:hidden">
                    {calculateCourseDuration(course)}
                  </td>
                  <td className="px-4 py-3 max-sm:hidden">
                    {progressArray[index] &&
                      `${progressArray[index].lectureCompleted}/${progressArray[index].totalLecture}`}
                    <span> lectures</span>{" "}
                  </td>
                  <td className="max-sm:text-right px-4 py-3">
                    <button
                      onClick={() => {
                        navigate("/player/" + course?._id);
                      }}
                      className="px-3 sm:px-5 py-1.5 sm:py-2 bg-purple-950 text-white max-sm:text-xs cursor-pointer hover:bg-purple-800 rounded"
                    >
                      {progressArray[index] &&
                      progressArray[index].lectureCompleted /
                        progressArray[index].totalLecture ==
                        1
                        ? "Completed 👌"
                        : "On Going"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyEnrollments;
