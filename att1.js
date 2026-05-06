const prompt = require('prompt-sync')();

const nomesProibidos = ["James Bond", "Idiana Jones", "Han Solo"];

let n1 = prompt("Digite aqui um nome: ");
let n2 = prompt("Digite aqui um nome: ");
let n3 = prompt("Digite aqui um nome: ");
let listOk = [];

if(nomesProibidos.indexOf(n1) != -1){
    console.log(`ALERTA: Segurança acionada para o visitante ${n1}!`);
}else{
    listOk.push(n1);
}
if(nomesProibidos.indexOf(n2) != -1){
    console.log(`ALERTA: Segurança acionada para o visitante ${n2}!`);
}else{
    listOk.push(n2);
}
if(nomesProibidos.indexOf(n3) != -1){
    console.log(`ALERTA: Segurança acionada para o visitante ${n3}!`);
}else{
    listOk.push(n3);
}

console.log(listOk);