function calcAge() {
    let userInput = document.getElementById('birth-date').value;
    let birthDate = new Date(userInput);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getMonth() < birthDate.getMonth())){
        age--;
    }

    let result = document.getElementById('result');
    result.textContent = `Возраст пользователя ${age} лет `;
}


