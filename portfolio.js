const contactForm = document.getElementById('contactForm');
document.getElementById("resumeButton").addEventListener("click", function() {
    window.open("C:/Resume.pdf", "_blank");
});

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
    }
    alert('Message sent successfully!');
    contactForm.reset();
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}