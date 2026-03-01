"use client";
import { useParams } from "next/navigation";

const ProfileDynamicRoute = () => {
  const params = useParams();
  console.log("dynamic routes", params);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">
        Dynamic Routing: user Id get from MongoDB
      </h1>
      <h2>{params.id}</h2>
    </div>
  );
};

export default ProfileDynamicRoute;
