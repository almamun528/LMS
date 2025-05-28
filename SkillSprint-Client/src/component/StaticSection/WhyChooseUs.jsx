import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const WhyChooseUs = () => {
  return (
    <section className="bg-purple-700 my-10 text-white h-[300px] rounded-2xl p-3 flex gap-3 items-center justify-between px-10 flex-wrap">
      <div className="md:w-[360px] content py-10 flex flex-col items-start p-4 justify-center  border-2 border-white bg-purple-400 rounded-3xl">
        <h2 className="text-xl md:text-2xl font-bold">Why Choose Us?</h2>
        <p className="my-3">
          {" "}
          Select what is best for your child <br /> from all course section
        </p>
        <Link
          to={"/course-list"}
          onClick={() => scrollTo(0, 0)}
          className="animate-bounce mt-2  place-items-center btn  hover:bg-purple-950 hover:text-white border-purple-900 px-10 py-3 rounded"
        >
          Explore All Course
        </Link>
      </div>
      {/* second item */}
      <div className="text-center">
        <img
          className="h-20 w-20 mx-auto text-white"
          src={assets.creative_Brain}
          alt=""
        />
        <h2 className="my-3 text-xl md:text-2xl font-semibold">
          Creative thinking
        </h2>
        <p>
          Let your children come up with <br /> unique and original solution
        </p>
      </div>
      {/* third item */}
      <div className="text-center">
        <img
          className="h-20 w-20 mx-auto text-white"
          src={assets.target}
          alt=""
        />
        <h2 className="my-3 text-xl md:text-2xl font-semibold">
          Achieve Your Destiny
        </h2>
        <p className="text-center">
          Get well structured guideline with <br /> world class engineer and get your dream job.
        </p>
      </div>
      {/* 4th item */}
      <div className="text-center">
        <img
          className="h-20 w-20 mx-auto text-white"
          src={assets.career_path}
          alt=""
        />
        <h2 className="my-3 text-xl md:text-2xl font-semibold">
          Career Planing
        </h2>
        <p>
         Plan your children career with <br /> our expert counsellors.
        </p>
      </div>
     
    </section>
  );
};

export default WhyChooseUs;
