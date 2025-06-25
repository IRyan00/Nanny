import { v2 as cloudinary } from "cloudinary";

// CHECK VARIABLES
if (
  !process.env.CLOUD_NAME ||
  !process.env.API_KEY ||
  !process.env.API_SECRET
) {
  throw new Error("Missing Cloudinary environment variables");
}

// CREATE INSTANCE
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
