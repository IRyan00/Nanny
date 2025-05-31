import express from "express";

import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/reviewController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createReview);
router.get("/get", getReviews);
router.delete("/delete/:id", protect, deleteReview);

export default router;
