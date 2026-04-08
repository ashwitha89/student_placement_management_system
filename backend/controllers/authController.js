const User = require("../models/User")

exports.register = async (req, res) => {
  const user = new User(req.body)
  await user.save()
  res.json(user)
}

exports.login = async (req, res) => {
  const { email, password, role } = req.body

  const user = await User.findOne({ email, password, role })

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" })
  }

  res.json(user)
}