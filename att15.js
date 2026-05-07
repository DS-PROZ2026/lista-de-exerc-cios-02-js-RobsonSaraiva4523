const prompt = require('prompt-sync')();

let manuten = [];
let total = 0;
let maior = 0;


for(let i=0;i<4;i++){
    custo = parseFloat(prompt("Digite aqui quanto foi o custo da maquina " + (i+1) + ": "));
    manuten.push(custo);

    total += custo;

    if( i === 0 || custo > maior){
        maior = custo;
    }
}

let media = total / manuten.length;

console.log("\n ==== RELATÓRIO ====");
console.log("Custo total: " + total.toFixed(2));
console.log("Custo Médio: " + media.toFixed(2));
console.log("Maior Custo: " + maior.toFixed(2));