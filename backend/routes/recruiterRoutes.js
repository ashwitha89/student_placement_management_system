import express from "express";
import Job from "../models/Job.js";

const router = express.Router();


// ✅ POST JOB
router.post("/post-job", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      role,
      cgpa,
      eligibility,
      description
    } = req.body;

    if (
      !title || !company || !location || !salary ||
      !role || !cgpa || !eligibility || !description
    ) {
      return res.status(400).json({ message: "All fields required" });
    }

    const job = new Job({
      title,
      company,
      location,
      salary,
      role,
      cgpa,
      eligibility,
      description
    });

    await job.save();

    res.json({ message: "Job posted successfully ✅" });

  } catch (err) {
    console.log("POST JOB ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ GET JOBS
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
});

export default router;