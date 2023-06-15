/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */
const words = ['programa', 'palavras','array', 'exibe','estrutura' ];

const displayWords = (array) => {
  array.forEach((word) => {
    if (word.length == 5) {
      console.log('cinco caracteres: ', word);
    }
  });
};
displayWords(words);

function showWords(words) {
  for (const word of words) {
    if (word.length > 5) {
       console.log(`mais de cinco caracteres: ${word}`);
    }
  }
}
showWords(words);
