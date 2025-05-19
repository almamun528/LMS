
import websiteLogo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../ReduxAPI/Auth/authSlice";
import useUser from "../../hook/useUser";

const Navbar = () => {
  const user = useUser();
  const dispatch = useDispatch();
const navigate = useNavigate()
  const handleLogOutUser = () => {
    console.log("user is logout successful");
    dispatch(logOutUser());
  };
  // become educator
  const isEducator= true

  const handleEducator = () => {
    console.log("Become a tutor");
    navigate('/educator')
  };

  return (
    <section className="sticky top-0 z-50">
      <div className="navbar bg-gray-100 shadow-sm">
        <div className="flex-1">
          <Link to="/">
            <img className="w-24 cursor-pointer" src={websiteLogo} alt="Logo" />
          </Link>
        </div>

        {user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] w-52 p-2 shadow bg-base-100 rounded-box"
              >
                <li className="lg:hidden">
                  <button onClick={handleEducator}>
                    {isEducator ? "Educator DashBoard" : "Become Educator"}
                  </button>
                </li>
                <li className="lg:hidden">
                  <Link to="/my-enrollments">My Enrollments</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="text-sm text-gray-500 px-4">
                  Email: {user?.email}
                </li>
                <li>
                  <button onClick={handleLogOutUser}>Logout</button>
                </li>
              </ul>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <button onClick={handleEducator}>
                {isEducator ? "Educator DashBoard" : "Become Educator"}
              </button>
              <Link to="/my-enrollments" className="mx-2 hover:text-purple-800">
                My Enrollments
              </Link>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="cursor-pointer mr-4 rounded hover:bg-purple-900 bg-purple-950 text-white px-6 py-3"
          >
            Login
          </Link>
        )}
      </div>
    </section>
  );
};

export default Navbar;
