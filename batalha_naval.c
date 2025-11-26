#include <stdio.h>
#include <time.h> // Para a função srand
#include <stdlib.h> // Para as funções abs e exit
// A função abs é usada para calcular o valor absoluto da diferença entre as coordenadas

#define LINHAS 10
#define COLUNAS 10
#define TAMANHO 3
#define HABILIDADESLIN 5
#define HABILIDADESCOL 5

// Matrizes Globais de Habilidades
int matrizCone[HABILIDADESLIN][HABILIDADESCOL];
int matrizCruz[HABILIDADESLIN][HABILIDADESCOL];
int matrizOctaedro[HABILIDADESLIN][HABILIDADESCOL];
int tabuleiro[LINHAS][COLUNAS]; // Agora global, disponível pra todas as funções

void cone(int show) { // Ataca inimigos em uma área circular ao redor do personagem
    for (int i = 0; i < HABILIDADESLIN; i++) {
        for (int j = 0; j < HABILIDADESCOL; j++) {
            // Condição para formar o cone (triângulo inverso)
            if (i == 0 && j == 2) {
                matrizCone[i][j] = 1; // Borda do tabuleiro
            } else if (i == 1 && (j >= 1 && j <= 3)) {
                matrizCone[i][j] = 1; // Borda do tabuleiro
            } else if (i == 2 && (j >= 0 && j <= 4)) {
                matrizCone[i][j] = 1; // Borda do tabuleiro
            } else {
                matrizCone[i][j] = 0; // Espaço vazio
            }
        }
    }

    // Exibe a matriz da habilidade Cone de Fogo
    if (show) { // Se show for verdadeiro, exibe a matriz, caso contrário, não exibe
        printf("Habilidade -> Cone de Fogo 🔥\n");
        for (int i = 0; i < HABILIDADESLIN; i++) {
            for (int j = 0; j < HABILIDADESCOL; j++) {
                printf("%d ", matrizCone[i][j]);
            }
            printf("\n");
        }
        printf("\n");
    }
}

void cruz(int show) { // Ataca inimigos em linha reta na horizontal e vertical
    for (int i = 0; i < HABILIDADESLIN; i++) {
        for (int j = 0; j < HABILIDADESCOL; j++) {
            // Condição para formar a cruz
            if (i == 2 || j == 2) {
                matrizCruz[i][j] = 1; // Borda do tabuleiro
            } else {
                matrizCruz[i][j] = 0; // Espaço vazio
            }
        }
    }

    // Exibe a matriz da habilidade Cruzada
    if (show) { // Se show for verdadeiro, exibe a matriz, caso contrário, não exibe
        printf("Habilidade -> Cruzada 💥\n");
        for (int i = 0; i < HABILIDADESLIN; i++) {
            for (int j = 0; j < HABILIDADESCOL; j++) {
                printf("%d ", matrizCruz[i][j]);
            }
            printf("\n");
        }
        printf("\n");
    }
}

void octaedro(int show) { //Ataca inimigos em uma área em forma de octaedro ao redor do personagem
    int centro = HABILIDADESLIN / 2; // Posição central da matriz

    for (int i = 0; i < HABILIDADESLIN; i++) {
        for (int j = 0; j < HABILIDADESCOL; j++) {
            if (abs(i - centro) + abs(j - centro) <= 2) {
                matrizOctaedro[i][j] = 1; // Borda do tabuleiro
            } else {
                matrizOctaedro[i][j] = 0; // Espaço vazio
            }
        }
    }

    // Exibe a matriz da habilidade Octaedro
    if (show) { // Se show for verdadeiro, exibe a matriz, caso contrário, não exibe
        printf("Habilidade -> Octaedro 🔷\n");
        for (int i = 0; i < HABILIDADESLIN; i++) {
            for (int j = 0; j < HABILIDADESCOL; j++) {
                printf("%d ", matrizOctaedro[i][j]);
            }
            printf("\n");
        }
        printf("\n");
    }
}

