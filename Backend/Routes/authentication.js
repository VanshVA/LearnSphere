const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Admin = require('../models/admin');
const router = express.Router();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_here';

// Admin signup API
router.post('/admin-signup', async (req, res) => {
    try {
        const { adminName, adminEmail, adminPassword, role } = req.body;

        // Check if the user already exists
        const existingAdmin = await Admin.findOne({ adminEmail });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create new student
        const newAdmin = new Admin({
            adminName,
            adminEmail,
            adminPassword,
            role
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error during signup', error: error.message });
    }
});

// Teacher signup API
router.post('/teacher-signup', async (req, res) => {
    try {
        const { teacherName, teacherEmail, teacherPassword, role } = req.body;

        // Check if the user already exists
        const existingStudent = await Teacher.findOne({ teacherEmail });
        if (existingStudent) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create new student
        const newTeacher = new Teacher({
            teacherName,
            teacherEmail,
            teacherPassword,
            role
        });

        await newTeacher.save();
        res.status(201).json({ message: 'Teacher registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error during signup', error: error.message });
    }
});

// Student Signup API
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

// ALL{Admin, Teacher, Stident} Signin API
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

        res.status(200).json({ message: `${role} signin successful`, token, role, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "Error during signin", error: error.message });
    }
});



module.exports = router;
