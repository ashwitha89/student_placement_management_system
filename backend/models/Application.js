const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  cgpa: String,
  year: String,
  skills: String,
  mobile: String,
  resume: String,
  jobId: String,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Application", applicationSchema);