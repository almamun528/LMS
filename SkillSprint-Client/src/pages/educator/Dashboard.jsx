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
               $  {dashboardData?.totalEarnings}
              </p>
              <p className="text-base text-gray-500"> Total Earnings</p>
            </div>
          </div>
          {/* 3rd cols ends */}
        </div>
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default Dashboard;
