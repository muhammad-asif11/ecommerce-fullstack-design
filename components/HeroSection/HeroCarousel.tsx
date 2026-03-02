"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slides } from "../utills/const";
import Button from "../share/Button";

const HeroCarousel = () => {
  return (
    <div className="w-full bg-black text-white rounded-md px-4 sm:px-6 lg:px-10 py-8">
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
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col place-items-start gap-4">
                <div className="flex items-center place-items-center gap-4">
                  <img
                    src={slide.imag}
                    alt="Iphone"
                    className="w-8 xl:w-10 object-cover"
                  />
                  {/* <NextImage src={slide.imag} alt="Iphone" /> */}
                  <p className="text-sm lg:text-base text-gray-300">
                    {slide.subtitle}
                  </p>
                </div>
                <p className="flex gap-1 md:flex-col xl:text-6xl sm:text-2xl text-lg md:text-2xl font-semibold leading-snug">
                  {slide.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <Button
                  title="Shop Now"
                  icon="rightArrow"
                  style="mt-4 underline flex flex-row-reverse place-items-center lg:justify-start gap-2 text-sm sm:text-base"
                />
              </div>
              <img
                src={slide.image}
                alt="Iphone"
                className="w-70 lg:w-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
