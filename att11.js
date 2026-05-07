const prompt = require('prompt-sync')();

let nomes = [];

let i = 0;
while (i < 5) {
    let nome = prompt("Digite um nome: ");
    nomes.push(nome);
    i++;
}

let j = 0;
let encontrado = false;

while (j < nomes.length) {
    if (nomes[j] === "Ricardo") {
        console.log("Usuário encontrado");
        encontrado = true;
        break; 
    }
    j++;
}

if (!encontrado) {
    console.log("Não cadastrado");
}