import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const WhyChooseUs = () => {
  return (
    <section className=" md:my-20 bg-purple-700 my-10 text-white rounded-2xl p-6 flex flex-wrap justify-center gap-6">
      {/* Left Box */}
      <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col items-start justify-center p-6 border-2 border-white bg-purple-400 rounded-3xl">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <p className="my-3">
          Select what is best for your child <br /> from all course section
        </p>
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="animate-bounce mt-2 btn hover:bg-purple-950 hover:text-white border-purple-900 px-6 py-2 rounded"
        >
          Explore All Courses
        </Link>
      </div>

      {/* Right Boxes */}
      <div className="w-full md:w-[45%] lg:w-[20%] text-center">
        <img
          className="h-20 w-20 mx-auto"
          src={assets.creative_Brain}
          alt="Creative Thinking"
        />
        <h2 className="my-3 text-xl font-semibold">Creative Thinking</h2>
        <p>
          Let your children come up with <br /> unique and original solutions.
        </p>
      </div>

      <div className="w-full md:w-[45%] lg:w-[20%] text-center">
        <img
          className="h-20 w-20 mx-auto"
          src={assets.target}
          alt="Achieve Destiny"
        />
        <h2 className="my-3 text-xl font-semibold">Achieve Your Destiny</h2>
        <p>
          Get well-structured guidance <br /> from world-class engineers.
        </p>
      </div>

      <div className="w-full md:w-[45%] lg:w-[20%] text-center">
        <img
          className="h-20 w-20 mx-auto"
          src={assets.career_path}
          alt="Career Planning"
        />
        <h2 className="my-3 text-xl font-semibold">Career Planning</h2>
        <p>
          Plan your child’s career with <br /> expert counselors.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
