let isLoading: boolean = true;
isLoading = false;


// isLoading = '4'  TypeError - Typisierungsfehler
// Если типизация не прописана, то она принимается из дефолтного значения.
// Primitives types: boolean, number, string, null, undefined, void, any, bigInt, symbol
// stat = 'success'  TypesError - Typisierungsfehler


let num: number | string = 42;
num = 'hello';
let stat: 'loading';
let stat: 'loading' | 'success' | 'error' = 'loading';

let notSure: unknown = 4;
if (typeof notSure === 'number') {
    let value: number = notSure;
}

// (number | string)[] - массив, состоящий из чисел или строк
// number | string[] - Либо число,либо массив строк
// number[] | string[] - массив, состоящий ТОЛЬКО из чисел или ТОЛЬКО из строк 

//const arr: string[] = ['one', 'two', 'three'];
//arr.push('five'); // Добавляем только строки
const arr: number[] = [1, 2, 3];

arr.push(5);
