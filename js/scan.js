// app.js or scan.js
async function scanQRCode() {
    const qrCode = document.getElementById('qrInput').value;
    try {
        const response = await fetch(`/api/patients/${qrCode}`);
        if (!response.ok) {
            throw new Error('Patient not found');
        }
        const patient = await response.json();
        populatePatientForm(patient);
    } catch (error) {
        console.error('Error fetching patient data:', error);
        alert('Patient not found or server error');
    }
}

function populatePatientForm(patient) {
    document.getElementById('name').value = patient.name;
    document.getElementById('age').value = patient.age;
    // Populate other fields similarly
    document.getElementById('patientInfo').style.display = 'block';
}

async function savePatient() {
    const qrCode = document.getElementById('qrInput').value;
    const formData = new FormData(document.getElementById('patientForm'));
    const patientData = Object.fromEntries(formData);

    try {
        const response = await fetch(`/api/patients/${qrCode}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientData)
        });
        if (!response.ok) {
            throw new Error('Failed to save patient data');
        }
        const updatedPatient = await response.json();
        populatePatientForm(updatedPatient);
        alert('Patient data updated successfully');
    } catch (error) {
        console.error('Error saving patient data:', error);
        alert('Failed to save patient data');
    }
}

function editPatient() {
    // Enable editing of input fields
    const form = document.getElementById('patientForm');
    Array.from(form.elements).forEach(input => {
        if (input.tagName.toLowerCase() === 'input' && input.id !== 'qrInput') {
            input.removeAttribute('readonly');
        }
    });
}

function exitPatient() {
    // Reset form and hide patient info
    document.getElementById('patientForm').reset();
    document.getElementById('patientInfo').style.display = 'none';
}
