const numberInput = document.getElementById('numberInput');
const btnStart = document.getElementById('btn-start');
const resultDiv = document.getElementById('result');

function delay(value) {
    return new Promise((resolve, reject) => {
        if (typeof value !== 'number') {
            reject('The argument is not a number');
            return;
        }

        setTimeout(() => {
            resolve(value * 5);
        }, 5000);
    });
}

btnStart.addEventListener('click', async () => {
    const value = Number(numberInput.value);

    try {
        const result = await delay(value);
        resultDiv.textContent = `Результат: ${result}`;
    } catch (error) {
        resultDiv.textContent = `Ошибка: ${error}`;
    }
});
