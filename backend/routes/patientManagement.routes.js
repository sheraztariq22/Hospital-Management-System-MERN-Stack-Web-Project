const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addPatient,
  sendPatientLinks,
  getAllPatients,
  updatePatient,
} = require("../controllers/patientManagement.controllers");

router.post("/addPatient", AdminAuth, addPatient);
router.post("/sendPatientLinks/:patientId", AdminAuth, sendPatientLinks);
router.get("/getAllPatients", AdminAuth, getAllPatients);
router.put("/updatePatient/:patientId", AdminAuth, updatePatient);

module.exports = router;
