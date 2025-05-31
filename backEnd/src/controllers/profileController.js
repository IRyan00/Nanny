import Profile from "../models/Profile.js";

import fs from "fs";

import { v2 as cloudinary } from "cloudinary";

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const createProfile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No files downloaded" });
    }

    if (!fs.existsSync(req.file.path)) {
      return res.status(400).json({ error: "Error uploading file" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile",
    });
    console.log("Image sent to cloudinary:", result);

    fs.unlinkSync(req.file.path);

    const { name, desc, school } = req.body;

    const newProfile = new Profile({
      name,
      desc,
      school,
      image: result.secure_url,
      public_id: result.public_id,
    });

    await newProfile.save();
    res.status(201).json({ message: "Profile created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json({ profiles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateProfile = async (req, res, next) => {
  try {
    const { name, desc, school } = req.body;
    const { id: profileId } = req.params;

    const originalProfile = await Profile.findById(profileId);

    let public_id = originalProfile.public_id;
    let image = originalProfile.image;

    if (req.file) {
      await cloudinary.uploader.destroy(public_id);

      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "profile",
      });

      fs.unlinkSync(req.file.path);

      public_id = result.public_id;
      image = result.secure_url;
    }

    const profile = await Profile.findByIdAndUpdate(
      profileId,
      {
        name,
        desc,
        school,
        public_id,
        image,
      },
      { new: true }
    );

    if (!profile) {
      return next({ status: 404, message: "Profile not found" });
    }

    res.status(200).json({ message: "The profile has been updated", profile });
  } catch (error) {
    next(error);
  }
};
