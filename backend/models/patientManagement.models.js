const mongoose = require('mongoose');

const patientManagementSchema = new mongoose.Schema({
        patientName: {
            type: String,
            required: true,
            trim: true
        },

        patientContact: {
            type: String,
            required: true,
            trim: true
        },

        pateintAttendentName: {
            type: String,
            required: true,
            trim: true
        },

        patientRoomNumber: {
            type: String,
            trim: true
        },

        patientAppointmentUrl: {
            type: String,
            trim: true
        },

        pateintMedicalFormUrl: {
            type: String,
            trim: true
        },

        pateintReportUrl: {
            type: String,
            trim: true
        }

    }, {
        timestamps: true
    });


const PatientManagement = mongoose.model('PatientManagement', patientManagementSchema);

module.exports = PatientManagement;
