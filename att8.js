let nomes = ["João", "Maria", "Pedro", "Ana", "Lucas"];
let vendas = [1000, 2000, 800, 2500, 900];

let soma = 0;

for (let i = 0; i < vendas.length; i++) {
    soma += vendas[i];
}

let media = soma / vendas.length;

let maior = 0;
let destaque = "";

for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] > maior) {
        maior = vendas[i];
        destaque = nomes[i];
    }
}

console.log(`Média: ${media}`);
console.log(`Destaque: ${destaque}`);

for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] < media * 0.7) {
        console.log(`Abaixo da meta: ${nomes[i]}`);
    }
}
