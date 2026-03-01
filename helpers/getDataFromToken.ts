import { connect } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
connect();

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    // encrypted token ko decrypt karna hai
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedToken.id; // tokenData -> 'id: user._id' get from login route
  } catch (error: any) {
    throw new Error(error.message);
  }
};
