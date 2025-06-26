import "dotenv/config";

import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";

import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
// import reviewRoutes from "./src/routes/reviewRoutes.js";
import profileRoutes from "./src/routes/profileRoutes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

const origins = ["http://localhost:5173", "https://nanny-jet.vercel.app"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || origins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
// app.use("/api/review", reviewRoutes);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
