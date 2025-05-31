import joi from "joi";

export const createReviewSchema = joi.object({
  name: joi.string().min(2).max(20).required(),
  message: joi.string().min(10).required(),
});
