const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const { addPatient } = require("../controllers/patientManagement.controllers");

router.post("/addPatient", AdminAuth, addPatient);

module.exports = router;
