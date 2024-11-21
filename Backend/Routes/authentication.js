const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Student = require('../models/student');
const UserOTPVerification = require('../models/UserOTPVerification');
const Teacher = require('../models/teacher');
const Admin = require('../models/admin');
const router = express.Router();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_here';

//Admin signup API
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

//Teacher signup API
router.post('/teacher-signup', async (req, res) => {
    try {
        const { teacherName, teacherEmail, teacherPassword, role } = req.body;
        // Check if the user already exists
        const existingTeacher = await Teacher.findOne({ teacherEmail });
        if (existingTeacher) {
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
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "anujkumer987@gmail.com",
        pass: "lplk exjd xqgu gpng",
    },
});

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

        await sendOTPVerificationEmail(newStudent);
        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully. Verification OTP email sent.' });
    } catch (error) {
        res.status(500).json({ message: 'Error during signup', error: error.message });
    }
});

const sendOTPVerificationEmail = async ({ _id, studentEmail }) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        console.log(otp);
        const mailOption = {
            from: "anujkumer987@gmail.com",
            to: studentEmail,
            subject: "Your One-Time Password (OTP)",
            html: `<div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
             <div style="text-align: center; padding: 10px 0;">
              <img src="your-logo-url.png" alt="Company Logo" style="max-width: 100px;"> 
              </div> 
              <div style="text-align: center; padding: 20px;"> <h1 style="color: #333333;">OTP Verification</h1> <p style="color: #666666; font-size: 16px; line-height: 1.5;">Dear User,</p> <p style="color: #666666; font-size: 16px; line-height: 1.5;">Thank you for registering with us. Please use the following One-Time Password (OTP) to complete your verification process. This OTP is valid for the next 10 minutes.</p> <div style="font-size: 24px; color: #333333; margin: 20px 0;"><strong>${otp}</strong></div> <p style="color: #666666; font-size: 16px; line-height: 1.5;">Please do not share this OTP with anyone. If you did not request this, please ignore this email.</p> </div> <div style="text-align: center; padding: 10px 0; color: #999999; font-size: 14px;"> <p>&copy; 2024 LearnSphere. All rights reserved.</p> </div> </div>`
        };
        const saltRounds = 10;
        const hashedOTP = await bcrypt.hash(otp, saltRounds);
        const studentWithOTP = new UserOTPVerification({
            userId: _id,
            otp: hashedOTP,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000,
        });
        await studentWithOTP.save();
        await transporter.sendMail(mailOption);
    } catch (error) {
        console.error("Error sending OTP email:", error.message);
    }
};

router.post("/verifyOtp", async (req, res) => {
    try {
        let { userId, otp } = req.body;
        if (!userId || !otp) {
            throw Error("Empty otp details are not allowed");
        }
        else {
            const UserOTPVerificationRecords = await UserOTPVerification.find({
                userId,
            });
            if (UserOTPVerificationRecords.length <= 0) {
                throw new Error("Account record doesn't exist or has been verified already. please sign up or log in.")
            }
            else {
                const { expiresAt } = UserOTPVerificationRecords[0];
                const hashedOTP = UserOTPVerificationRecords[0].otp;
                if (expiresAt < Date.now()) {
                    await UserOTPVerification.deleteMany({ userId })
                    throw new Error("Code has expired. plese request again");
                }
                else {
                    const validOtp = await bcrypt.compare(otp, hashedOTP);

                    if (!validOtp) {
                        throw new Error("Invalid code passed. Check your indox.");
                    }
                    else {
                        await Student.updateOne({ _id: userId }, { verified: true });
                        await UserOTPVerification.deleteMany({ userId })
                        res.json({
                            status: "Verified",
                            message: "USER email verified successfully",
                        })
                    }
                }
            }
        }
    } catch (error) {
        res.json({
            status: "failed",
            message: error.message,
        })
    }
})

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
