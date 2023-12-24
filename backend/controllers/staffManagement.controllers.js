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

//the update info function for staff
const updateStaff = async (req, res) => {
  try {
    const { firstName, lastName, role, email, password, confirmPassword } =
      req.body;

    if (
      !firstName ||
      !lastName ||
      !role ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({ message: "All fields are required bro." });
    }

    const newStaff = new StaffMember({
      firstName,
      lastName,
      role,
      email,
      password,
      confirmPassword,
    });
    await newStaff.save();

    res.status(201).json(newStaff);
  } catch (error) {
    console.error("Error adding staff:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//function to show the list of all staff
const ListofStaff = async (req, res) => {
  try {
    const staff = await StaffMember.find();
    res.status(200).json(staff);
  } catch (error) {
    console.error("Error getting staff:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addStaff, updateStaff, ListofStaff };
