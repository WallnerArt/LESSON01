// Массивы чисел
const numbers1 = [2, 4, 6, 8, 10];
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = [1, 2, 3, 4, 7];
const numbers4 = [10, 15, 20, 25, 30];

// Функция для отображения результатов
function displayResults() {
  // Задача 1
  const task1List = document.getElementById("task1");
  task1List.innerHTML = "";

  for (let number of numbers1) {
    const doubledNumber = number * 2;
    const listItem = document.createElement("li");
    listItem.textContent = doubledNumber;
    task1List.appendChild(listItem);
  }

  // Задача 2
  const task2List = document.getElementById("task2");
  task2List.innerHTML = "";

  const firstElement = numbers2[0];
  const lastElement = numbers2[numbers2.length - 1];

  numbers2[0] = lastElement;
  numbers2[numbers2.length - 1] = firstElement;

  for (let number of numbers2) {
    const listItem = document.createElement("li");
    listItem.textContent = number;
    task2List.appendChild(listItem);
  }

  // Задача 3
  const task3Element = document.getElementById("task3");
  let foundFive = false;

  for (let number of numbers3) {
    if (number === 5) {
      foundFive = true;
      break;
    }
  }

  task3Element.textContent = foundFive ? "5 Найдено" : "5 Отсутствует";

  // Задача 2*
  const task4Element = document.getElementById("task4");
  let sumOfNumbers = 0;

  for (let number of numbers4) {
    sumOfNumbers += number;
  }

  const average = sumOfNumbers / numbers4.length;
  task4Element.textContent = `Среднее значение: ${average}`;
}

// Вызов функции
displayResults();
