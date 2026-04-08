const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// APPLY JOB
router.post("/", async (req, res) => {
  try {
    const app = await Application.create(req.body);
    res.json(app);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL APPLICATIONS
router.get("/", async (req, res) => {
  try {
    const apps = await Application.find();
    res.json(apps);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE STATUS
router.put("/:id", async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;