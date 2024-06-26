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

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'))
});

app.get('/scan', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'scan.html'))
});

app.get('/patient', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'patient.html'))
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});