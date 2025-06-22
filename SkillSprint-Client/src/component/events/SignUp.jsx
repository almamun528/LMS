import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../ReduxAPI/Auth/authSlice";
import Swal from "sweetalert2";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import axiosInstance from "../../AxiosApi/axiosInstance";

function SignUp() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser({ email: data.email, password: data.password }))
      .unwrap()
      .then(async (result) => {
        console.log(
          "Result is--- ",
          result,
          " users email---> ",
          result?.email,
          " uid---> ",
          result?.uid
        );
        if (result) {
          //! Call Express Backend APis to save user's info
          try {
            await axiosInstance.post("/api/users", {
              uid: result.uid, // ✅ required for _id
              email: result.email,
              name: data.name || "Anonymous",
            });

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${result?.email} is registered`,
              showConfirmButton: false,
              timer: 1500,
            });

            navigate("/");
          } catch (err) {
            console.error("Backend save error:", err.message);
            alert("Failed to save user to backend");
          }
        }
      })
      .catch((err) => {
        if (err.code == "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Registration failed",
            text: "This email is already used",
          });
          console.log("Registration failed", err.message);
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration failed",
            text: `${err?.message}`,
          });
        }
      });
  };

  return (
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              Join us today and get access to exclusive features, personalized
              content, and a vibrant community. Creating an account is quick and
              easy.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}

                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">Enter a valid email</span>
                )}
                {/*============================== password div Starts ================================= */}
                <label className="label">Password</label>

                <div className="relative">
                  <input
                    type={show ? "Password" : "text"}
                    className="input pr-10 :" // Add right padding for the icon
                    placeholder="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      maxLength: {
                        value: 15,
                        message: "Password must be under 15 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$!%*?&]+$/,
                        message:
                          "Password must include at least one uppercase letter and one number",
                      },
                    })}
                  />
                  <button onClick={() => setShow(!show)}>
                    {show ? (
                      <FaRegEyeSlash
                        className={`absolute top-5 z-10 right-6 -translate-y-1/2 text-purple-950 text-3xl cursor-pointer`}
                      />
                    ) : (
                      <IoIosEye className="absolute top-5 z-10 right-6  -translate-y-1/2 text-purple-950 text-3xl cursor-pointer" />
                    )}
                  </button>

                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                {/*============================== password div end================================= */}
                {/*  */}
                <button
                  type="submit"
                  className="btn btn-neutral bg-purple-950 hover:bg-purple-900 mt-4"
                >
                  Sign up
                </button>
              </fieldset>
            </form>
            <p className="text-center p-2">
              Already have account ?
              <Link className="text-purple-950 mx-1 underline" to="/login">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
