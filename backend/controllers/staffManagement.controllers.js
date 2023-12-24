const { StaffMember } = require("../models/staffMember.models");

const addStaff = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, role, email, password } = req.body;

    if (!firstName || !lastName || !role || !email || !password) {
      return res.status(400).json({ message: "All fields are required bro." });
    }

    const newStaff = new StaffMember({
      firstName,
      lastName,
      role,
      email,
      password,
    });
    await newStaff.save();

    res.status(201).json(newStaff);

    console.log("Staff added successfully", newStaff);
  } catch (error) {
    console.error("Error adding staff:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addStaff };
