document.getElementById('open-signup').addEventListener('click', () => {
    window.location.href = 'signup.html';
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add login logic here, such as sending the data to the server
    // For now, we'll simulate successful login
    if (username === 'test' && password === 'test') {
        window.location.href = 'scan.html';
    } else {
        document.getElementById('login-error-message').textContent = 'Invalid username or password';
    }
});
