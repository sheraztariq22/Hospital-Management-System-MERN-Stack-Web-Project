const mongoose = require('mongoose');

const staffMemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },

    passwordConfirm: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    }

}, {
    timestamps: true
});


const StaffMember = mongoose.model('StaffMember', staffMemberSchema);

module.exports = StaffMember;