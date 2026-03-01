import mongoos from "mongoose";

const userSchema = new mongoos.Schema({
  username: {
    type: String,
    required: [true, "please provide username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    select: false
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoos.models.users || mongoos.model("users", userSchema);
export default User;
