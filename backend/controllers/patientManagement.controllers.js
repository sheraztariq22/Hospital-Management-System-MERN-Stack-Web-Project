const PatientManagement = require("../models/patientManagement.models");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

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

//sending the links by filling the form which contains appointment url, medical form url, report url
const sendPatientLinks = async (req, res) => {
  try {
    const {
      patientId,
      patientAppointmentUrl,
      patientMedicalFormUrl,
      patientReportUrl,
    } = req.body;

    console.log(req.body);

    if (!patientId) {
      return res.status(400).json({ message: "Patient Id is required bro." });
    }

    // Convert patientId to ObjectId
    const objectIdPatientId = new ObjectId(patientId);

    const patient = await PatientManagement.findById(objectIdPatientId);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    patient.patientAppointmentUrl = patientAppointmentUrl;
    patient.patientMedicalFormUrl = patientMedicalFormUrl;
    patient.patientReportUrl = patientReportUrl;

    await patient.save();

    res.status(200).json(patient);
  } catch (error) {
    console.error("Error sending patient links:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//function to get all the patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await PatientManagement.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error("Error getting all patients:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//function to update patient information
const updatePatient = async (req, res) => {
  const { patientId } = req.params;
  try {
    const {
      patientName,
      patientContact,
      patientAttendentName,
      patientRoomNumber,
    } = req.body;

    if (!patientId) {
      return res.status(400).json({ message: "Patient Id is required bro." });
    }

    const updatedPatient = await PatientManagement.findByIdAndUpdate(
      patientId,
      {
        patientName,
        patientContact,
        patientAttendentName,
        patientRoomNumber,
      },
      { new: true, runValidators: true }
    );

    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json(updatedPatient);
  } catch (error) {
    console.error("Error updating patient:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//function to delete patient
const deletePatient = async (req, res) => {
  const { patientId } = req.params;
  try {
    if (!patientId) {
      return res.status(400).json({ message: "Patient Id is required bro." });
    }

    const deletedPatient = await PatientManagement.findByIdAndDelete(patientId);

    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addPatient,
  sendPatientLinks,
  getAllPatients,
  updatePatient,
  deletePatient,
};
