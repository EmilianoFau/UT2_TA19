document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');

    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError');

    form.addEventListener('input', function(event) {
        validateField(event.target);
    });

    form.addEventListener('submit', function(event) {
        let isValid = true;

        isValid = validateField(nameInput) && isValid;
        isValid = validateField(passwordInput) && isValid;
        isValid = validateField(emailInput) && isValid;

        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateField(field) {
        let isValid = true;
        if (field.id === 'name') {
            if (field.value.trim() === '') {
                nameError.textContent = 'El nombre es obligatorio.';
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
        } else if (field.id === 'password') {
            if (field.value.length < 8) {
                passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
                passwordError.style.display = 'block';
                isValid = false;
            } else {
                passwordError.style.display = 'none';
            }
        } else if (field.id === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
                emailError.textContent = 'Por favor, ingrese un correo electrónico válido.';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
        }

        return isValid;
    }
});
