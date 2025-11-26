
console.log("=== Movimentos de Peças no Xadrez ===
");

// Torre: Move-se 5 casas à direita
let coluna = 'a';
let linha = 1;
console.log("Torre: Posição inicial (a1)");
for (let i = 1; i <= 5; i++) {
    coluna = String.fromCharCode(coluna.charCodeAt(0) + 1);
    console.log(`Direita -> ${coluna}${linha}`);
}
console.log("
");

// Bispo: Move-se 5 casas na diagonal (cima e direita)
coluna = 'c';
linha = 1;
console.log("Bispo: Posição inicial (c1)");
let i = 1;
do {
    coluna = String.fromCharCode(coluna.charCodeAt(0) + 1);
    linha++;
    console.log(`Cima, Direita -> ${coluna}${linha}`);
    i++;
} while (i <= 5);
console.log("
");

// Rainha: Move-se 7 casas à esquerda
coluna = 'h';
linha = 3;
console.log("Rainha: Posição inicial (h3)");
for (i = 1; i <= 7; i++) {
    coluna = String.fromCharCode(coluna.charCodeAt(0) - 1);
    console.log(`Esquerda -> ${coluna}${linha}`);
}
console.log("
");

// Cavalo: Move-se 2 casas para baixo e 1 à esquerda
coluna = 'f';
linha = 8;
console.log("Cavalo: Posição inicial (f8)");
for (i = 1; i <= 2; i++) {
    linha--;
    console.log(`Baixo -> ${coluna}${linha}`);
    if (i === 2) {
        coluna = String.fromCharCode(coluna.charCodeAt(0) - 1);
        console.log(`Esquerda -> ${coluna}${linha}`);
    }
}
