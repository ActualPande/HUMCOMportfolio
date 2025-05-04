// Function to validate the form inputs
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorDiv = document.getElementById("formError");

    if (name === "" || email === "" || message === "") {
        errorDiv.textContent = "All fields are required.";
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorDiv.textContent = "Please enter a valid email.";
        return false;
    }

    errorDiv.textContent = "";
    alert("Message sent successfully");
    return true;
}

//dark mode/ light mode toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeToggle.classList.remove('btn-outline-light');
        themeToggle.classList.add('btn-outline-dark');
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
    } else {
        themeToggle.classList.remove('btn-outline-dark');
        themeToggle.classList.add('btn-outline-light');
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
    }
});

function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.body.classList.toggle('light-mode', theme === 'light');

    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    applyTheme(savedTheme);
});

const toggleButton = document.getElementById('themeToggle');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}

function toggleCode(targetId) {
    const sections = document.querySelectorAll('.collapse');
    sections.forEach(section => {
        if (section.id !== targetId) {
            section.classList.remove('show');
        }
    });
}


