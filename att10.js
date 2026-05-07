let estoque = [
    { produto: "Mouse", quantidade: 10 },
    { produto: "Teclado", quantidade: 5 }
];

let total = 0;

for (let i = 0; i < estoque.length; i++) {
    total += estoque[i].quantidade;
}

console.log(`Total de itens: ${total}`);

