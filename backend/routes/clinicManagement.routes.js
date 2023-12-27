const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addClinic,
  updateClinicLocation,
  deleteClinicLocation,
  getAllClinics,
} = require("../controllers/clinicManagement.controllers");

//route for adding a new clinic location
router.post("/addClinic", AdminAuth, addClinic);
router.put("/updateClinicLocation/:clinicId", AdminAuth, updateClinicLocation);
router.delete(
  "/deleteClinicLocation/:clinicId",
  AdminAuth,
  deleteClinicLocation
);
router.get("/getAllClinics", AdminAuth, getAllClinics);

module.exports = router;
