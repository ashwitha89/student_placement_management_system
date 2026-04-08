const Job = require("../models/Job")

exports.createJob = async (req, res) => {
  const job = new Job(req.body)
  await job.save()
  res.json(job)
}

exports.getJobs = async (req, res) => {
  const jobs = await Job.find()
  res.json(jobs)
}