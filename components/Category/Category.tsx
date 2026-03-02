"use client";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Timed from "../Products/Timed";
import { CategoryLIST } from "../utills/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "../share/Icon";
import CarouselArrows from "../share/CarouselArrows";
import BorderLine from "../share/BorderLine";
import Heading from "../share/Heading";

const Category = () => {
  const [categories, setCategories] = useState<CategoryLIST[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    fetch("/api/seed-categories")
      .then((res) => res.json())
      .then((data: CategoryLIST[]) => {
        setCategories(data);
        setActive(data[0]?.label);
      });
  }, []);

  return (
    <section>
      <Timed title="Category" />
      {/* ====== Carousel Arrows ====== */}
      <article className="flex flex-col sm:flex-row justify-between place-items-start gap-3 sm:gap-0 sm:place-items-center py-4">
        <Heading title="Browse By Category" />
        <CarouselArrows />
      </article>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={6}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        className="categoryCrousel"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <CategoryCard
              label={cat.label}
              icon={cat.icon}
              active={active === cat.label}
              onClick={() => setActive(cat.label)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 sm:mt-15">
        <BorderLine />
      </div>
    </section>
  );
};

export default Category;
