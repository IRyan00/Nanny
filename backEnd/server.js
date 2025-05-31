import "dotenv/config";

import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";

import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";
import profileRoutes from "./src/routes/profileRoutes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/profile", profileRoutes);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
