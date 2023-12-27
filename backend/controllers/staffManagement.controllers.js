const { StaffMember } = require("../models/staffMember.models");

const addStaff = async (req, res) => {
  try {
    const { firstName, lastName, role, email, password } = req.body;

    console.log(req.body);

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
  } catch (error) {
    console.error("Error adding staff:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//the update info function for staff
const updateStaff = async (req, res) => {
  try {
    const { _id, firstName, lastName, role, email, password, confirmPassword } =
      req.body;

    if (!_id) {
      return res.status(400).json({ message: "Staff ID is required." });
    }

    const updatedStaff = await StaffMember.findByIdAndUpdate(
      _id,
      {
        $set: {
          firstName,
          lastName,
          role,
          email,
          password,
          confirmPassword,
        },
      },
      { new: true }
    );

    if (!updatedStaff) {
      return res.status(404).json({ message: "Staff member not found." });
    }

    res.status(200).json(updatedStaff);
  } catch (error) {
    console.error("Error updating staff:", error);
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

//function to delete a staff member
const deleteStaff = async (req, res) => {
  try {
    const staffId = req.params.id;
    console.log("Deleting staff with ID:", staffId);

    const staff = await StaffMember.findByIdAndDelete(staffId);

    if (!staff) {
      console.log("Staff not found for deletion:", staffId);
      return res.status(404).json({ message: "Staff not found" });
    }

    console.log("Staff deleted successfully:", staffId);
    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (error) {
    console.error("Error deleting staff:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addStaff, updateStaff, ListofStaff, deleteStaff };
