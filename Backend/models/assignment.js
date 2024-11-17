const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    assignmentTitle: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Reference to the Course
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    submittedAssignments: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student' // Reference to the student who submitted
        },
        submissionDate: {
            type: Date
        },
        grade: {
            type: String // Grade for the assignment (e.g., A, B, etc.)
        }
    }]
});

module.exports = mongoose.model("Assignment", assignmentSchema);
