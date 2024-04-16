const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');

function add() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = num1 + num2;
}

function subtract() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = num1 - num2;
}

function multiply() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = num1 * num2;
}

function divide() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = num1 / num2;
}

submitButton.addEventListener('click', function() {
  if (plusButton.classList.contains('active')) {
    add();
  } else if (minusButton.classList.contains('active')) {
    subtract();
  } else if (multiplyButton.classList.contains('active')) {
    multiply();
  } else if (divideButton.classList.contains('active')) {
    divide();
  }
});

plusButton.addEventListener('click', function() {
  setActiveButton(plusButton);
});

minusButton.addEventListener('click', function() {
  setActiveButton(minusButton);
});

multiplyButton.addEventListener('click', function() {
  setActiveButton(multiplyButton);
});

divideButton.addEventListener('click', function() {
  setActiveButton(divideButton);
});

function setActiveButton(button) {
  plusButton.classList.remove('active');
  minusButton.classList.remove('active');
  multiplyButton.classList.remove('active');
  divideButton.classList.remove('active');
  button.classList.add('active');
}
