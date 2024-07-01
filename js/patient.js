document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const qrCode = urlParams.get('qrCode');

    // Fetch patient data from backend
    fetch(`/api/patient?qrCode=${encodeURIComponent(qrCode)}`)
        .then(response => response.json())
        .then(patient => {
            // Populate form fields with patient data
            document.getElementById('patient-name').value = patient.name;
            document.getElementById('patient-age').value = patient.age;
            document.getElementById('date-of-registration').value = patient.dateOfRegistration;
            document.getElementById('phone-number').value = patient.phone;
            document.getElementById('address').value = patient.address;
            document.getElementById('next-of-kin').value = patient.nextOfKin;
            document.getElementById('next-of-kin-contact').value = patient.nextOfKinContact;
            document.getElementById('prescription').value = patient.prescription;
            document.getElementById('dosage').value = patient.dosage;
        })
        .catch(error => console.error('Error fetching patient data:', error));
});
