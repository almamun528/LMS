import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Name"
                />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div></div>
                <button className="btn btn-neutral bg-purple-950 hover:bg-purple-900 mt-4">
                  Sign up
                </button>
              </fieldset>
            </div>
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
