// Constantes
const LINHAS = 10;
const COLUNAS = 10;
const TAMANHO = 3;
const HABILIDADESLIN = 5;
const HABILIDADESCOL = 5;

// Matrizes globais
let matrizCone = Array.from({ length: HABILIDADESLIN }, () => Array(HABILIDADESCOL).fill(0));
let matrizCruz = Array.from({ length: HABILIDADESLIN }, () => Array(HABILIDADESCOL).fill(0));
let matrizOctaedro = Array.from({ length: HABILIDADESLIN }, () => Array(HABILIDADESCOL).fill(0));
let tabuleiro = Array.from({ length: LINHAS }, () => Array(COLUNAS).fill(0));

// Função auxiliar para entrada (navegador)
// Em Node, troque por readline.
function input(msg) {
  let resp = prompt(msg);
  return resp === null ? "" : resp;
}

function cone(show) {
  for (let i = 0; i < HABILIDADESLIN; i++) {
    for (let j = 0; j < HABILIDADESCOL; j++) {
      if (i === 0 && j === 2) {
        matrizCone[i][j] = 1;
      } else if (i === 1 && j >= 1 && j <= 3) {
        matrizCone[i][j] = 1;
      } else if (i === 2 && j >= 0 && j <= 4) {
        matrizCone[i][j] = 1;
      } else {
        matrizCone[i][j] = 0;
      }
    }
  }

  if (show) {
    console.log("Habilidade -> Cone de Fogo 🔥");
    for (let i = 0; i < HABILIDADESLIN; i++) {
      console.log(matrizCone[i].join(" "));
    }
    console.log("");
  }
}

function cruz(show) {
  for (let i = 0; i < HABILIDADESLIN; i++) {
    for (let j = 0; j < HABILIDADESCOL; j++) {
      if (i === 2 || j === 2) {
        matrizCruz[i][j] = 1;
      } else {
        matrizCruz[i][j] = 0;
      }
    }
  }

  if (show) {
    console.log("Habilidade -> Cruzada 💥");
    for (let i = 0; i < HABILIDADESLIN; i++) {
      console.log(matrizCruz[i].join(" "));
    }
    console.log("");
  }
}

function octaedro(show) {
  const centro = Math.floor(HABILIDADESLIN / 2);
  for (let i = 0; i < HABILIDADESLIN; i++) {
    for (let j = 0; j < HABILIDADESCOL; j++) {
      if (Math.abs(i - centro) + Math.abs(j - centro) <= 2) {
        matrizOctaedro[i][j] = 1;
      } else {
        matrizOctaedro[i][j] = 0;
      }
    }
  }

  if (show) {
    console.log("Habilidade -> Octaedro 🔷");
    for (let i = 0; i < HABILIDADESLIN; i++) {
      console.log(matrizOctaedro[i].join(" "));
    }
    console.log("");
  }
}

function inicializarTabuleiro() {
  for (let i = 0; i < LINHAS; i++) {
    for (let j = 0; j < COLUNAS; j++) {
      tabuleiro[i][j] = 0;
    }
  }
}

function exibirTabuleiro() {
  console.log("\nTabuleiro de Batalha Naval:\n");
  let header = "   ";
  for (let c = 0; c < COLUNAS; c++) {
    header += String.fromCharCode("A".charCodeAt(0) + c) + " ";
  }
  console.log(header);

  for (let l = 0; l < LINHAS; l++) {
    let linhaStr = (l + 1).toString().padStart(2, " ") + " ";
    for (let c = 0; c < COLUNAS; c++) {
      linhaStr += tabuleiro[l][c] + " ";
    }
    console.log(linhaStr);
  }
  console.log("");
}

function posicionarNavios() {
  const navioH = [3, 3, 3];
  const navioV = [3, 3, 3];
  const navioD1 = [3, 3, 3];
  const navioD2 = [3, 3, 3];

  let linhaH = 8, colunaH = 3;
  let linhaV = 7, colunaV = 0;
  let linhaD1 = 0, colunaD1 = 0;
  let linhaD2 = 0, colunaD2 = 9;
  let sobreposicao = 0;

  console.log("\n==> Navios posicionados nas coordenadas:\n");

  // Horizontal
  sobreposicao = 0;
  if (colunaH + 3 > 10) {
    console.log("Erro! Navio na Horizontal não cabe no tabuleiro.");
  } else {
    for (let i = 0; i < 3; i++) {
      if (tabuleiro[linhaH][colunaH + i] !== 0) {
        sobreposicao = 1;
        break;
      }
    }
    if (!sobreposicao) {
      let coords = "Navio Horizontal:➡️  ";
      for (let i = 0; i < 3; i++) {
        tabuleiro[linhaH][colunaH + i] = navioH[i];
        coords += `(${linhaH}, ${colunaH + i}) `;
      }
      console.log(coords);
    }
  }

  // Vertical
  sobreposicao = 0;
  if (linhaV + 3 > 10) {
    console.log("Erro! Navio na Vertical não cabe no tabuleiro.");
  } else {
    for (let i = 0; i < 3; i++) {
      if (tabuleiro[linhaV + i][colunaV] !== 0) {
        sobreposicao = 1;
        break;
      }
    }
    if (!sobreposicao) {
      let coords = "Navio Vertical:⬇️  ";
      for (let i = 0; i < 3; i++) {
        tabuleiro[linhaV + i][colunaV] = navioV[i];
        coords += `(${linhaV + i}, ${colunaV}) `;
      }
      console.log(coords);
    }
  }

  // Diagonal principal
  sobreposicao = 0;
  if (linhaD1 + 3 > 10 || colunaD1 + 3 > 10) {
    console.log("Erro! Navio na Diagonal Principal não cabe no tabuleiro.");
  } else if (linhaD1 !== colunaD1) {
    console.log("Erro! Posição inválida para Diagonal Principal. Linha e coluna devem ser iguais.");
  } else {
    for (let i = 0; i < 3; i++) {
      if (tabuleiro[linhaD1 + i][colunaD1 + i] !== 0) {
        sobreposicao = 1;
        break;
      }
    }
    if (!sobreposicao) {
      let coords = "Navio Diagonal Principal:↘️  ";
      for (let i = 0; i < 3; i++) {
        tabuleiro[linhaD1 + i][colunaD1 + i] = navioD1[i];
        coords += `(${linhaD1 + i}, ${colunaD1 + i}) `;
      }
      console.log(coords);
    }
  }

  // Diagonal secundária
  sobreposicao = 0;
  if (linhaD2 + 2 > 9 || colunaD2 - 2 < 0) {
    console.log("Erro! Navio na Diagonal Secundária não cabe no tabuleiro.");
  } else if (linhaD2 + colunaD2 !== 9) {
    console.log("Erro! Posição inválida para Diagonal Secundária. Linha + Coluna devem ser 9.");
  } else {
    for (let i = 0; i < 3; i++) {
      if (tabuleiro[linhaD2 + i][colunaD2 - i] !== 0) {
        sobreposicao = 1;
        break;
      }
    }
    if (!sobreposicao) {
      let coords = "Navio Diagonal Secundária:↙️  ";
      for (let i = 0; i < 3; i++) {
        tabuleiro[linhaD2 + i][colunaD2 - i] = navioD2[i];
        coords += `(${linhaD2 + i}, ${colunaD2 - i}) `;
      }
      console.log(coords);
    }
  }

  if (sobreposicao) {
    console.log("⚠️ Atenção! Os navios estão se sobrepondo!");
  }
}

