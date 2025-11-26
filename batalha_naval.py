import os
import sys

LINHAS = 10
COLUNAS = 10
TAMANHO = 3
HABILIDADESLIN = 5
HABILIDADESCOL = 5

# Matrizes globais
matriz_cone = [[0] * HABILIDADESCOL for _ in range(HABILIDADESLIN)]
matriz_cruz = [[0] * HABILIDADESCOL for _ in range(HABILIDADESLIN)]
matriz_octaedro = [[0] * HABILIDADESCOL for _ in range(HABILIDADESLIN)]
tabuleiro = [[0] * COLUNAS for _ in range(LINHAS)]


def cone(show):
    for i in range(HABILIDADESLIN):
        for j in range(HABILIDADESCOL):
            if i == 0 and j == 2:
                matriz_cone[i][j] = 1
            elif i == 1 and 1 <= j <= 3:
                matriz_cone[i][j] = 1
            elif i == 2 and 0 <= j <= 4:
                matriz_cone[i][j] = 1
            else:
                matriz_cone[i][j] = 0

    if show:
        print("Habilidade -> Cone de Fogo 🔥")
        for linha in matriz_cone:
            print(" ".join(str(x) for x in linha))
        print()


def cruz(show):
    for i in range(HABILIDADESLIN):
        for j in range(HABILIDADESCOL):
            if i == 2 or j == 2:
                matriz_cruz[i][j] = 1
            else:
                matriz_cruz[i][j] = 0

    if show:
        print("Habilidade -> Cruzada 💥")
        for linha in matriz_cruz:
            print(" ".join(str(x) for x in linha))
        print()


def octaedro(show):
    centro = HABILIDADESLIN // 2
    for i in range(HABILIDADESLIN):
        for j in range(HABILIDADESCOL):
            if abs(i - centro) + abs(j - centro) <= 2:
                matriz_octaedro[i][j] = 1
            else:
                matriz_octaedro[i][j] = 0

    if show:
        print("Habilidade -> Octaedro 🔷")
        for linha in matriz_octaedro:
            print(" ".join(str(x) for x in linha))
        print()


def inicializar_tabuleiro():
    for i in range(LINHAS):
        for j in range(COLUNAS):
            tabuleiro[i][j] = 0


def exibir_tabuleiro():
    print("\nTabuleiro de Batalha Naval:\n")

    header = "   " + " ".join(chr(ord('A') + c) for c in range(COLUNAS))
    print(header)

    for l in range(LINHAS):
        linha_str = f"{l + 1:2d} " + " ".join(str(tabuleiro[l][c]) for c in range(COLUNAS))
        print(linha_str)
    print()


def posicionar_navios():
    navio_h = [3, 3, 3]
    navio_v = [3, 3, 3]
    navio_d1 = [3, 3, 3]
    navio_d2 = [3, 3, 3]

    linha_h, coluna_h = 8, 3
    linha_v, coluna_v = 7, 0
    linha_d1, coluna_d1 = 0, 0
    linha_d2, coluna_d2 = 0, 9
    sobreposicao = 0

    print("\n==> Navios posicionados nas coordenadas:\n")

    # Horizontal
    sobreposicao = 0
    if coluna_h + 3 > 10:
        print("Erro! Navio na Horizontal não cabe no tabuleiro.")
    else:
        for i in range(3):
            if tabuleiro[linha_h][coluna_h + i] != 0:
                sobreposicao = 1
                break
        if not sobreposicao:
            coords = "Navio Horizontal:➡️  "
            for i in range(3):
                tabuleiro[linha_h][coluna_h + i] = navio_h[i]
                coords += f"({linha_h}, {coluna_h + i}) "
            print(coords)

    # Vertical
    sobreposicao = 0
    if linha_v + 3 > 10:
        print("Erro! Navio na Vertical não cabe no tabuleiro.")
    else:
        for i in range(3):
            if tabuleiro[linha_v + i][coluna_v] != 0:
                sobreposicao = 1
                break
        if not sobreposicao:
            coords = "Navio Vertical:⬇️  "
            for i in range(3):
                tabuleiro[linha_v + i][coluna_v] = navio_v[i]
                coords += f"({linha_v + i}, {coluna_v}) "
            print(coords)

    # Diagonal principal
    sobreposicao = 0
    if linha_d1 + 3 > 10 or coluna_d1 + 3 > 10:
        print("Erro! Navio na Diagonal Principal não cabe no tabuleiro.")
    elif linha_d1 != coluna_d1:
        print("Erro! Posição inválida para Diagonal Principal. Linha e coluna devem ser iguais.")
    else:
        for i in range(3):
            if tabuleiro[linha_d1 + i][coluna_d1 + i] != 0:
                sobreposicao = 1
                break
        if not sobreposicao:
            coords = "Navio Diagonal Principal:↘️  "
            for i in range(3):
                tabuleiro[linha_d1 + i][coluna_d1 + i] = navio_d1[i]
                coords += f"({linha_d1 + i}, {coluna_d1 + i}) "
            print(coords)

    # Diagonal secundária
    sobreposicao = 0
    if linha_d2 + 2 > 9 or coluna_d2 - 2 < 0:
        print("Erro! Navio na Diagonal Secundária não cabe no tabuleiro.")
    elif linha_d2 + coluna_d2 != 9:
        print("Erro! Posição inválida para Diagonal Secundária. Linha + Coluna devem ser 9.")
    else:
        for i in range(3):
            if tabuleiro[linha_d2 + i][coluna_d2 - i] != 0:
                sobreposicao = 1
                break
        if not sobreposicao:
            coords = "Navio Diagonal Secundária:↙️  "
            for i in range(3):
                tabuleiro[linha_d2 + i][coluna_d2 - i] = navio_d2[i]
                coords += f"({linha_d2 + i}, {coluna_d2 - i}) "
            print(coords)

    if sobreposicao:
        print("⚠️ Atenção! Os navios estão se sobrepondo!")


