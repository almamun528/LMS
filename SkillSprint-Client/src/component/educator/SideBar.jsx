import React from "react";
import { assets } from "../../assets/assets";

import { NavLink } from "react-router-dom";
import useIsEducator from "../../hook/useIsEducator";

const SideBar = () => {
  const { isEducator, loading } = useIsEducator();
  const menuItem = [
    { name: "Dashboard", path: "/educator", icon: assets.home_icon, id: 1 },
    {
      name: "Add Course",
      path: "/educator/add-course",
      icon: assets.add_icon,
      id: 2,
    },
    {
      name: "My Course",
      path: "/educator/my-courses",
      icon: assets.my_course_icon,
      id: 3,
    },
    {
      name: "Student Enrolled",
      path: "/educator/student-enrolled",
      icon: assets.person_tick_icon,
      id: 4,
    },
  ];
  if (loading) return <p>Loading....</p>;

  return (
    !loading &&
    isEducator && (
      <section className="md:w-64 w-16 border-r min-h-screen text-base border-purple-950 py-2 flex flex-col">
        {menuItem?.map((item) => {
          return (
            <NavLink
              to={item?.path}
              end={item?.path === "/educator"}
              key={item?.id}
              className={({ isActive }) =>
                `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 ${
                  isActive
                    ? "border-b  border-purple-900 text-purple-700 font-semibold"
                    : ""
                }`
              }
            >
              <img src={item?.icon} alt="icon" className="w-6 h-6" />
              <p className="md:block hidden text-center">{item?.name}</p>
            </NavLink>
          );
        })}
      </section>
    )
  );
};

export default SideBar;
