import React from "react";
import { assets } from "../../assets/assets";

const EduGuide = () => {
  return (
    <section>
      <main className="flex items-center justify-between gap-4 my-10 flex-wrap md:flex-nowrap">
        <div className="firstColumn text-center">
          <img className="w-50 mx-auto" src={assets.laptopIcon} alt="" />
          <h2 className="text-lg md:text-xl my-1">
            Learn The Essential Skills
          </h2>
          <p>Like Graphics design, business analytics, coding and much more.</p>
        </div>

        <div className="secondColumn text-center">
          <img className="w-50 mx-auto" src={assets.badgeIcon} alt="" />
          <h2 className="text-lg md:text-xl my-1">
            Earn Certificates And Degrees
          </h2>
          <p>
            From top institutions and universities with high reputation over the
            world
          </p>
        </div>

        <div className="thirdColumn text-center">
          <img className="w-50 mx-auto" src={assets.internetIcon} alt="" />
          <h2 className="text-lg md:text-xl my-1">
            Get Ready for The Next Career{" "}
          </h2>
          <p>
            With high demands in mastering new skills in IT, analytics and more
          </p>
        </div>

        <div className="fourthColumn text-center">
          <img className="w-50 mx-auto" src={assets.studentIcon} alt="" />
          <h2 className="text-lg md:text-xl my-1">Master at Different Areas</h2>
          <p>With EduMall's thousands of courses instructed by top experts</p>
        </div>
      </main>
    </section>
  );
};

export default EduGuide;
