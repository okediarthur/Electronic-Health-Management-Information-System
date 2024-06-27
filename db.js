const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-health-system', { useNewUrlParser: true, useUnifiedTopology: true });

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dateOfRegistration: Date,
    dateOfRecentMedication: Date,
    dateOfNextMedication: Date,
    address: String,
    phoneNumber: String,
    nextOfKin: String,
    nextOfKinContact: String,
    prescription: String,
    dosage: String
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
