import express from "express";

import { login, logout } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { loginValidator } from "../validations/authValidation.js";
import { validateRequest } from "../middlewares/validateRequest.js";

const router = express.Router();

router.post("/login", loginValidator, validateRequest, login);
router.get("/logout", logout);

// IS AUTHENTICATED
router.get("/check", protect, (req, res) => {
  res.status(200).json({ authenticated: true });
});

// IS ADMIN
router.get("/check-admin", protect, isAdmin, (req, res) => {
  res.status(200).json({ message: "Authorized" });
});

export default router;
