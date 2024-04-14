let num = 42;  // number
let firstName = 'Eugen';  // string
const isProgrammer = true;  // boolean



//firstname = 'Max'

//alert()
//console.log('Test:', num, isProgrammer);
//console.log(num + 10);
//console.log(num - 10);
//console.log(num * 10);
//console.log(num / 10);
//console.log(num);

// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// console.log(num, num2)

//let num3 = (num + 10 * 2) / (5 - 1);
//console.log(num3);

//const fullName = firstName +'\n' + 'Wallner'
//console.log(fullName);

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');


console.log(input2.value);


//console.log(resultElement.textContent);
//resultElement.textContent = (42 - 2) / num;

const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;
//console.log(typeof sum);

submitBtn.onclick = function () {
    console.log('Hello Click');
}