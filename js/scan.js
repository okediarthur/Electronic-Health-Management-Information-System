function scanQRCode() {
    const qrInput = document.getElementById('qrInput').value;

    // Simulate scanning QR code and retrieving data
    const patientData = {
        name: "John Doe",
        age: 30,
        dateOfRegistration: "2022-01-01",
        dateOfRecentMedication: "2023-01-01",
        dateOfNextMedication: "2023-06-01",
        address: "123 Main St",
        phoneNumber: "123-456-7890",
        nextOfKin: "Jane Doe",
        nextOfKinContact: "098-765-4321",
        prescription: "Medication A",
        dosage: "2 pills daily"
    };

    document.getElementById('qrResult').innerHTML = "QR Code Scanned: " + qrInput;
    setTimeout(() => {
        window.location.href = 'patient.html'; // Navigate to patient information page
    }, 1000);
}
