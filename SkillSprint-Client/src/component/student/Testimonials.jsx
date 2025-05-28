import { assets, dummyTestimonial } from "../../assets/assets";

const Testimonials = () => {
  return (
    <section className="mt-20">
      <div className="top-area text-center mb-5">
        <h2 className=" my-5 text-purple-950 text-xl md:text-3xl font-semibold">
          Meet the Minds Behind Espial
        </h2>
        <p className="md:w-8/12 mx-auto text-gray-500">
          At Espial, our team is made up of passionate educators, industry
          experts, and tech innovators committed to helping you succeed. With
          years of experience and a shared vision for accessible, high-quality
          education, we work together to bring you the best learning experience
          possible.
        </p>
      </div>
      {/* Testimonial Data */}
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6  mx-auto">
        {dummyTestimonial.map((testimonial, idx) => (
          <div
            key={idx}
            className="relative bg-gray-50 text-center border border-purple-800 p-6 rounded-md shadow-md group"
          >
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-purple-800 "></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-purple-800"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-purple-800"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-purple-800"></div>

            <img
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              src={testimonial?.image}
              alt={testimonial?.name}
            />
            <h2 className="text-lg font-semibold">{testimonial?.name}</h2>
            <h6 className="text-sm text-gray-500 mb-2">{testimonial?.role}</h6>
            <p className="text-left mt-6"> {testimonial.about}</p>

            <div className="flex justify-center my-6 gap-3 cursor-pointer">
              <img className="h-6 w-6" src={assets.linkedin} alt="linkedin" />
              <img className="h-6 w-6" src={assets.facebook} alt="facebook" />
              <img className="h-6 w-6" src={assets.twitter} alt="twitter" />
              <img className="h-6 w-6" src={assets.instagram} alt="instagram" />
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Testimonials;
