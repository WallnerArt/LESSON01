const registrationForm = document.getElementById('registrationForm');
const messageElement = document.getElementById('message');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    if (password === repeatPassword) {
        messageElement.textContent = 'Данные отправлены!';
    } else {
        messageElement.textContent = 'Пароль и повторение пароля не совпадают!';
    }
});

