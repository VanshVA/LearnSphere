const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        required: true,
        unique: true
    },
    instructor: {
        type: String,
        required: true
    },
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment' // Assignments for this course
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' // Students enrolled in this course
    }],
    attendanceRecords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendance' // Attendance records for this course
    }]
});

module.exports = mongoose.model("Course", courseSchema);
