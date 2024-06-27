document.addEventListener('DOMContentLoaded', () => {
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

    document.getElementById('name').value = patientData.name;
    document.getElementById('age').value = patientData.age;
    document.getElementById('dateOfRegistration').value = patientData.dateOfRegistration;
    document.getElementById('dateOfRecentMedication').value = patientData.date
