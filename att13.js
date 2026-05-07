const prompt = require('prompt-sync')();

let estufa = [];
let soma = 0;
let maior =0;
let alerta = 0;


for(let i=0;i<6;i++){
    temp = parseFloat(prompt("Digite a temperatura do sensor " + (i+1) + ": "));
    estufa.push(temp);

    soma += temp;

    if(i === 0 || temp > maior){
        maior = temp;
    }

    if (temp>35){
        alerta++;
    }
}

let media = soma / estufa.length;

console.log("\n ===== RELATÓRIO =====");
console.log("Temperatura média: " + media.toFixed(2) + "°C");
console.log("Maxima Registrada: " + maior + "°C");
console.log("Sensores em Alerta: " + alerta);


