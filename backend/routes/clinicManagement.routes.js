const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addClinicLocation,
  updateClinicLocation,
  deleteClinicLocation,
  getAllClinics,
} = require("../controllers/clinicManagement.controllers");

//route for adding a new clinic location
router.post("/addClinicLocation", AdminAuth, addClinicLocation);
router.put("/updateClinicLocation/:clinicId", AdminAuth, updateClinicLocation);
router.delete(
  "/deleteClinicLocation/:clinicId",
  AdminAuth,
  deleteClinicLocation
);
router.get("/getAllClinics", AdminAuth, getAllClinics);

module.exports = router;
