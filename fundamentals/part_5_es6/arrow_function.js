/**
 * 
 * 
 * 
 * 1. Criar exemplos de funcoes comuns e logo abaixo criar as mesmas funcoes usando arrow function.
 * 2. Criar uma função que recebe um array de números e retorna um novo array com cada 
 *    número multiplicado por 2, usando arrow function.
 * 3. Criar uma função que recebe um objeto com propriedades nome e idade, e retorna uma string
 *    formatada usando essas propriedades, usando arrow function.
 * 
 * 
 * 
 * **/

// 1. Criar exemplos de funcoes comuns e logo abaixo criar as mesmas funcoes usando arrow function.

// Função comum
function soma(a, b) {
    return a + b;
}

// Arrow function
const somaArrow = (a, b) => a + b;

// Função comum
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Arrow function
const saudacaoArrow = nome => `Olá, ${nome}!`;

// 2. Criar uma função que recebe um array de números e retorna um novo array com cada 
//    número multiplicado por 2, usando arrow function.

const multiplicarPorDois = numeros => numeros.map(numero => numero * 2);

// 3. Criar uma função que recebe um objeto com propriedades nome e idade, e retorna uma string
//    formatada usando essas propriedades, usando arrow function.

const formatarPessoa = pessoa => `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
