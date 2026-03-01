import Image from "next/image";
type Props = {
  src: string;
  alt: string;
};
const NextImage = ({ src, alt }: Props) => {
  return (
    <div className="relative h-[350px] md:h-[450px]">
      <Image src={src} alt={alt} fill priority className="object-cover" />
    </div>
  );
};

export default NextImage;
