const Company = require("../models/company");
const bcrypt = require("bcryptjs");

// Register Company
exports.registerCompany = async (req, res) => {
  try {
    const { name, email, password, location } = req.body;

    const existingCompany = await Company.findOne({ email });

    if (existingCompany) {
      return res.status(400).json({ message: "Company already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const company = new Company({
      name,
      email,
      password: hashedPassword,
      location
    });

    await company.save();

    res.json({
      message: "Company registered successfully",
      company
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};