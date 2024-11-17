const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Reference to the Course
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    studentsPresent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' // Students present on that day
    }],
    studentsAbsent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' // Students absent on that day
    }]
});

module.exports = mongoose.model("Attendance", attendanceSchema);
