const mongoose = require("mongoose");

const clinicManagementSchema = new mongoose.Schema(
  {
    clinicName: {
      type: String,
      required: true,
      trim: true,
    },

    clincPreviousAddress: {
      type: String,
      required: false,
      trim: true,
    },

    clinicNewAddress: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ClinicManagement = mongoose.model(
  "ClinicManagement",
  clinicManagementSchema
);

module.exports = ClinicManagement;
