import { connect } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
connect();

export async function POST(request: NextRequest) {
  try {
    // ===== Extract user id from token =====
    const userId = await getDataFromToken(request);

    console.log("Me route user id", userId);

    // ===== Find user (exclude password) =====
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "User fetched successfully",
      data: user,
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
