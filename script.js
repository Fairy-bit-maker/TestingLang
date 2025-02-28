// Simple login validation and redirect
const validUsername = 'student';
const validPassword = 'password123';

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple username and password validation
    if (username === validUsername && password === validPassword) {
        // Hide the login page and show the dashboard
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('dashboard-section').style.display = 'block';
    } else {
        // Show error message for invalid login
        document.getElementById('login-error-message').style.display = 'block';
    }
});

// Simple alert for user interaction
function showAlert(section) {
    alert(`You clicked on ${section} section. Functionality coming soon!`);
}

// Logout functionality
function logout() {
    // Show the login page again
    document.getElementById('login-section').style.display = 'flex';
    document.getElementById('dashboard-section').style.display = 'none';
}

