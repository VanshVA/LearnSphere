const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const bodyParser = require("body-parser");
const authRoutes = require("./Routes/authentication"); 
const connectDB = require('./Config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

// MongoDB connection
connectDB();

// Routes
app.use("/auth", authRoutes); // Mount the authentication routes under the /auth path

// Default Route
app.get('/', (req, res) => {
    res.send('Server Working');
});

module.exports = app;