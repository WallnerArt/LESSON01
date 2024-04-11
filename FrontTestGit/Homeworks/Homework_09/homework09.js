// Задача 1:
function getMaxNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Пример использования функции
const number1 = 10;
const number2 = 20;
const maxNumber = getMaxNumber(number1, number2);
console.log(maxNumber); // Ожидаемый результат: 20

 // Задача 2:
function first_n_chars(string, n) {
  if (n < 0 || n > string.length) {
    return "";
  }
  return string.substring(0, n);
}
function getFirstNSymbols(str, n) {
  return str.slice(0, n);
}
const str = "EUGEN, WALLNER!";
const result1 = getFirstNSymbols(str, 5);
const result2 = getFirstNSymbols(str, 10);
const result3 = getFirstNSymbols(str, 8);

console.log(result1); // Ожидаемый результат: "EUGEN"
console.log(result2); // Ожидаемый результат: "EUGEN, WAL "
console.log(result3); // Ожидаемый результат: "EUGEN, W"

  function checkElementInArray(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

// Задача 3:
const array = [1, 2, 3, 4, 5];
const elementToCheck = 3;
const result = checkElementInArray(array, elementToCheck);
console.log(result); // Ожидаемый результат: true

  function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Обмен значениями
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Задача 4:
const numbers = [5, 3, 8, 1, 2];
    console.log("Исходный массив:", numbers);
const sortedNumbers = bubbleSort(numbers);
    console.log("Отсортированный массив методом пузырька:", sortedNumbers);
