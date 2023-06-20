/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 * Se você dividir por outro número que não seja 1 nem ele mesmo, vai dar quebrado.
 */

const number = 11;

const isPrime = (number) => {
    if (number <= 1) {
        console.log('Número 1 não é um número primo, pois ele tem apenas um divisor.');
        return;
    }
    let i = 2;

    do {
        if (number % i === 0) {
            console.log(`${number} não é número primo!`);
            return;
        }
        i++;
    } while (i <= Math.sqrt(number));
    
    console.log(`${number} é número primo!`);

    return
}
isPrime(1);
isPrime(7);
isPrime(8);
isPrime(number);


