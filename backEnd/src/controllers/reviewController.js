import Review from "../models/Review.js";
import { createReviewSchema } from "../validations/reviewValidation.js";

export const createReview = async (req, res, next) => {
  const { error, value } = createReviewSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { name, message } = value;
  try {
    const newReview = new Review({ name, message });
    await newReview.save();
    res.status(201).json({ message: "Review created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }

  // try {
  //   const { name, message } = req.body;
  //   const newReview = new Review({ name, message });
  //   await newReview.save();
  //   res.status(201).json({ message: "Review created successfully" });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Server error" });
  // }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({ reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await Review.findByIdAndDelete(id);
    res.status(200).json({ message: "Review deleted successfully", review });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
