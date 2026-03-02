import SellProduct from "@/components/BestProducts/SellProduct";
import Category from "@/components/Category/Category";
import Hero from "@/components/EnhanceMusic/Hero";
import ExploreProducts from "@/components/ExploreProducts/ExploreProducts";
import HeroSection from "@/components/HeroSection/HeroSection";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-10 sm:gap-20 w-full px-5 sm:px-10">
        <HeroSection />
        <Products />
        <Category />
        <SellProduct />
        <Hero />
        <ExploreProducts />
      </main>
    </>
  );
}
