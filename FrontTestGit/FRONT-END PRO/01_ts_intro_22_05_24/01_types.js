// BOOLEAN
var isLoading;
isLoading = true;
isLoading = false;
//NUMBER  
//isLoading = 42; --ошибка типизации
var num = 42; // Логическое ИЛИ
num = 'hello';
// STRING
// let str: 'hello world!' | 'Goodbye!' = 'hello world!';
var str = 'hello world!';
console.log(str);
// ARRAY 
var primes1 = [2, 3, 5, 7];
var primes2 = [11, 13, 17, 19];
primes2.push(123); // [11, 13, 17, 19, 123]
primes2.forEach(function (e, i) { return console.log(e, i); });
//FUNCTION
var sum = function (a, b) { return a + b; };
console.log(sum(10, 5));
//ARRAY
var primes3 = [2, 3, 5, 7, 'qwerty'];
var primes4 = [2, 3, 5, 7];
var primes5 = [2, 3, 5, 7];
primes5.forEach(function (e, i) { return console.log(e); });
var primes6 = [{ age: 20 }, { age: 15 }, { age: 3 }];
var primes7 = [{ age: 20 }, 12, '34'];
if (typeof (primes7[0]) == "object") {
    primes7[0].age = 17;
}
var obj2 = {
    age: 58,
    name: 'Tigran'
};
// если ключа нет, то js создаёт данный ключ со значением undefined
// console.log(obj2.address);
var obj = {
    name: "John",
    age: 35,
    address: {
        city: "NY",
        street: "Roosevelt",
        house: 111,
    },
};
