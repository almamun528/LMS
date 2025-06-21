import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const GridSection = () => {
  return (
    <section className="">
      {/* top area */}
      <div className="md:flex flex-wrap md:flex-nowrap">
        <div className="first-column p-2 md:p-0">
          <h2 className="text-xl md:text-3xl py-2">Free Instruction</h2>
          <p>
            We are providing free instruction to understand the basic concept of
            any perticular topic or skill
          </p>
        </div>
        <div className="secondColumn">
          <img src={assets.aboutUsImg_1} alt="" />
        </div>
        <div className="thirdColumn bg-purple-950 text-white p-2 md:p-0">
          <h2 className="text-xl md:text-3xl py-2">Extra Care</h2>
          <p>
            Hand holding support for premium course. Those who are not
            understand any topic, out instructor might help student by
            attempting google meet. live support for premium course students.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <br />
  
      <div className="divider divider-primary"></div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="firstColumn md:col-span-3">
          <img src={assets.aboutUsImg_2} alt="" />
        </div>
        <div className="secondColumn p-2  md:col-span-3">
          <h2 className="text-xl md:text-3xl py-2">Future Vision</h2>
          <p>
            We are hiring global talent, maximum instructors are from prominent
            company example google, meta, uber, microsoft etc. these talent will
            teach you to make you global talent. You might be a good skill full
            person and above average skilled person.
          </p>
        </div>
        <div className="thirdColumn md:col-span-6">
          <img src={assets.aboutUsImg_3} alt="" />
        </div>
        <div className="md:-mt-[215px] bottomContent text-white bg-purple-700 p-2 md:col-span-6 md:row-start-3">
          <h2 className="text-xl md:text-3xl py-2">Varied Bogs You can Read</h2>
          <p>
            We are published blogs about skills. By reading those blogs you
            might can understand which skill is fit for you today and which
            skill is heigh demand. Do not jump and be over-excited to buy any
            course. Before you buy any course you might have to read about them
            and also you need to understand the environment of that course.
          </p>
          <Link
            to="/blog"
            className="btn bg-purple-950 outline-none border-none px-10 py-5 text-white my-2"
          >
            Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
