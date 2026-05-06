const prompt = require('prompt-sync')();

let mochila = [];

for (let i = 1; i <= 6; i++) {
    console.log("Você encontrou um item:");
    let item = prompt("Digite o nome do item: ");

    if (mochila.length < 4) {
        mochila.push(item);
        console.log("Item adicionado!");
    } else {
        console.log("Mochila cheia!");
        let resposta = prompt("Deseja descartar o primeiro item para pegar o novo? (S/N): ");

        if (resposta.toUpperCase() === "S") {
            let removido = mochila.shift();
            console.log("Item removido:", removido);

            mochila.push(item); 
            console.log("Novo item adicionado!");
        } else {
            console.log("Item ignorado!");
        }
    }
}

console.log("\n Conteúdo final da mochila:");
console.log(mochila);