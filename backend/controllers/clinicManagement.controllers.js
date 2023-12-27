const ClinicManagement = require("../models/clinicManagement.models");
const mongoose = require("mongoose");

//function to add a new location of clinic: clinicName, clincPreviousAddress,clinicNewAddress
const addClinic = async (req, res) => {
  try {
    const { clinicName, clinicNewAddress } = req.body;

    if (!clinicName || !clinicNewAddress) {
      return res.status(400).json({ message: "All fields are required bro." });
    }

    const newClinic = new ClinicManagement({
      clinicName,
      clinicNewAddress,
    });
    await newClinic.save();

    res.status(201).json(newClinic);
  } catch (error) {
    console.error("Error adding clinic:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//function to update a clinic location of added clinic and we can update it by mongoose id
const updateClinicLocation = async (req, res) => {
  try {
    const { clinicName, clincPreviousAddress, clinicNewAddress } = req.body;
    const { clinicId } = req.params;

    if (
      !clinicId ||
      !clinicName ||
      !clincPreviousAddress ||
      !clinicNewAddress
    ) {
      return res.status(400).json({ message: "All fields are required bro." });
    }

    const updatedClinic = await ClinicManagement.findByIdAndUpdate(
      clinicId,
      {
        clinicName,
        clincPreviousAddress,
        clinicNewAddress,
      },
      { new: true, runValidators: true }
    );

    if (!updatedClinic) {
      return res.status(404).json({ message: "Clinic not found" });
    }

    res.status(200).json(updatedClinic);
  } catch (error) {
    console.error("Error updating clinic:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//deleting the clinic by name and location
const deleteClinicLocation = async (req, res) => {
  try {
    const { clinicId } = req.params;

    if (!clinicId) {
      return res.status(400).json({ message: "All fields are required bro." });
    }

    const deletedClinic = await ClinicManagement.findByIdAndDelete(clinicId);

    if (!deletedClinic) {
      return res.status(404).json({ message: "Clinic not found" });
    }

    res.status(200).json({ message: "Clinic deleted successfully" });
  } catch (error) {
    console.error("Error deleting clinic:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//function to get the list of all the clinic locations
const getAllClinics = async (req, res) => {
  try {
    const clinics = await ClinicManagement.find();
    res.status(200).json(clinics);
  } catch (error) {
    console.error("Error getting all clinics:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addClinic,
  updateClinicLocation,
  deleteClinicLocation,
  getAllClinics,
};
