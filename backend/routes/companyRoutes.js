const express = require("express");
const router = express.Router();

const companyController = require("../controllers/companycontroller");

router.post("/register", companyController.registerCompany);

module.exports = router;