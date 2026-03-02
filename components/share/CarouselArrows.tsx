import Button from "./Button";
import { Icon } from "./Icon";

const CarouselArrows = () => {
  return (
    <div className="w-full flex justify-end gap-3">
      <Button
        title=""
        icon="leftArrow"
        style="prev-btn p-2 bg-shadoWhite rounded-full hover:cursor-pointer"
      />
      <Button
        title=""
        icon="rightArrow"
        style="prev-btn p-2 bg-shadoWhite rounded-full hover:cursor-pointer"
      />
    </div>
  );
};

export default CarouselArrows;
