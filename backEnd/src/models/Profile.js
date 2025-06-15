import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    p1: {
      type: String,
      required: true,
    },
    p2: {
      type: String,
      required: true,
    },
    p3: {
      type: String,
      required: true,
    },
    p4: {
      type: String,
      required: true,
    },
    p5: {
      type: String,
      required: true,
    },
    p6: {
      type: String,
      required: true,
    },
    p7: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Profile", profileSchema);
