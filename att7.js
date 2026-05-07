let frota = [
    { modelo: "Volvo FH", km: 12000, revisao: 4 },
    { modelo: "Scania R450", km: 8000, revisao: 7 },
    { modelo: "Mercedes Actros", km: 15000, revisao: 8 },
    { modelo: "DAF XF", km: 5000, revisao: 3 },
    { modelo: "Iveco S-Way", km: 11000, revisao: 2 }
];


let frotaManutencao = [];


for (let i = 0; i < frota.length; i++) {
    let caminhao = frota[i];

    if (caminhao.km > 10000 || caminhao.revisao > 6) {
        frotaManutencao.push(caminhao);
    }
}

console.log("Veículos que precisam de manutenção:");

for (let i = 0; i < frotaManutencao.length; i++) {
    console.log(
        frotaManutencao[i].modelo +
        " | KM: " + frotaManutencao[i].km +
        " | Última revisão: " + frotaManutencao[i].revisao + " meses"
    );
}

console.log("\nTotal de veículos para manutenção:", frotaManutencao.length);