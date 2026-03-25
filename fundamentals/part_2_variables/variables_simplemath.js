/***
1. Declarar uma variável (imutável) com seu nome
2. Declarar uma variável (imutável) se o dia está chovendo ou não
3. Declarar uma variável com o ano que você nasceu/data marcante por algum motivo
4. Declarar uma variável com idade ou número qualquer (imutável) e depois atribua seu valor com outro numero
5. Crie uma lista numérica de 1 a 10
6. Crie um objeto (dicionário) com dados de um aluno (dados aleatórios/fictícios)
7. Crie um objeto de nome dados com as variaveis (chave-valor) dos pontos 1, 2, 3 e 4.
8. Declare uma variável x com valor 10 e multiplique por um número inteiro qualquer.
9. Crie uma lista de objetos, com base no ponto 6
10. Declare uma variável numérica e multiplique por outro número (qualquer número)
***/

/* 
RASCUNHO DE ANOTAÇÕES =================================================================== // 

- const e let
    - const é imutável, ou seja, não pode ser reatribuida, mas o valor dentro dela pode ser mutável, como um objeto ou uma lista.
    - let é mutável, ou seja, pode ser reatribuida, e o valor dentro dela também pode ser mutável, como um objeto ou uma lista.

*/


// 1. 
const imutable_name = "Rafael Sampaio e Silva";

// 2.
const raining = false;

// 3.
let birthYear = 2003;

// 4.
let age = 22;

// 5.
let listNumbers = [1,2,3,4,5,6,7,8,9,10];

// 6.
const student = {
    name: "Gabriel Martins",
    age: 22,
    course: "Computer Science"

}

// 7.
const dados = { // isso é um objeto
    name: imutable_name,
    weather: raining,
    year: birthYear,
    age: age
}

// 8.
let x = 10;
x = x * 5;
console.log(x); // 50

// 9.

const students = [
    {
        student
    },
    {
        name: "Roberto Regis",
        age: 21,
        course: "Computer Science"
    },
    {
        name: "Victor Hugo",
        age: 21,
        course: "Computer Science"
    }
];
console.log(students);

// 10.
let variavel_numerica = 67;
variavel_numerica = variavel_numerica * 2;
console.log(variavel_numerica);





