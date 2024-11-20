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
    // New fields for interconnected features
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course' // Reference to the Course model
    }],
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment' // Reference to the Assignment model
    }],
    attendance: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendance' // Reference to the Attendance model
    }],
    results: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Result' // Reference to the Result model
    }],
});

studentSchema.pre('save', async function (next) {
    if (this.isModified('studentPassword') || this.isNew) {
        this.studentPassword = await bcrypt.hash(this.studentPassword, 10);
    }
    next();
});

module.exports = mongoose.model("Student", studentSchema);
