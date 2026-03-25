/**
 * 
 * (Esse modulo não tinha exercícios, então criei alguns para praticar o uso de rest e spread)
 * 
 * Usando operadores de rest e spread para manipular arrays e objetos.
 * 
 * 1. Criar um novo array usando um array existente como parte dele, usando o operador de spread.
 * 2. Criar um novo objeto usando um objeto existente como parte dele, usando o operador de spread.
 * 3. Criar uma função que aceita um número variável de argumentos e retorna a soma de todos eles, usando o operador de rest.
 * 4. Criar uma função que aceita um número variável de argumentos e retorna um array com todos os argumentos, usando o operador de rest.
 * 5. Usando "push" para adicionar elementos a um array.
 * 
 * 
 * 
*/



// 1. Criar um novo array usando um array existente como parte dele, usando o operador de spread.
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // [1, 2, 3, 4, 5, 6]

// 2. Criar um novo objeto usando um objeto existente como parte dele, usando o operador de spread.
const obj1 = { 
    a: 1,
    b: 2 
};
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// 3. Criar uma função que aceita um número variável de argumentos e retorna a soma de todos eles, usando o operador de rest.
function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // The reduce method iterates over the array
    // 'accumulator' holds the running total
    // 'currentValue' is the current number in the iteration
    // The '0' is the initial value of the accumulator
}
console.log(sum(1, 2, 3)); // 6

// 4. Criar uma função que aceita um número variável de argumentos e retorna um array com todos os argumentos, usando o operador de rest.
function collectArgs(...args) {
    return args;
}
console.log(collectArgs(1, 'hello', true)); // [1, 'hello', true]

// 5. Usando "push" para adicionar elementos a um array.
const myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]


// Outro exempplo =========================== //
var num1 = { par: 'divide por 2', x: 42 };
var num2 = { impar: 'nao divide', y: 13 };

var clone_de_num1 = { ...num1 };
// Object { par: 'divide por 2', x: 42 }

var fusao_dos_num = { ...num1, ...num2 };
// Object { par: 'divide por 2', x: 42, impar: 'nao divide', y: 13 }

var fusao_dos_num2 = { ...num2, ...num1 };
// Object { impar: 'nao divide', y: 13, par: 'divide por 2', x: 42 }

