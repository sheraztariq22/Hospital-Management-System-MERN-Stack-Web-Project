const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addStaff,
  updateStaff,
  ListofStaff,
  deleteStaff,
  searchStaff,
} = require("../controllers/staffManagement.controllers");

router.post("/addStaff", AdminAuth, addStaff);
router.put("/updateStaff/:id", AdminAuth, updateStaff);
router.get("/ListofStaff", AdminAuth, ListofStaff);
router.delete("/deleteStaff/:id", AdminAuth, deleteStaff);
router.post("/searchStaff", AdminAuth, searchStaff);

module.exports = router;
