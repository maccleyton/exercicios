
const readline = require('readline-sync');

const LINHAS = 10;
const COLUNAS = 10;
const TAMANHO = 3;
const HABILIDADESLIN = 5;
const HABILIDADESCOL = 5;

let tabuleiro = Array.from({ length: LINHAS }, () => Array(COLUNAS).fill(0));
let matrizCone = Array.from({ length: HABILIDADESLIN }, () => Array(HABILIDADESCOL).fill(0));
let matrizCruz = Array.from({ length: HABILIDADESLIN }, () => Array(HABILIDADESCOL).fill(0));
let matrizOctaedro = Array.from({ length: HABILIDADESLIN }, () => Array(HABILIDADESCOL).fill(0));

function cone(show) {
    for (let i = 0; i < HABILIDADESLIN; i++) {
        for (let j = 0; j < HABILIDADESCOL; j++) {
            if (i === 0 && j === 2) matrizCone[i][j] = 1;
            else if (i === 1 && j >= 1 && j <= 3) matrizCone[i][j] = 1;
            else if (i === 2 && j >= 0 && j <= 4) matrizCone[i][j] = 1;
            else matrizCone[i][j] = 0;
        }
    }
    if (show) {
        console.log("Habilidade -> Cone de Fogo 🔥");
        matrizCone.forEach(row => console.log(row.join(' ')));
    }
}

function cruz(show) {
    for (let i = 0; i < HABILIDADESLIN; i++) {
        for (let j = 0; j < HABILIDADESCOL; j++) {
            matrizCruz[i][j] = (i === 2 || j === 2) ? 1 : 0;
        }
    }
    if (show) {
        console.log("Habilidade -> Cruzada 💥");
        matrizCruz.forEach(row => console.log(row.join(' ')));
    }
}

function octaedro(show) {
    let centro = Math.floor(HABILIDADESLIN / 2);
    for (let i = 0; i < HABILIDADESLIN; i++) {
        for (let j = 0; j < HABILIDADESCOL; j++) {
            matrizOctaedro[i][j] = (Math.abs(i - centro) + Math.abs(j - centro) <= 2) ? 1 : 0;
        }
    }
    if (show) {
        console.log("Habilidade -> Octaedro 🔷");
        matrizOctaedro.forEach(row => console.log(row.join(' ')));
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
    console.log("
Tabuleiro de Batalha Naval:
");
    let header = '   ' + Array.from({ length: COLUNAS }, (_, i) => String.fromCharCode(65 + i)).join(' ');
    console.log(header);
    for (let i = 0; i < LINHAS; i++) {
        console.log((i + 1).toString().padStart(2, ' ') + ' ' + tabuleiro[i].join(' '));
    }
}

function aplicarHabilidade(linha, coluna, habilidade) {
    let centroLinha = Math.floor(HABILIDADESLIN / 2);
    let centroColuna = Math.floor(HABILIDADESCOL / 2);
    for (let i = 0; i < HABILIDADESLIN; i++) {
        for (let j = 0; j < HABILIDADESCOL; j++) {
            if (habilidade[i][j] === 1) {
                let alvoLinha = linha + i - centroLinha;
                let alvoColuna = coluna + j - centroColuna;
                if (alvoLinha >= 0 && alvoLinha < LINHAS && alvoColuna >= 0 && alvoColuna < COLUNAS) {
                    tabuleiro[alvoLinha][alvoColuna] = 5;
                }
            }
        }
    }
}

function menu() {
    while (true) {
        console.log("
* Seja Bem-Vindo ao Jogo de Batalha Naval *
");
        console.log("1. Iniciar Jogo
2. Instruções
3. Sair do Jogo");
        let opcao = readline.questionInt("Escolha uma opção: ");
        if (opcao === 1) iniciar();
        else if (opcao === 2) instrucoes();
        else if (opcao === 3) { console.log("Obrigado por jogar!"); break; }
        else console.log("Opção inválida!");
    }
}

function instrucoes() {
    console.log("Instruções do Jogo:
1. Escolha uma habilidade para atacar.
2. A habilidade afetará uma área específica.
3. Objetivo: atingir navios inimigos.
");
    readline.question("Pressione ENTER para voltar...");
}

function iniciar() {
    console.log("============Menu de Habilidades============");
    console.log("1. Cone de Fogo 🔥
2. Cruzada 💥
3. Octaedro 🔷
4. Sair");
    let opcao = readline.questionInt("Escolha uma opção: ");
    let linha = Math.floor(LINHAS / 2);
    let coluna = Math.floor(COLUNAS / 2);
    inicializarTabuleiro();
    if (opcao === 1) { cone(true); aplicarHabilidade(linha, coluna, matrizCone); }
    else if (opcao === 2) { cruz(true); aplicarHabilidade(linha, coluna, matrizCruz); }
    else if (opcao === 3) { octaedro(true); aplicarHabilidade(linha, coluna, matrizOctaedro); }
    else if (opcao === 4) return;
    exibirTabuleiro();
    readline.question("Pressione ENTER para voltar...");
}

inicializarTabuleiro();
menu();
