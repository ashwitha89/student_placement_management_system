const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.registerStudent = async (req, res) => {
  try {
    const { name, email, password, department, cgpa } = req.body;

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      name,
      email,
      password: hashedPassword,
      department,
      cgpa
    });

    await student.save();

    res.json({
      message: "Student registered successfully",
      student
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// LOGIN
exports.loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: student._id }, "secretkey", {
      expiresIn: "1d"
    });

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};