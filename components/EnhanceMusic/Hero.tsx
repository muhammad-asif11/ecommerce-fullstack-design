import Countdown from "./Countdown";
import Button from "../share/Button";
import NextImage from "../share/NextImage";

const Hero = () => {
  return (
    <section className="bg-black text-white px-6 lg:px-20 py-10">
      <div className="w-full grid lg:grid-cols-2 items-center">
        {/* ====== LEFT CONTENT ====== */}
        <div className="flex flex-col place-items-start gap-8">
          <p className="text-green-400 text-sm font-medium">Categories</p>

          <h1 className="text-2xl lg:text-6xl md:text-5xl font-bold leading-tight">
            Enhance Your <br />
            Music Experience
          </h1>

          <Countdown targetDate="2026-12-31T23:59:59" />

          <Button
            type="submit"
            title="Buy Now!"
            style="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-3 rounded-md font-medium shadow-md hover:scale-105"
          />
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <NextImage src="/speaker_.png" alt="Portable speaker" />
      </div>
    </section>
  );
};

export default Hero;
