import axios from "axios";
import asyncHandler from "express-async-handler";

export const verifyRecaptcha = asyncHandler(async (req, res, next) => {
  try {
    const { recaptchaToken } = req.body;

    if (!recaptchaToken) {
      return res.status(400).json({ message: "Missing recaptcha token" });
    }

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    if (!response.data.success) {
      return res.status(400).json({ message: "Invalid recaptcha token" });
    }

    next();
  } catch (error) {
    console.error("Erreur reCAPTCHA:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la vérification du reCAPTCHA" });
  }
});
