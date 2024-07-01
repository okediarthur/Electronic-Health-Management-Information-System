// Import necessary modules
const mongoose = require('mongoose');
const Patient = require('../models/patient.model'); // Adjust path as needed
const qr = require('qrcode');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected');
    generateQRCodeForPatients();
});

// Function to generate QR code and save as image
async function generateQRCode(text, filePath) {
    try {
        // Generate QR code as data URL
        const qrDataUrl = await qr.toDataURL(text);

        // Extract base64 data from the data URL
        const base64Data = qrDataUrl.replace(/^data:image\/png;base64,/, '');

        // Write QR code image to file
        fs.writeFileSync(filePath, base64Data, 'base64');
        
        console.log(`QR code saved to ${filePath}`);
    } catch (err) {
        console.error('Error generating QR code:', err);
    }
}

// Function to generate QR codes for all patients
async function generateQRCodeForPatients() {
    try {
        const patients = await Patient.find({}); // Fetch all patients from MongoDB

        // Iterate over each patient and generate/save QR code
        patients.forEach(patient => {
            const qrText = `Patient ID: ${patient._id}, Name: ${patient.name}, Date of Registration: ${patient.dateOfRegistration}`;
            const filePath = path.join(__dirname, '..', 'qrcodes', `${patient._id}.png`); // Adjust path as needed
            generateQRCode(qrText, filePath);
        });

        console.log('QR codes generated for all patients');
    } catch (err) {
        console.error('Error generating QR codes:', err);
    } finally {
        mongoose.disconnect(); // Disconnect from MongoDB
    }
}
