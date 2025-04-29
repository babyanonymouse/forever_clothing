import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";

// app configuration
const app = express();
const port = process.env.PORT || 4000;

// database connection
connectDB();
// cloudinary connection
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

// listen to server
app.listen(port, () => console.log("Server started on port", port));
