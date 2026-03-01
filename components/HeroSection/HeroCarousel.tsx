"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Icon } from "../share/Icon";
import { slides } from "../utills/const";

const HeroCarousel = () => {
  return (
    <div className="flex bg-black text-white p-10 rounded-md w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="w-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-between">
              <div className="max-w-[400px] grid gap-2">
                <div className="flex gap-4 place-items-center">
                  <img
                    src={slide.imag}  
                    alt="Iphone"
                    className="w-10 object-cover"
                  />
                  <p>{slide.subtitle}</p>
                </div>
                <p className="text-6xl font-semibold leading-snug">
                  {slide.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <button className="mt-6 underline flex gap-2 place-items-center">
                  Shop Now
                  <Icon name="arrow" size={24} />
                </button>
              </div>
              <img
                src={slide.image}
                alt="Iphone"
                className="w-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
