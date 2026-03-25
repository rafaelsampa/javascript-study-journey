/**
 * 
 * Parte 1
 * 
 * 1. Crie uma classe Automovel com as seguintes caracteristicas
 *    1.1. Deve possuir os seguintes atributos
 *        1. nome
 *        2. marca
 *        3. modelo
 *        4. paisOrigem
 *    2.1. Os atributos devem ser inicializados através do construtor da classe
 *    3.1. Ter uma função getAutomovel e retornar todos os atributos do Automovel
 * 2. Crie uma lista com 2 ou mais automoveis
 * 3. Utilize **FOR** ou **FOR OF** e imprima a cada execução o nome e marca do automóvel
 * 4. Dentro do FOR ou FOR OF ( Item 3 ) faça um **FOR IN** e imprima também todas as keys
 *  **"chaves"** do objeto de automóvel.
 * 
 * Parte 2
 * 
 * 1. Crie um objeto de automovel (com os mesmos atributos de 1.1)
 * 2. Logo após sua criação, adicione um atributo de nome "cor" e atribua-lhe algum valor
 * 3. Remova o atributo paisOrigem do objeto
 * 
 * ***/

/***
 * RASCUNHO DE ANOTAÇÕES =================================================================== //
 * 
*/

// Parte 1 =================================================================== //
// 1.
class Automovel {
    // 1.1. e 2.1.
    constructor(nome, marca, modelo, paisOrigem){
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.paisOrigem = paisOrigem;
    }

    // 3.1. 
    getAutomovel(){ 
        // Assim eu retorno o objeto inteiro
        return {
            nome: this.nome,
            marca: this.marca,
            modelo: this.modelo,
            paisOrigem: this.paisOrigem
        }
    }
    getAutomovel_string(){
        // Assim eu retorno uma string formatada
        return `Nome: ${this.nome}, Marca: ${this.marca}, Modelo: ${this.modelo}, País de Origem: ${this.paisOrigem}`;
    }

}

// 2.
const listAutomoveis = [
    new Automovel("Tcross", "VW", "SUV", "Brasil"),
    new Automovel("Up", "VW", "Hatch", "Brasil"),
    new Automovel("Fusca", "VW", "Sedan", "Brasil")
]


// 3. 
for(const automovel_var_aux of listAutomoveis){
    console.log(`Nome: ${automovel_var_aux.nome}`, `, Marca: ${automovel_var_aux.marca}`);
    // 4.
    for(const key_var_aux in automovel_var_aux){
        //console.log(`Key: ${key_var_aux}`);
        console.log(`Key: ${key_var_aux} | Valor: ${automovel_var_aux[key_var_aux]}`);
    }
    console.log("=====================================");
}

// Parte 2 =================================================================== //
// 1. e 2. 

// Primeira forma => Adiciona um atributo novo a um objeto.
const obj_meu_carro1 = {
    nome: "Carro1",
    marca: "Marca1",
    modelo: "Modelo1",
    paisOrigem: "Algum País"
}
console.log(obj_meu_carro1);
obj_meu_carro1.cor = "Azul";
console.log(obj_meu_carro1);
// execute => node reserved_words.js

console.log("\n=======================================================\n")
// Segunda Forma => Adicona um atributo novo a um objeto criado apartir de uma classe. 
const obj_meu_carro2 = new Automovel("Carro Novo", "Marca Custumizada", "Modelo Doido", "Brasil");
console.log(obj_meu_carro2);
obj_meu_carro2.cor = "Vermelho";
console.log(obj_meu_carro2);

// 3. 
delete obj_meu_carro2.paisOrigem;
console.log(obj_meu_carro2);












