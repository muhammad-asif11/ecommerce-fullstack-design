import React from "react";

type Props = {
  title: string;
};
const Timed = ({ title }: Props) => {
  return (
    <div className="flex place-items-center gap-2">
      <div className="bg-Narangi w-4 h-10"></div>
      <h2 className="text-Narangi text-lg">{title}</h2>
    </div>
  );
};

export default Timed;
