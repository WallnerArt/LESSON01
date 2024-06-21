// BOOLEAN
let isLoading: boolean;
isLoading = true;
isLoading = false;

//NUMBER  
//isLoading = 42; --ошибка типизации

let num: number | string = 42;  // Логическое ИЛИ
num = 'hello';



// STRING
// let str: 'hello world!' | 'Goodbye!' = 'hello world!';
const str = 'hello world!';
console.log(str);

// ARRAY 

let primes1 = [2, 3, 5, 7];
const primes2 = [11, 13, 17, 19]

primes2.push(123); // [11, 13, 17, 19, 123]
primes2.forEach((e: number, i: number) => console.log(e, i));

//FUNCTION
const sum = (a: number, b: number): number => a + b;
console.log(sum(10, 5));

//ARRAY
let primes3: (number | string)[] = [2, 3, 5, 7, 'qwerty'];
let primes4: number[] | string[] | {age: number}[] = [2, 3, 5, 7];
const primes5: number [] = [2, 3, 5, 7];
primes5.forEach((e: number, i: number): void => console.log(e));
let primes6: number [] | string [] | {age: number} [] = [{age: 20}, {age: 15}, {age: 3}];
let primes7: (number | string | {age: number}) [] = [{age: 20}, 12, '34'];

if (typeof(primes7[0]) == "object") {
    primes7[0].age = 17;
}

// OBJECTS & INTERFACES

interface IObj {
    name: string;
    age: number;
    address?: IAddress;
  }
  interface IAddress {
    city: string;
    street: string;
    house: number;
  }
  const obj2: IObj = {
    age: 58,
    name: 'Tigran'
  };
  // если ключа нет, то js создаёт данный ключ со значением undefined
  // console.log(obj2.address);
  const obj: IObj = {
    name: "John",
    age: 35,
    address: {
      city: "NY",
      street: "Roosevelt",
      house: 111,
    },
  
  }
