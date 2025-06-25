import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Copyright from "./Copyright";
import useUser from "../../hook/useUser";

function Footer() {
  const { user } = useUser();

  return (
    <>
      <section className="border-purple-900 px-6 py-10 bg-gray-50 border-b">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Side */}
          <div className="md:w-1/3">
            <Link to={"/"} onClick={() => scrollTo(0, 0)}>
              <img src={Logo} alt="Logo" className="mb-4" />
            </Link>
            <p>
              We believe in practical knowledge. Our slogan is{" "}
              <span className="text-purple-800">learning by doing</span>.
            </p>
            <p>
              We always help students understand every topic with real-life
              examples.
            </p>
          </div>

          {/* Important Links */}
          <div className="md:w-1/3">
            <h2 className="font-bold mb-2">Important Links</h2>
            <ul className="space-y-1">
              <li>
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to="/"
                  className="hover:text-purple-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to="/course-list"
                  className="hover:text-purple-700"
                >
                  Course List
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to="/about"
                  className="hover:text-purple-700"
                >
                  About Us
                </Link>
              </li>
              {!user && (
                <li>
                  <Link
                    onClick={() => scrollTo(0, 0)}
                    to="/login"
                    className="hover:text-purple-700"
                  >
                    Login
                  </Link>
                </li>
              )}
              <li>
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to="/blog"
                  className="hover:text-purple-700"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="md:w-1/3">
            <div className="flex gap-4 mb-6">
              <img
                className="h-6 w-6 hover:cursor-pointer "
                src={assets.linkedin}
                alt="linkedin"
              />
              <img
                className="h-6 w-6 hover:cursor-pointer "
                src={assets.facebook}
                alt="facebook"
              />
              <img
                className="h-6 w-6 hover:cursor-pointer "
                src={assets.twitter}
                alt="twitter"
              />
              <img
                className="h-6 w-6 hover:cursor-pointer "
                src={assets.instagram}
                alt="instagram"
              />
            </div>
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="w-full">
                <label className="block mb-2">Enter your email address</label>
                <div className="join w-full">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full join-item"
                  />
                  <button className="btn btn-primary join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <Copyright />
    </>
  );
}

export default Footer;
