const url = '   ';
const data = {
    email: 'user@example.com',
    password: 'yourSecurePassword'
};

const json = JSON.stringify(data);

fetch(url, {
    method: 'POST',
    body: json,
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));


document.getElementById('registerForm').addEventListener('submit', function (event) {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        event.preventDefault();
        errorMessage.textContent = "PAROLLAR BIR HIL EMAS!";
    } else {
        errorMessage.textContent = "";
    }
});

