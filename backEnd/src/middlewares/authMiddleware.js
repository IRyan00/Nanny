import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Cherche d'abord dans les headers (Authorization: Bearer xxx)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  // Sinon, cherche dans les cookies (jwt)
  else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    res.status(401);
    throw new Error("Non autorisé, pas de token");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded._id).select("-password");
    next();
  } catch (error) {
    console.error("Erreur d'authentification:", error);
    res.status(401);
    throw new Error("Non autorisé, token invalide");
  }
});
