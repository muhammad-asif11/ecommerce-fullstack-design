"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "../Products/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Product } from "../utills/types";
import Timed from "../Products/Timed";
import CarouselArrows from "../share/CarouselArrows";
import Button from "../share/Button";

const ExploreProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(9, 18);
  const colorImg = showAll ? products : products.slice(13, 18);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="flex flex-col place-items-start gap-4">
      <Timed title="Our Products" />
      <article className="w-full flex justify-between place-items-center">
        <h2 className="text-2xl font-semibold">Explore Our Products</h2>
        <CarouselArrows />
      </article>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        className="w-full hero-swiper py-2!"
      >
        {displayedProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* =====  color option products =====*/}
      <div className="grid grid-cols-4 w-full gap-5">
        {colorImg.map((item) => (
          <div>
            <ProductCard {...item} />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center place-items-center mt-10">
        <Button
          title={showAll ? "Show Less" : "View All Products"}
          onClick={() => setShowAll(!showAll)}
          style="Button"
        />
      </div>
    </section>
  );
};

export default ExploreProducts;
