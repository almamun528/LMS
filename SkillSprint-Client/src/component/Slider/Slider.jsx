import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider_image1 from "../../assets/SliderImages/1.jpg";
import slider_image2 from "../../assets/SliderImages/8.jpg";
import slider_image8 from "../../assets/SliderImages/2.jpg";
import slider_image3 from "../../assets/SliderImages/3.jpg";
import slider_image4 from "../../assets/SliderImages/4.jpg";
import slider_image5 from "../../assets/SliderImages/5.jpg";
import slider_image6 from "../../assets/SliderImages/6.jpg";
import slider_image7 from "../../assets/SliderImages/7.jpg";

const Slider = () => {
  return (
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
        // !into index.css left right arrow button hidden code  appears
      >
        <SwiperSlide><img className="md:h-[500px]  w-full " src={slider_image1} alt="" /> </SwiperSlide>
        <SwiperSlide><img className="md:h-[500px]  w-full " src={slider_image2} alt="" /> </SwiperSlide>
        <SwiperSlide><img className="md:h-[500px]  w-full " src={slider_image3} alt="" /> </SwiperSlide>
        <SwiperSlide><img className="md:h-[500px]  w-full " src={slider_image4} alt="" /> </SwiperSlide>
        <SwiperSlide><img className="md:h-[500px]  w-full " src={slider_image5} alt="" /> </SwiperSlide>
        <SwiperSlide><img className="md:h-[500px]  w-full " src={slider_image6} alt="" /> </SwiperSlide>
        <SwiperSlide><img className="md:h-[500px]  w-full " src={slider_image7} alt="" /> </SwiperSlide>
        <SwiperSlide><img className="md:h-[500px]  w-full " src={slider_image8} alt="" /> </SwiperSlide>

      
      </Swiper>
    </section>
  );
};

export default Slider;
