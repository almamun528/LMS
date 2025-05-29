import React from "react";

import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Copyright from "./Copyright";
function Footer() {
  return (
    <>
      <section
        className=" border-purple-900 flex items-center justify-between px-10 py-10 bg-gray-50 border-b">
        <div className="left-side">
          <img className="" src={Logo} alt="" />
          <p>
            We believe in practical knowledge . Our slogan is{" "}
            <span className="text-purple-800">learning by doing</span>
          </p>{" "}
          we are always help student to understand every topic with real life
          example.
        </div>
        <div>
          <h2 className="font-bold">Important Links</h2>
          <ul>
            <li>
              <Link className="hover:text-purple-700">Home</Link>
            </li>
            <li>
              <Link className="hover:text-purple-700">Course List</Link>
            </li>
            <li>
              <Link className="hover:text-purple-700">About Us</Link>
            </li>
            <li>
              <Link to={"/login"} className="hover:text-purple-700">
                Login
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-700">Become a Educator</Link>
            </li>
          </ul>
        </div>
        {/* 3rd sections */}
        <div className="">
          <div className="flex  my-6 gap-3 cursor-pointer">
            <img className="h-6 w-6" src={assets.linkedin} alt="linkedin" />
            <img className="h-6 w-6" src={assets.facebook} alt="facebook" />
            <img className="h-6 w-6" src={assets.twitter} alt="twitter" />
            <img className="h-6 w-6" src={assets.instagram} alt="instagram" />
          </div>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
      <Copyright />
    </>
  );
}

export default Footer;
