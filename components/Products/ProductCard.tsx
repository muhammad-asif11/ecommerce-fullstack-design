"use client";

import Image from "next/image";
import { Icon } from "../share/Icon";
import Button from "../share/Button";
import { useState } from "react";

type Props = {
  title: string;
  image: string | { black?: string; red?: string };
  price: number;
  oldPrice?: number;
  discount?: number;
  condition?: string;
  rating: number;
  reviews: number;
};

const ProductCard = ({
  title,
  image,
  price,
  oldPrice,
  discount,
  condition,
  rating,
  reviews,
}: Props) => {
  const [selectedColor, setSelectedColor] = useState<"black" | "red">("black");

  const isColorProduct = typeof image === "object";
  const currentImage = isColorProduct
    ? image[selectedColor] || image.black
    : image;

  return (
    <section className="group bg-white rounded-md relative shadow-sm hover:shadow-lg transition">
      <article className="bg-shadoWhite p-4">
        {/* ==== Discount Badge ===== */}
        {discount && (
          <span className="absolute top-3 left-3 bg-Narangi text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        {/* ===== Condition New ===== */}
        {condition && (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-1 rounded">
            {condition}
          </span>
        )}

        {/* Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Button
            type="button"
            title=""
            icon="heart"
            style="font-medium transition hover:cursor-pointer bg-white p-2 rounded-full shadow"
          />
          <Button
            type="button"
            title=""
            icon="eye"
            style="font-medium transition hover:cursor-pointer bg-white p-2 rounded-full shadow"
          />
        </div>

        {/* ===== Product Image =====*/}
        <div className="flex justify-center items-center h-40 bg-shadoWhite">
          <img src={currentImage} alt={title} />
          {/* <Image src={image} alt={title} width={160} height={160} /> */}
        </div>

        {/* Add to cart (hover) */}
        <Button
          type="submit"
          title="Add To Cart"
          style="absolute bottom-[95px] left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition"
        />
      </article>

      {/* Content */}
      <div className="mt-4 p-4">
        <h3 className="text-sm font-medium">{title}</h3>

        <div className="flex gap-3 items-center mt-1">
          <span className="text-Narangi font-semibold">${price}</span>
          {oldPrice && (
            <span className="line-through text-gray-400 text-sm">
              ${oldPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1 text-orange-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" className="text-lg" />
          ))}
          <span className="text-gray-500 text-xs ml-1">({reviews})</span>
        </div>

        {/* ===== Color Options (Only if available) ===== */}
        {isColorProduct && (
          <div className="flex gap-2 mt-2">
            {image.black && (
              <button
                onClick={() => setSelectedColor("black")}
                className={`w-4 h-4 rounded-full border ${
                  selectedColor === "black"
                    ? "border-black scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: "black" }}
              />
            )}

            {image.red && (
              <button
                onClick={() => setSelectedColor("red")}
                className={`w-4 h-4 rounded-full border ${
                  selectedColor === "red"
                    ? "border-black scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: "red" }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCard;
