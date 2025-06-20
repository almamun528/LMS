import useUser from "../../hook/useUser";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { assets, dummyEducatorData } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../ReduxAPI/Auth/authSlice";

function MenuNav() {
  const user = useUser();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser()); //call the logout function
  };
  const educatorData = dummyEducatorData;

  const menuItems = (
    <>
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
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/">
          <img src={Logo} alt="" className="md:h-24 " />
        </Link>
      </div>
      <div className="flex gap-2">
        <div>
          <h2 className="mt-2">Hi! {user?.user?.email} </h2>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={assets.user_icon} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuNav;
