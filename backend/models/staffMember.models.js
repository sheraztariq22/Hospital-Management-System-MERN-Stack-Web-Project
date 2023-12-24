const mongoose = require("mongoose");

const staffMemberSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    confirmPassword: {
      type: String,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

const StaffMember = mongoose.model("StaffMember", staffMemberSchema);

module.exports = { StaffMember };
