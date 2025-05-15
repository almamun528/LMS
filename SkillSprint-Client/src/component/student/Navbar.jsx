import React from "react";
import websiteLogo from "../../assets/logo.png";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../ReduxAPI/Auth/authSlice";
import useUser from "../../hook/useUser";

const Navbar = () => {
  const user = useUser(); //user from custom hook
  // logout function call from RTK
  const dispatch = useDispatch();
  const handleLogOutUser = () => {
    console.log("user is logout successful");
    dispatch(logOutUser());
  };
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
        {/* If user is exist render Right menu items */}
        {user && (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div className="dropdown dropdown-end">
                <button className="mx-2 hidden lg:inline-block">Become Tutor</button>
                <Link
                  to="/my-enrollments"
                  className="mx-2 hover:text-purple-800 hidden md:inline-block"
                >
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
                  <button className="mx-2 lg:hidden ">Become Tutor</button>
                  <Link
                    to="/my-enrollments"
                    className="mx-2 hover:text-purple-800 lg:hidden "
                  >
                    My Enrollments
                  </Link>
                  <li>Profile</li>
                  {user && <li>email: {user?.email} </li>}

                  <button className="cursor-pointer" onClick={handleLogOutUser}>
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* if user is not exist render Login Button */}
        {!user && (
          <Link
            className="cursor-pointer mr-4 rounded hover:bg-purple-900 bg-purple-950 text-white px-6 py-3"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </section>
  );
};

export default Navbar;
