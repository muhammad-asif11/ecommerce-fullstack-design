import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;
    console.log('user in body',reqBody);

    const user = await User.findOne({ email }); // userModel sey user ko find karna
    if (user) {
      return NextResponse.json(
        { message: "user already exist" },
        { status: 400 },
      );
    }
    // Store hash in your password DB
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username:name,
      email,
      password: hashPassword,
    });
    const saveUser = await newUser.save();
    console.log('save user',saveUser);

    // send email verification
    await sendEmail({ email, emailType: "VERIFY", userId: saveUser._id });
    return NextResponse.json({
      message: "User Registerd Successfully",
      success: true,
      saveUser,
    });
  } catch (error: any) {
    console.log("Signup Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
