document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Add sign-up logic here, such as sending the data to the server
    // For now, we'll simulate successful sign-up
    alert("Sign-up successful!");
    window.location.href = 'login.html';
});
