const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Get patient data by QR code
router.get('/patients/:qrCode', async (req, res) => {
    const qrCode = req.params.qrCode;
    try {
        const patient = await Patient.findOne({ qrCode });
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update patient data
router.put('/patients/:qrCode', async (req, res) => {
    const qrCode = req.params.qrCode;
    try {
        const updatedPatient = await Patient.findOneAndUpdate({ qrCode }, req.body, { new: true });
        if (!updatedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(updatedPatient);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
