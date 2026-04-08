const Application = require("../models/Application")

exports.applyJob = async (req, res) => {
  const app = new Application(req.body)
  await app.save()
  res.json(app)
}

exports.getStudentApplications = async (req, res) => {
  const apps = await Application.find({ studentId: req.params.id })
  res.json(apps)
}

exports.updateStatus = async (req, res) => {
  const app = await Application.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  )
  res.json(app)
}