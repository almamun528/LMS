import React, { useEffect, useState } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../component/student/Loading";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState();

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <section className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md;pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 items-center">
          {/* 1st col start */}
          <div className="flex items-center gap-3 shadow-2xl border border-purple-900 p-4 w-56 rounded-md">
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData?.enrolledStudentsData.length}
              </p>
              <p className="text-base text-gray-500"> Enrollments</p>
            </div>
          </div>
          {/* 1st col end */}
          {/* 2st col start */}
          <div className="flex items-center gap-3 shadow-2xl border border-purple-900 p-4 w-56 rounded-md">
            <img src={assets.appointments_icon} alt="appointments_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData?.totalCourses}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>
          {/* 2nd col ends */}
          {/* 3nd col start */}
          <div className="flex items-center gap-3 shadow-2xl border border-purple-900 p-4 w-56 rounded-md">
            <img src={assets.earning_icon} alt="patients_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                $ {dashboardData?.totalEarnings}
              </p>
              <p className="text-base text-gray-500"> Total Earnings</p>
            </div>
          </div>
          {/* 3rd cols ends */}
        </div>
        {/* info */}
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border-purple-950">
            <table className="w-full table-fixed md:table-auto overflow-hidden">
              <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                <tr>
                  <th className="px-4 py-2 font-semibold text-center hidden sm:table-cell w-12">
                    #
                  </th>
                  <th className="px-4 py-2 font-semibold text-left hidden sm:table-cell w-60">
                    Student Name
                  </th>
                  <th className="px-4 py-2 font-semibold text-left hidden sm:table-cell">
                    Course Title
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {dashboardData?.enrolledStudentsData?.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    {/* Index */}
                    <td className="px-4 py-3 hidden sm:table-cell text-center">
                      {idx + 1}
                    </td>

                    {/* Student Info */}
                    <td className="px-4 py-3 flex items-center gap-3">
                      <img
                        src={item.student.imageUrl}
                        alt="profile"
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <span className="truncate max-w-[150px] sm:max-w-none">
                        {item.student.name}
                      </span>
                    </td>

                    {/* Course Title */}
                    <td className="px-4 py-3 truncate max-w-[180px] sm:max-w-none">
                      {item?.courseTitle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default Dashboard;
