import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      // Find from userModel
      const updatedUser = await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashToken,
          verifyTokenExpiry: new Date(Date.now() + 3600000), // expiry 1 hour
        },
      });

      console.log("Updated user for VERIFY", updatedUser);
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashToken,
          forgotPasswordTokenExpiry: new Date(Date.now() + 3600000),
        },
      });
    }
    // mailtrap
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "d19b8597310e4f",
        pass: "1bdebab8c32bdb",
      },
    });

    const mailOptions = {
      from: "biz.asif11@gmail.com", // sender
      to: email,
      subject: emailType === "VERIFY" ? "Verify email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken} ">here</a>
      to ${emailType === "VERIFY" ? "Verify your email" : "Reset your Password"}
      or copy and paste the link below in your browser
      <br/> ${process.env.DOMAIN}/verifyemail?token=${hashToken}
      </p>`, // HTML version of the message
    };
    const mailInfo = await transport.sendMail(mailOptions);
    return mailInfo;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
