import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { assets } from "../../assets/assets";
// import BannerImage1 from '../../assets/Digital_Marketing_Png'

const Slider = () => {
  return (
    <div>
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="md:h-[500px]  w-full"
              src={assets.Digital_Marketing_Png}
              alt=""
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-[500px]  w-full"
              src={assets.Online_course}
              alt="online course thumbnail"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-[500px]  w-full"
              src={assets.Stand_up_Png}
              alt="stand up for startup thumbnail"
            />{" "}
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Slider;
