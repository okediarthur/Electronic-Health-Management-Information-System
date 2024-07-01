const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    qrCode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    dateOfRegistration: { type: Date, required: true },
    dateOfRecentMedication: { type: Date },
    dateOfNextMedication: { type: Date },
    address: { type: String },
    district: {type: String},
    contact: { type: String },
    nextOfKin: { type: String },
    nextOfKinContact: { type: String },
    prescription: { type: String },
    dosage: { type: String }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
