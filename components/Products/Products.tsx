"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import ProductCard from "./ProductCard";
import FlashSaleTimer from "./FlashSaleTimer";
import Timed from "./Timed";
import Button from "../share/Button";
import { useEffect, useState } from "react";
import CarouselArrows from "../share/CarouselArrows";
import { Product } from "../utills/types";
import BorderLine from "../share/BorderLine";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <section>
      <Timed title={`Today's `} />

      <div className="flex justify-between place-items-center py-5">
        <article className="flex gap-10 place-items-center">
          <h2 className="text-3xl font-semibold">Flash Sales</h2>
          <FlashSaleTimer />
        </article>

        <CarouselArrows />
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={5}
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

      <div className="flex flex-col place-items-center gap-15 mt-10">
        <Button
          title={showAll ? "Show Less" : "View All Products"}
          onClick={() => setShowAll(!showAll)}
          style="Button"
        />
        <BorderLine />
      </div>
    </section>
  );
};

export default Products;
