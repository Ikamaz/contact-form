document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    document.querySelectorAll('.error').forEach(function(el) {
        el.style.display = 'none';
    });

    const firstName = document.getElementById('first-name');
    if (firstName.value.trim() === '') {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    const lastName = document.getElementById('last-name');
    if (lastName.value.trim() === '') {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const checkboxes = document.querySelectorAll('input[name="enquiry-type"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (!isChecked) {
        document.getElementById('queryTypeError').style.display = 'block';
        isValid = false;
    }

    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    const consent = document.getElementById('consent');
    if (!consent.checked) {
        document.getElementById('consentError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});
