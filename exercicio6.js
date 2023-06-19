/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

const pharmaProducts = [
  { name: "Aspirina", price: 10.99 },
  { name: "Paracetamol", price: 7.5 },
  { name: "Antibiótico", price: 25.99 },
  { name: "Vitamina C", price: 12.99 },
  { name: "Analgésico", price: 8.75 },
];

// const displayProducts = (products) => {
//   products.forEach((product) => {
//     console.log(`Medicamento: ${product.name} - Preço: R$ ${product.price.toString().replace(".", ",")}`);
//   });
// };
// displayProducts(pharmaProducts);

const totalProducts = (products) => {
  let qtdProducts = 0;
  let valueTotal = 0;

  products.forEach((product) => {
    qtdProducts++;
    valueTotal += product.price;

    console.log(`\nMedicamento: ${product.name}`);
    console.log(`Preço: R$ ${product.price.toString().replace(".", ",")}`);
  });

  console.log("\nQuantidade de produtos:", qtdProducts);
  console.log("Valor total: R$", valueTotal.toFixed(2).toString().replace(".", ","));
};
totalProducts(pharmaProducts);





