const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/student'); 
const router = express.Router();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_here';

// Signup API
router.post('/signup', async (req, res) => {
    try {
        const { studentName, studentEmail, studentPassword, role } = req.body;

        // Check if the user already exists
        const existingStudent = await Student.findOne({ studentEmail });
        if (existingStudent) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create new student
        const newStudent = new Student({
            studentName,
            studentEmail,
            studentPassword,
            role
        });

        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error during signup', error: error.message });
    }
});

// Signin API
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = null;
        let role = null;

        // Check in student collection
        user = await require('../models/student').findOne({ studentEmail: email });
        if (user) role = 'student';

        // Check in teacher collection
        if (!user) {
            user = await require('../models/teacher').findOne({ teacherEmail: email });
            if (user) role = 'teacher';
        }

        // Check in admin collection
        if (!user) {
            user = await require('../models/admin').findOne({ adminEmail: email });
            if (user) role = 'admin';
        }

        // If user not found
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user[`${role}Password`]);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email, role },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        // Log login time (if applicable)
        if (user.loginTime) {
            user.loginTime.push(new Date());
            await user.save();
        }

        res.status(200).json({ message: `${role} signin successful`, token });
    } catch (error) {
        res.status(500).json({ message: "Error during signin", error: error.message });
    }
});



module.exports = router;
