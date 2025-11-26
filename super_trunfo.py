# "Super Trunfo" de cidades em Python

def main():
    # Dados das cidades
    estado1 = input("Digite o estado da primeira cidade: ").strip()[:1]
    cod_carta1 = input("Digite o código da carta da primeira cidade: ").strip()
    cidade1 = input("Digite o nome da primeira cidade (sem espaços): ").strip()

    populacao1 = int(input("Digite o número de habitantes da primeira cidade: ") or "0")
    area1 = float(input("Digite a área da primeira cidade: ") or "0")
    pib1 = float(input("Digite o PIB (em milhares) da primeira cidade: ") or "0")
    pontos_turisticos1 = int(input("Digite o número de pontos turísticos da primeira cidade: ") or "0")
    print()

    densidade1 = float(populacao1) / area1 if area1 != 0 else 0.0
    pib_per_capita1 = (pib1 * 1000.0) / float(populacao1) if populacao1 != 0 else 0.0

    estado2 = input("Digite o estado da segunda cidade: ").strip()[:1]
    cod_carta2 = input("Digite o código da carta da segunda cidade: ").strip()
    cidade2 = input("Digite o nome da segunda cidade (sem espaços): ").strip()

    populacao2 = int(input("Digite o número de habitantes da segunda cidade: ") or "0")
    area2 = float(input("Digite a área da segunda cidade: ") or "0")
    pib2 = float(input("Digite o PIB (em milhares) da segunda cidade: ") or "0")
    pontos_turisticos2 = int(input("Digite o número de pontos turísticos da segunda cidade: ") or "0")
    print()

    densidade2 = float(populacao2) / area2 if area2 != 0 else 0.0
    pib_per_capita2 = (pib2 * 1000.0) / float(populacao2) if populacao2 != 0 else 0.0

    super_poder1 = (
        float(populacao1)
        + area1
        + pib1
        + float(pontos_turisticos1)
        + pib_per_capita1
        + (1.0 / densidade1 if densidade1 != 0 else 0.0)
    )
    super_poder2 = (
        float(populacao2)
        + area2
        + pib2
        + float(pontos_turisticos2)
        + pib_per_capita2
        + (1.0 / densidade2 if densidade2 != 0 else 0.0)
    )

    pontos1 = 0
    pontos2 = 0
    valor1_atrib1 = valor2_atrib1 = 0.0
    valor1_atrib2 = valor2_atrib2 = 0.0

    print("Comparação dos atributos:")
    print("1. Iniciar jogo...")
    print("2. Ver regras.")
    print("3. Sair.")
    opcao = int(input("Escolha uma opção: ") or "0")
    print()

    if opcao == 1:
        print("Iniciando o jogo...\n")
        print("## Selecione o 1º atributo para comparar ##")
        print("1. População")
        print("2. Área")
        print("3. PIB")
        print("4. Pontos Turísticos")
        print("5. Densidade Demográfica")
        print("6. PIB per Capita")
        print("7. Super Poder")
        atributo1 = int(input("Escolha um atributo: ") or "0")
        print()

        print("## Selecione o 2º atributo para comparar ##")
        if atributo1 != 1: print("1. População")
        if atributo1 != 2: print("2. Área")
        if atributo1 != 3: print("3. PIB")
        if atributo1 != 4: print("4. Pontos Turísticos")
        if atributo1 != 5: print("5. Densidade Demográfica")
        if atributo1 != 6: print("6. PIB per Capita")
        if atributo1 != 7: print("7. Super Poder")
        atributo2 = int(input("Escolha um atributo: ") or "0")
        print()

        if atributo1 == atributo2:
            print("Atributos iguais não são permitidos! Favor reiniciar o jogo.")
            return

        # ----- 1º atributo -----
        if atributo1 == 1:
            valor1_atrib1, valor2_atrib1 = float(populacao1), float(populacao2)
            print(f"\nComparando População entre {cidade1} e {cidade2}")
            print("Atributo: População")
            print(f"{cidade1}: {populacao1} habitantes")
            print(f"{cidade2}: {populacao2} habitantes")
            if valor1_atrib1 > valor2_atrib1:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib1 < valor2_atrib1:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo1 == 2:
            valor1_atrib1, valor2_atrib1 = area1, area2
            print(f"\nComparando Área Territorial entre {cidade1} e {cidade2}")
            print("Atributo: Área Territorial")
            print(f"{cidade1}: {area1:.2f} km²")
            print(f"{cidade2}: {area2:.2f} km²")
            if valor1_atrib1 > valor2_atrib1:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib1 < valor2_atrib1:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo1 == 3:
            valor1_atrib1, valor2_atrib1 = pib1, pib2
            print(f"\nComparando PIB entre {cidade1} e {cidade2}")
            print("Atributo: PIB")
            print(f"{cidade1}: {pib1:.2f} (milhares) reais")
            print(f"{cidade2}: {pib2:.2f} (milhares) reais")
            if valor1_atrib1 > valor2_atrib1:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib1 < valor2_atrib1:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo1 == 4:
            valor1_atrib1, valor2_atrib1 = float(pontos_turisticos1), float(pontos_turisticos2)
            print(f"\nComparando Pontos Turísticos entre {cidade1} e {cidade2}")
            print("Atributo: Pontos Turísticos")
            print(f"{cidade1}: {pontos_turisticos1} pontos turísticos")
            print(f"{cidade2}: {pontos_turisticos2} pontos turísticos")
            if valor1_atrib1 > valor2_atrib1:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib1 < valor2_atrib1:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo1 == 5:
            valor1_atrib1, valor2_atrib1 = densidade1, densidade2
            print(f"\nComparando Densidade Demográfica entre {cidade1} e {cidade2}")
            print("Atributo: Densidade Demográfica")
            print(f"{cidade1}: {densidade1:.2f} hab/km²")
            print(f"{cidade2}: {densidade2:.2f} hab/km²")
            if valor1_atrib1 < valor2_atrib1:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib1 > valor2_atrib1:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo1 == 6:
            valor1_atrib1, valor2_atrib1 = pib_per_capita1, pib_per_capita2
            print(f"\nComparando PIB per Capita entre {cidade1} e {cidade2}")
            print("Atributo: PIB per Capita")
            print(f"{cidade1}: {pib_per_capita1:.2f}")
            print(f"{cidade2}: {pib_per_capita2:.2f}")
            if valor1_atrib1 > valor2_atrib1:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib1 < valor2_atrib1:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo1 == 7:
            valor1_atrib1, valor2_atrib1 = super_poder1, super_poder2
            print(f"\nComparando Super Poder entre {cidade1} e {cidade2}")
            print("Atributo: Super Poder")
            print(f"{cidade1}: {super_poder1:.2f}")
            print(f"{cidade2}: {super_poder2:.2f}")
            if valor1_atrib1 > valor2_atrib1:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib1 < valor2_atrib1:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")
        else:
            print("Opção inválida para o 1º atributo!")
            return

        # ----- 2º atributo -----
        if atributo2 == 1:
            valor1_atrib2, valor2_atrib2 = float(populacao1), float(populacao2)
            print(f"\nComparando População entre {cidade1} e {cidade2}")
            print("Atributo: População")
            print(f"{cidade1}: {populacao1} habitantes")
            print(f"{cidade2}: {populacao2} habitantes")
            if valor1_atrib2 > valor2_atrib2:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib2 < valor2_atrib2:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo2 == 2:
            valor1_atrib2, valor2_atrib2 = area1, area2
            print(f"\nComparando Área Territorial entre {cidade1} e {cidade2}")
            print("Atributo: Área Territorial")
            print(f"{cidade1}: {area1:.2f} km²")
            print(f"{cidade2}: {area2:.2f} km²")
            if valor1_atrib2 > valor2_atrib2:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib2 < valor2_atrib2:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo2 == 3:
            valor1_atrib2, valor2_atrib2 = pib1, pib2
            print(f"\nComparando PIB entre {cidade1} e {cidade2}")
            print("Atributo: PIB")
            print(f"{cidade1}: {pib1:.2f} (milhares) reais")
            print(f"{cidade2}: {pib2:.2f} (milhares) reais")
            if valor1_atrib2 > valor2_atrib2:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib2 < valor2_atrib2:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo2 == 4:
            valor1_atrib2, valor2_atrib2 = float(pontos_turisticos1), float(pontos_turisticos2)
            print(f"\nComparando Pontos Turísticos entre {cidade1} e {cidade2}")
            print("Atributo: Pontos Turísticos")
            print(f"{cidade1}: {pontos_turisticos1} pontos turísticos")
            print(f"{cidade2}: {pontos_turisticos2} pontos turísticos")
            if valor1_atrib2 > valor2_atrib2:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib2 < valor2_atrib2:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo2 == 5:
            valor1_atrib2, valor2_atrib2 = densidade1, densidade2
            print(f"\nComparando Densidade Demográfica entre {cidade1} e {cidade2}")
            print("Atributo: Densidade Demográfica")
            print(f"{cidade1}: {densidade1:.2f} hab/km²")
            print(f"{cidade2}: {densidade2:.2f} hab/km²")
            if valor1_atrib2 < valor2_atrib2:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib2 > valor2_atrib2:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo2 == 6:
            valor1_atrib2, valor2_atrib2 = pib_per_capita1, pib_per_capita2
            print(f"\nComparando PIB per Capita entre {cidade1} e {cidade2}")
            print("Atributo: PIB per Capita")
            print(f"{cidade1}: {pib_per_capita1:.2f}")
            print(f"{cidade2}: {pib_per_capita2:.2f}")
            if valor1_atrib2 > valor2_atrib2:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib2 < valor2_atrib2:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")

        elif atributo2 == 7:
            valor1_atrib2, valor2_atrib2 = super_poder1, super_poder2
            print(f"\nComparando Super Poder entre {cidade1} e {cidade2}")
            print("Atributo: Super Poder")
            print(f"{cidade1}: {super_poder1:.2f}")
            print(f"{cidade2}: {super_poder2:.2f}")
            if valor1_atrib2 > valor2_atrib2:
                pontos1 += 3
                print(f"Vencedor: Carta 1 ({cidade1})")
            elif valor1_atrib2 < valor2_atrib2:
                pontos2 += 3
                print(f"Vencedor: Carta 2 ({cidade2})")
            else:
                pontos1 += 1; pontos2 += 1
                print("Empate!")
        else:
            print("Opção inválida para o 2º atributo!")
            return

        print("\n=== Resultado da Rodada ===")
        print(f"{cidade1} vs {cidade2}\n")
        print(f"Atributo 1: {valor1_atrib1:.2f} | {valor2_atrib1:.2f}")
        print(f"Atributo 2: {valor1_atrib2:.2f} | {valor2_atrib2:.2f}\n")
        print("Pontos:")
        print(f"{cidade1}: {pontos1}")
        print(f"{cidade2}: {pontos2}\n")

        if pontos1 > pontos2:
            print(f"{cidade1} venceu a rodada!")
        elif pontos2 > pontos1:
            print(f"{cidade2} venceu a rodada!")
        else:
            print("Empate na rodada!")

    elif opcao == 2:
        print("1. Regra geral: vence a carta com o maior valor no atributo escolhido.")
        print("2. Densidade demográfica: vence a carta com o menor valor.")
    elif opcao == 3:
        print("Saindo do jogo...")
    else:
        print("Opção inválida!")


if __name__ == "__main__":
    main()
