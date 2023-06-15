/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

const colorTranslation = (color) => {
  switch (color) {
    case "green":
      console.log(`Tradução da cor ${color} é verde.`);
      break;
    case "black":
      console.log(`Tradução da cor ${color} é preto.`);
      break;
    case "white":
      console.log(`Tradução da cor ${color} é branco.`);
      break;
    case "blue":
      console.log(`Tradução da cor ${color} é azul.`);
      break;
    case "gray":
      console.log(`Tradução da cor ${color} é cinza.`);
      break;
    default:
      console.log("Cor inválida!");
  }
};
colorTranslation("blue");