def aplicar_habilidade(pos_linha, pos_coluna, habilidade):
    centro_linha = HABILIDADESLIN // 2
    centro_coluna = HABILIDADESCOL // 2

    for i in range(HABILIDADESLIN):
        for j in range(HABILIDADESCOL):
            if habilidade[i][j] == 1:
                alvo_linha = pos_linha + i - centro_linha
                alvo_coluna = pos_coluna + j - centro_coluna

                if 0 <= alvo_linha < LINHAS and 0 <= alvo_coluna < COLUNAS:
                    tabuleiro[alvo_linha][alvo_coluna] = 5


def instrucoes():
    print("Instruções do Jogo:")
    print("1. Escolha uma habilidade para atacar.")
    print("2. A habilidade afetará uma área específica do tabuleiro.")
    print("3. O objetivo é atingir os navios inimigos.")
    print("4. Ao escolher uma habilidade, o jogo será iniciado automaticamente.")
    print("5. Boa sorte!\n")
    input("Pressione ENTER para voltar ao menu...")


def finalizar():
    print("Obrigado por jogar! Até a próxima!")
    sys.exit(0)


def iniciar():
    linha = LINHAS // 2
    coluna = COLUNAS // 2

    print("============Menu de Habilidades============")
    print("Escolha uma habilidade para iniciar o jogo:")
    print("1. Cone de Fogo 🔥")
    print("2. Cruzada 💥")
    print("3. Octaedro 🔷")
    print("4. Sair do Jogo\n")
    opcao = int(input("Escolha uma opção: ") or "0")
    print()

    if opcao == 1:
        cone(True)
        posicionar_navios()
        aplicar_habilidade(linha, coluna, matriz_cone)
        exibir_tabuleiro()
        input("Pressione ENTER para voltar ao menu...")
        iniciar()
    elif opcao == 2:
        cruz(True)
        posicionar_navios()
        aplicar_habilidade(linha, coluna, matriz_cruz)
        exibir_tabuleiro()
        input("Pressione ENTER para voltar ao menu...")
        iniciar()
    elif opcao == 3:
        octaedro(True)
        posicionar_navios()
        aplicar_habilidade(linha, coluna, matriz_octaedro)
        exibir_tabuleiro()
        input("Pressione ENTER para voltar ao menu...")
        iniciar()
    elif opcao == 4:
        print("Obrigado por jogar! Até a próxima!")
        print("Saindo do jogo...")
        sys.exit(0)
    else:
        print("Opção inválida! Retornando ao menu de habilidades...\n")
        iniciar()


def limpar_tela():
    os.system("cls" if os.name == "nt" else "clear")


def menu():
    while True:
        print("\n* Seja Bem-Vindo ao Jogo de Batalha Naval *\n")
        print("Escolha uma opção:")
        print("1. Iniciar Jogo")
        print("2. Instruções")
        print("3. Sair do Jogo")
        opcao = int(input("Escolha uma opção: ") or "0")
        print()

        if opcao == 1:
            inicializar_tabuleiro()
            iniciar()
        elif opcao == 2:
            instrucoes()
        elif opcao == 3:
            finalizar()
        else:
            print("Opção inválida! Tente novamente.")


if __name__ == "__main__":
    inicializar_tabuleiro()
    menu()
