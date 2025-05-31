import User from "../models/User.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

// const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

// export const register = async (req, res, next) => {
//   try {
//     const { name, password } = req.body;
//     const existingUser = await User.findOne({ name });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     const newUser = await User.create({
//       name,
//       password: hashedPassword,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const generateToken = async (_id) => {
  const token = JWT.sign({ _id }, JWT_SECRET, { expiresIn: "30d" });
  return token;
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const userLogin = await User.findOne({ name });

    if (!userLogin) {
      return res.status(404).json({ message: "The user doesn't exist " });
    }

    const isPasswordValid = await bcrypt.compare(password, userLogin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await generateToken(userLogin._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
    });

    res.status(201).json({ userLogin, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
