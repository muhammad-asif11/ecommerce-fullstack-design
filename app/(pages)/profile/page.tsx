"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import Button from "@/components/share/Button";

export default function Profile() {
  const router = useRouter();
  const [data, setData] = useState("user not found");

  const getUserData = async () => {
    const res = await axios.post("/api/users/me");
    console.log(res.data.data);
    setData(res.data.data._id);
  };
  const Logout = async () => {
    try {
      await axios.get("api/users/logout");
      toast.success("Logged out success");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to Profile Page</h1>
      <h2 className="text-2xl font-bold text-blue-500">
        {data === "" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>

      <Button title="Logout" onClick={Logout} style="Button" />
      <Button title="Get User Detail" onClick={getUserData} style="Button" />
    </div>
  );
}
