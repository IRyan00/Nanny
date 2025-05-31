import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlenght: 2,
      maxlength: 20,
    },
    message: {
      type: String,
      required: true,
      minlenght: 10,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Review", reviewSchema);
