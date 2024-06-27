document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulated default credentials for testing
    const defaultUsername = 'testuser';
    const defaultPassword = 'testpass';
    
    if (username === defaultUsername && password === defaultPassword) {
        alert('Login successful! Redirecting...');
        window.location.href = 'scan.html'; // Redirect to scan page on successful login
    } else {
        alert('Invalid username or password');
    }
});
