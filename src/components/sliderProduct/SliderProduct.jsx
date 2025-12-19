import React from "react";
import "./sliderProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function SliderProduct({
  title,
  data = [],
  slidesPerView,
  CardComponent,
  pagination,
  navigation = true,
  breakpoints = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
  },
}) {
  return (
    <div style={{ marginTop: "30px" }}>
      <div className="container">
        <div className="top_slide d-flex align-items-center justify-content-between">
          <h5>{title}</h5>
          <Link to="/products/all">
            View All
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </div>
        <div className="products my-4">
          <Swiper
            style={{ borderRadius: "20px" }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            navigation={navigation}
            pagination={pagination}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            breakpoints={breakpoints}
            centerInsufficientSlides={true}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <CardComponent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SliderProduct;
