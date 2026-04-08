import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
  companyName: String,
  email: String,
  password: String,
});

export default mongoose.model("Recruiter", recruiterSchema);