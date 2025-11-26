
def main():
    print("=== Super Trunfo ===
")

    estado1 = input("Digite o estado da primeira cidade: ")
    codCarta1 = input("Digite o código da carta da primeira cidade: ")
    cidade1 = input("Digite o nome da primeira cidade: ")
    populacao1 = int(input("Digite o número de habitantes da primeira cidade: "))
    area1 = float(input("Digite a área da primeira cidade: "))
    pib1 = float(input("Digite o PIB (em milhares) da primeira cidade: "))
    pontosTuristicos1 = int(input("Digite o número de pontos turísticos da primeira cidade: "))

    densidade1 = populacao1 / area1
    pibPerCapita1 = (pib1 * 1000) / populacao1

    estado2 = input("Digite o estado da segunda cidade: ")
    codCarta2 = input("Digite o código da carta da segunda cidade: ")
    cidade2 = input("Digite o nome da segunda cidade: ")
    populacao2 = int(input("Digite o número de habitantes da segunda cidade: "))
    area2 = float(input("Digite a área da segunda cidade: "))
    pib2 = float(input("Digite o PIB (em milhares) da segunda cidade: "))
    pontosTuristicos2 = int(input("Digite o número de pontos turísticos da segunda cidade: "))

    densidade2 = populacao2 / area2
    pibPerCapita2 = (pib2 * 1000) / populacao2

    superPoder1 = populacao1 + area1 + pib1 + pontosTuristicos1 + pibPerCapita1 + (1 / densidade1)
    superPoder2 = populacao2 + area2 + pib2 + pontosTuristicos2 + pibPerCapita2 + (1 / densidade2)

    print("
Comparaçao dos atributos:
1. Iniciar jogo...
2. Ver regras.
3. Sair.")
    opcao = int(input("Escolha uma opção: "))

    if opcao == 1:
        print("Iniciando o jogo...")
        print("## Selecione o 1º atributo para comparar ##")
        print("1. População
2. Área
3. PIB
4. Pontos Turísticos
5. Densidade Demográfica
6. PIB per Capita
7. Super Poder")
        atributo1 = int(input("Escolha um atributo: "))

        print("## Selecione o 2º atributo para comparar ##")
        atributo2 = int(input("Escolha um atributo diferente do primeiro: "))

        if atributo1 == atributo2:
            print("Atributos iguais não são permitidos! Favor reiniciar o jogo.")
            return

        pontos1 = 0
        pontos2 = 0

        def compara(attr, nome):
            nonlocal pontos1, pontos2
            if attr == 1:
                v1, v2 = populacao1, populacao2
            elif attr == 2:
                v1, v2 = area1, area2
            elif attr == 3:
                v1, v2 = pib1, pib2
            elif attr == 4:
                v1, v2 = pontosTuristicos1, pontosTuristicos2
            elif attr == 5:
                v1, v2 = densidade1, densidade2
            elif attr == 6:
                v1, v2 = pibPerCapita1, pibPerCapita2
            else:
                v1, v2 = superPoder1, superPoder2

            print(f"
Comparando {nome}: {cidade1} ({v1}) vs {cidade2} ({v2})")
            if attr == 5:
                if v1 < v2:
                    pontos1 += 3
                    print(f"Vencedor: {cidade1}")
                elif v2 < v1:
                    pontos2 += 3
                    print(f"Vencedor: {cidade2}")
                else:
                    pontos1 += 1
                    pontos2 += 1
                    print("Empate!")
            else:
                if v1 > v2:
                    pontos1 += 3
                    print(f"Vencedor: {cidade1}")
                elif v2 > v1:
                    pontos2 += 3
                    print(f"Vencedor: {cidade2}")
                else:
                    pontos1 += 1
                    pontos2 += 1
                    print("Empate!")

        compara(atributo1, "Atributo 1")
        compara(atributo2, "Atributo 2")

        print("
=== Resultado da Rodada ===")
        print(f"{cidade1}: {pontos1} pontos
{cidade2}: {pontos2} pontos")
        if pontos1 > pontos2:
            print(f"{cidade1} venceu a rodada!")
        elif pontos2 > pontos1:
            print(f"{cidade2} venceu a rodada!")
        else:
            print("Empate na rodada!")

    elif opcao == 2:
        print("1. Regra geral: vence a carta com o maior valor no atributo escolhido.
2. Densidade demográfica: vence a carta com o menor valor.")
    else:
        print("Saindo do jogo...")

if __name__ == "__main__":
    main()
