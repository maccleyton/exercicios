#include <stdio.h> // Código anterior (niveis novato e aventureiro)

// Coordenas do Tabuleiro: Colunas (a, b, c, d, e, f, g, h). Linhas (1, 2, 3, 4, 5, 6, 7, 8).

int main() { 
    int i, j;
    char coluna = 'a';
    int linha = 1;

    // Torre: Move-se 5 casas à direita (coluna aumenta).
    i = 1;
    coluna = 'a';
    printf("Torre: Posição inicial (a1)\n");
    while (i <= 5) {
        coluna++; // Move a colua de 'a' para 'b', 'c', ...
        printf("Direita -> %c%d\n", coluna, linha);
        i++;
    }
    printf("\n");

    // Bispo: Move-se 5 casas na diagonal (coluna e linha aumentam).
    i = 1;
    coluna = 'c';
    linha = 1;
    printf("Bispo: Posição inicial (c1)\n");
    do {
        coluna++; // Move a colua de 'c' para 'd', 'e', ...
        linha++; // Move a linha de 1 para 2, 3, ...
        printf("Cima, Direita -> %c%d\n", coluna, linha);
        i++;
    } while (i <= 5);
    printf("\n");

    /* O enunciado pede para movimentar a Rainha 8 casas à esquerda, porém como o tabuleiro tem apenas
    8x8 casas, limitei o movimento em 7 casas para não ultrapassar os limites do tabuleiro */

    // Rainha: Move-se 7 casas à esquerda (coluna diminui).
    coluna = 'h';
    linha = 3;
    printf("Rainha: Posição inicial (h3)\n");
    for (i = 1; i <= 7; i++) {
        coluna--; // Move a colua de 'h' para 'g', 'f', ...
        printf("Esquerda -> %c%d\n", coluna, linha);
    }
    printf("\n");

    // Cavalo: Move-se 2 casas para baixo e 1 casa à esquerda (coluna diminui).
    // for para loop externo - while para loop interno
    coluna = 'f';
    linha = 8;
    printf("Cavalo: Posição inicial (f8)\n");
    for (i = 1; i <= 2; i++) {
        linha--; // move a linha de 8 para 7, 6...
        printf("Baixo -> %c%d\n", coluna, linha);

        j = i;
        while (j == 2) {
            coluna--;
            printf("Esquerda -> %c%d\n", coluna, linha);
            j++; // força a saída do loop após uma execução
        }
    }
    printf("\n");
    return 0;
}