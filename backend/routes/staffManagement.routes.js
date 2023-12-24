const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const { addStaff } = require("../controllers/staffManagement.controllers");

router.post("/addStaff", AdminAuth, addStaff);

module.exports = router;
