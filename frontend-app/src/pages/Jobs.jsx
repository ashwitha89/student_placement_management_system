import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  salary: String,
  role: String,

  cgpa: { type: String, required: true },

  eligibility: {
    type: [String],   // ✅ IMPORTANT FIX
    required: true
  },

  description: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Job = mongoose.model("Job", jobSchema);
export default Job;