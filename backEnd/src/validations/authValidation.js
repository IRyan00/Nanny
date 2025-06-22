import { body } from "express-validator";

export const registerValidator = [
  body("name")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Le nom est requis")
    .isLength({ min: 3 })
    .withMessage("Le nom doit faire au moins 3 caractères"),
  body("password")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Le mot de passe est requis")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit faire au moins 6 caractères"),
];

export const loginValidator = [
  body("name").isString().trim().notEmpty().withMessage("Le nom est requis"),
  body("password")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Le mot de passe est requis"),
];
