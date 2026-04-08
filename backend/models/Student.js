const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
department: String,
cgpa: Number,
skills: String
});

module.exports = mongoose.model("Student", StudentSchema);