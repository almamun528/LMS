import Logo from "../../assets/logo.png";
import { Link, useMatch, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import useUser from "../../hook/useUser";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../ReduxAPI/Auth/authSlice";

const Navbar = () => {
  const isLoginRoute = useMatch("/login");
  const navigate = useNavigate();
  const { user, isEducator } = useUser(); //get the user from hook

  // dispatch (send action redux store to call the log-out function to make current user null )
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser()); //call the logout function
  };

  const MenuItems = (
    <>
      {user && <p className="my-2 text-purple-900">Hi! {user?.email} </p>}
      {user && (
        <button className="text-left cursor-pointer hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold">
          Profile
        </button>
      )}
      {user && !isEducator && (
        <Link
          to="/my-enrollments"
          className="text-left cursor-pointer hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold"
        >
          My Enrollment
        </Link>
      )}
      <Link
        to="/course-list"
        className="text-left cursor-pointer hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold"
      >
        Course List
      </Link>
      {user && (
        <button
          onClick={() => navigate("/educator")}
          className="text-left cursor-pointer hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold"
        >
          {isEducator ? "Educator Dashboard" : "Become Educator"}
        </button>
      )}
      {/* logout button 👇 */}
      {user ? (
        <button
          onClick={() => handleLogout()}
          className="text-left cursor-pointer hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold"
        >
          Log Out
        </button>
      ) : (
        <Link
          className={` ${isLoginRoute ? "hidden" : "block"}
            text-left cursor-pointer hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold`}
          to="/login"
        >
          Login
        </Link>
      )}
      <Link
        className={` ${isLoginRoute ? "" : "hidden"} ${user ? "hidden" : ""}
            text-left cursor-pointer hover:bg-purple-950 hover:text-white hover:cursor-pointer p-1 font-semibold`}
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
              className="SkillSpritLogo  md:h-24 cursor-pointer"
              src={Logo}
              alt="website logo"
            />
          </Link>
        </div>

        <div className="flex gap-2">
          <SearchBar />
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              // role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
