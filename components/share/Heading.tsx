import React from "react";
type Props = {
  title: string;
};
const Heading = ({ title }: Props) => {
  return (
    <article className="w-full">
      <h2 className="text-xl sm:text-3xl font-semibold">{title}</h2>
    </article>
  );
};

export default Heading;
