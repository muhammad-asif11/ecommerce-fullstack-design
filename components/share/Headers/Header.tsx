"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Logo from "../Logo";
import { NavigateURL } from "@/components/utills/const";
import SearchBar from "../Search";
import { Icon } from "../Icon";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white relative">
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-10 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-8">
          {NavigateURL.map((item) => {
            const isActive = pathname.startsWith(item.link);

            return (
              <Link
                href={item.link}
                key={item.id}
                className={`pb-1 border-b-2 transition ${
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

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <SearchBar />
          <Icon name="heart" size={24} />
          <Icon name="cart" size={24} />
        </div>

        {/* ====== Mobile Hamburger ========= */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Separate Mobile Component */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
