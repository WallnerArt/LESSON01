var isLoading = true;
isLoading = false;
// isLoading = '4'  TypeError - Typisierungsfehler
// Если типизация не прописана, то она принимается из дефолтного значения.
// Primitives types: boolean, number, string, null, undefined, void, any, bigInt, symbol
// stat = 'success'  TypesError - Typisierungsfehler
var num = 42;
num = 'hello';
var stat;
var stat = 'loading';
var notSure = 4;
if (typeof notSure === 'number') {
    var value = notSure;
}
// (number | string)[] - массив, состоящий из чисел или строк
// number | string[] - Либо число,либо массив строк
// number[] | string[] - массив, состоящий ТОЛЬКО из чисел или ТОЛЬКО из строк 
//const arr: string[] = ['one', 'two', 'three'];
//arr.push('five'); // Добавляем только строки
var arr = [1, 2, 3];
arr.push(5);
