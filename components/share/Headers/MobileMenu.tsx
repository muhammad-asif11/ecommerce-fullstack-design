"use client";

import { NavigateURL } from "@/components/utills/const";
import Link from "next/link";

import { usePathname } from "next/navigation";
import SearchBar from "../Search";
import { Icon } from "../Icon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: Props) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg px-4 py-6 flex flex-col gap-5">
      {/* Links */}
      {NavigateURL.map((item) => {
        const isActive = pathname.startsWith(item.link);

        return (
          <Link
            key={item.id}
            href={item.link}
            onClick={onClose}
            className={`py-2 border-b ${
              isActive ? "text-black font-semibold" : "text-gray-600"
            }`}
          >
            {item.title}
          </Link>
        );
      })}

      {/* Search + Icons */}
      <div className="flex items-center gap-4 pt-4">
        <SearchBar />
        <Icon name="heart" size={22} />
        <Icon name="cart" size={22} />
      </div>
    </div>
  );
};

export default MobileMenu;
