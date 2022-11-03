import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ProjectsSwiper = () => {
  return (
    <div className="ProjectsSwiper">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
      >
        <SwiperSlide style={{ color: "black" }}>
          React project todo-list
        </SwiperSlide>
        <SwiperSlide style={{ color: "black" }}>Terrabit</SwiperSlide>
        <SwiperSlide style={{ color: "black" }}>M-Social</SwiperSlide>
        <SwiperSlide style={{ color: "black" }}>MetaLamp</SwiperSlide>
      </Swiper>
    </div>
  );
};

export { ProjectsSwiper };
