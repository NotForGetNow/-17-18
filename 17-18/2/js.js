function okruglenie(num1, num2) {
    if(num2 === 0) {
        return 'число меньше нуля'
    }
    let result = num1/num2
    let roundResult = Math.round(result * 100) / 100
    return `Получилось: ${roundResult}`
}

function calculateQuotient() {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let res = okruglenie(num1, num2)
    document.getElementById('result').textContent = res
}