export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
};

export type CategoryLIST = {
  id: string;
  label: string;
  icon: string;
};

export type FormFields = {
  name: string;
  email: string;
  password: string;
};

export type SINGUPFORM = {
  id: number;
  name: keyof FormFields; // ✅ strongly typed
  // name:string
  label: string;
  type: "text" | "email" | "password";
};

