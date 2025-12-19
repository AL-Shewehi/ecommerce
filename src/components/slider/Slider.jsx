import React from "react";
import "./slider.css";

import Slider1 from "../../assets/Slider1.png";
import Slider2 from "../../assets/Slider2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <div className="main-slider" style={{ marginTop: "20px" }}>
      <div className="container">
        <Swiper
          style={{ borderRadius: "20px" }}
          modules={[Navigation, Pagination, Autoplay]} // <-- مهم
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: true }}
        >
          <SwiperSlide>
            <img src={Slider1} alt="Slide 1" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Slider2} alt="Slide 2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