void inicializarTabuleiro() { // Inicializa o tabuleiro com água (0)
    for (int i = 0; i < LINHAS; i++) {
        for (int j = 0; j < COLUNAS; j++) {
            tabuleiro[i][j] = 0; // 0 representa água
        }
    }
}

void exibirTabuleiro() { // Exibe o tabuleiro atual
    // Exibição do tabuleiro com coordenadas
    printf("\nTabuleiro de Batalha Naval:\n\n");

    // Cabeçalho das colunas (A, B, C...)
    printf("   ");
    for (int c = 0; c < COLUNAS; c++) {
        printf("%c ", 'A' + c);
    }
    printf("\n");

    // Linhas numeradas com os valores do tabuleiro
    for (int l = 0; l < LINHAS; l++) {
        printf("%2d ", l + 1);  // Linha numerada (1 a 10)
        for (int c = 0; c < COLUNAS; c++) {
            printf("%d ", tabuleiro[l][c]);
        }
        printf("\n");
    }
    printf("\n");
}

void posicionarNavios() {
    // Vetor com informações dos navios, ambos com tamanho igual a 3
    int navioH[TAMANHO] = {3, 3, 3}; // Localizado na horizontal
    int navioV[TAMANHO] = {3, 3, 3}; // Localizado na vertical
    int navioD1[TAMANHO] = {3, 3, 3}; // Localizado na diagonal principal
    int navioD2[TAMANHO] = {3, 3, 3}; // Localizado na diagonal secundária

    // Posição inicial dos navios, 1º navio na horizontal, 2º navio na vertical
    int linhaH = 8, colunaH = 3; // Índice (8,3) -> Linha 9 - Coluna 4
    int linhaV = 7, colunaV = 0; // Índice (7,0) -> Linha 8 - Coluna 1
    int linhaD1 = 0, colunaD1 = 0; // Índice (0,0) -> Linha 1 - Coluna 1
    int linhaD2 = 0, colunaD2 = 9; // Índice (0,9) -> Linha 1 - Coluna 10
    int sobreposicao = 0; // Verifica se os navios estão se sobrepondo

    printf("\n==> Navios posicionados nas coordenadas:\n");

    // ➡️ Horizontal
    sobreposicao = 0; // Zera aqui
    if (colunaH + 3 > 10) {
        printf("Erro! Navio na Horizontal não cabe no tabuleiro.\n");
    } else {
        // Verifica sobreposição antes
        for (int i = 0; i < 3; i++) {
            if (tabuleiro[linhaH][colunaH + i] != 0) {
                sobreposicao = 1;
                break;
            }
        }
        if (!sobreposicao) {
            printf("Navio Horizontal:➡️  ");
            for (int i = 0; i < 3; i++) {
                tabuleiro[linhaH][colunaH + i] = navioH[i];
                printf("(%d, %d) ", linhaH, colunaH + i);
            }
            printf("\n");
        }
    }

    // ⬇️ Vertical
    sobreposicao = 0; // Zera aqui
    if (linhaV + 3 > 10) {
        printf("Erro! Navio na Vertical não cabe no tabuleiro.\n");
    } else {
        // Verifica sobreposição antes
        for (int i = 0; i < 3; i++) {
            if (tabuleiro[linhaV + i][colunaV] != 0) {
                sobreposicao = 1;
                break;
            }
        }
        if (!sobreposicao) {
            printf("Navio Vertical:⬇️  ");
            for (int i = 0; i < 3; i++) {
                tabuleiro[linhaV + i][colunaV] = navioV[i];
                printf("(%d, %d) ", linhaV + i, colunaV);
            }
            printf("\n");
        }
    }

    // ↘️ Diagonal Principal
    sobreposicao = 0; // Zera aqui
    if (linhaD1 + 3 > 10 || colunaD1 + 3 > 10) {
        printf("Erro! Navio na Diagonal Principal não cabe no tabuleiro.\n");
    } else if (linhaD1 != colunaD1) {
        printf("Erro! Posição inválida para Diagonal Principal. Linha e coluna devem ser iguais.\n");
    } else {
        // Verifica sobreposição antes
        for (int i = 0; i < 3; i++) {
            if (tabuleiro[linhaD1 + i][colunaD1 + i] != 0) {
                sobreposicao = 1;
                break;
            }
        }
        if (!sobreposicao) {           
            printf("Navio Diagonal Principal:↘️  ");
            for (int i = 0; i < 3; i++) {
                tabuleiro[linhaD1 + i][colunaD1 + i] = navioD1[i];
                printf("(%d, %d) ", linhaD1 + i, colunaD1 + i);
            }
            printf("\n");
        }
    }  

    // ↙️ Diagonal Secundária
    sobreposicao = 0; // Zera aqui
    if (linhaD2 + 2 > 9 || colunaD2 - 2 < 0) {
        printf("Erro! Navio na Diagonal Secundária não cabe no tabuleiro.\n");
    } else if ((linhaD2 + colunaD2) != 9) {
        printf("Erro! Posição inválida para Diagonal Secundária. Linha + Coluna devem ser 9.\n");
    } else {
        // Verifica sobreposição antes
        for (int i = 0; i < 3; i++) {
            if (tabuleiro[linhaD2 + i][colunaD2 - i] != 0) {
                sobreposicao = 1;
                break;
            }
        }
        if (!sobreposicao) {
            printf("Navio Diagonal Secundária:↙️  ");
            for (int i = 0; i < 3; i++) {
                tabuleiro[linhaD2 + i][colunaD2 - i] = navioD2[i];
                printf("(%d, %d) ", linhaD2 + i, colunaD2 - i);
            }
            printf("\n");
        }
    }

    // Verifica se os navios estão se sobrepondo
    if (sobreposicao) {
        printf("⚠️ Atenção! Os navios estão se sobrepondo!\n");
    }
}

