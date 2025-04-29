import { response } from "express";
import UserModel from "../models/UserModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create token function to generate JWT token
// this token will be used for authentication
// and authorization of users
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// route for user login
const loginUser = async (req, res) => {};

// route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    // validate email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email!",
      });
    }

    // validate password length
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    // save user to database
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// route for admin login
const loginAdmin = async (req, res) => {};

export { loginUser, registerUser, loginAdmin };
