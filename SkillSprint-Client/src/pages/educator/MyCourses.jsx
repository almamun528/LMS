import Loading from "../../component/student/Loading";
import useCourses from "../../hook/useCourses";

const MyCourses = () => {
  const { courses, loading, error } = useCourses();
  // console.log(courses)

  return courses ? (
    <section className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Course</h2>
        {/*---------------------- table area start from here ---------------------- */}
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-purple-900/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-purple-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">
                  All Courses
                </th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">
                  Published On
                </th>
              </tr>
            </thead>
            {/* table body */}
            <tbody className="text-sm text-gray-500">
              {courses?.map((course) => {
                return (
                  <tr key={course?._id} className="border-b border-purple-900">
                    <td className="md:px-4 pl-2 md:pl-4 py-4 flex items-center space-x-3 truncate">
                      <img
                        src={course?.courseThumbnail}
                        alt="Course-Image"
                        className="w-16"
                      />
                      <span className="truncate hidden md:block">{course?.courseTitle}</span>
                    </td>
                    <td className="px-4 py-3"> $  {Math.floor(course?.enrolledStudents.length *(course?.coursePrice - course?.discount * course?.coursePrice /100))}</td>
                    <td className="px-4 py-3">{course?.enrolledStudents.length}</td>
                    <td className="px-4 py-3">
                      {new Date(course?.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default MyCourses;
