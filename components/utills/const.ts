import { CiInstagram, CiSearch, CiTwitter } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaUser, FaBars, FaEye, FaStar, FaLinkedinIn } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import {
  MdArrowBack,
  MdArrowForward,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { RiFacebookLine } from "react-icons/ri";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";

export const ICONS = {
  cart: IoCartOutline,
  user: FaUser,
  heart: IoIosHeartEmpty,
  menu: FaBars,
  arrow: MdKeyboardArrowRight,
  leftArrow: MdArrowBack,
  rightArrow: MdArrowForward,
  search: CiSearch,
  eye: FaEye,
  star: FaStar,
  facebook: RiFacebookLine,
  twitter: CiTwitter,
  instagram: CiInstagram,
  linkedIn: FaLinkedinIn,
  farrow: LiaLocationArrowSolid,
  Google: FcGoogle,
} as const;

export type IconName = keyof typeof ICONS;

export const NavigateURL = [
  {
    idL: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Sign Up",
    link: "/signup",
  },
];

export const slides = [
  {
    id: 1,
    title: ["Up to 10%", "off Voucher"],
    subtitle: "iPhone 14 Series",
    imag: "/Apple.png",
    image: "/iPhone.png",
  },
  {
    id: 2,
    title: ["Big Sale on Electronics"],
    subtitle: "iPhone 14 Series",
    imag: "/Apple.png",
    image: "/iPhone2.png",
  },
  {
    id: 3,
    title: ["Up to 10%", "off Voucher"],
    subtitle: "iPhone 14 Series",
    imag: "/Apple.png",
    image: "/iPhone2.png",
  },
  {
    id: 4,
    title: ["Best Selling Products"],
    subtitle: "iPhone 14 Series",
    imag: "/Apple.png",
    image: "/iPhone2.png",
  },
];
// ===== Sign Up Form ======
import  {SINGUPFORM}  from "../utills/types";

export const SingUpForm: SINGUPFORM[] = [
  {
    id: 1,
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: 3,
    name: "password",
    label: "Password",
    type: "password",
  },
];

