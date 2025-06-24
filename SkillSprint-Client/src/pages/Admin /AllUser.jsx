import { useEffect, useState } from "react";
import axiosInstance from "../../AxiosApi/axiosInstance";
import Footer from "../../component/Footer/Footer";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [allUser, setAllUser] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get("/api/users");
      setAllUser(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //! Call backend APi to update user's status User to Teacher
  const handleUserRoleStatus = async (userId) => {
    try {
      const res = await axiosInstance.patch(`/api/users/${userId}`, {
        role: "teacher",
      });
      if (res?.data?.role == "teacher") {
        await fetchUsers();
      }
      console.log("User role updated:", res.data);
    } catch (error) {
      console.error("Failed to update role:", error);
    }
    console.log(userId);
  };

  return (
    <section className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <h2 className="text-center capitalize font-semibold md:font-bold pt-1 ">
          all users into your website
        </h2>
        <div className="divider w-1/5 mx-auto p-0"></div>

        {/* user area */}
        {allUser?.length > 0 ? (
          <main>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Make Teacher</th>
                  </tr>
                </thead>
                {allUser?.map((user, idx) => (
                  <tbody key={user?._id}>
                    <tr>
                      <th>{idx + 1}</th>

                      <td className="underline hover:cursor-pointer">
                        <Link to={`/user-profile/${user?._id}`}>
                          {user?.name}
                        </Link>
                      </td>

                      <td>{user?.email}</td>
                      <td
                        className={`${
                          user?.role == "teacher"
                            ? "text-purple-800 font-semibold capitalize"
                            : ""
                        }  `}
                      >
                        {user?.role || "User"}
                      </td>
                      <td>
                        <button
                          onClick={() => handleUserRoleStatus(user?._id)}
                          className={`btn btn-xs ${
                            user?.role == "teacher"
                              ? "bg-purple-900 text-white"
                              : ""
                          }`}
                          disabled={
                            user?.role == "teacher" || user?.role == "admin"
                          }
                        >
                          Make Teacher
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </main>
        ) : (
          <p className="text-center md:text-2xl mt-2 text-green-700 text-xl">
            Currently No User Is Found
          </p>
        )}
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </section>
  );
};

export default AllUser;
