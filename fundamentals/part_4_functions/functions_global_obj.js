

/****
Exercicio Aula 4

Callbacks, Global Object, Classes

1. Criar classe Automovel com os atributos
    1. nome
    2. marca
    3. modelo
    4. paisOrigem
    5. tipoCombustivel
    6. Criar função para retornar seus atributos específicos
    

2. Criar classe Carro com os atributos

1. velocidadeMax
2. numeroRodas
3. temStep
4. ocupantes
5. Criar função para retornar seus atributos específicos

3. Criar classe moto com os atributos

1. velocidadeMax
2. numeroRodas
3. ocupantes
4. Criar função para retornar seus atributos específicos
***/




class Automovel{
    constructor(nome, marca, modelo, paisOrigem, tipoCombustivel){
        this.nome = nome,
        this.marca = marca,
        this.modelo = modelo,
        this.paisOrigem = paisOrigem,
        this.tipoCombustivel = tipoCombustivel
    }
    getAutomovel(){
        return {
            nome: this.nome,
            marca: this.marca,
            modelo: this.modelo,
            paisOrigem: this.paisOrigem,
            tipoCombustivel: this.tipoCombustivel
        }
    }
}
// class Carro extends Automovel{} tambem é uma forma de fazer como fazemos em Java, traendo atribuitos da classe pai,
// mas como o exercicio pede para criar uma classe com atributos especificos.
class Carro {
    constructor(velocidadeMax, numeroRodas, temStep, ocupantes){
        this.velocidadeMax = velocidadeMax,
        this.numeroRodas = numeroRodas,
        this.temStep = temStep,
        this.ocupantes = ocupantes
    }
    getCarro(){
        return {
            velocidadeMax: this.velocidadeMax,
            numeroRodas: this.numeroRodas,
            temStep: this.temStep,
            ocupantes: this.ocupantes
        }
    }
}
// Talvez seja melhor criar uma classe "veiculo" e depois criar as classes "carro" e "moto" extends "veiculo", mas vamos como o exercicio pede.
class Moto {
    constructor(velocidadeMax, numeroRodas, ocupantes){
        this.velocidadeMax = velocidadeMax,
        this.numeroRodas = numeroRodas,
        this.ocupantes = ocupantes
    }
    getMoto(){
        return {
            velocidadeMax: this.velocidadeMax,
            numeroRodas: this.numeroRodas,
            ocupantes: this.ocupantes
        }
    }
}




















