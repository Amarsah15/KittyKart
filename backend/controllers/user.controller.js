import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// singup
export const signup = async (req, res) => {
  try {
    const { email, phoneNumber, password } = req.body;

    if (!email || !phoneNumber || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required" });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res
        .status(400)
        .json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters long",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      phoneNumber,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// verify email
// verify phone number
// verify otp
// login with email and password
// login with otp
// refresh token
// change password
// forgot password
// logout
// update profile
// delete account after 30 days of inactivity
