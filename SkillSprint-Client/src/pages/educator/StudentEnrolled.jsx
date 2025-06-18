import { useEffect, useState } from "react";
import { dummyStudentEnrolled } from "../../assets/assets";
import Loading from "../../component/student/Loading";

const StudentEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-purple-950">
        <table className="table-fixed md:table-auto w-full overflow-hidden pb-4">
          <thead className="text-gray-900 border-b border-purple-950 text-sm text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell w-12">
                #
              </th>
              <th className="px-4 py-3 font-semibold text-left w-60">
                Student Name
              </th>
              <th className="px-4 py-3 font-semibold text-left">
                Course Title
              </th>
              <th className="px-4 py-3 font-semibold text-left hidden sm:table-cell">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {enrolledStudents?.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-purple-200 hover:bg-gray-50"
              >
                {/* Index */}
                <td className="px-4 py-3 text-center hidden sm:table-cell">
                  {idx + 1}
                </td>

                {/* Student Info */}
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={item.student.imageUrl}
                    alt={item.student.name || "Student profile"}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <span className="truncate max-w-[160px]">
                    {item.student.name}
                  </span>
                </td>

                {/* Course Title */}
                <td className="px-4 py-3 truncate max-w-[200px]">
                  {item?.courseTitle}
                </td>

                {/* Date */}
                <td className="px-4 py-3 hidden sm:table-cell">
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentEnrolled;
