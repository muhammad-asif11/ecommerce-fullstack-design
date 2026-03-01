import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log("user data", reqBody);
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json({ message: "User not exist" }, { status: 400 });
    }

    console.log("user exist!", user);
    // ==== check credentials. is user valid? =====
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Incorrect Password" },
        { status: 400 },
      );
    }
    console.log("email:", email);
    console.log("password:", password);
    console.log("user.password:", user.password);

    // ==== Ager user ka password correct h then hamain ak jwt token create karna ho ga for verification ====
    // ==== Create JWT ====
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const resp = NextResponse.json({
      message: "user login success",
      success: true,
    });
    // ==== now we send cookies
    // ==== Set Cookie ====
    resp.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    return resp;
  } catch (error: any) {
    console.log("run catch");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
