/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let number = 10;
let fibonacci = [0,1]; //Inicializando a sequência de Fibonacci com os primeiros dois números

while( fibonacci[fibonacci.length - 1] < number) {
    let nextNumber = fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
}
console.log("Sequência de Fibonacci até", number + ":");
console.log(fibonacci.join(", "));
// console.log(fibonacci);



