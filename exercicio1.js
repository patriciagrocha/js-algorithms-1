/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */

const age = 59;

if(age >=0 && age <= 12) {
    console.log('Faixa etária: criança');
} else if (age > 12 && age <= 17) {
    console.log('Faixa etária: adolescente');     
} else if (age > 17 && age <= 59) {
    console.log('Faixa etária: adulto'); 
} else if (age >= 60) {
    console.log('Faixa etária: idoso'); 
} else {
    console.log('Digite uma idade válida!'); 
}