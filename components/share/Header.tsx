"use client";
import React from "react";
import { NavigateURL } from "../utills/const";
import Link from "next/link";
import SearchBar from "./Search";
import { Icon } from "./Icon";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between place-items-center px-10 py-5 border-2 border-b-[#F5F5F5]">
      <Logo />
      <nav className="flex gap-10">
        {NavigateURL.map((item, index) => {
          //   const isActive = pathname === item.link;
          const isActive = pathname.startsWith(item.link);

          return (
            <Link
              href={item.link}
              key={index}
              className={`pb-1 border-b-2 border-shadoWhite transition-all ${
                isActive
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="flex gap-3 place-items-center">
        <SearchBar />
        <Icon name="heart" className="" size={24} />
        <Icon name="cart" size={24} />
      </div>
    </div>
  );
};

export default Header;
