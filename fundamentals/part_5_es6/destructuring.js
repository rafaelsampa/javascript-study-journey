/**
 * 
 * A sintaxe de atribuição via desestruturação (destructuring assignment) é uma 
 * expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
 * 
 * Possíveis exercicios:
 * 
 * 1. Criar um array de números e usar a desestruturação para extrair os primeiros dois números em variáveis separadas.
 * 2. Criar um objeto com propriedades nome, idade e cidade, e usar a desestruturação para extrair essas propriedades em variáveis separadas.
 * 3. Criar um array de objetos representando pessoas, cada objeto deve conter as propriedades nome e idade. 
 *    Use a desestruturação para extrair o nome e a idade da primeira pessoa do array.
 * 
 * 
 * 
 * 
 * ***/





// EX 1: ==================================================== //
const [r, s] = [1, 2];
console.log(r); // 1
console.log(s); // 2

[r, s, ...rest] = [1, 2, 3, 4, 5];
console.log(r); // 1
console.log(s); // 2
console.log(rest); // [3, 4, 5]

({r, s} = {r: 1, s: 2});
console.log(r); // 1
console.log(s); // 2



// EX 2: Array destructuring ==================================== //
const foo = ["one", "two", "three"];

const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"



// EX 3: Valores Padrão ==================================== //
var a, b;

[a = 5, b = 7, c] = [1, 2, 10];
console.log(a); // 1
console.log(b); // 2
onsole.log(c); // 10



// EX 4: Object destructuring ==================================== //
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true








