let consumo = [];
let soma = 0;
let maior = -Infinity;
let diaMaior = 0;

for (let i = 0; i < 6; i++) {
    let litros = Number(prompt(`Dia ${i + 1}:`));
    consumo.push(litros);

    soma += litros;

    if (litros > maior) {
        maior = litros;
        diaMaior = i + 1;
    }
}
