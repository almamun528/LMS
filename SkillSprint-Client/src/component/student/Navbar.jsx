import React from "react";
import websiteLogo from "../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  // const isCourseListPage = location.pathname.includes("/course-list");
  return (
    <section className="sticky top-0 z-50 ">
      <div className=" navbar bg-gray-100 shadow-sm ">
        <div className="flex-1">
          <Link to="/">
            {" "}
            <img className="w-24 cursor-pointer" src={websiteLogo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="dropdown dropdown-end">
              <button className="mx-2">Become Tutor</button>
              <Link to="/my-enrollments" className="mx-2 hover:text-purple-800">
                My Enrollments
              </Link>
              <div
                tabIndex={0}
                type="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>Profile</li>

                <li>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