function aplicarHabilidade(posLinha, posColuna, habilidade) {
  const centroLinha = Math.floor(HABILIDADESLIN / 2);
  const centroColuna = Math.floor(HABILIDADESCOL / 2);

  for (let i = 0; i < HABILIDADESLIN; i++) {
    for (let j = 0; j < HABILIDADESCOL; j++) {
      if (habilidade[i][j] === 1) {
        const alvoLinha = posLinha + i - centroLinha;
        const alvoColuna = posColuna + j - centroColuna;

        if (
          alvoLinha >= 0 && alvoLinha < LINHAS &&
          alvoColuna >= 0 && alvoColuna < COLUNAS
        ) {
          tabuleiro[alvoLinha][alvoColuna] = 5;
        }
      }
    }
  }
}

function instrucoes() {
  console.log("Instruções do Jogo:");
  console.log("1. Escolha uma habilidade para atacar.");
  console.log("2. A habilidade afetará uma área específica do tabuleiro.");
  console.log("3. O objetivo é atingir os navios inimigos.");
  console.log("4. Ao escolher uma habilidade, o jogo será iniciado automaticamente.");
  console.log("5. Boa sorte!\n");
  input("Pressione ENTER para voltar ao menu...");
}

function finalizar() {
  console.log("Obrigado por jogar! Até a próxima!");
  // Em navegador, apenas para; em Node, poderia usar process.exit(0)
}

function iniciar() {
  const linha = Math.floor(LINHAS / 2);
  const coluna = Math.floor(COLUNAS / 2);

  let opcaoStr = input(
    "============Menu de Habilidades============\n" +
    "Escolha uma habilidade para iniciar o jogo:\n" +
    "1. Cone de Fogo 🔥\n" +
    "2. Cruzada 💥\n" +
    "3. Octaedro 🔷\n" +
    "4. Sair do Jogo\n\n" +
    "Escolha uma opção: "
  );
  let opcao = parseInt(opcaoStr, 10);

  console.log("");

  switch (opcao) {
    case 1:
      cone(true);
      posicionarNavios();
      aplicarHabilidade(linha, coluna, matrizCone);
      exibirTabuleiro();
      input("Pressione ENTER para voltar ao menu de habilidades...");
      iniciar();
      break;
    case 2:
      cruz(true);
      posicionarNavios();
      aplicarHabilidade(linha, coluna, matrizCruz);
      exibirTabuleiro();
      input("Pressione ENTER para voltar ao menu de habilidades...");
      iniciar();
      break;
    case 3:
      octaedro(true);
      posicionarNavios();
      aplicarHabilidade(linha, coluna, matrizOctaedro);
      exibirTabuleiro();
      input("Pressione ENTER para voltar ao menu de habilidades...");
      iniciar();
      break;
    case 4:
      console.log("Obrigado por jogar! Até a próxima!");
      console.log("Saindo do jogo...");
      break;
    default:
      console.log("Opção inválida! Retornando ao menu de habilidades...");
      iniciar();
  }
}

function menu() {
  while (true) {
    let opcaoStr = input(
      "\n* Seja Bem-Vindo ao Jogo de Batalha Naval *\n\n" +
      "Escolha uma opção:\n" +
      "1. Iniciar Jogo\n" +
      "2. Instruções\n" +
      "3. Sair do Jogo\n" +
      "Escolha uma opção: "
    );
    let opcao = parseInt(opcaoStr, 10);
    console.log("");

    switch (opcao) {
      case 1:
        inicializarTabuleiro();
        iniciar();
        break;
      case 2:
        instrucoes();
        break;
      case 3:
        finalizar();
        return;
      default:
        console.log("Opção inválida! Tente novamente.");
    }
  }
}

// "main"
inicializarTabuleiro();
menu();
