import express from "express";
import multer from "multer";

import {
  // createProfile,
  getProfile,
  updateProfile,
} from "../controllers/profileController.js";

import { protect } from "../middlewares/authMiddleware.js";
// import { profileValidation } from "../validations/profileValidation.js";
// import { validateRequest } from "../middlewares/validateRequest.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

// router.post(
//   "/create",
//   protect,
//   upload.single("imageFile"),
//   profileValidation,
//   validateRequest,
//   createProfile
// );
router.get("/get", getProfile);
router.put("/update/:id", protect, upload.single("imageFile"), updateProfile);

export default router;
