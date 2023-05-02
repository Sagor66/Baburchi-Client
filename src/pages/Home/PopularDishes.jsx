import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay"
import dish1 from "../../assets/dish/dish-1.jpg";
import dish2 from "../../assets/dish/dish-2.jpg";
import dish3 from "../../assets/dish/dish-3.jpg";

const PopularDishes = () => {
  return (
    <div className="mb-32">
      <h2 className="section-header">Most Popular Dishes</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 1500 }}
      >
        <SwiperSlide>
          <img className="rounded-md" src={dish1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={dish2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={dish3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={dish1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={dish3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={dish2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularDishes;
