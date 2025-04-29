import mongoose from "mongoose";

// creating a user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false } // to allow empty objects in cartData
);

// creating a user model
const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;
