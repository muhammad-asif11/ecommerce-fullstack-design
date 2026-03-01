import React from "react";
type Props = {
  src: string;
  alt: string;
};
const Image = ({ src, alt }: Props) => {
  return (
    <div>
      <img src={src} alt={alt} className="cover" />
    </div>
  );
};

export default Image;
