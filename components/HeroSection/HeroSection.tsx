import CategorySidebar from "./CategorySidebar";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  return (
    <div className="flex gap-8 mt-8 place-items-center">
      <CategorySidebar />

      <div className="flex-1 min-w-0">
        <HeroCarousel />
      </div>
    </div>
  );
};

export default HeroSection;
