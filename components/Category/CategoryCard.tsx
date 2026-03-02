"use client";
import React from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  icon: React.ReactNode; // coming from API
  active: boolean;
  onClick: () => void;
};

const CategoryCard = ({ label, icon, active, onClick }: Props) => {
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon;

  return (
    <div
      onClick={onClick}
      className={`grid place-items-center gap-2 py-6 border rounded-md cursor-pointer transition-all
        ${
          active
            ? "bg-Narangi text-white border-Narangi"
            : "bg-white text-gray-700 hover:border-Narangi"
        }`}
    >
      {IconComponent && <IconComponent />}
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default CategoryCard;
