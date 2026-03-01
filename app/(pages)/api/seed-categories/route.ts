import { NextResponse } from "next/server";

export async function GET() {
  const CategoryList = [
    { id: "1", label: "Phones", icon: "Smartphone" },
    { id: "2", label: "Computers", icon: "Monitor" },
    { id: "3", label: "SmartWatch", icon: "Watch" },
    { id: "4", label: "Camera", icon: "Camera" },
    { id: "5", label: "HeadPhones", icon: "Headphones" },
    { id: "6", label: "Gaming", icon: "Gamepad2" },
    { id: "7", label: "Phones", icon: "Smartphone" },
    { id: "8", label: "Camera", icon: "Camera" },
  ];

  return NextResponse.json(CategoryList);
}
