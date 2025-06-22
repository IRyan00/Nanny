import { body } from "express-validator";

export const profileValidation = [
  body("name")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("school").isString().trim().notEmpty().withMessage("School is required"),

  body("p1").isString().trim().notEmpty().withMessage("p1 is required"),
  body("p2").isString().trim().notEmpty().withMessage("p2 is required"),
  body("p3").isString().trim().notEmpty().withMessage("p3 is required"),
  body("p4").isString().trim().notEmpty().withMessage("p4 is required"),
  body("p5").isString().trim().notEmpty().withMessage("p5 is required"),
  body("p6").isString().trim().notEmpty().withMessage("p6 is required"),
  body("p7").isString().trim().notEmpty().withMessage("p7 is required"),
];
