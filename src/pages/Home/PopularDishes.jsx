import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import dish1 from "../../assets/dish/dish-1.jpg";
import dish2 from "../../assets/dish/dish-2.jpg";
import dish3 from "../../assets/dish/dish-3.jpg";

const PopularDishes = () => {
  return (
    <div className="mb-32">
      <h2 className="section-header">Most Popular Dishes</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
      </Swiper>
    </div>
  );
};

export default PopularDishes;
