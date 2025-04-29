import express from "express";
import {
  loginAdmin,
  loginUser,
  registerUser,
} from "../controllers/UserController.js";

const userRouter = express.Router();

// routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin/login", loginAdmin);

export default userRouter;