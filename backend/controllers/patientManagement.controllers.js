const PatientManagement = require("../models/patientManagement.models");

//function to add a patient
const addPatient = async (req, res) => {
  try {
    const {
      patientName,
      patientContact,
      patientAttendentName,
      patientRoomNumber,
    } = req.body;

    if (
      !patientName ||
      !patientContact ||
      !patientAttendentName ||
      !patientRoomNumber
    ) {
      return res.status(400).json({ message: "All fields are required bro." });
    }

    const newPatient = new PatientManagement({
      patientName,
      patientContact,
      patientAttendentName,
      patientRoomNumber,
    });
    await newPatient.save();

    res.status(201).json(newPatient);
  } catch (error) {
    console.error("Error adding patient:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addPatient };
