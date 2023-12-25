const mongoose = require("mongoose");

const patientManagementSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },

    patientContact: {
      type: String,
      required: true,
    },

    patientAttendentName: {
      type: String,
      required: true,
    },

    patientRoomNumber: {
      type: Number,
    },

    patientAppointmentUrl: {
      type: String,
    },

    pateintMedicalFormUrl: {
      type: String,
    },

    pateintReportUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PatientManagement = mongoose.model(
  "PatientManagement",
  patientManagementSchema
);

module.exports = PatientManagement;
