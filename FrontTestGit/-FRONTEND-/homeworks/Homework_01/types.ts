// Получаем элементы из DOM и указываем их типы
const numberInput = document.getElementById('numberInput') as HTMLInputElement; // Преобразуем к HTMLInputElement
const btnStart = document.getElementById('btn-start') as HTMLButtonElement; // Преобразуем к HTMLButtonElement
const resultDiv = document.getElementById('result') as HTMLDivElement; // Преобразуем к HTMLDivElement

// Функция delay с типом аргумента и возвращаемого значения
function delay(value: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (typeof value !== 'number') {
            reject('The argument is not a number'); // Отклоняем промис, если аргумент не число
            return;
        }

        setTimeout(() => {
            resolve(value * 5); // Умножаем значение на 5 и разрешаем промис через 5 секунд
        }, 5000);
    });
}

// Добавляем обработчик события для кнопки
btnStart.addEventListener('click', async () => {
    const value = Number(numberInput.value); // Преобразуем значение инпута в число

    try {
        const result = await delay(value); // Ожидаем результат функции delay
        resultDiv.textContent = `Результат: ${result}`; // Выводим результат
    } catch (error) {
        resultDiv.textContent = `Ошибка: ${error}`; // Выводим ошибку
    }
});
//Преобразование типов элементов DOM:

//Используем as HTMLInputElement, as HTMLButtonElement и as HTMLDivElement для указания типов элементов, получаемых с помощью document.getElementById. Это позволяет TypeScript знать, что именно эти элементы представляют собой.

//Функция delay с типизацией:

//Указываем, что функция принимает аргумент value типа number и возвращает Promise<number>. Это помогает TypeScript следить за типами и предотвращать ошибки.

//Обработчик события с асинхронной функцией:

//Используем асинхронную функцию для обработки события клика. Внутри функции преобразуем значение инпута в число с помощью Number().
//Используем try...catch для обработки успешного и неуспешного выполнения промиса, возвращаемого функцией delay.
