const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/e-health-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Import Patient model (adjust the path as needed)
const Patient = require('./models/patient.model');

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/scan', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'scan.html'));
});

// Example API endpoint to fetch patient data by QR code
app.get('/api/patient', async (req, res) => {
    const { qrCode } = req.query;

    try {
        // Find patient by QR code in MongoDB
        const patient = await Patient.findOne({ qrCode });

        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        // Return patient data
        res.json(patient);
    } catch (err) {
        console.error('Error fetching patient:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Serve patient.html and patient.js (for displaying patient data)
app.get('/patient', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'patient.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
