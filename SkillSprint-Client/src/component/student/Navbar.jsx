import Logo from "../../assets/logo.png";
import { Link, useMatch, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import useUser from "../../hook/useUser";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../ReduxAPI/Auth/authSlice";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const isLoginRoute = useMatch("/login");
  const navigate = useNavigate();
  const { user, isEducator } = useUser(); //get the user from hook
  const isCourseListPage = useMatch("/course-list/*");
  // dispatch (send action redux store to call the log-out function to make current user null )
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser()); //call the logout function
    navigate("/");
  };
  // taking name of user's from email.
  const userEmail = user?.email;
  const atIndex = userEmail?.indexOf("@");
  const nameBeforeAt = userEmail?.slice(0, atIndex);
  const MenuItems = (
    <>
      {user && (
        <p className="my-2 text-purple-900 capitalize">Hi! {nameBeforeAt} </p>
      )}
      {user && (
        <button className="text-left  hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold">
          Profile
        </button>
      )}
      {user && !isEducator && (
        <Link
          to="/my-enrollments"
          className="text-left  hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold"
        >
          My Enrollment
        </Link>
      )}
      <Link
        to="/course-list"
        className="text-left  hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold"
      >
        Course List
      </Link>
      {user && (
        <button
          onClick={() => navigate("/educator")}
          className="text-left  hover:bg-purple-950 hover:text-white text-purple-800 hover:cursor-pointer p-1 font-bold"
        >
          {isEducator ? "Educator Dashboard" : "Become Educator"}
        </button>
      )}
      {/* logout button 👇 */}
      {user ? (
        <button
          onClick={() => handleLogout()}
          className="text-left hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold"
        >
          Log Out
        </button>
      ) : (
        <Link
          className={` ${isLoginRoute ? "hidden" : "block"}
            text-left  hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold`}
          to="/login"
        >
          Login
        </Link>
      )}
      <Link
        className={` ${isLoginRoute ? "" : "hidden"} ${user ? "hidden" : ""}
            text-left  hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold`}
        to="/sign-up"
      >
        Sign Up
      </Link>
    </>
  );

  return (
    <section className="sticky top-0 w-full z-50">
      <div className={`navbar bg-base-100 shadow-sm`}>
        <div className="flex-2 md:flex-1">
          <Link to="/">
            {" "}
            <img
              className="SkillSpritLogo  md:h-24 hover:cursor-pointer"
              src={Logo}
              alt="website logo"
            />
          </Link>
        </div>

        <div className="flex gap-2">
          <span className={`${isCourseListPage ? "md:hidden " : ""}`}>
            <SearchBar />
          </span>
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              // role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={assets.user_icon2}
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {MenuItems}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
