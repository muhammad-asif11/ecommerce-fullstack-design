import { Icon } from "./Icon";

const CarouselArrows = () => {
  return (
    <div className="flex justify-end gap-3">
      <button className="prev-btn p-2 bg-shadoWhite rounded-full hover:cursor-pointer">
        <Icon name="leftArrow" />
      </button>
      <button className="next-btn p-2 bg-shadoWhite rounded-full hover:cursor-pointer">
        <Icon name="rightArrow" />
      </button>
    </div>
  );
};

export default CarouselArrows;
