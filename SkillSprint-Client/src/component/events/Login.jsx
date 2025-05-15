import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../ReduxAPI/Auth/authSlice.js";
import Swal from "sweetalert2";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }))
      .unwrap()
      .then((result) => {
        if (result) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Welcome Back ${result?.email}`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.code === "auth/invalid-credential") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The provided credentials are invalid",
          });
        }
      });
  };
  return (
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Log in to your account to access your dashboard, manage your
              profile, and stay connected with your community.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <div>
                  <p className="link link-hover">Forgot password?</p>
                </div>

                <button
                  type="submit"
                  className="btn btn-neutral mt-4 bg-purple-950 hover:bg-purple-900"
                >
                  Login
                </button>
              </fieldset>
            </form>
            <p className="text-center p-2">
              New here? open account{" "}
              <Link className="text-purple-950 underline" to="/sign-up">
                Sign-up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
