


// 1. O nosso CALLBACK (O "manual de instruções")
// Esta função só tem um objetivo: receber dois números e multiplicar.
function multiplicar(a, b) {
    return a * b;
}

// 2. A Função PRINCIPAL (A Calculadora)
// Ela recebe os números e a instrução (o callback) do que fazer com eles.
function calculadoraTeste1(numero1, numero2, multiplicar) {
    console.log("Iniciando a conta...");
    
    // Aqui a mágica acontece! A calculadora usa o "manual" (callback) 
    // passando os números para ele.
    const resultado = multiplicar(numero1, numero2);
    
    console.log("O resultado é: " + resultado);
}

// 3. Executando:
// Nós chamamos a calculadora e passamos a regra junto. 
// Repare que passamos o nome da função SEM os parênteses ().
calculadora(5, 4, multiplicar);

// teste no terminal

// A função principal ainda é a mesma
function calculadoraTeste2(numero1, numero2, multiplicar) {
    console.log("Iniciando a conta...");
    const resultado = multiplicar(numero1, numero2);
    console.log("O resultado é: " + resultado);
}

// Executando com Arrow Function:
// O `(a, b) => a * b` é a nossa função de multiplicação (Callback)
calculadora(5, 4, (a, b) => a * b);

// teste no terminal

