// Movimentação de peças de xadrez em JS

function main() {
  let i, j;
  let coluna;
  let linha;

  // Torre: move 5 casas à direita, começando em a1
  i = 1;
  coluna = 'a';
  linha = 1;
  console.log("Torre: Posição inicial (a1)");
  while (i <= 5) {
    coluna = String.fromCharCode(coluna.charCodeAt(0) + 1); // b, c, ...
    console.log(`Direita -> ${coluna}${linha}`);
    i++;
  }
  console.log("");

  // Bispo: move 5 casas na diagonal para cima e direita, começando em c1
  i = 1;
  coluna = 'c';
  linha = 1;
  console.log("Bispo: Posição inicial (c1)");
  do {
    coluna = String.fromCharCode(coluna.charCodeAt(0) + 1); // d, e, ...
    linha++; // 2, 3, ...
    console.log(`Cima, Direita -> ${coluna}${linha}`);
    i++;
  } while (i <= 5);
  console.log("");

  // Rainha: move 7 casas à esquerda, começando em h3
  coluna = 'h';
  linha = 3;
  console.log("Rainha: Posição inicial (h3)");
  for (i = 1; i <= 7; i++) {
    coluna = String.fromCharCode(coluna.charCodeAt(0) - 1); // g, f, ...
    console.log(`Esquerda -> ${coluna}${linha}`);
  }
  console.log("");

  // Cavalo: 2 casas para baixo (duas vezes) e depois 1 à esquerda na segunda iteração
  coluna = 'f';
  linha = 8;
  console.log("Cavalo: Posição inicial (f8)");
  for (i = 1; i <= 2; i++) {
    linha--; // 7, 6
    console.log(`Baixo -> ${coluna}${linha}`);

    j = i;
    // só entra quando i == 2, como no código em C
    while (j === 2) {
      coluna = String.fromCharCode(coluna.charCodeAt(0) - 1); // f -> e
      console.log(`Esquerda -> ${coluna}${linha}`);
      j++; // força saída
    }
  }
  console.log("");
}

// "main"
main();
