const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (UPDATED — no error)
mongoose.connect("mongodb://127.0.0.1:27017/placement")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// ✅ Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});