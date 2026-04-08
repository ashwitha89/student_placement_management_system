import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await Student.findOne({ email });
    if (existing) return res.status(400).json("User already exists");

    const newStudent = new Student({ name, email, password });
    await newStudent.save();

    res.json("Registered Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Student.findOne({ email, password });

    if (!user) return res.status(400).json("Invalid Credentials");

    res.json("Login Successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;