void aplicarHabilidade(int posLinha, int posColuna, int habilidade[HABILIDADESLIN][HABILIDADESCOL]) {
    int centroLinha = HABILIDADESLIN / 2;
    int centroColuna = HABILIDADESCOL / 2;

    for (int i = 0; i < HABILIDADESLIN; i++) {
        for (int j = 0; j < HABILIDADESCOL; j++) {
            if (habilidade[i][j] == 1) {
                int alvoLinha = posLinha + i - centroLinha;
                int alvoColuna = posColuna + j - centroColuna;

                if (alvoLinha >= 0 && alvoLinha < LINHAS && alvoColuna >= 0 && alvoColuna < COLUNAS) {
                    tabuleiro[alvoLinha][alvoColuna] = 5; // Marca a área afetada (pode usar outro valor)
                }
            }
        }
    }
}

void instrucoes() { // Função para exibir as instruções do jogo
    printf("Instruções do Jogo:\n");
    printf("1. Escolha uma habilidade para atacar.\n");
    printf("2. A habilidade afetará uma área específica do tabuleiro.\n");
    printf("3. O objetivo é atingir os navios inimigos.\n");
    printf("4. Ao escolher uma habilidade, o jogo será iniciado automaticamente.\n");
    printf("5. Boa sorte!\n\n");

    printf("Pressione ENTER para voltar ao menu...\n");
    getchar(); // Limpa o buffer do scanf anterior
    getchar(); // Espera ENTER
}

