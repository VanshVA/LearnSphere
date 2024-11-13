const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

// MongoDB connection
connectDB();

// Default Route
app.get('/', (req, res) => {
    res.send('Server Working');
});

module.exports = app;