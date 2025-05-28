import Marquee from "react-fast-marquee";


import { assets } from "../../assets/assets";
function Companies() {
  return (
    <section className="my-10 md:my-16">
      <div className="top-heading">
        <h2 className="text-center text-xl md:text-3xl font-semibold">
          Empowering Learners from the World’s Leading Companies
        </h2>
        <div className="divider divider-primary w-1/4 mx-auto"></div>
      </div>
      <Marquee speed={50} gradient={false}>
        <div className="bottom-area flex overflow-hidden gap-6 items-center justify-center md:gap-16 md:mt-10 mt-5">
          <img
            className="w-36 cursor-pointer "
            src={assets.microsoft_logo}
            alt="microsoft logo"
          />
          <img
            className="w-36 cursor-pointer "
            src={assets.walmart_logo}
            alt="walmart logo"
          />
          <img
            className="w-36 cursor-pointer "
            src={assets.adobe_logo}
            alt="adobe logo"
          />
          <img
            className="w-36 cursor-pointer "
            src={assets.coursera_logo}
            alt="google logo"
          />
          <img
            className="w-36 cursor-pointer "
            src={assets.facebook_Logo}
            alt="facebook logo"
          />
          <img
            className="w-36 cursor-pointer "
            src={assets.udemy_logo}
            alt="udemy logo"
          />
          <img
            className="w-36 cursor-pointer mr-10"
            src={assets.paypal_logo}
            alt="paypal logo"
          />
        </div>
      </Marquee>
    </section>
  );
}

export default Companies;
