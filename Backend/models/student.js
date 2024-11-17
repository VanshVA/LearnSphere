const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true,
        unique: true
    },
    studentPassword: {
        type: String,
        required: true
    },
    studentImage: {
        type: String,
    },
    role: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
    },
    otpExpires: {
        type: Date,
    },
    loginTime: {
        type: [Date], // This will store multiple login timestamps
        default: [],  // Default to an empty array
      },
});

studentSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.studentPassword = await bcrypt.hash(this.studentPassword, 10);
    }
    next();
});

module.exports = mongoose.model("student", studentSchema);