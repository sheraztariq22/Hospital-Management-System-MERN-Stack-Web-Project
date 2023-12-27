const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addPatient,
  sendPatientLinks,
  getAllPatients,
  updatePatient,
  deletePatient,
} = require("../controllers/patientManagement.controllers");

router.post("/addPatient", AdminAuth, addPatient);
router.post("/sendPatientLinks/:patientId", AdminAuth, sendPatientLinks);
router.get("/getAllPatients", AdminAuth, getAllPatients);
router.put("/updatePatient/:patientId", AdminAuth, updatePatient);
router.delete("/deletePatient/:patientId", AdminAuth, deletePatient);

module.exports = router;
