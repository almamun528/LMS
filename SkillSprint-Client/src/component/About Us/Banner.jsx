import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${assets.AboutUsBanner})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl md:pt-10 md:text-2xl font-bold">
              About Skill Sprint{" "}
            </h1>
            <p className="mb-5">
              Skill Sprint is a modern learning platform designed to empower
              students and professionals with in-demand skills. Inspired by
              platforms like Udemy and Coursera
            </p>

            <Link to="/course-list" className="btn btn-primary bg-purple-800 md:mb-10">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
