function updateProfile() {
    const name = document.getElementById('nameInput').value;
    const college = document.getElementById('collegeInput').value;
    const course = document.getElementById('courseInput').value;
    const year = document.getElementById('yearInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;

    if (!name || !college || !course || !year || !email || !phone) {
        alert('Please fill out all fields.');
        return;
    }

    document.getElementById('name').textContent = name;
    document.getElementById('college').textContent = college;
    document.getElementById('course').textContent = course;
    document.getElementById('year').textContent = year;
    document.getElementById('email').textContent = email;
    document.getElementById('phone').textContent = phone;

    alert('Profile updated successfully!');
}

// Validation for email
document.getElementById('emailInput').addEventListener('input', function() {
    const emailInput = document.getElementById('emailInput');
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailValue)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
        emailInput.setCustomValidity('');
    }
});

// Validation for phone number
document.getElementById('phoneInput').addEventListener('input', function() {
    const phoneInput = document.getElementById('phoneInput');
    const phoneValue = phoneInput.value;
    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneValue)) {
        phoneInput.setCustomValidity('Please enter a valid 10-digit phone number.');
    } else {
        phoneInput.setCustomValidity('');
    }
});
