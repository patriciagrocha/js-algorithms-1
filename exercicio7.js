/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */

let nameList = ['Rosa', 'Laura','Karol','Vera']

const adicionarElemento = (names, name) => {
    names.push(name);
    console.log('Array atualizado:',nameList);
}
adicionarElemento(nameList,'Joana');

const removerUltimoElemento = (names) => {
   let nomeRemovido = names.pop();
   console.log('Elemento removido:', nomeRemovido);
}
removerUltimoElemento(nameList);

const removerElementosIntervalo = (names) => {
    let intervaloRemovido = names.slice(1, names.length - 1);
    console.log('Intervalo removido:', intervaloRemovido);
}
removerElementosIntervalo(nameList);

