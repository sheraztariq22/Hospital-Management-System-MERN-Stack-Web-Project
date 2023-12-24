const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addStaff,
  updateStaff,
  ListofStaff,
} = require("../controllers/staffManagement.controllers");

router.post("/addStaff", AdminAuth, addStaff);
router.put("/updateStaff", AdminAuth, updateStaff);
router.get("/ListofStaff", AdminAuth, ListofStaff);

module.exports = router;