void iniciar() {
    int opcao;
    int linha = LINHAS / 2;
    int coluna = COLUNAS / 2;
    tabuleiro;
    // Exibe as habilidades disponíveis para o usuário escolher
    printf("============Menu de Habilidades============\n");
    printf("Escolha uma habilidade para iniciar o jogo:\n");
    printf("1. Cone de Fogo 🔥\n");
    printf("2. Cruzada 💥\n");
    printf("3. Octaedro 🔷\n");
    printf("4. Sair do Jogo\n\n");
    printf("Escolha uma opção: ");
    scanf("%d", &opcao);
    printf("\n");
    // Exibe as matrizes de habilidades
    switch (opcao) {
        case 1:
            cone(1); // Exibe a matriz da habilidade Cone de Fogo
            posicionarNavios(tabuleiro); // <- Aqui posiciona os navios no tabuleiro
            aplicarHabilidade(linha, coluna, matrizCone);
            exibirTabuleiro(tabuleiro); // ⬅️ Mostra o tabuleiro depois do ataque    
            printf("Pressione ENTER para voltar ao menu...\n");
            getchar(); // Limpa o buffer do scanf anterior
            getchar(); // Espera ENTER
            iniciar(tabuleiro); // Chama o menu novamente
            break;
        case 2:
            cruz(1); // Exibe a matriz da habilidade Cruzada
            posicionarNavios(tabuleiro); // <- Aqui posiciona os navios no tabuleiro
            aplicarHabilidade(linha, coluna, matrizCruz);
            exibirTabuleiro(tabuleiro); // ⬅️ Mostra o tabuleiro depois do ataque
            printf("Pressione ENTER para voltar ao menu...\n");
            getchar(); // Limpa o buffer do scanf anterior
            getchar(); // Espera ENTER
            iniciar(tabuleiro); // Chama o menu novamente
            break;
        case 3:
            octaedro(1); // Exibe a matriz da habilidade Octaedro
            posicionarNavios(tabuleiro); // <- Aqui posiciona os navios no tabuleiro
            aplicarHabilidade(linha, coluna, matrizOctaedro);
            exibirTabuleiro(tabuleiro); // ⬅️ Mostra o tabuleiro depois do ataque
            printf("Pressione ENTER para voltar ao menu...\n");
            getchar(); // Limpa o buffer do scanf anterior
            getchar(); // Espera ENTER
            iniciar(tabuleiro); // Chama o menu novamente
            break;
        case 4:
            printf("Obrigado por jogar! Até a próxima!\n");
            printf("Saindo do jogo...\n");
            exit(0); // Encerra o programa
            break;
        default:
            printf("\nOpção inválida! Retornando ao menu...\n");
            iniciar(tabuleiro); // Chama o menu de novo
            return;
    }
}

void finalizar() { // Função para encerrar o jogo
    printf("Obrigado por jogar! Até a próxima!\n");
    exit(0); // Encerra o programa
}

void menu() {
    // Função para exibir o menu principal
    int opcao;
    do {
        printf("\n* Seja Bem-Vindo ao Jogo de Batalha Naval *\n\n");
        printf("Escolha uma opção:\n");
        printf("1. Iniciar Jogo\n");
        printf("2. Instruções\n");
        printf("3. Sair do Jogo\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);
        printf("\n");
        switch (opcao) {
            case 1:
                iniciar(tabuleiro); // Inicia o jogo
                break;
            case 2:
                instrucoes(); // Exibe as instruções do jogo
                break;
            case 3:
                finalizar(); // Encerra o jogo
                break;
            default:
                printf("Opção inválida! Tente novamente.\n");
                break;
        }
    } while (opcao != 3);
}

void limparTela() { // Função para limpar a tela
    // Limpa a tela dependendo do sistema operacional
    #ifdef _WIN32
        system("cls");
    #else
        system("clear");
    #endif
}

void retornar() { // Função para exibir o menu principal
    int opcao;
    printf("Jogo executado com sucesso!\n\n");
    printf("1. Voltar ao menu principal\n");
    printf("2. Finalizar jogo\n");
    printf("Escolha uma opção: ");
    scanf("%d", &opcao);

    switch (opcao) {
        case 1:
            limparTela(); // Limpa a tela
            iniciar(tabuleiro); // Retorna ao menu principal
            break;
        case 2:
            limparTela(); // Limpa a tela
            finalizar(); // Encerra o jogo
            break;
        default:
            printf("Opção inválida! Retornando ao menu...\n");
            retornar(); // Chama a função novamente
            break;
    }

}

int main() { // Execução do código
    srand(time(NULL)); // Inicializa o gerador de números aleatórios
    inicializarTabuleiro(); // Inicializa o tabuleiro com água (0) 
    menu(tabuleiro); // Menu principal do jogo
    return 0;
}