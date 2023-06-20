/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */


const calculate = (num1, num2, fn) => {    
    return fn(num1, num2); 
}

const sum = (a, b) => {
    let result = a + b;
    return result;
}
const sub = (a, b) => {
    let result = a - b;
    return result;
}
const mult = (a, b) => {
    let result = a * b;
    return result;
}
const div = (a, b) => {
    let result = a / b;
    return result.toFixed(2);
}
console.log(calculate(2,9,sum));
console.log(calculate(2,4,sub));
console.log(calculate(2,10,mult));
console.log(calculate(2,8,div));




