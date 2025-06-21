import React from "react";
import { assets } from "../../assets/assets";

const Trophy = () => {
  return (
    <section className="bg-[#F0F0F0] py-4 my-10">
      <main className="flex justify-around my-10">
        <div>
          <img className="md:w-52 w-20  mx-auto" src={assets.trophy_1} alt="" />
          <h2 className="text-center font-bold my-1 text-[12px] md:text-2xl">
            Editors Choice
          </h2>
          <p className="text-center">2010-2016</p>
        </div>
        <div>
          <img className="md:w-52 w-20 mx-auto" src={assets.trophy_2} alt="" />
          <h2 className="text-center font-bold my-1 text-xl text-[12px] md:text-2xl">
            Best Trainer
          </h2>
          <p className="text-center">2010-2016</p>
        </div>
        <div>
          <img className="md:w-52 w-20 mx-auto" src={assets.trophy_3} alt="" />
          <h2 className="text-center font-bold my-1 text-xl text-[12px] md:text-2xl">
            Best Performance
          </h2>
          <p className="text-center">2010-2025</p>
        </div>
      </main>
    </section>
  );
};

export default Trophy;
