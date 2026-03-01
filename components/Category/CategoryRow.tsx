"use client";
import React, { useState } from "react";
import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";
import CategoryCard from "./CategoryCard";

const categories = [
  { label: "Phones", icon: <Smartphone /> },
  { label: "Computers", icon: <Monitor /> },
  { label: "SmartWatch", icon: <Watch /> },
  { label: "Camera", icon: <Camera /> },
  { label: "HeadPhones", icon: <Headphones /> },
  { label: "Gaming", icon: <Gamepad2 /> },
];

const CategoryRow = () => {
  const [active, setActive] = useState("Camera"); // default active

  return (
    <div className="flex gap-5 overflow-x-auto">
      {categories.map((cat) => (
        <CategoryCard
          key={cat.label}
          label={cat.label}
          icon={cat.icon}
          active={active === cat.label}
          onClick={() => setActive(cat.label)}
        />
      ))}
    </div>
  );
};

export default CategoryRow;
