import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../AxiosApi/axiosInstance";

const UsersProfile = () => {
  const { userId } = useParams();
  console.log("user id---> ", userId);
  const [mongoDBUser, setMongoDBUser] = useState();

  const fetchSingleUser = async () => {
    try {
      const res = await axiosInstance.get(`/api/users/${userId}`);
      setMongoDBUser(res.data);
    } catch (error) {
      console.log("can not fetch user ", error);
    }
  };
  useEffect(() => {
    fetchSingleUser();
  }, [userId]);

  console.log(mongoDBUser);

  return (
    <section className="my-2">
      <main className="flex gap-2">
        <div className="left">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
            </div>
          </div>
        </div>
        <div className="right">
          <h1 className=" ">ID : {mongoDBUser?._id}</h1>
          <h6 className=" ">Email : {mongoDBUser?.email} </h6>
          <p className="  ">Role : {mongoDBUser?.role} </p>
          <p className=" ">
            Joined:{" "}
            {mongoDBUser?.createdAt &&
              new Date(mongoDBUser.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </p>
        </div>
      </main>

      {/* enrolled courses will shown here */}

      
    </section>
  );
};

export default UsersProfile;
