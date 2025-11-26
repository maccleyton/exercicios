#include <stdio.h>

int main() {

    // Definindo as variáveis para armazenar os dados das cidades
    char estado1, estado2, codCarta1[4], codCarta2[4], cidade1[20], cidade2[20];
    int populacao1, populacao2, pontosTuristicos1, pontosTuristicos2;
    float area1, area2, pib1, pib2, densidade1, densidade2;
    float pibPerCapita1, pibPerCapita2, superPoder1, superPoder2;

    // Definindo as variáveis dos atributos selecionados e resultados
    int opcao, atributo1, atributo2, soma1, soma2, pontos1 = 0, pontos2 = 0; // Implementação de menu
    float valor1_atrib1 = 0, valor2_atrib1 = 0, valor1_atrib2 = 0, valor2_atrib2 = 0;

    // Solicitando os dados da primeira cidade
    printf("Digite o estado da primeira cidade: ");
    scanf("%c", &estado1);

    printf("Digite o código da carta da primeira cidade: ");
    scanf("%s", codCarta1);

    printf("Digite o nome da primeira cidade: ");
    scanf("%s", cidade1);

    printf("Digite o número de habitantes da primeira cidade: ");
    scanf("%d", &populacao1);

    printf("Digite a área da primeira cidade: ");
    scanf("%f", &area1);

    printf("Digite o PIB (em milhares) da primeira cidade: ");
    scanf("%f", &pib1);

    printf("Digite o número de pontos turísticos da primeira cidade: ");
    scanf("%d", &pontosTuristicos1);
    printf("\n");

    // Calculando Densidade Populacional e PIB per Capita
    densidade1 = (float) populacao1 / area1;
    pibPerCapita1 = (pib1 * 1000.0f) / (float) populacao1;

    // Repetindo o processo para a segunda cidade
    printf("Digite o estado da segunda cidade: ");
    scanf(" %c", &estado2);

    printf("Digite o código da carta da segunda cidade: ");
    scanf("%s", codCarta2);

    printf("Digite o nome da segunda cidade: ");
    scanf("%s", cidade2);

    printf("Digite o número de habitantes da segunda cidade: ");
    scanf("%d", &populacao2);

    printf("Digite a área da segunda cidade: ");
    scanf("%f", &area2);

    printf("Digite o PIB (em milhares) da segunda cidade: ");
    scanf("%f", &pib2);

    printf("Digite o número de pontos turísticos da segunda cidade: ");
    scanf("%d", &pontosTuristicos2);
    printf("\n");

    // Calculando Densidade Populacional e PIB per Capita
    densidade2 = (float) populacao2 / area2;
    pibPerCapita2 = (pib2 * 1000.0f) / (float) populacao2;

    superPoder1 = (float) populacao1 + area1 + pib1 + (float) pontosTuristicos1 + pibPerCapita1 + (1.0f / densidade1);
    superPoder2 = (float) populacao2 + area2 + pib2 + (float) pontosTuristicos2 + pibPerCapita2 + (1.0f / densidade2);

    // Comparação entre os atributos das duas cartas
    printf("Comparação dos atributos:\n");
    printf("1. Iniciar jogo...\n");
    printf("2. Ver regras.\n");
    printf("3. Sair.\n");
    printf("Escolha uma opção: ");
    scanf("%d", &opcao);
    printf("\n");

    switch (opcao) {
        case 1:
            printf("Iniciando o jogo...\n");
            printf("## Selecione o 1º atributo para comparar ##\n");
            printf("1. População\n");
            printf("2. Área\n");
            printf("3. PIB\n");
            printf("4. Pontos Turísticos\n");
            printf("5. Densidade Demográfica\n");
            printf("6. PIB per Capita\n");
            printf("7. Super Poder\n");
            printf("Escolha um atributo: ");
            scanf("%d", &atributo1);
            printf("\n");

            // Menu Dinâmico - Ocultado a 1ª opção escolhida
            printf("## Selecione o 2º atributo para comparar ##\n");
            if (atributo1 != 1) printf("1. População\n");
            if (atributo1 != 2) printf("2. Área\n");
            if (atributo1 != 3) printf("3. PIB\n");
            if (atributo1 != 4) printf("4. Pontos Turísticos\n");
            if (atributo1 != 5) printf("5. Densidade Demográfica\n");
            if (atributo1 != 6) printf("6. PIB per Capita\n");
            if (atributo1 != 7) printf("7. Super Poder\n");
            printf("Escolha um atributo: ");
            scanf("%d", &atributo2);
            printf("\n");

            // Garantindo que os atributos não são iguais

            if (atributo1 == atributo2) {
                printf("Atributos iguais não são permitidos! Favor reiniciar o jogo.\n");
                return 0;
            }

            switch (atributo1) {
                case 1:
                    valor1_atrib1 = populacao1; valor2_atrib1 = populacao2;
                    printf("\nComparando População entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: População\n");
                    printf("%s: %d habitantes\n", cidade1, populacao1);
                    printf("%s: %d habitantes\n", cidade2, populacao2);
                    
                    pontos1 += (valor1_atrib1 > valor2_atrib1) ? 3 : (valor1_atrib1 < valor2_atrib1 ? 0 : 1);
                    pontos2 += (valor2_atrib1 > valor1_atrib1) ? 3 : (valor2_atrib1 < valor1_atrib1 ? 0 : 1);   
                    valor1_atrib1 > valor2_atrib1 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib1 < valor2_atrib1 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                case 2:
                    valor1_atrib1 = area1; valor2_atrib1 = area2;
                    printf("\nComparando Área Territorial entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: Área Territorial\n");
                    printf("%s: %.2f km²\n", cidade1, area1);
                    printf("%s: %.2f km²\n", cidade2, area2);
                     
                    pontos1 += (valor1_atrib1 > valor2_atrib1) ? 3 : (valor1_atrib1 < valor2_atrib1 ? 0 : 1);
                    pontos2 += (valor2_atrib1 > valor1_atrib1) ? 3 : (valor2_atrib1 < valor1_atrib1 ? 0 : 1);   
                    valor1_atrib1 > valor2_atrib1 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib1 < valor2_atrib1 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                case 3:
                    valor1_atrib1 = pib1; valor2_atrib1 = pib2;
                    printf("\nComparando PIB entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: PIB\n");
                    printf("%s: %.2f (milhares) reais\n", cidade1, pib1);
                    printf("%s: %.2f (milhares) reais\n", cidade2, pib2);
                                
                    pontos1 += (valor1_atrib1 > valor2_atrib1) ? 3 : (valor1_atrib1 < valor2_atrib1 ? 0 : 1);
                    pontos2 += (valor2_atrib1 > valor1_atrib1) ? 3 : (valor2_atrib1 < valor1_atrib1 ? 0 : 1);   
                    valor1_atrib1 > valor2_atrib1 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                    (valor1_atrib1 < valor2_atrib1 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                     printf("Empate!\n"));
                    break;
                case 4:
                    valor1_atrib1 = pontosTuristicos1; valor2_atrib1 = pontosTuristicos2;
                    printf("\nComparando Pontos Turísticos entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: Pontos Turísticos\n");
                    printf("%s: %d pontos turísticos\n", cidade1, pontosTuristicos1);
                    printf("%s: %d pontos turísticos\n", cidade2, pontosTuristicos2);
                                
                    pontos1 += (valor1_atrib1 > valor2_atrib1) ? 3 : (valor1_atrib1 < valor2_atrib1 ? 0 : 1);
                    pontos2 += (valor2_atrib1 > valor1_atrib1) ? 3 : (valor2_atrib1 < valor1_atrib1 ? 0 : 1);   
                    valor1_atrib1 > valor2_atrib1 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                    (valor1_atrib1 < valor2_atrib1 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                     printf("Empate!\n"));
                    break;
                case 5:
                    valor1_atrib1 = densidade1; valor2_atrib1 = densidade2;
                    printf("\nComparando Densidade Demográfica entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: Densidade Demográfica\n");
                    printf("%s: %.2f hab/km²\n", cidade1, densidade1);
                    printf("%s: %.2f hab/km²\n", cidade2, densidade2);
                    
                    pontos1 += (valor1_atrib1 < valor2_atrib1) ? 3 : (valor1_atrib1 > valor2_atrib1 ? 0 : 1);
                    pontos2 += (valor2_atrib1 < valor1_atrib1) ? 3 : (valor2_atrib1 > valor1_atrib1 ? 0 : 1);   
                    valor1_atrib1 < valor2_atrib1 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                    (valor1_atrib1 > valor2_atrib1 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                     printf("Empate!\n"));
                    break;
                case 6:
                    valor1_atrib1 = pibPerCapita1; valor2_atrib1 = pibPerCapita2;
                    printf("\nComparando PIB per Capita entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: PIB per Capita\n");
                    printf("%s: %.2f \n", cidade1, pibPerCapita1);
                    printf("%s: %.2f \n", cidade2, pibPerCapita2);
                                
                    pontos1 += (valor1_atrib1 > valor2_atrib1) ? 3 : (valor1_atrib1 < valor2_atrib1 ? 0 : 1);
                    pontos2 += (valor2_atrib1 > valor1_atrib1) ? 3 : (valor2_atrib1 < valor1_atrib1 ? 0 : 1);   
                    valor1_atrib1 > valor2_atrib1 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                    (valor1_atrib1 < valor2_atrib1 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                     printf("Empate!\n"));
                    break;
                case 7:
                    valor1_atrib1 = superPoder1; valor2_atrib1 = superPoder2;
                    printf("\nComparando Super Poder entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: Super Poder\n");
                    printf("%s: %.2f \n", cidade1, superPoder1);
                    printf("%s: %.2f \n", cidade2, superPoder2);
                                
                    pontos1 += (valor1_atrib1 > valor2_atrib1) ? 3 : (valor1_atrib1 < valor2_atrib1 ? 0 : 1);
                    pontos2 += (valor2_atrib1 > valor1_atrib1) ? 3 : (valor2_atrib1 < valor1_atrib1 ? 0 : 1);   
                    valor1_atrib1 > valor2_atrib1 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib1 < valor2_atrib1 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                default: {
                    printf("Opção inválida!\n");
                    break;
                }
            }

            switch (atributo2) {
                case 1:
                    valor1_atrib2 = populacao1; valor2_atrib2 = populacao2;
                    printf("\nComparando População entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: População\n");
                    printf("%s: %d habitantes\n", cidade1, populacao1);
                    printf("%s: %d habitantes\n", cidade2, populacao2);
                                
                    pontos1 += (valor1_atrib2 > valor2_atrib2) ? 3 : (valor1_atrib2 < valor2_atrib2 ? 0 : 1);
                    pontos2 += (valor2_atrib2 > valor1_atrib2) ? 3 : (valor2_atrib2 < valor1_atrib2 ? 0 : 1);
                    valor1_atrib2 > valor2_atrib2 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib2 < valor2_atrib2 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                case 2:
                    valor1_atrib2 = area1; valor2_atrib2 = area2;
                    printf("\nComparando Área Territorial entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: Área Territorial\n");
                    printf("%s: %.2f km²\n", cidade1, area1);
                    printf("%s: %.2f km²\n", cidade2, area2);
                                
                    pontos1 += (valor1_atrib2 > valor2_atrib2) ? 3 : (valor1_atrib2 < valor2_atrib2 ? 0 : 1);
                    pontos2 += (valor2_atrib2 > valor1_atrib2) ? 3 : (valor2_atrib2 < valor1_atrib2 ? 0 : 1);
                    valor1_atrib2 > valor2_atrib2 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib2 < valor2_atrib2 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                case 3:
                    valor1_atrib2 = pib1; valor2_atrib2 = pib2;
                    printf("\nComparando PIB entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: PIB\n");
                    printf("%s: %.2f (milhares) reais\n", cidade1, pib1);
                    printf("%s: %.2f (milhares) reais\n", cidade2, pib2);
                                
                    pontos1 += (valor1_atrib2 > valor2_atrib2) ? 3 : (valor1_atrib2 < valor2_atrib2 ? 0 : 1);
                    pontos2 += (valor2_atrib2 > valor1_atrib2) ? 3 : (valor2_atrib2 < valor1_atrib2 ? 0 : 1);
                    valor1_atrib2 > valor2_atrib2 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib2 < valor2_atrib2 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                case 4:
                    valor1_atrib2 = pontosTuristicos1; valor2_atrib2 = pontosTuristicos2;
                    printf("\nComparando Pontos Turísticos entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: Pontos Turísticos\n");
                    printf("%s: %d pontos turísticos\n", cidade1, pontosTuristicos1);
                    printf("%s: %d pontos turísticos\n", cidade2, pontosTuristicos2);
                                
                    pontos1 += (valor1_atrib2 > valor2_atrib2) ? 3 : (valor1_atrib2 < valor2_atrib2 ? 0 : 1);
                    pontos2 += (valor2_atrib2 > valor1_atrib2) ? 3 : (valor2_atrib2 < valor1_atrib2 ? 0 : 1);
                    valor1_atrib2 > valor2_atrib2 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib2 < valor2_atrib2 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                case 5:
                    valor1_atrib2 = densidade1; valor2_atrib2 = densidade2;
                    printf("\nComparando Densidade Demográfica entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: Densidade Demográfica\n");
                    printf("%s: %.2f hab/km²\n", cidade1, densidade1);
                    printf("%s: %.2f hab/km²\n", cidade2, densidade2);
                                
                    pontos1 += (valor1_atrib2 < valor2_atrib2) ? 3 : (valor1_atrib2 > valor2_atrib2 ? 0 : 1);
                    pontos2 += (valor2_atrib2 < valor1_atrib2) ? 3 : (valor2_atrib2 > valor1_atrib2 ? 0 : 1);
                    valor1_atrib2 < valor2_atrib2 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib2 > valor2_atrib2 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                case 6:
                    valor1_atrib2 = pibPerCapita1; valor2_atrib2 = pibPerCapita2;
                    printf("\nComparando PIB per Capita entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: PIB per Capita\n");
                    printf("%s: %.2f \n", cidade1, pibPerCapita1);
                    printf("%s: %.2f \n", cidade2, pibPerCapita2);
                                
                    pontos1 += (valor1_atrib2 > valor2_atrib2) ? 3 : (valor1_atrib2 < valor2_atrib2 ? 0 : 1);
                    pontos2 += (valor2_atrib2 > valor1_atrib2) ? 3 : (valor2_atrib2 < valor1_atrib2 ? 0 : 1);
                    valor1_atrib2 > valor2_atrib2 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib2 < valor2_atrib2 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                case 7:
                    valor1_atrib2 = superPoder1; valor2_atrib2 = superPoder2;
                    printf("\nComparando Super Poder entre %s e %s\n", cidade1, cidade2);
                    printf("Atributo: Super Poder\n");
                    printf("%s: %.2f \n", cidade1, superPoder1);
                    printf("%s: %.2f \n", cidade2, superPoder2);
                                
                    pontos1 += (valor1_atrib2 > valor2_atrib2) ? 3 : (valor1_atrib2 < valor2_atrib2 ? 0 : 1);
                    pontos2 += (valor2_atrib2 > valor1_atrib2) ? 3 : (valor2_atrib2 < valor1_atrib2 ? 0 : 1);
                    valor1_atrib2 > valor2_atrib2 ? printf("Vencedor: Carta 1 (%s)\n", cidade1) :
                     (valor1_atrib2 < valor2_atrib2 ? printf("Vencedor: Carta 2 (%s)\n", cidade2) :
                      printf("Empate!\n"));
                    break;
                default: {
                    printf("Opção inválida!\n");
                    break;
                }
            }

            // Resultado final da rodada
            printf("\n=== Resultado da Rodada ===\n");
            printf("%s vs %s\n\n", cidade1, cidade2);

            printf("Atributo 1: %.2f | %.2f\n", valor1_atrib1, valor2_atrib1);
            printf("Atributo 2: %.2f | %.2f\n\n", valor1_atrib2, valor2_atrib2);

            printf("Pontos:\n");
            printf("%s: %d\n", cidade1, pontos1);
            printf("%s: %d\n\n", cidade2, pontos2);

            if (pontos1 > pontos2) {
                printf("%s venceu a rodada!\n", cidade1);
            } else if (pontos2 > pontos1) {
                printf("%s venceu a rodada!\n", cidade2);
            } else {
                printf("Empate na rodada!\n");
            }

            return 0;
        break;

        case 2:
            printf("1. Regra geral: vence a carta com o maior valor no atributo escolhido.\n");
            printf("2. Densidade demográfica: vence a carta com o menor valor.\n");
            break;
        case 3:
            printf("Saindo do jogo...\n");
            break;
        default:
            printf("Opção inválida!\n");
    }

    return 0;
}