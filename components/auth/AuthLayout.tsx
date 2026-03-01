import Image from "next/image";
import NextImage from "../share/NextImage";
// import Image from "../share/Image";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <section className="min-h-screen my-15 grid grid-cols-1 lg:grid-cols-2">
      {/* ======= Left Image Section =======*/}
      <div className="hidden lg:block relative">
        <NextImage src="/mobile-store.png" alt="Shoping" />
        {/* <Image src="/mobile-store.png" alt="SingUp/Register" /> */}
      </div>

      {/* Right Form Section */}
      <div className="flex items-center justify-center px-6 sm:px-12 lg:px-16 bg-white">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
