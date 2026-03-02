"use client";
import { useEffect, useState } from "react";
import { Product } from "../utills/types";
import ProductCard from "../Products/ProductCard";
import Timed from "../Products/Timed";
import Button from "../share/Button";
import Heading from "../share/Heading";

const SellProduct = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setAllProducts(data); // store everything
      });
  }, []);

  // Show only 6–9 initially
  const displayedProducts = showAll
    ? allProducts
    : allProducts.filter((item) => item.id >= 6 && item.id <= 9);

  return (
    <section>
      <Timed title="This Month" />

      <article className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between place-items-start sm:place-items-center py-4">
        <Heading title="Best Selling Products" />
        <div className="w-full text-end">
          <Button
            title={showAll ? "Show Less" : "View All"}
            onClick={() => setShowAll(!showAll)}
            style="Button"
          />
        </div>
      </article>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {displayedProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SellProduct;
